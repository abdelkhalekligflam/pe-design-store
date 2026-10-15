import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { capturePayPalOrder } from "@/lib/paypal";

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secret) {
    throw new Error("Supabase server environment variables are missing.");
  }

  return createClient(url, secret, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const paypalOrderId = url.searchParams.get("token");
  const internalOrderId = url.searchParams.get("order_id");
  const lang = url.searchParams.get("lang") === "fr" ? "fr" : "en";

  if (!paypalOrderId || !internalOrderId) {
    return NextResponse.redirect(
      new URL(`/checkout?lang=${lang}&error=paypal`, url.origin),
    );
  }

  try {
    const supabase = getSupabaseAdmin();

    const { data: existingOrder, error: fetchError } = await supabase
      .from("orders")
      .select("id, amount, currency, payment_status, paypal_order_id")
      .eq("id", internalOrderId)
      .single();

    if (fetchError || !existingOrder) {
      throw new Error("Order not found.");
    }

    if (
      existingOrder.paypal_order_id &&
      existingOrder.paypal_order_id !== paypalOrderId
    ) {
      throw new Error("PayPal order mismatch.");
    }

    if (existingOrder.payment_status === "paid") {
      return NextResponse.redirect(
        new URL(
          `/order/success?lang=${lang}&order_id=${encodeURIComponent(internalOrderId)}`,
          url.origin,
        ),
      );
    }

    const capture = await capturePayPalOrder(paypalOrderId);
    const purchaseUnit = capture.purchase_units?.[0];
    const capturedPayment = purchaseUnit?.payments?.captures?.[0];

    const amount = capturedPayment?.amount?.value;
    const currency = capturedPayment?.amount?.currency_code;
    const referenceId = purchaseUnit?.reference_id || purchaseUnit?.custom_id;

    const validCapture =
      capture.status === "COMPLETED" &&
      capturedPayment?.status === "COMPLETED" &&
      amount === "99.00" &&
      currency === "USD" &&
      referenceId === internalOrderId;

    if (!validCapture) {
      throw new Error("PayPal capture verification failed.");
    }

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        payment_status: "paid",
        paypal_order_id: paypalOrderId,
        paypal_capture_id: capturedPayment?.id ?? null,
        paid_at: new Date().toISOString(),
      })
      .eq("id", internalOrderId)
      .eq("payment_status", "pending");

    if (updateError) {
      throw new Error(updateError.message);
    }

    return NextResponse.redirect(
      new URL(
        `/order/success?lang=${lang}&order_id=${encodeURIComponent(internalOrderId)}`,
        url.origin,
      ),
    );
  } catch (error) {
    console.error("PayPal capture error:", error);
    return NextResponse.redirect(
      new URL(`/checkout?lang=${lang}&error=paypal`, url.origin),
    );
  }
}
