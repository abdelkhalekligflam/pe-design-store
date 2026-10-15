"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

export default function CheckoutClient() {
  const params = useSearchParams();
  const lang = params.get("lang") === "fr" ? "fr" : "en";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cancelled = useMemo(() => params.get("cancelled") === "1", [params]);
  const paypalError = useMemo(() => params.get("error") === "paypal", [params]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          language: lang,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.payment?.approveUrl) {
        throw new Error(data.error || "Unable to initialize PayPal checkout.");
      }

      window.location.href = data.payment.approveUrl;
    } catch {
      setLoading(false);
      setError(
        lang === "fr"
          ? "Impossible d’ouvrir PayPal pour le moment. Veuillez réessayer."
          : "Unable to open PayPal right now. Please try again.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f7fa] px-5 py-10 text-slate-950">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-bold text-violet-700">← {lang === "fr" ? "Retour à la boutique" : "Back to store"}</Link>

        {(cancelled || paypalError) && (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900">
            {paypalError
              ? (lang === "fr" ? "Le paiement PayPal n’a pas pu être confirmé. Aucun paiement n’a été validé." : "The PayPal payment could not be confirmed. No payment was validated.")
              : (lang === "fr" ? "Paiement annulé. Vous n’avez pas été débité." : "Payment cancelled. You have not been charged.")}
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.75fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-black uppercase tracking-[.18em] text-violet-700">PE-DESIGN 11</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-.04em]">{lang === "fr" ? "Finaliser votre commande" : "Complete your order"}</h1>
            <p className="mt-3 text-slate-500">{lang === "fr" ? "Entrez les informations utilisées pour la livraison numérique." : "Enter the details used for your digital delivery."}</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
              <label className="block text-sm font-bold">
                {lang === "fr" ? "Nom complet" : "Full name"}
                <input required name="name" autoComplete="name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-violet-500" />
              </label>

              <label className="block text-sm font-bold">
                {lang === "fr" ? "Adresse e-mail" : "Email address"}
                <input required type="email" name="email" autoComplete="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-violet-500" />
              </label>

              <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                <input required type="checkbox" className="mt-1" />
                {lang === "fr"
                  ? "Je comprends qu’il s’agit d’un produit numérique et que les instructions seront envoyées par e-mail."
                  : "I understand this is a digital product and the delivery instructions will be sent by email."}
              </label>

              <button disabled={loading} className="w-full rounded-2xl bg-[#0070ba] px-6 py-4 font-black text-white transition hover:bg-[#005ea6] disabled:cursor-not-allowed disabled:opacity-60">
                {loading
                  ? (lang === "fr" ? "Ouverture de PayPal..." : "Opening PayPal...")
                  : (lang === "fr" ? "Payer avec PayPal — 99 $" : "Pay with PayPal — $99")}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                {lang === "fr"
                  ? "Vous serez redirigé vers PayPal pour terminer le paiement en toute sécurité."
                  : "You will be redirected to PayPal to securely complete your payment."}
              </p>

              {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">{error}</p>}
            </form>
          </section>

          <aside className="h-fit rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
            <img src="/images/pe-design-11-box.png" alt="PE-DESIGN 11" className="mx-auto h-52 w-full rounded-2xl bg-white object-contain p-3" />
            <div className="mt-7 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="font-black">PE-DESIGN 11</p>
                <p className="mt-1 text-sm text-slate-400">{lang === "fr" ? "Licence numérique" : "Digital license"}</p>
              </div>
              <p className="text-3xl font-black">$99</p>
            </div>
            <div className="space-y-3 py-6 text-sm text-slate-300">
              <p>✓ {lang === "fr" ? "Livraison numérique" : "Digital delivery"}</p>
              <p>✓ {lang === "fr" ? "Activation à vie" : "Lifetime activation"}</p>
              <p>✓ {lang === "fr" ? "Support par e-mail" : "Email support"}</p>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-6 text-lg font-black">
              <span>Total</span>
              <span>$99 USD</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
