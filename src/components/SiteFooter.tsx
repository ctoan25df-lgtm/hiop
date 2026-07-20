import Link from "next/link";
import { ROUTES, SITE } from "@/lib/site-brand";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-grid">
        <div>
          <Link href="/" className="brand-mark" aria-label={`${SITE.name} 홈`}>
            <span>하이</span>오피
          </Link>
          <p className="footer-note">{SITE.disclaimer}</p>
        </div>
        <nav aria-label="하단 메뉴" className="footer-links">
          {ROUTES.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link href="/privacy">개인정보 처리방침</Link>
          <Link href="/terms">이용약관</Link>
          <a href={`mailto:${SITE.email}`}>문의 이메일</a>
          <a href={SITE.accessUrl} target="_blank" rel="noopener noreferrer">접근 허브</a>
        </nav>
      </div>
      <p className="copyright">
        © 2024–{new Date().getFullYear()} {SITE.name}. 독립 안내 사이트.
      </p>
    </footer>
  );
}
