import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE, absoluteUrl, jsonLd } from "@/lib/site-brand";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

const kimm = localFont({
  src: [
    { path: "../fonts/kimm-300.woff2", weight: "300" },
    { path: "../fonts/kimm-700.woff2", weight: "700" },
  ],
  variable: "--font-kimm",
  display: "swap",
});

const sannayi = localFont({
  src: [
    { path: "../fonts/sannayi-300.woff2", weight: "300" },
    { path: "../fonts/sannayi-400.woff2", weight: "400" },
    { path: "../fonts/sannayi-700.woff2", weight: "700" },
  ],
  variable: "--font-sannayi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  title: {
    default: `${SITE.name}(${SITE.shortName}·${SITE.latinName}) 도메인 기록과 안전 안내`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} 도메인 기록과 안전 확인 안내`,
    description: SITE.description,
    images: [{ ...SITE.shareImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} 도메인 기록과 안전 확인 안내`,
    description: SITE.description,
    images: [SITE.shareImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  alternateName: SITE.aliases,
  description: SITE.description,
  inLanguage: SITE.language,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable} ${kimm.variable} ${sannayi.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(WEBSITE_SCHEMA) }}
        />
        <link rel="home" href={absoluteUrl()} />
      </head>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">본문으로 바로가기</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
