import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pe-design-store.vercel.app"),
  title: {
    default: "PE-DESIGN 11 Store | Embroidery Design Software",
    template: "%s | PE-DESIGN 11 Store",
  },
  description:
    "Independent digital storefront for PE-DESIGN 11 embroidery design software with digital delivery and email support.",
  applicationName: "PE-DESIGN 11 Store",
  keywords: [
    "PE-DESIGN 11",
    "embroidery software",
    "embroidery design software",
    "digitizing software",
    "Brother embroidery",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "PE-DESIGN 11 Store | Embroidery Design Software",
    description:
      "PE-DESIGN 11 embroidery design software with digital delivery and email support.",
    siteName: "PE-DESIGN 11 Store",
    images: [
      {
        url: "/images/pe-design-11-box.png",
        width: 1200,
        height: 630,
        alt: "PE-DESIGN 11 embroidery design software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PE-DESIGN 11 Store | Embroidery Design Software",
    description:
      "PE-DESIGN 11 embroidery design software with digital delivery and email support.",
    images: ["/images/pe-design-11-box.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
