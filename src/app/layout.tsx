import type { Metadata } from "next";
// Self-hosted via Fontsource rather than next/font/google: it bundles the font
// files into the app instead of fetching Google's CSS at build time, so the
// build never depends on reaching fonts.googleapis.com (handy behind
// firewalls, in CI, and in this project's own sandboxed build environment).
import "@fontsource/zilla-slab/400.css";
import "@fontsource/zilla-slab/500.css";
import "@fontsource/zilla-slab/600.css";
import "@fontsource/zilla-slab/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "document management East Africa",
    "EDRMS Kenya",
    "records digitization",
    "board portal Africa",
    "Hyland OnBase partner",
    "ERP East Africa",
    "Coseke",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  foundingDate: String(siteConfig.founded),
  description: siteConfig.description,
  areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
  slogan: siteConfig.motto,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-paper text-ink flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="focus:bg-clay focus:text-paper sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
