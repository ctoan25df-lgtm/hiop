import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-kr",
  display: "swap",
});

const SITE_URL = "https://hiop.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "하이오피｜최신주소 안내 사이트｜하이오피 바로가기",
    template: "%s | 하이오피",
  },
  description:
    "하이오피는 부산·울산·경남 전역의 유흥명소와 지역 업소 정보를 빠르게 찾는 사용자를 위한 최신 주소 안내형 사이트입니다. 부산·울산·경남 지역 정보와 최신 접속 안내를 한눈에 확인할 수 있도록 구성했습니다.",
  keywords: [
    "하이오피",
    "hiop",
    "하이오피 주소",
    "하이오피 최신주소",
    "하이오피 바로가기",
    "부산 업소정보",
    "부산 유흥정보",
    "울산 지역정보",
    "경남 지역정보",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "하이오피",
    title: "하이오피 - 하이오피 최신주소와 부산·경남 유흥정보 바로가기 안내",
    description:
      "하이오피 검색 사용자를 위한 최신주소와 지역정보 안내 페이지입니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "하이오피",
      description: "하이오피 최신주소와 부산·경남 유흥정보 바로가기 안내",
      inLanguage: "ko-KR",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "하이오피",
      url: SITE_URL,
      areaServed: ["부산", "울산", "경상남도"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`h-full ${playfair.variable} ${notoKr.variable}`}>
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
