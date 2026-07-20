import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

const PATH = "/vs";
const TITLE = "하이오피 주소 안내 페이지 비교 기준";
const DESCRIPTION =
  "하이오피 최신주소를 주장하는 여러 페이지를 공식성 근거, 갱신 기록, 안전 고지, 개인정보 요구 여부로 비교하는 실용 기준입니다.";

export const metadata: Metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: TITLE,
      description: DESCRIPTION,
      url: absoluteUrl(PATH),
      inLanguage: SITE.language,
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE.url },
        { "@type": "ListItem", position: 2, name: TITLE, item: absoluteUrl(PATH) },
      ],
    },
  ],
};

const CRITERIA = [
  {
    label: "운영 관계",
    reliable: "공식 여부와 운영 주체를 구체적으로 밝히고 검증 가능한 근거를 제시합니다.",
    warning: "‘공식’, ‘유일’, ‘100% 안전’이라는 문구만 반복하고 책임 주체를 밝히지 않습니다.",
  },
  {
    label: "업데이트 표시",
    reliable: "확인 날짜, 변경 사유, 과거 기록과 불확실성을 함께 표시합니다.",
    warning: "매일 자동으로 날짜만 바뀌거나 ‘실시간 갱신’을 주장하면서 변경 내역이 없습니다.",
  },
  {
    label: "링크 처리",
    reliable: "목적지를 명확히 표시하고 확인되지 않은 후보를 활성 링크로 만들지 않습니다.",
    warning: "버튼의 실제 목적지를 숨기거나 여러 광고·중간 페이지로 연속 이동시킵니다.",
  },
  {
    label: "안전 고지",
    reliable: "HTTPS의 한계, 피싱 위험, 개인정보 최소화와 접속 보류 기준을 설명합니다.",
    warning: "차단 우회를 권하거나 브라우저 경고를 무시하라고 안내합니다.",
  },
  {
    label: "문의와 정정",
    reliable: "작동하는 연락 수단, 개인정보 처리방침, 정정 절차를 제공합니다.",
    warning: "문의가 실제로 전송되지 않거나 개인정보를 과도하게 수집합니다.",
  },
];

export default function VsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(SCHEMA) }} />
      <GuideArticle
        eyebrow="COMPARISON GUIDE"
        title={TITLE}
        description={DESCRIPTION}
        updated="2026년 7월 20일"
      >
        <section>
          <h2>무엇을 비교하는 페이지인가요?</h2>
          <p>
            이 문서의 ‘vs’는 특정 경쟁 사이트의 순위를 매기거나 승자를 정한다는 뜻이
            아닙니다. 하이오피, 하오, hiop 주소를 안내한다고 주장하는 페이지를 만났을 때
            이용자가 같은 질문으로 평가할 수 있도록 기준을 나란히 정리한 것입니다.
            디자인, 검색 순위, 광고 노출보다 근거와 투명성을 우선합니다.
          </p>
          <p>
            어떤 기준도 사이트의 합법성이나 무결성을 완전히 보증하지는 않습니다. 여러 위험
            신호가 보이면 방문을 보류하고, 개인정보나 결제 정보를 제공하지 않는 것이 가장
            안전한 선택입니다.
          </p>
        </section>

        <section>
          <h2>신뢰 신호와 주의 신호 비교</h2>
          <div className="comparison-list">
            {CRITERIA.map((item) => (
              <article key={item.label} className="comparison-item">
                <h3>{item.label}</h3>
                <div>
                  <p><strong>확인할 신호</strong>{item.reliable}</p>
                  <p><strong>주의할 신호</strong>{item.warning}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>5분 비교 순서</h2>
          <ol>
            <li>후보 페이지를 열기 전에 검색 결과의 표시 URL과 실제 링크 목적지를 비교합니다.</li>
            <li>운영 관계 설명에서 구체적인 이름, 연락처, 검증 근거가 있는지 확인합니다.</li>
            <li>마지막 확인일뿐 아니라 무엇이 변경되었는지 설명하는 기록을 찾습니다.</li>
            <li>개인정보 처리방침이 실제 수집 기능과 일치하는지 살핍니다.</li>
            <li>하나의 페이지 주장만 믿지 말고 독립적인 출처와 교차 확인합니다.</li>
          </ol>
          <p>
            비교 중 브라우저 경고가 뜨거나 앱 설치를 요구받으면 평가를 계속할 필요가 없습니다.
            창을 닫고 <Link href="/guide/safe-access">안전 접속 가이드</Link>의 사후 대응 항목을
            확인하세요.
          </p>
        </section>

        <section>
          <h2>이 사이트에 기준을 적용하면</h2>
          <p>
            noranghiop.com은 하이오피 운영사의 공식 사이트라고 주장하지 않습니다.
            숫자 패턴으로 다음 주소를 예측하지 않으며, 연결이 필요할 때는 접근 허브(
            <a href={SITE.accessUrl} target="_blank" rel="noopener noreferrer">
              bamdalin.com
            </a>
            )를 안내합니다. 문서별 검토일과 정정 연락처를 공개하며 문의 양식은
            내용을 서버에 저장하지 않고 이용자의 이메일 앱을 엽니다.
          </p>
          <p>
            동시에 이 사이트의 설명도 무조건 신뢰해서는 안 됩니다. 날짜가 오래되었거나 근거가
            부족한 부분은 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>로 정정을 요청할 수
            있습니다. 정책은 <Link href="/terms">이용약관</Link>과
            <Link href="/privacy"> 개인정보 처리방침</Link>에서 확인하세요.
          </p>
        </section>

        <aside className="notice">
          <strong>주소가 달라 보인다면</strong>
          <p>
            숫자나 최상위 도메인을 임의로 바꾸지 마세요. 제보와 검증 기록을 구분하는 방법은
            <Link href="/guide/domain-changelog"> 도메인 변경 기록</Link>에 설명되어 있습니다.
          </p>
        </aside>
      </GuideArticle>
    </>
  );
}
