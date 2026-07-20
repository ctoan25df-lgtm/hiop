import type { Metadata } from "next";
import Link from "next/link";
import { SITE, createPageMetadata } from "@/lib/site-brand";

export const metadata: Metadata = createPageMetadata({
  title: "개인정보 처리방침",
  description: "하이오피 안내 사이트의 개인정보 수집 여부와 이메일 문의 처리 방침입니다.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <main id="main-content" className="article-main">
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="현재 위치">
          <Link href="/">홈</Link><span aria-hidden>/</span><span>개인정보 처리방침</span>
        </nav>
        <header className="article-header">
          <p className="eyebrow">PRIVACY</p>
          <h1>개인정보 처리방침</h1>
          <p className="article-lead">
            이 사이트의 현재 기능을 기준으로 실제 수집 여부와 문의 처리 방식을 설명합니다.
          </p>
          <p className="article-updated">시행일: 2026년 7월 20일</p>
        </header>

        <div className="article-body">
          <section>
            <h2>1. 웹사이트에서 직접 수집하는 정보</h2>
            <p>
              현재 noranghiop.com에는 회원가입, 로그인, 결제, 댓글, 뉴스레터 구독 기능이
              없습니다. 홈페이지 문의 양식에 입력한 이메일과 내용은 사이트 서버로 전송되거나
              저장되지 않습니다. 전송 버튼을 누르면 이용자 기기의 기본 이메일 앱이 열립니다.
            </p>
          </section>

          <section>
            <h2>2. 이메일 문의</h2>
            <p>
              이용자가 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>로 이메일을 보내면
              발신 주소와 본문이 이메일 서비스에 저장될 수 있습니다. 해당 정보는 문의 확인,
              답변, 기록 정정과 안전 제보 검토에만 사용합니다. 민감한 개인정보, 비밀번호,
              인증번호, 결제정보는 보내지 마세요.
            </p>
          </section>

          <section>
            <h2>3. 보유와 삭제</h2>
            <p>
              이메일 문의는 처리에 필요한 기간 동안 보관하고 목적이 끝나면 삭제합니다.
              다만 분쟁 대응이나 법령상 의무가 있는 경우 필요한 범위에서 더 보관할 수 있습니다.
              본인이 보낸 문의의 삭제를 원하면 같은 이메일 주소로 요청해 주세요.
            </p>
          </section>

          <section>
            <h2>4. 쿠키와 호스팅 로그</h2>
            <p>
              이 사이트는 현재 자체 분석·광고 쿠키를 설정하지 않습니다. 다만 호스팅·네트워크
              제공자는 보안과 안정적 제공을 위해 IP 주소, 요청 시각, 브라우저 정보 같은
              기술 로그를 제한적으로 처리할 수 있습니다. 해당 처리는 제공자의 정책과 법적
              의무에 따릅니다.
            </p>
          </section>

          <section>
            <h2>5. 외부 링크</h2>
            <p>
              이메일 링크 등 외부 앱이나 서비스로 이동하면 해당 서비스의 개인정보 처리방침이
              적용됩니다. 이 사이트는 외부 서비스의 정보 처리 방식을 통제하지 않습니다.
            </p>
          </section>

          <section>
            <h2>6. 문의와 변경 고지</h2>
            <p>
              개인정보 관련 요청은 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>로 접수합니다.
              수집 기능이나 처리 방식이 바뀌면 시행일과 내용을 이 페이지에 반영합니다.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
