import type { Metadata } from "next";
import Link from "next/link";
import FaqItem from "@/components/FaqItem";
import ContactForm from "@/components/ContactForm";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

export const metadata: Metadata = createPageMetadata({
  title: "하이오피 주소 | 하오·hiop 주소 안내",
  description: SITE.description,
  path: "/",
});

const PRINCIPLES = [
  {
    title: "이름과 주소를 구분합니다",
    desc: "하이오피, 하오, hiop은 검색에 쓰이는 이름일 뿐 특정 도메인의 소유권이나 공식성을 자동으로 증명하지 않습니다.",
  },
  {
    title: "확인된 사실만 기록합니다",
    desc: "숫자만 바꾼 주소를 ‘다음 도메인’으로 예측하지 않습니다. 확인 날짜, 확인 방법, 불확실성을 함께 남깁니다.",
  },
  {
    title: "즐겨찾기와 재시도를 우선합니다",
    desc: "막힐 때마다 새 주소를 찾기보다 이 안내 페이지를 북마크하고, 캐시·쿠키를 정리한 뒤 다시 열어 보는 순서를 권합니다.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "이 안내를 북마크",
    desc: "검색창에 비슷한 이름이 매번 뜨더라도, 저장해 둔 noranghiop.com에서 기록과 점검 기준을 다시 확인합니다.",
  },
  {
    n: "02",
    title: "도메인 기록 확인",
    desc: "숫자 패턴 추측 대신 확인일과 상태가 적힌 변경 기록을 읽고, 검증되지 않은 후보 링크는 열지 않습니다.",
  },
  {
    n: "03",
    title: "캐시·재시도 후 보류",
    desc: "페이지가 열리지 않으면 오타·캐시·쿠키를 점검하고 잠시 뒤 재시도합니다. 그래도 안 되면 접속을 보류합니다.",
  },
];

