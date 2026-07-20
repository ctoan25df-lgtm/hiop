import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

const PATH = "/guide/domain-changelog";
const TITLE = "하이오피 도메인 변경 기록";
const DESCRIPTION =
  "하이오피·하오·hiop 관련 주소를 기록할 때 적용하는 검증 기준, 상태 표시 방식, 허위 최신주소를 피하는 방법을 정리합니다.";
const UPDATED = "2026년 7월 20일";

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
      "@type": "Article",
      "@id": `${absoluteUrl(PATH)}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      dateModified: "2026-07-20",
      inLanguage: SITE.language,
      mainEntityOfPage: absoluteUrl(PATH),
      author: { "@type": "Organization", name: `${SITE.name} 안내` },
      publisher: { "@type": "Organization", name: `${SITE.name} 안내` },
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

export default function DomainChangelogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(SCHEMA) }} />
      <GuideArticle
        eyebrow="DOMAIN CHANGELOG"
        title={TITLE}
        description={DESCRIPTION}
        updated={UPDATED}
      >
        <aside className="notice">
          <strong>먼저 확인하세요.</strong>
          <p>
            이 문서는 특정 주소를 공식 또는 안전하다고 인증하는 목록이 아닙니다.
            확인되지 않은 주소를 추측해 공개하지 않으며, 접속 제한 우회 방법도 다루지 않습니다.
          </p>
        </aside>

        <section>
          <h2>현재 공개 기록 상태</h2>
          <div className="status-panel">
            <p><strong>이 안내 사이트:</strong> noranghiop.com</p>
            <p><strong>기록 대상 표기:</strong> 하이오피, 하오, hiop</p>
            <p>
              <strong>연결 허브:</strong>{" "}
              <a href={SITE.accessUrl} target="_blank" rel="noopener noreferrer">
                bamdalin.com
              </a>
              {" "}(이동 전 철자·경고 확인)
            </p>
            <p><strong>숫자형 후보 주소:</strong> 소유·운영 주체를 확인할 수 없어 미표시</p>
          </div>
          <p>
            검색 결과에는 ‘최신’, ‘공식’, ‘바로가기’ 같은 표현이 붙은 페이지가 많지만,
            문구 자체는 증거가 아닙니다. 운영 주체가 직접 통제하는 기존 채널의 공지,
            이전 주소와 새 주소 사이의 일관된 안내, 장기간 유지된 연락 수단처럼 서로
            독립적인 단서가 둘 이상 확인되어야 변경 기록을 검토할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>변경 이력을 기록하는 네 단계</h2>
          <ol>
            <li>
              <strong>제보와 사실을 분리합니다.</strong> 제보받은 URL은 후보일 뿐입니다.
              접수 시각과 출처를 남기되 검증 전에는 활성 링크로 제공하지 않습니다.
            </li>
            <li>
              <strong>주소 전체를 비교합니다.</strong> 철자, 최상위 도메인, 하위 도메인,
              유니코드 유사 문자까지 살핍니다. 화면 디자인이 닮았다는 이유만으로 같은
              운영 주체라고 판단하지 않습니다.
            </li>
            <li>
              <strong>상태를 한 시점의 관찰로 표시합니다.</strong> 연결 가능, 리디렉션,
              인증서 경고, 응답 없음 등을 확인 날짜와 함께 기록합니다. 접속 가능하다는
              사실은 합법성이나 안전성을 뜻하지 않습니다.
            </li>
            <li>
              <strong>근거가 사라지면 보류합니다.</strong> 주소가 제3자에게 이전되거나
              내용이 달라질 수 있으므로 과거 기록을 영구 보증처럼 표현하지 않습니다.
            </li>
          </ol>
        </section>

        <section>
          <h2>숫자 증가 패턴을 믿으면 안 되는 이유</h2>
          <p>
            hiop 뒤에 숫자가 붙은 주소가 연속으로 보이면 다음 숫자를 예상하고 싶어질 수
            있습니다. 하지만 도메인 등록은 순번제가 아닙니다. 누구나 비어 있는 이름을
            먼저 등록할 수 있고, 공격자는 이용자가 예상할 만한 숫자를 골라 가짜 로그인이나
            결제 화면을 만들 수 있습니다. 따라서 ‘이전 번호 + 1’은 확인 방법이 아니라
            피싱에 악용될 수 있는 추측입니다.
          </p>
          <p>
            검색 광고의 상단 노출, 메신저에서 반복 공유된 링크, 자물쇠 아이콘도 공식성의
            증거가 아닙니다. HTTPS는 전송 구간을 암호화할 뿐 사이트 운영자의 신원을
            보증하지 않습니다. 주소를 확인할 때는 출처와 맥락을 함께 봐야 합니다.
          </p>
        </section>

        <section>
          <h2>기록에 사용하는 상태 용어</h2>
          <dl>
            <div>
              <dt>확인됨</dt>
              <dd>복수의 독립적인 근거가 있고 확인 날짜를 공개할 수 있는 상태입니다.</dd>
            </div>
            <div>
              <dt>검토 중</dt>
              <dd>제보가 있으나 운영 주체 또는 변경 관계를 확인하지 못한 상태입니다.</dd>
            </div>
            <div>
              <dt>연결 중단</dt>
              <dd>확인 시점에 정상 응답을 받지 못한 상태이며 폐쇄를 단정하지 않습니다.</dd>
            </div>
            <div>
              <dt>주의</dt>
              <dd>인증서 경고, 예상 밖 리디렉션, 과도한 개인정보 요구 등 위험 신호가 관찰된 상태입니다.</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2>안전하게 다음 단계로 이동하기</h2>
          <p>
            실제 주소를 방문하기 전에는 <Link href="/guide/safe-access">안전 접속 가이드</Link>의
            체크리스트를 먼저 확인하세요. 검색 결과 여러 개를 비교해야 한다면
            <Link href="/vs"> 주소 비교 기준</Link>에서 공식성 주장, 업데이트 날짜,
            개인정보 요구를 평가하는 방법을 볼 수 있습니다.
          </p>
          <p>
            이 기록의 오류나 오래된 설명은 홈페이지의 문의 양식 또는
            <a href={`mailto:${SITE.email}`}> {SITE.email}</a>로 알려 주세요.
            URL만 보내기보다 발견 경로와 확인 시점을 함께 적어 주면 검토에 도움이 됩니다.
          </p>
        </section>
      </GuideArticle>
    </>
  );
}
