import type { Metadata } from "next";
import Link from "next/link";
import { SITE, createPageMetadata } from "@/lib/site-brand";

export const metadata: Metadata = createPageMetadata({
  title: "이용약관",
  description: "하이오피 안내 사이트의 이용 조건, 정보 한계, 외부 링크와 안전 원칙입니다.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <main id="main-content" className="article-main">
      <article className="article-shell">
        <nav className="breadcrumb" aria-label="현재 위치">
          <Link href="/">홈</Link><span aria-hidden>/</span><span>이용약관</span>
        </nav>
        <header className="article-header">
          <p className="eyebrow">TERMS</p>
          <h1>이용약관</h1>
          <p className="article-lead">
            이 사이트는 도메인 기록과 온라인 안전 원칙을 제공하는 독립 정보 가이드입니다.
          </p>
          <p className="article-updated">시행일: 2026년 7월 20일</p>
        </header>

        <div className="article-body">
          <section>
            <h2>1. 사이트의 성격</h2>
            <p>
              noranghiop.com은 하이오피·하오·hiop 이름과 관련된 주소 확인 원칙을 설명하는
              독립 사이트입니다. 특정 서비스 운영사를 대리하지 않으며 공식 주소, 운영 지속성,
              외부 사이트의 합법성 또는 안전성을 보증하지 않습니다.
            </p>
          </section>

          <section>
            <h2>2. 정보의 한계</h2>
            <p>
              문서는 작성 또는 검토 시점의 정보를 바탕으로 하며 이후 상황이 달라질 수 있습니다.
              확인 날짜와 불확실성을 표시하려 노력하지만 완전성이나 최신성을 약속하지 않습니다.
              중요한 판단은 독립적인 출처로 다시 확인해야 합니다.
            </p>
          </section>

          <section>
            <h2>3. 안전한 이용</h2>
            <p>
              브라우저 경고를 무시하거나 조직 네트워크의 제한을 우회하지 마세요. 이 사이트의
              문서를 불법 행위, 개인정보 침해, 보안 통제 회피에 이용할 수 없습니다. 외부
              페이지가 비밀번호, 인증번호, 결제정보 또는 출처 불명의 프로그램 설치를 요구하면
              이용을 중단하세요.
            </p>
          </section>

          <section>
            <h2>4. 외부 링크와 상표</h2>
            <p>
              외부 링크가 제공되는 경우 해당 사이트의 약관과 정책이 적용됩니다. 외부 사이트의
              내용이나 손실에 대해 이 사이트가 통제하거나 보증하지 않습니다. 언급된 이름과
              상표는 식별과 설명을 위해 사용되며 각 권리자에게 귀속될 수 있습니다.
            </p>
          </section>

          <section>
            <h2>5. 접근성과 정정 요청</h2>
            <p>
              키보드 탐색, 화면 읽기 프로그램, 색상 대비, 모바일 사용성을 지속적으로 점검합니다.
              접근성 문제나 사실 오류는 <a href={`mailto:${SITE.email}`}>{SITE.email}</a>로
              알려 주세요. 개인정보 처리 방식은 <Link href="/privacy">개인정보 처리방침</Link>에서
              확인할 수 있습니다.
            </p>
          </section>

          <section>
            <h2>6. 약관 변경</h2>
            <p>
              사이트 기능이나 운영 원칙이 바뀌면 이 페이지의 시행일과 내용을 갱신합니다.
              변경 후 계속 이용하면 변경된 조건을 확인한 것으로 봅니다.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
