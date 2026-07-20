import type { Metadata } from "next";

export const SITE = {
  name: "하이오피",
  shortName: "하오",
  latinName: "hiop",
  aliases: ["하오", "hiop", "하이오피"],
  searchIntent: "하이오피 도메인 기록과 안전한 주소 확인 원칙을 찾는 검색",
  url: "https://noranghiop.com",
  email: "help@noranghiop.com",
  accessUrl: "https://bamdalin.com",
  locale: "ko_KR",
  language: "ko-KR",
  accent: "#f5c518",
  updatedAt: "2026-07-20",
  description:
    "하이오피·하오·hiop 이름으로 알려진 도메인의 변동 기록과 안전한 주소 확인 원칙을 정리하는 독립 안내 사이트입니다.",
  shareImage: {
    url: "/opengraph-image",
    alt: "하이오피 도메인 기록과 안전 확인 안내",
  },
  disclaimer:
    "이 사이트는 특정 서비스 운영사의 공식 사이트가 아닌 독립 안내 페이지이며, 외부 주소의 운영 주체나 안전성을 보증하지 않습니다.",
} as const;

export const SITE_BRAND = {
  name: SITE.name,
  alt: SITE.shortName,
  en: SITE.latinName,
  iconCode: "HI",
  accent: SITE.accent,
  background: "#080800",
  iconAccent: "하이",
  iconRest: "오피",
} as const;

/** Indexable content routes (legal pages intentionally excluded). */
export const INDEXABLE_ROUTES = [
  "/",
  "/guide/domain-changelog",
  "/guide/safe-access",
  "/vs",
] as const;

export const ROUTES = [
  { href: "/", label: "홈" },
  { href: "/guide/domain-changelog", label: "도메인 기록" },
  { href: "/guide/safe-access", label: "안전 접속" },
  { href: "/vs", label: "주소 비교" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: SITE.locale,
      url: path,
      siteName: SITE.name,
      title,
      description,
      images: [{ ...SITE.shareImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.shareImage.url],
    },
  };
}

export type SiteBrand = typeof SITE_BRAND;
