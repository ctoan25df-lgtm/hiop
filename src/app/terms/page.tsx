import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "접근성 안내 | 하이오피",
  description: "하이오피(부달) 서비스 접근성 및 이용 안내 페이지입니다.",
  robots: { index: true, follow: true },
};

const EMAIL = "help@hiop.com";
const BRAND = "하이오피";
const ACCENT = "#f5c518";

export default function TermsPage() {
  return (
    <main
      className="min-h-screen px-5 py-16"
      style={{ background: "#080800", color: "#ccc" }}
    >
      <article className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: ACCENT }}
        >
          ← 홈으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="h-1 w-16 rounded mb-6" style={{ background: ACCENT }} />
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            접근성 표시 정보 및 이용 안내
          </h1>
          <p className="text-sm" style={{ color: "#777" }}>
            {BRAND} 서비스 이용에 관한 안내입니다.
          </p>
        </header>

        <div className="space-y-10 text-sm leading-loose" style={{ color: "#aaa" }}>
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. 웹 접근성 준수 노력</h2>
            <p>
              {BRAND}는 모든 이용자가 불편 없이 서비스를 이용할 수 있도록
              웹 접근성(Web Accessibility) 향상을 위해 지속적으로 노력합니다.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>키보드만으로도 주요 기능을 이용할 수 있도록 구성</li>
              <li>화면 읽기 프로그램(스크린리더) 호환 마크업 적용</li>
              <li>충분한 색상 대비율 유지</li>
              <li>이미지에 대체 텍스트(alt) 제공</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. 서비스 이용 안내</h2>
            <p>
              {BRAND}는 부산·울산·경남 지역 정보를 안내하는 가이드 사이트로,
              실제 서비스는 연결된 외부 사이트에서 제공됩니다.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>본 사이트는 정보 안내 목적으로 운영됩니다.</li>
              <li>외부 링크 클릭 시 새 창으로 이동하며, 해당 사이트의 이용약관이 적용됩니다.</li>
              <li>서비스 이용 관련 문의는 아래 이메일로 접수해 주세요.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. 접근성 오류 신고</h2>
            <p>
              접근성 문제나 이용 불편 사항을 발견하셨다면 아래 이메일로 신고해 주세요.
              빠른 시일 내에 검토하여 개선하겠습니다.
            </p>
            <div
              className="rounded-xl p-5 mt-3"
              style={{ background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.2)" }}
            >
              <p className="font-bold text-white mb-1">{BRAND} 서비스 문의</p>
              <p>이메일: <a href={`mailto:${EMAIL}`} style={{ color: ACCENT }}>{EMAIL}</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. 브라우저 지원</h2>
            <p>최적의 서비스 이용을 위해 최신 버전의 브라우저 사용을 권장합니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>Chrome 최신 버전</li>
              <li>Safari 최신 버전</li>
              <li>Samsung Internet 최신 버전</li>
              <li>Firefox 최신 버전</li>
            </ul>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t text-xs" style={{ borderColor: "rgba(245,197,24,0.15)", color: "#555" }}>
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="flex gap-4 mt-3">
            <Link href="/" style={{ color: "#666" }}>홈</Link>
            <Link href="/privacy" style={{ color: "#666" }}>개인정보 처리방침</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
