import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createPendingOrder, type StoreLanguage } from "@/lib/orders";
import { createPayPalOrder } from "@/lib/paypal";

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      language?: StoreLanguage;
    };

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const language: StoreLanguage = body.language === "fr" ? "fr" : "en";

    if (!name || !email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid customer name and email are required." },
        { status: 400 },
      );
    }

    const order = createPendingOrder({ name, email }, language);
    const supabase = getSupabaseAdmin();

    const { error: insertError } = await supabase.from("orders").insert({
      id: order.id,
      customer_name: order.customer.name,
      customer_email: order.customer.email,
      product: order.product,
      amount: order.amount,
      currency: order.currency,
      language: order.language,
      payment_status: "pending",
      delivery_status: "pending",
    });

    if (insertError) {
      console.error("Failed to persist order:", insertError.message);
      return NextResponse.json(
        { error: "Unable to prepare the order." },
        { status: 500 },
      );
    }

    const origin = new URL(request.url).origin;
    const paypal = await createPayPalOrder({
      internalOrderId: order.id,
      returnUrl: `${origin}/api/paypal/capture?order_id=${encodeURIComponent(order.id)}&lang=${language}`,
      cancelUrl: `${origin}/checkout?lang=${language}&cancelled=1`,
    });

    const { error: updateError } = await supabase
      .from("orders")
      .update({ paypal_order_id: paypal.paypalOrderId })
      .eq("id", order.id);

    if (updateError) {
      console.error("Failed to save PayPal order ID:", updateError.message);
      return NextResponse.json(
        { error: "Unable to initialize PayPal checkout." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      order,
      payment: {
        status: "ready",
        provider: "paypal",
        paypalOrderId: paypal.paypalOrderId,
        approveUrl: paypal.approveUrl,
      },
    });
  } catch (error) {
    console.error("Order API error:", error);
    return NextResponse.json(
      { error: "Unable to prepare the order." },
      { status: 500 },
    );
  }
}
