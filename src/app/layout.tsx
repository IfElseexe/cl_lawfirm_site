import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { firm } from "@/content/firm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(firm.siteUrl),
  title: {
    default: `${firm.name} — ${firm.tagline}`,
    template: `%s — ${firm.name}`,
  },
  description: firm.metaDescription,
  openGraph: {
    title: firm.name,
    description: firm.metaDescription,
    url: firm.siteUrl,
    siteName: firm.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured data helps the firm surface correctly in local search.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    description: firm.metaDescription,
    url: firm.siteUrl,
    telephone: firm.phone,
    email: firm.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${firm.address.line1} ${firm.address.line2}`.trim(),
      addressLocality: firm.address.city,
      addressRegion: firm.address.region,
      postalCode: firm.address.postalCode,
      addressCountry: firm.address.country,
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
