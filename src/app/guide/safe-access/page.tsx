import type { Metadata } from "next";
import Link from "next/link";
import GuideArticle from "@/components/GuideArticle";
import { SITE, absoluteUrl, createPageMetadata, jsonLd } from "@/lib/site-brand";

const PATH = "/guide/safe-access";
const TITLE = "하이오피 주소를 안전하게 확인하는 방법";
const DESCRIPTION =
  "하이오피·하오·hiop 관련 주소를 열기 전 북마크, 철자, 캐시·재시도, 브라우저 경고를 점검하는 안전 체크리스트입니다.";

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

export default function SafeAccessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(SCHEMA) }} />
      <GuideArticle
        eyebrow="SAFE ACCESS"
        title={TITLE}
        description={DESCRIPTION}
        updated="2026년 7월 20일"
      >
        <aside className="notice">
          <strong>이 가이드는 우회·VPN 설명이 아닙니다.</strong>
          <p>
            차단을 피하는 설정이나 대체 네트워크 사용법은 안내하지 않습니다.
            즐겨찾기, 주소 철자 확인, 캐시·쿠키 정리 후 재시도에 집중합니다.
            소속 조직의 정책과 현지 법률을 따르세요.
          </p>
        </aside>

        <section>
          <h2>먼저: 안내 페이지를 북마크하세요</h2>
          <p>
            검색 결과는 비슷한 이름과 광고 링크가 섞이기 쉽습니다.
            <Link href="/"> noranghiop.com 홈</Link>을 즐겨찾기에 저장해 두면
            같은 점검 기준과 도메인 기록으로 돌아올 수 있습니다. 허브가 필요할 때는{" "}
            <a href={SITE.accessUrl} target="_blank" rel="noopener noreferrer">
              bamdalin.com
            </a>
            으로 이동하되, 열기 전에도 주소 표시줄을 확인하세요.
          </p>
        </section>

        <section>
          <h2>링크를 누르기 전 30초 점검</h2>
          <ul className="check-list">
            <li>주소 표시줄의 철자를 처음부터 끝까지 읽습니다.</li>
            <li>‘광고’ 표시가 있는 검색 결과를 공식 공지로 오해하지 않습니다.</li>
            <li>링크를 보낸 사람에게 출처와 확인 시점을 다시 묻습니다.</li>
            <li>브라우저가 인증서 또는 유해 사이트 경고를 표시하면 즉시 중단합니다.</li>
            <li>접속만을 위해 앱, 프로필, 확장 프로그램 설치를 요구하면 설치하지 않습니다.</li>
          </ul>
          <p>
            모바일에서는 주소 표시줄이 축약되어 보일 수 있습니다. 도메인을 탭해 전체 문자열을
            확인하고, 한글과 비슷하게 보이는 다른 문자나 철자 한 글자 차이를 살펴보세요.
            링크 미리보기의 로고와 제목은 발신자가 조작할 수 있으므로 판단 근거로 부족합니다.
          </p>
        </section>

        <section>
          <h2>‘안전해 보임’과 ‘확인됨’은 다릅니다</h2>
          <p>
            자물쇠 아이콘과 HTTPS는 기기와 해당 서버 사이의 통신이 암호화된다는 의미입니다.
            사이트가 공식인지, 제공 내용이 정확한지, 결제가 안전한지까지 인증하지는 않습니다.
            세련된 화면, 익숙한 로고, 많은 후기 역시 복제하거나 조작할 수 있습니다.
          </p>
          <p>
            공식성을 확인하려면 새 주소를 주장하는 페이지 자체가 아닌 별도의 신뢰 가능한
            경로를 찾아야 합니다. 과거부터 사용한 공지 채널, 일관된 연락처, 이전 주소의 직접
            공지처럼 서로 독립적인 근거를 비교하세요. 하나라도 불일치하면 입력과 결제를 멈추고
            더 확인하는 편이 안전합니다.
          </p>
        </section>

        <section>
          <h2>개인정보와 결제 요청에서 멈춰야 할 신호</h2>
          <div className="risk-grid">
            <div>
              <h3>불필요한 정보</h3>
              <p>단순 열람인데 신분증, 계좌 비밀번호, 인증번호, 주소록을 요구합니다.</p>
            </div>
            <div>
              <h3>시간 압박</h3>
              <p>곧 계정이 정지된다거나 지금 결제해야 한다며 확인할 시간을 주지 않습니다.</p>
            </div>
            <div>
              <h3>설치 요구</h3>
              <p>보안 확인을 명목으로 출처 불명의 앱, 구성 프로필, 원격제어 앱을 설치하게 합니다.</p>
            </div>
            <div>
              <h3>비정상 결제</h3>
              <p>개인 명의 계좌, 상품권 번호, 암호자산처럼 취소가 어려운 수단만 요구합니다.</p>
            </div>
          </div>
          <p>
            인증번호와 복구 코드는 누구에게도 전달하지 마세요. 이미 입력했다면 해당 계정의
            공식 서비스에서 비밀번호를 변경하고 모든 세션을 종료한 뒤, 결제수단 제공사에
            직접 연락해 거래 상태를 확인하세요.
          </p>
        </section>

        <section>
          <h2>페이지가 열리지 않을 때 — 캐시·재시도</h2>
          <p>
            접속 실패가 곧 주소 변경을 의미하지는 않습니다. 서버 장애, 오래된 캐시,
            브라우저 확장 기능, 조직 네트워크 정책 등 원인은 다양합니다. 숫자를 올린
            새 주소를 추측하거나 검색 결과의 낯선 미러로 이동하지 마세요.
          </p>
          <ol>
            <li>주소 표시줄 철자를 처음부터 끝까지 다시 읽습니다.</li>
            <li>브라우저 캐시와 쿠키를 정리한 뒤 같은 주소를 다시 엽니다.</li>
            <li>시크릿(비공개) 창에서 한 번 더 열어 확장 기능 간섭을 줄입니다.</li>
            <li>잠시 기다렸다가 재시도하고, 그래도 안 되면 접속을 보류합니다.</li>
            <li>회사·학교 기기라면 담당 관리자에게 허용 여부를 문의합니다.</li>
          </ol>
          <p>
            숫자를 올려 다음 주소를 추측하는 방식의 위험은
            <Link href="/guide/domain-changelog"> 도메인 변경 기록</Link>에서 자세히 설명합니다.
          </p>
        </section>

        <section>
          <h2>문제가 발생한 뒤의 대응</h2>
          <p>
            의심스러운 페이지에 비밀번호를 입력했다면 동일한 비밀번호를 쓰는 다른 계정까지
            각각 다른 비밀번호로 변경하고 다중 인증을 설정하세요. 카드나 계좌 정보를 제공했다면
            검색 결과에 나온 번호가 아니라 카드 뒷면 또는 금융기관 공식 앱의 연락처로 문의하세요.
            악성 앱을 설치했다면 네트워크를 끊고 신뢰할 수 있는 보안 지원을 받는 것이 좋습니다.
          </p>
          <p>
            주소를 신고할 때는 개인정보가 포함된 화면을 그대로 공개하지 말고 민감한 부분을
            가리세요. 이 사이트에 안전 문제를 제보하려면 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>로
            발견 시각, 유입 경로, 관찰한 경고를 보내 주세요.
          </p>
        </section>

        <nav className="article-related" aria-label="관련 문서">
          <Link href="/guide/domain-changelog">도메인 변경 기록</Link>
          <Link href="/vs">주소 안내 페이지 비교 기준</Link>
          <Link href="/privacy">개인정보 처리방침</Link>
        </nav>
      </GuideArticle>
    </>
  );
}
