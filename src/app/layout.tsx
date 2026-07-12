import type { Metadata } from "next";
import localFont from "next/font/local";
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

const SITE_URL = "https://noranghiop.com";
const BRAND = "하이오피";
const BRAND_EN = "hiop";
const DESCRIPTION =
  "하이오피(hiop) 공식 최신주소 안내 사이트입니다. 하이오피 주소, 하이오피 새주소, 하이오피 바로가기를 실시간으로 안내합니다. 부산·울산·경남 전역의 업소 정보와 최신 접속 경로를 즉시 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} 주소｜${BRAND} 최신주소·바로가기 안내`,
    template: `%s | ${BRAND}`,
  },
  description: DESCRIPTION,
  keywords: [
    "하이오피",
    "hiop",
    "하이오피 주소",
    "하이오피 최신주소",
    "하이오피 새주소",
    "하이오피 바로가기",
    "하이오피 접속",
    "hiop 주소",
    "하이오피37",
    "하이오피38",
    "하이오피39",
    "부산 하이오피",
    "울산 하이오피",
    "경남 하이오피",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} 주소 - ${BRAND} 최신주소와 바로가기 안내`,
    description: `${BRAND}(${BRAND_EN}) 공식 최신주소 안내. 부산·울산·경남 지역 업소정보를 빠르게 확인하세요.`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${BRAND} 최신주소 안내` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} 주소｜${BRAND} 최신주소·바로가기`,
    description: `${BRAND}(${BRAND_EN}) 공식 최신주소 안내. 부산·울산·경남 지역정보 실시간 확인.`,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND,
      alternateName: BRAND_EN,
      description: `${BRAND} 최신주소와 부산·울산·경남 지역 업소정보 안내 사이트`,
      inLanguage: "ko-KR",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: BRAND,
      alternateName: [BRAND_EN, "하이오피 바로가기"],
      url: SITE_URL,
      sameAs: ["https://bamdalin.com"],
      areaServed: [
        { "@type": "City", name: "부산" },
        { "@type": "City", name: "울산" },
        { "@type": "AdministrativeArea", name: "경상남도" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${BRAND} 주소 | ${BRAND} 최신주소 안내`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#org` },
      description: DESCRIPTION,
      inLanguage: "ko-KR",
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable} ${kimm.variable} ${sannayi.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
