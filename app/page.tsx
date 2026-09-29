"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const copy = {
  en: {
    nav: ["Features", "How it works", "Compatibility", "FAQ"],
    badge: "Embroidery design software",
    title: "Turn ideas into embroidery with PE-DESIGN 11",
    subtitle:
      "A powerful embroidery digitizing experience with advanced design tools, lettering, photo conversion and creative editing.",
    buy: "Buy now for $99",
    learn: "Explore features",
    trusted: "Digital delivery • Lifetime activation • Email support",
    sectionTitle: "Everything you need to create",
    sectionText:
      "Designed for embroidery enthusiasts who want more control, more creativity and a smoother workflow.",
    features: [
      ["1000+ built-in designs", "Start faster with a large collection of ready-to-use embroidery designs."],
      ["130 built-in fonts", "Create names, monograms and lettering with a wide choice of fonts."],
      ["PhotoStitch & Auto Punch", "Transform photos and artwork into embroidery-ready designs."],
      ["Advanced editing tools", "Resize, reshape, combine and refine your designs with precision."],
      ["ScanNCut compatibility", "Bring cutting and embroidery workflows together more easily."],
      ["Smart color tools", "Improve thread ordering and work with more efficient color sequences."],
    ],
    howTitle: "How it works",
    steps: [
      ["1", "Purchase securely", "Complete your order through PayPal."],
      ["2", "Get your instructions", "Receive your digital delivery guide by email."],
      ["3", "Send your Hardware ID", "Reply to the same email with your Hardware ID."],
      ["4", "Receive your activation", "Your licensed activation key is sent back to you by email."],
    ],
    compatibilityTitle: "Compatibility",
    compatibilityText:
      "Built for Windows users and intended for compatible Brother embroidery workflows. Full requirements and setup guidance are provided after purchase.",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Is this a physical product?", "No. This is a digital software product with delivery instructions sent by email."],
      ["How fast will I receive my order?", "Your delivery guide is sent automatically after successful payment confirmation."],
      ["How do I activate the software?", "Install the software, retrieve your Hardware ID, then reply to the delivery email. Your activation key will be sent back to you."],
      ["Is the activation lifetime?", "Yes, the activation provided for your licensed purchase is lifetime for the activated device."],
    ],
    finalTitle: "Ready to create your next embroidery project?",
    finalText: "Get PE-DESIGN 11 for $99 and receive your setup instructions by email.",
    finalButton: "Buy PE-DESIGN 11",
    disclaimer:
      "Independent software seller. Product names and trademarks belong to their respective owners.",
  },
  fr: {
    nav: ["Fonctions", "Comment ça marche", "Compatibilité", "FAQ"],
    badge: "Logiciel de création de broderie",
    title: "Transformez vos idées en broderie avec PE-DESIGN 11",
    subtitle:
      "Une expérience complète de numérisation de broderie avec outils avancés, lettrage, conversion photo et édition créative.",
    buy: "Acheter maintenant — 99 $",
    learn: "Voir les fonctions",
    trusted: "Livraison numérique • Activation à vie • Support par e-mail",
    sectionTitle: "Tout ce qu’il faut pour créer",
    sectionText:
      "Pensé pour les passionnés de broderie qui veulent plus de contrôle, plus de créativité et un flux de travail plus fluide.",
    features: [
      ["1000+ motifs intégrés", "Démarrez plus vite avec une grande collection de motifs prêts à l’emploi."],
      ["130 polices intégrées", "Créez noms, monogrammes et textes avec un large choix de polices."],
      ["PhotoStitch & Auto Punch", "Transformez photos et illustrations en motifs de broderie."],
      ["Outils d’édition avancés", "Redimensionnez, combinez et ajustez vos créations avec précision."],
      ["Compatibilité ScanNCut", "Reliez plus facilement vos flux de découpe et de broderie."],
      ["Outils couleur intelligents", "Optimisez l’ordre des fils et les séquences de couleurs."],
    ],
    howTitle: "Comment ça marche",
    steps: [
      ["1", "Paiement sécurisé", "Finalisez votre commande via PayPal."],
      ["2", "Recevez les instructions", "Le guide numérique est envoyé automatiquement par e-mail."],
      ["3", "Envoyez votre Hardware ID", "Répondez au même e-mail avec votre Hardware ID."],
      ["4", "Recevez votre activation", "Votre clé d’activation sous licence vous est renvoyée par e-mail."],
    ],
    compatibilityTitle: "Compatibilité",
    compatibilityText:
      "Conçu pour Windows et pour les flux de travail compatibles avec les machines Brother. Les exigences complètes et le guide d’installation sont fournis après achat.",
    faqTitle: "Questions fréquentes",
    faqs: [
      ["S’agit-il d’un produit physique ?", "Non. Il s’agit d’un produit logiciel numérique avec instructions envoyées par e-mail."],
      ["Quand vais-je recevoir ma commande ?", "Le guide de livraison est envoyé automatiquement après confirmation du paiement."],
      ["Comment activer le logiciel ?", "Installez le logiciel, récupérez votre Hardware ID puis répondez à l’e-mail de livraison. Votre clé d’activation vous sera envoyée."],
      ["L’activation est-elle à vie ?", "Oui, l’activation fournie avec votre achat sous licence est à vie pour l’appareil activé."],
    ],
    finalTitle: "Prêt à lancer votre prochain projet de broderie ?",
    finalText: "Obtenez PE-DESIGN 11 pour 99 $ et recevez les instructions par e-mail.",
    finalButton: "Acheter PE-DESIGN 11",
    disclaimer:
      "Revendeur indépendant de logiciels. Les noms de produits et marques appartiennent à leurs propriétaires respectifs.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#fbfbfd] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-[#00539b] to-[#0a7fe8] text-sm font-black text-white shadow-lg shadow-sky-200">
              PE
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">PE-DESIGN 11</p>
              <p className="text-[11px] text-slate-500">Embroidery software</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#features" className="transition hover:text-violet-700">{t.nav[0]}</a>
            <a href="#how" className="transition hover:text-violet-700">{t.nav[1]}</a>
            <a href="#compatibility" className="transition hover:text-violet-700">{t.nav[2]}</a>
            <a href="#faq" className="transition hover:text-violet-700">{t.nav[3]}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`rounded-full px-3 py-1.5 transition ${lang === "fr" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500"}`}
              >
                FR
              </button>
            </div>
            <Link
              href={`/checkout?lang=${lang}`}
              className="hidden rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 sm:inline-flex"
            >
              $99
            </Link>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white px-5 py-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-xs font-bold text-slate-600 [scrollbar-width:none]">
          <a href="#features" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">{t.nav[0]}</a>
          <a href="#how" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">{t.nav[1]}</a>
          <a href="#compatibility" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">{t.nav[2]}</a>
          <a href="#faq" className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">{t.nav[3]}</a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.15),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_55%_65%,rgba(124,58,237,0.12),transparent_38%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm">
              {t.badge}
            </span>
            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {t.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/checkout?lang=${lang}`}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5"
              >
                {t.buy}
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-800 transition hover:border-violet-200 hover:text-violet-700"
              >
                {t.learn}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-500">
              <span>✓ {lang === "en" ? "Digital delivery" : "Livraison numérique"}</span>
              <span>✓ {lang === "en" ? "Lifetime activation" : "Activation à vie"}</span>
              <span>✓ {lang === "en" ? "Email support" : "Support par e-mail"}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-44 w-44 rounded-full bg-fuchsia-300/30 blur-3xl" />
            <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl sm:rounded-[2rem] sm:p-6 shadow-violet-200/50 sm:p-9">
              <div className="absolute right-5 top-5 z-10 rounded-full bg-[#00539b] px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                PE-DESIGN 11
              </div>
              <div className="relative mx-auto aspect-[4/3] max-w-[520px] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                <img
                  src="/images/pe-design-11-box.png"
                  alt="PE-DESIGN 11 embroidery software"
                  className="h-full w-full object-contain p-1 sm:p-2"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Digital license</p>
                  <p className="mt-1 text-3xl font-black tracking-tight text-slate-950">$99</p>
                </div>
                <div className="flex gap-2 text-xs font-bold text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-2">Windows</span>
                  <span className="rounded-full bg-violet-50 px-3 py-2 text-violet-700">Lifetime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">PE-DESIGN 11</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.sectionTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.sectionText}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.features.map(([title, description], index) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-lg font-black text-violet-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3 lg:px-8">
          <div className="rounded-3xl bg-[#f5f9fd] p-7">
            <p className="text-sm font-black text-[#00539b]">{lang === "en" ? "CREATE" : "CRÉER"}</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">{lang === "en" ? "Create your own designs" : "Créez vos propres motifs"}</h3>
            <p className="mt-3 leading-7 text-slate-600">{lang === "en" ? "Build custom embroidery, lettering, stitches and reusable creative projects." : "Créez des broderies, lettrages, points et projets créatifs personnalisés."}</p>
          </div>
          <div className="rounded-3xl bg-[#fbf5fc] p-7">
            <p className="text-sm font-black text-fuchsia-600">{lang === "en" ? "AUTOMATE" : "AUTOMATISER"}</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">{lang === "en" ? "Turn artwork into stitches" : "Transformez vos images en points"}</h3>
            <p className="mt-3 leading-7 text-slate-600">{lang === "en" ? "PhotoStitch, Auto Punch and Cross Stitch tools help turn images into embroidery." : "PhotoStitch, Auto Punch et Cross Stitch facilitent la conversion d’images en broderie."}</p>
          </div>
          <div className="rounded-3xl bg-[#f6f5ff] p-7">
            <p className="text-sm font-black text-violet-700">{lang === "en" ? "WORK SMARTER" : "GAGNER DU TEMPS"}</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">{lang === "en" ? "Save time while creating" : "Créez plus efficacement"}</h3>
            <p className="mt-3 leading-7 text-slate-600">{lang === "en" ? "Use built-in designs, fonts and intelligent color tools to speed up your workflow." : "Utilisez les motifs, polices et outils couleur intégrés pour accélérer votre flux de travail."}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:grid-cols-2 lg:p-14">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-100 via-violet-100 to-fuchsia-100 blur-2xl" />
            <img
              src="/images/pe-design-11-upgrade.png"
              alt="PE-DESIGN 11 software package"
              className="relative mx-auto max-h-[480px] w-full object-contain drop-shadow-xl"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00539b]">{lang === "en" ? "Creative freedom" : "Liberté créative"}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{lang === "en" ? "From inspiration to stitch-ready design" : "De l’inspiration au motif prêt à broder"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {lang === "en" ? "Create original embroidery, personalize lettering, convert artwork and refine stitch details in one complete design environment." : "Créez des broderies originales, personnalisez le lettrage, convertissez vos images et affinez les détails des points dans un environnement complet."}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {(lang === "en" ? ["Built-in embroidery designs", "Creative lettering tools", "Photo & image conversion", "Detailed stitch editing"] : ["Motifs de broderie intégrés", "Outils de lettrage créatifs", "Conversion photo et image", "Édition détaillée des points"]).map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-700">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-600">{lang === "en" ? "Simple delivery" : "Livraison simple"}</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.howTitle}</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              {lang === "en" ? "A clear four-step process from secure checkout to your licensed activation." : "Un processus clair en quatre étapes, du paiement sécurisé à votre activation sous licence."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {t.steps.map(([number, title, description]) => (
              <div key={number} className="relative rounded-3xl bg-slate-50 p-7">
                <span className="text-5xl font-black text-violet-200">{number}</span>
                <h3 className="mt-8 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compatibility" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-300">{lang === "en" ? "System setup" : "Configuration système"}</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.compatibilityTitle}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">{t.compatibilityText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {(lang === "en" ? ["Windows 10 / 11", "1 GHz+ processor", "1 GB+ memory", "600 MB+ free space"] : ["Windows 10 / 11", "Processeur 1 GHz+", "Mémoire 1 Go+", "600 Mo+ d’espace libre"]).map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 h-2 w-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-400" />
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f2f3f7]">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">{lang === "en" ? "Support" : "Assistance"}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.faqTitle}</h2>
          </div>
          <div className="mt-12 space-y-4">
            {t.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold marker:hidden">{question}</summary>
                <p className="mt-4 leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-4 pt-20 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-black text-violet-700">01 · {lang === "en" ? "CHECKOUT" : "PAIEMENT"}</p>
            <p className="mt-2 font-bold">{lang === "en" ? "Pay securely with PayPal" : "Payez en toute sécurité avec PayPal"}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{lang === "en" ? "Your order is processed only after successful payment confirmation." : "Votre commande est traitée uniquement après confirmation du paiement."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-black text-fuchsia-600">02 · {lang === "en" ? "DELIVERY" : "LIVRAISON"}</p>
            <p className="mt-2 font-bold">{lang === "en" ? "Instructions arrive by email" : "Les instructions arrivent par e-mail"}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{lang === "en" ? "You receive the digital delivery guide at the email used for your order." : "Vous recevez le guide numérique à l’adresse e-mail utilisée pour votre commande."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-black text-sky-600">03 · ACTIVATION</p>
            <p className="mt-2 font-bold">{lang === "en" ? "Reply with your Hardware ID" : "Répondez avec votre Hardware ID"}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{lang === "en" ? "Reply to the delivery email and your licensed activation is returned by email." : "Répondez à l’e-mail de livraison et votre activation sous licence vous sera renvoyée par e-mail."}</p>
          </div>
        </div>
      </section>

      <section id="buy" className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 p-8 text-white shadow-2xl shadow-violet-200 sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">PE-DESIGN 11 • $99</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.finalTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/80">{t.finalText}</p>
            </div>
            <Link
              href={`/checkout?lang=${lang}`}
              className="shrink-0 rounded-2xl bg-white px-8 py-5 text-center text-base font-black text-violet-700 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              {t.finalButton}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 text-sm text-slate-500 md:grid-cols-[auto_1fr_auto] md:items-center lg:px-8">
          <p className="font-semibold">© 2026 PE-DESIGN Store</p>
          <p className="max-w-2xl md:justify-self-center md:text-center">{t.disclaimer}</p>
          <Link href={`/policies?lang=${lang}`} className="font-semibold text-slate-600 transition hover:text-violet-700">
            {lang === "en" ? "Terms · Privacy · Refunds" : "Conditions · Confidentialité · Remboursements"}
          </Link>
        </div>
      </footer>
    </main>
  );
}
