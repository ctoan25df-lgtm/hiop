import type { Metadata } from "next";

export const SITE = {
  name: "하이오피",
  shortName: "하오",
  latinName: "hiop",
  aliases: ["하오", "hiop"],
  searchIntent:
    "하이오피·하오·hiop 주소와 숫자형 도메인을 번호 추측 없이 검증·기록하려는 검색",
  url: "https://noranghiop.com",
  email: "help@noranghiop.com",
  accessUrl:
    "https://bamdalin.com/?utm_source=noranghiop.com&utm_medium=referral&utm_campaign=hiop_comparison",
  locale: "ko_KR",
  language: "ko-KR",
  accent: "#f5c518",
  updatedAt: "2026-07-30",
  description:
    "하이오피·하오·hiop 주소 검색 이용자를 위한 독립 검증 가이드. 숫자형 도메인을 추측하지 않는 확인 원칙과 밤의달인 대안 경로를 구분해 안내합니다.",
  shareImage: {
    url: "/opengraph-image",
    alt: "하이오피 주소 · 하오 주소 · hiop 주소 안내",
  },
  disclaimer:
    "noranghiop.com은 하이오피 운영사의 공식 주소가 아닙니다. 밤의달인은 별도 플랫폼이며, 이 사이트는 숫자형 도메인 검증과 대안 경로를 구분하는 독립 가이드입니다.",
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
  const pageTitle = title.includes("|") ? { absolute: title } : title;

  return {
    title: pageTitle,
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
