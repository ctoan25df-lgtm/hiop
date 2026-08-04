import type { Metadata } from "next";
import Link from "next/link";
import FaqItem from "@/components/FaqItem";
import ContactForm from "@/components/ContactForm";
import { REGIONS, regionListingUrl } from "@/lib/regions";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

const PAGE_TITLE = "하이오피 | 경남 지역 오피·울산오피 가이드";
const ulsan = REGIONS[0];

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: SITE.description,
  path: "/",
});

const FAQ = [
  {
    q: "하이오피는 어떤 사이트인가요?",
    a: "하이오피(noranghiop.com)는 경남 지역별 오피 생활권·이동 안내를 정리하는 독립 가이드입니다. 운영사 공식 사이트가 아니며, 최신 목록은 별도 플랫폼인 밤의달인으로 연결합니다.",
  },
  {
    q: "왜 울산오피부터 안내하나요?",
    a: "경남권 안에서도 생활권과 귀가 동선이 크게 달라 지역을 나눠 정리합니다. 우선 울산(삼산동·달동·성남동·무거동)부터 공개하고, 이후 경남 다른 지역을 같은 기준으로 확장합니다.",
  },
  {
    q: "밤의달인(bamdalin.com) 링크는 무엇인가요?",
    a: "밤의달인은 하이오피와 별개의 플랫폼입니다. 지역 기준을 정리한 뒤 공개된 최신 정보를 비교할 때 사용하는 바로가기이며, 공식 제휴나 주소 인증을 뜻하지 않습니다.",
  },
  {
    q: "지역 페이지만 보면 충분한가요?",
    a: "생활권·교통·확인 순서를 좁히는 데는 도움이 됩니다. 상호·영업시간·연락처는 수시로 바뀌므로 방문 직전 원 출처와 밤의달인 최신 안내를 다시 확인하세요.",
  },
];

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl()}#webpage`,
      url: absoluteUrl(),
      name: PAGE_TITLE,
      description: SITE.description,
      inLanguage: SITE.language,
      dateModified: SITE.updatedAt,
      isPartOf: { "@id": `${SITE.url}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/opengraph-image"),
      },
    },
    {
      "@type": "ItemList",
      name: "경남 지역 오피 가이드",
      itemListElement: REGIONS.map((region, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: region.keyword,
        url: absoluteUrl(`/${region.slug}`),
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl()}#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(HOME_SCHEMA) }}
      />
      <main id="main-content">
        <section className="hero">
          <div className="page-width hero-inner">
            <p className="eyebrow">GYEONGNAM · REGIONAL OPI</p>
            <h1>
              하이오피
              <br />
              <em>경남 지역 오피 가이드</em>
            </h1>
            <p className="hero-copy">
              울산오피부터 생활권·야간 이동 기준으로 정리합니다. 최신 목록 확인은
              별도 플랫폼 밤의달인(<strong>bamdalin.com</strong>) 바로가기로
              연결됩니다.
            </p>
            <div className="hero-actions">
              <a
                href={SITE.accessUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-accent"
              >
                밤의달인 바로가기
              </a>
              {ulsan && (
                <Link href={`/${ulsan.slug}`} className="btn-outline">
                  울산오피 가이드
                </Link>
              )}
            </div>
            <p className="disclaimer">{SITE.disclaimer}</p>
          </div>
        </section>

        <section className="section">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">REGIONS</p>
              <h2>경남 지역별 오피</h2>
              <p>
                우선 울산을 공개했습니다. 삼산동·달동·성남동·무거동 생활권과
                귀가 동선을 먼저 본 뒤, 밤의달인에서 최신 정보를 비교하세요.
              </p>
            </div>
            <div className="region-grid">
              {REGIONS.map((region) => (
                <Link
                  key={region.slug}
                  href={`/${region.slug}`}
                  className="region-card"
                >
                  <span>{region.name}</span>
                  <strong>{region.keyword}</strong>
                  <p>{region.shortDescription}</p>
                  <em>가이드 열기 →</em>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {ulsan && (
          <section className="section section-alt">
            <div className="page-width">
              <div className="section-heading">
                <p className="eyebrow">FEATURED · ULSAN</p>
                <h2>울산오피, 생활권부터 좁히세요</h2>
                <p>{ulsan.shortDescription}</p>
              </div>
              <div className="district-tags" aria-label="울산 주요 생활권">
                {ulsan.districts.map((district) => (
                  <span key={district}>{district}</span>
                ))}
              </div>
              <div className="hero-actions" style={{ marginTop: 28 }}>
                <Link href={`/${ulsan.slug}`} className="btn-outline">
                  울산 가이드 자세히
                </Link>
                <a
                  href={regionListingUrl(ulsan)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn-accent"
                >
                  밤의달인 울산 보기
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="page-width access-band">
            <div>
              <p className="eyebrow">BAMDALIN</p>
              <h2>밤의달인으로 최신 정보 확인</h2>
              <p>
                지역 기준을 정리했다면 밤의달인(
                <strong>bamdalin.com</strong>)에서 공개된 정보를 비교하세요.
                하이오피 공식 주소가 아니며, 별도 플랫폼으로 이동합니다.
              </p>
            </div>
            <div className="hero-actions">
              <a
                href={SITE.accessUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-accent"
              >
                밤의달인 바로가기
              </a>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="page-width narrow">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>자주 묻는 질문</h2>
            </div>
            <div className="faq-list">
              {FAQ.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="page-width contact-grid">
            <div>
              <p className="eyebrow">CONTACT</p>
              <h2>지역 안내 정정 제보</h2>
              <p>
                생활권 설명·교통 안내 중 사실과 다른 부분이 있으면 알려 주세요.
                확인 가능한 근거가 있을 때 반영합니다.
              </p>
              <a className="text-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
            <ContactForm email={SITE.email} />
          </div>
        </section>
      </main>
    </>
  );
}
