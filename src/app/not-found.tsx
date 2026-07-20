import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div>
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>요청한 페이지를 찾을 수 없습니다</h1>
        <p>
          주소가 변경되었거나 입력이 잘못되었을 수 있습니다. 숫자나 도메인을 임의로
          바꾸어 시도하지 말고 아래의 확인된 문서로 이동하세요.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn-accent">홈으로 이동</Link>
          <Link href="/guide/domain-changelog" className="btn-outline">도메인 기록 보기</Link>
        </div>
        <nav aria-label="법적 고지" className="not-found-links">
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/terms">이용약관</Link>
        </nav>
      </div>
    </main>
  );
}
