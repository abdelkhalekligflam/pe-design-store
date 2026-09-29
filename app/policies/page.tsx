"use client";

import Link from "next/link";
import { useState } from "react";

const content = {
  en: {
    title:"Store policies",
    intro:"Clear information about digital delivery, support and how this independent store handles orders.",
    terms:["Terms of sale","PE-DESIGN 11 is sold as a digital software product. Customers must provide a valid email address for delivery and activation communication. The product is intended for compatible Windows systems. Customers are responsible for checking compatibility before purchase. Order and activation information must not be redistributed or shared with unauthorized third parties."],
    privacy:["Privacy","We collect only the information reasonably needed to process and support an order, such as your name, email address, order reference and payment confirmation. Payment details are handled by the payment provider and are not stored by this storefront. Order information is used for delivery, activation support and customer service."],
    refund:["Refund policy","Because this is a digitally delivered software product, refund eligibility can depend on whether delivery and activation have already been completed. If you have a problem with an order, contact support using the same email thread before requesting a refund. Any applicable consumer rights remain unaffected."],
    support:["Contact & support","For order, installation or activation support, reply to your original delivery email. This keeps your order reference and support conversation together."],
    disclaimer:"Independent software seller. This store is not presented as an official Brother website. Product names and trademarks belong to their respective owners."
  },
  fr: {
    title:"Politiques de la boutique",
    intro:"Informations claires sur la livraison numérique, l’assistance et le traitement des commandes par cette boutique indépendante.",
    terms:["Conditions de vente","PE-DESIGN 11 est vendu comme produit logiciel numérique. Le client doit fournir une adresse e-mail valide pour la livraison et les échanges liés à l’activation. Le produit est destiné aux systèmes Windows compatibles. Le client doit vérifier la compatibilité avant l’achat. Les informations de commande et d’activation ne doivent pas être redistribuées ou partagées avec des tiers non autorisés."],
    privacy:["Confidentialité","Nous collectons uniquement les informations raisonnablement nécessaires au traitement et au support d’une commande, notamment le nom, l’adresse e-mail, la référence de commande et la confirmation du paiement. Les données de paiement sont traitées par le prestataire de paiement et ne sont pas stockées par cette boutique. Les informations de commande servent à la livraison, au support d’activation et au service client."],
    refund:["Politique de remboursement","Comme il s’agit d’un logiciel livré numériquement, l’éligibilité à un remboursement peut dépendre du fait que la livraison et l’activation aient déjà été effectuées. En cas de problème, contactez le support dans le même fil d’e-mail avant de demander un remboursement. Les éventuels droits légaux du consommateur restent applicables."],
    support:["Contact & assistance","Pour toute question concernant une commande, l’installation ou l’activation, répondez à votre e-mail de livraison d’origine afin de conserver la référence de commande et la conversation de support ensemble."],
    disclaimer:"Revendeur indépendant de logiciels. Cette boutique n’est pas présentée comme un site officiel Brother. Les noms de produits et marques appartiennent à leurs propriétaires respectifs."
  }
} as const;

export default function PoliciesPage(){
 const [lang,setLang]=useState<"en"|"fr">("en"); const t=content[lang];
 return <main className="min-h-screen bg-[#f7f7fa] text-slate-950">
  <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5"><Link href="/" className="font-black">PE-DESIGN 11</Link><div className="flex rounded-full border border-slate-200 p-1 text-xs font-bold"><button onClick={()=>setLang("en")} className={`rounded-full px-3 py-1.5 ${lang==="en"?"bg-slate-950 text-white":""}`}>EN</button><button onClick={()=>setLang("fr")} className={`rounded-full px-3 py-1.5 ${lang==="fr"?"bg-slate-950 text-white":""}`}>FR</button></div></div></header>
  <div className="mx-auto max-w-5xl px-5 py-16">
   <Link href="/" className="text-sm font-bold text-violet-700">← {lang==="en"?"Back to store":"Retour à la boutique"}</Link>
   <h1 className="mt-8 text-5xl font-black tracking-[-.05em]">{t.title}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p>
   <div className="mt-12 grid gap-5">
    {[t.terms,t.privacy,t.refund,t.support].map(([h,b])=><section key={h} className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9"><h2 className="text-2xl font-black">{h}</h2><p className="mt-4 max-w-3xl leading-7 text-slate-600">{b}</p></section>)}
   </div>
   <p className="mt-10 rounded-2xl bg-slate-950 p-6 text-sm leading-6 text-slate-300">{t.disclaimer}</p>
  </div>
 </main>
}
