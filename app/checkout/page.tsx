import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f7f7fa]" />}>
      <CheckoutClient />
    </Suspense>
  );
}
