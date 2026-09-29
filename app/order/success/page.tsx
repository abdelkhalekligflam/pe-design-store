"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrderSuccessPage() {
  const params = useSearchParams();
  const lang = params.get("lang") === "fr" ? "fr" : "en";

  return (
    <main className="min-h-screen bg-[#f7f7fa] px-5 py-12 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-violet-700">← {lang === "fr" ? "Retour à la boutique" : "Back to store"}</Link>
        <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="bg-gradient-to-br from-violet-700 to-fuchsia-600 px-7 py-10 text-white sm:px-12">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-2xl font-black text-violet-700">✓</div>
            <p className="mt-7 text-xs font-black uppercase tracking-[.18em] text-white/70">{lang === "fr" ? "Paiement confirmé" : "Payment confirmed"}</p>
            <h1 className="mt-2 text-4xl font-black tracking-[-.04em] sm:text-5xl">{lang === "fr" ? "Merci pour votre commande" : "Thank you for your order"}</h1>
            <p className="mt-4 max-w-xl leading-7 text-white/80">{lang === "fr" ? "Votre commande PE-DESIGN 11 a été confirmée. Consultez votre e-mail pour les prochaines étapes." : "Your PE-DESIGN 11 order has been confirmed. Check your email for the next steps."}</p>
          </div>
          <div className="p-7 sm:p-12">
            <h2 className="text-xl font-black">{lang === "fr" ? "Que se passe-t-il maintenant ?" : "What happens next?"}</h2>
            <div className="mt-6 space-y-4">
              {[
                lang === "fr" ? ["1", "Consultez votre e-mail", "Vous recevrez votre guide numérique avec les instructions d’installation."] : ["1", "Check your email", "You will receive your digital guide with the installation instructions."],
                lang === "fr" ? ["2", "Installez le logiciel", "Suivez les instructions du guide pour installer PE-DESIGN 11."] : ["2", "Install the software", "Follow the delivery guide to install PE-DESIGN 11."],
                lang === "fr" ? ["3", "Répondez avec votre Hardware ID", "Répondez au même e-mail avec le Hardware ID indiqué par le logiciel."] : ["3", "Reply with your Hardware ID", "Reply to the same email with the Hardware ID shown by the software."],
                lang === "fr" ? ["4", "Recevez votre activation", "Votre activation sous licence sera envoyée en réponse par e-mail."] : ["4", "Receive your activation", "Your licensed activation will be returned to you by email."],
              ].map(([n,title,desc]) => (
                <div key={n} className="flex gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-100 font-black text-violet-700">{n}</span>
                  <div><p className="font-black">{title}</p><p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-5 text-sm leading-6 text-sky-900">
              {lang === "fr" ? "Conservez votre e-mail de commande. Il sera utilisé pour l’envoi du Hardware ID et pour le support lié à votre activation." : "Keep your order email. You will use the same email thread to send your Hardware ID and for activation support."}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
