import type { Metadata } from "next";
import { REGIONS } from "@/lib/regions";

export const SITE = {
  name: "하이오피",
  shortName: "하오",
  latinName: "hiop",
  aliases: ["하오", "hiop", "경남오피"],
  searchIntent:
    "경남 지역별 오피·울산오피 정보를 생활권·이동 기준으로 확인하려는 검색",
  url: "https://noranghiop.com",
  email: "help@noranghiop.com",
  accessUrl:
    "https://bamdalin.com/?utm_source=noranghiop.com&utm_medium=referral&utm_campaign=hiop_region",
  locale: "ko_KR",
  language: "ko-KR",
  accent: "#f5c518",
  updatedAt: "2026-08-03",
  description:
    "하이오피 경남 지역 오피 가이드. 울산오피부터 생활권·야간 이동 기준으로 정리하고, 최신 목록은 밤의달인(bamdalin.com) 바로가기로 연결합니다.",
  shareImage: {
    url: "/opengraph-image",
    alt: "하이오피 · 울산오피 · 경남 지역 오피 안내",
  },
  disclaimer:
    "noranghiop.com은 하이오피 운영사의 공식 사이트가 아닙니다. 밤의달인은 별도 플랫폼이며, 이 사이트는 경남 지역별 오피 생활권 안내를 제공하는 독립 가이드입니다.",
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
  ...REGIONS.map((region) => `/${region.slug}` as const),
] as const;

export const ROUTES = [
  { href: "/", label: "홈" },
  ...REGIONS.map((region) => ({
    href: `/${region.slug}`,
    label: region.name,
  })),
] as const;

/** Canonical-safe absolute URL (no trailing slash). */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationRef() {
  return { "@id": `${SITE.url}/#organization` };
}

export function websiteRef() {
  return { "@id": `${SITE.url}/#website` };
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
  const canonical = path === "/" ? SITE.url : absoluteUrl(path);

  return {
    title: pageTitle,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: SITE.locale,
      url: canonical,
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
