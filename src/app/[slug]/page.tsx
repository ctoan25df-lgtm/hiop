import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqItem from "@/components/FaqItem";
import {
  getRegion,
  getRelatedRegions,
  regionListingUrl,
  REGIONS,
} from "@/lib/regions";
import { absoluteUrl, createPageMetadata, jsonLd, SITE } from "@/lib/site-brand";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return REGIONS.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};

  return createPageMetadata({
    title: `${region.keyword} | ${region.name} 생활권·이동 안내`,
    description: region.metaDescription,
    path: `/${region.slug}`,
    type: "article",
  });
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const related = getRelatedRegions(region);
  const canonical = absoluteUrl(`/${region.slug}`);
  const listingUrl = regionListingUrl(region);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${region.keyword} | ${region.name} 생활권·이동 안내`,
        description: region.metaDescription,
        url: canonical,
        inLanguage: SITE.language,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@type": "Place", name: region.name },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/opengraph-image"),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: region.keyword,
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: region.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <section className="hero region-hero">
        <div className="page-width hero-inner">
          <nav className="breadcrumb" aria-label="현재 위치">
            <Link href="/">홈</Link>
            <span aria-hidden="true">›</span>
            <span>{region.keyword}</span>
          </nav>
          <p className="eyebrow">{region.name.toUpperCase()} AREA · GYEONGNAM</p>
          <h1>
            {region.keyword}
            <br />
            <em>생활권·이동 안내</em>
          </h1>
          <p className="hero-copy">{region.shortDescription}</p>
          <div className="district-tags" aria-label="주요 생활권">
            {region.districts.map((district) => (
              <span key={district}>{district}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a
              href={listingUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-accent"
            >
              밤의달인 {region.name} 목록 보기
            </a>
            <Link href="/" className="btn-outline">
              경남 지역 목록
            </Link>
          </div>
          <p className="hero-note">
            밤의달인은 하이오피와 별개의 플랫폼입니다. 공식 제휴나 자체 목록을
            뜻하지 않습니다.
          </p>
        </div>
      </section>

      <article className="section">
        <div className="page-width narrow">
          <div className="section-heading">
            <p className="eyebrow">LOCAL OVERVIEW</p>
            <h2>{region.name}에서 지역 정보를 찾기 전에</h2>
          </div>
          {region.intro.map((paragraph) => (
            <p key={paragraph} className="prose-p">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <section className="section section-alt">
        <div className="page-width">
          <div className="section-heading">
            <p className="eyebrow">AREA NOTES</p>
            <h2>{region.name} 생활권 포인트</h2>
          </div>
          <div className="region-sections">
            {region.sections.map((section, index) => (
              <article key={section.title} className="info-card">
                <span className="step-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-width narrow">
          <div className="section-heading">
            <p className="eyebrow">VISIT CHECKLIST</p>
            <h2>{region.name} 방문 전 확인 목록</h2>
          </div>
          <ul className="checklist">
            {region.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page-width access-band">
          <div>
            <p className="eyebrow">BAMDALIN</p>
            <h2>밤의달인에서 {region.name} 정보 보기</h2>
            <p>
              지역 기준을 정리했다면 별도 플랫폼 밤의달인(
              <strong>bamdalin.com</strong>)에서 공개된 최신 정보를 비교하세요.
            </p>
          </div>
          <a
            href={listingUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-accent"
          >
            밤의달인 {region.name} 목록 보기
          </a>
        </div>
      </section>

      <section className="section section-alt">
        <div className="page-width narrow">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>{region.keyword} 자주 궁금한 점</h2>
          </div>
          <div className="faq-list">
            {region.faq.map((item) => (
              <FaqItem key={item.question} q={item.question} a={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">RELATED</p>
              <h2>함께 볼 경남 지역</h2>
            </div>
            <div className="region-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`} className="region-card">
                  <span>{item.name}</span>
                  <strong>{item.keyword}</strong>
                  <p>{item.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