const FAQ = [
  {
    q: "하이오피, 하오, hiop은 모두 같은 뜻인가요?",
    a: "검색에는 함께 쓰이지만 표기가 같다고 모든 호스트가 같은 운영 주체라는 뜻은 아닙니다. 이 사이트는 이름 대응표가 아니라 주소별 확인 기록을 남깁니다.",
  },
  {
    q: "왜 hiop 뒤에 숫자가 붙은 주소가 검색에 많이 보이나요?",
    a: "이용자가 다음 번호를 추측해 열 것을 기대하는 패턴이 퍼져 있기 때문입니다. 도메인 등록은 순번제가 아니므로 ‘이전 번호 + 1’은 확인 방법이 아니라 피싱에 악용될 수 있는 추측입니다. 숫자형 후보는 근거가 없으면 기록에 링크로 올리지 않습니다.",
  },
  {
    q: "도메인 기록의 ‘검토 중’은 무엇을 뜻하나요?",
    a: "제보나 관찰은 있으나 운영 주체·이전 관계를 독립적으로 확인하지 못한 상태입니다. 검토 중 항목은 활성 링크로 제공하지 않으며, 확인됨으로 바꾸려면 서로 다른 근거가 둘 이상 필요합니다.",
  },
  {
    q: "밤달인(bamdalin.com) 링크는 무엇인가요?",
    a: "이 아카이브가 연결하는 접근 경로입니다. 허브 이동만으로 다른 숫자형 hiop 주소의 안전성이 증명되지는 않으므로, 주소창 철자와 브라우저 경고를 따로 확인하세요.",
  },
];

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl()}#webpage`,
      url: absoluteUrl(),
      name: "하이오피 주소 | 하오·hiop 주소 안내",
      description: SITE.description,
      inLanguage: SITE.language,
      isPartOf: { "@id": `${SITE.url}/#website` },
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
            <p className="eyebrow">하이오피 주소 안내</p>
            <h1>
              하이오피 주소 | 하오·hiop
              <br />
              <em>주소 안내</em>
            </h1>
            <p className="hero-copy">
              <strong>하이오피 주소</strong>·하오 주소·hiop 주소를 찾는
              안내입니다. 숫자만 바꾼 도메인을 추측하지 말고, 확인된 연결
              경로와 도메인 기록을 확인하세요.
            </p>
            <div className="hero-actions">
              <a
                href={SITE.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                bamdalin.com 이동
              </a>
              <Link href="/guide/domain-changelog" className="btn-outline">도메인 기록 읽기</Link>
              <Link href="/guide/safe-access" className="btn-outline">접속 전 확인사항</Link>
            </div>
            <p className="bookmark-hint">
              이 페이지를 즐겨찾기에 저장해 두면, 비슷한 이름의 검색 결과 사이에서
              같은 안내 기준으로 돌아올 수 있습니다.
            </p>
            <p className="disclaimer">{SITE.disclaimer}</p>
          </div>
        </section>

        <section className="section">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">확인 순서</p>
              <h2>북마크 → 기록 → 재시도</h2>
              <p>
                하이오피·하오·hiop 검색은 비슷한 철자와 광고성 링크가 섞이기 쉽습니다.
                새 주소를 추측하기보다 저장된 안내로 돌아와 기록과 점검 목록을 다시
                확인하는 편이 안전합니다.
              </p>
            </div>
            <ol className="step-rail">
              {STEPS.map((step) => (
                <li key={step.n}>
                  <span className="step-num">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-alt">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">왜 별도 기록이 필요한가</p>
              <h2>같은 이름, 다른 주소를 구분하는 기준</h2>
              <p>
                ‘하이오피’와 축약형 ‘하오’, 영문 ‘hiop’은 검색어로 함께 등장합니다.
                그러나 유사한 철자, 숫자가 붙은 주소, 광고성 리디렉션이 섞이면 이름만으로
                운영 주체를 판별하기 어렵습니다. 이 사이트는 주소를 대신 선택해 주기보다
                이용자가 근거를 직접 확인할 수 있도록 기록 방식과 점검 기준을 공개합니다.
              </p>
            </div>
            <div className="card-grid">
              {PRINCIPLES.map((item) => (
                <article className="info-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page-width split-section">
            <div>
              <p className="eyebrow">기록 원칙</p>
              <h2>도메인 이력은 ‘예측’이 아니라 ‘검증 메모’입니다</h2>
            </div>
            <div className="prose-compact">
              <p>
                번호가 증가하는 것처럼 보이더라도 다음 번호가 실제 주소라는 근거는 없습니다.
                제3자가 비슷한 주소를 먼저 등록할 수도 있고, 정상 페이지처럼 꾸민 뒤 개인정보를
                요구할 수도 있습니다. 그래서 이 사이트의 변경 기록은 확인일과 상태를 함께 표시하고,
                확인되지 않은 후보를 활성 링크로 제공하지 않습니다.
              </p>
              <Link href="/guide/domain-changelog" className="text-link">
                기록 기준과 현재 상태 보기 →
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="page-width access-band">
            <div>
              <p className="eyebrow">연결 허브</p>
              <h2>확인된 접근 경로로 이동할 때</h2>
              <p>
                별도 허브가 필요할 때는{" "}
                <a href={SITE.accessUrl} target="_blank" rel="noopener noreferrer">
                  bamdalin.com
                </a>
                으로 연결합니다. 이동 전에도 주소 표시줄 철자와 브라우저 경고를 확인하세요.
              </p>
            </div>
            <div className="hero-actions">
              <a
                href={SITE.accessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                접근 허브 열기
              </a>
              <Link href="/guide/safe-access" className="btn-outline">
                안전 체크리스트
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
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
              <h2>기록 정정과 안전 문제 제보</h2>
              <p>
                잘못된 날짜, 오해를 부르는 표현, 의심스러운 링크를 알려 주세요.
                제보만으로 공식 주소로 등록하지 않으며 검토 결과에 따라 반영합니다.
              </p>
              <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <ContactForm email={SITE.email} />
          </div>
        </section>
      </main>
    </>
  );
}
