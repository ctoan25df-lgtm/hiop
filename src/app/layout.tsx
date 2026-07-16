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
const BRAND_ALT = "하오";
const DESCRIPTION =
  "하이오피(하오, hiop)는 부산·울산·경남 전역의 업소 정보를 지역별로 안내하는 공식 플랫폼입니다. 하이오피 공식 안내 사이트에서 서비스 소개, 지역별 업소 정보, 최신 접속 경로를 확인하세요.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND,
  title: {
    default: `${BRAND} | ${BRAND_ALT} · ${BRAND_EN} 공식`,
    template: `%s | ${BRAND}`,
  },
  description: DESCRIPTION,
  keywords: [
    "하이오피",
    "하오",
    "hiop",
    "하이오피 공식",
    "hiop 공식",
    "하이오피 플랫폼",
    "부산 하이오피",
    "울산 하이오피",
    "경남 하이오피",
    "하오주소",
    "하이오피 주소",
    "하이오피 바로가기",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: BRAND,
    title: `${BRAND} — ${BRAND_ALT} · ${BRAND_EN} 공식 플랫폼`,
    description: `${BRAND}(${BRAND_ALT}, ${BRAND_EN}) 공식 안내. 부산·울산·경남 업소 정보 플랫폼을 소개합니다.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | ${BRAND_ALT} · ${BRAND_EN} 공식`,
    description: `${BRAND}(${BRAND_EN}) 공식 플랫폼 안내. 부산·울산·경남 업소 정보를 확인하세요.`,
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
      alternateName: [BRAND_ALT, BRAND_EN],
      description: `${BRAND}(${BRAND_ALT}, ${BRAND_EN}) 공식 플랫폼 안내 사이트`,
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
      alternateName: [BRAND_ALT, BRAND_EN],
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
      name: `${BRAND} | ${BRAND_ALT} · ${BRAND_EN} 공식`,
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
