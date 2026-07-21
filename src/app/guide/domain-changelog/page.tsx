import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import {
  DOMAIN_RECORDS,
  getLatestReviewDate,
} from "@/lib/domain-records";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

const PATH = "/guide/domain-changelog";
const TITLE = "하이오피 도메인 변경 기록";
const DESCRIPTION =
  "하이오피·하오·hiop 관련 주소를 기록할 때 적용하는 검증 기준과, 숫자형 후보를 추측하지 않고 남기는 관찰 로그를 공개합니다.";
const UPDATED = "2026년 7월 21일";

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
      dateModified: getLatestReviewDate(),
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
          <h2>공개 관찰 로그</h2>
          <p>
            마지막 검토일: {getLatestReviewDate()}. 아래 표는 하이오피·하오·hiop
            검색과 연결된 호스트를 관찰한 결과입니다. 상태가 ‘검토 중’인 행은
            활성 링크로 제공하지 않습니다.
          </p>
          <div className="status-panel" style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th scope="col">관찰일</th>
                  <th scope="col">호스트</th>
                  <th scope="col">상태</th>
                  <th scope="col">근거 요약</th>
                  <th scope="col">비고</th>
                </tr>
              </thead>
              <tbody>
                {DOMAIN_RECORDS.map((row) => (
                  <tr key={`${row.observedAt}-${row.host}`}>
                    <td>{row.observedAt}</td>
                    <td>{row.host}</td>
                    <td>{row.status}</td>
                    <td>{row.evidenceSummary}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            예를 들어 검색에 hiop12, hiop13처럼 보이는 후보가 이어져도 ‘다음이
            hiop14’라는 근거는 없습니다. 도메인 등록은 순번제가 아니며, 공격자는
            이용자가 예상할 만한 숫자를 골라 가짜 로그인·결제 화면을 만들 수 있습니다.
            따라서 ‘이전 번호 + 1’은 확인 방법이 아니라 피싱에 악용될 수 있는 추측입니다.
          </p>
          <p>
            검색 광고의 상단 노출, 메신저에서 반복 공유된 링크, 자물쇠 아이콘도 공식성의
            증거가 아닙니다. HTTPS는 전송 구간을 암호화할 뿐 사이트 운영자의 신원을
            보증하지 않습니다.
          </p>
        </section>

        <section>
          <h2>제보할 때 적어 주시면 좋은 항목</h2>
          <ul>
            <li>발견한 URL 전체와 본 날짜·시각</li>
            <li>어디서 봤는지(검색어, 메신저, 북마크 등)</li>
            <li>주소창 경고·리디렉션·앱 설치 요구 여부</li>
            <li>가능하면 화면 캡처에 호스트 이름이 보이게 남긴 메모</li>
          </ul>
          <p>
            URL만 보내기보다 발견 경로와 확인 시점을 함께 적어 주면 검토에 도움이 됩니다.
            제보만으로 확인됨 상태로 올리지 않습니다.
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
          </p>
        </section>
      </GuideArticle>
    </>
  );
}
