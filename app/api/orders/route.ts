import { NextResponse } from "next/server";
import { createPendingOrder, type StoreLanguage } from "@/lib/orders";

export async function POST(request: Request) {
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

  // Preparation endpoint only.
  // Do not mark an order as paid or send delivery until the payment provider
  // confirms a successful server-side capture.
  return NextResponse.json({
    order,
    payment: {
      status: "unavailable",
      provider: "paypal",
    },
  });
}
