import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | 하이오피",
  description: "하이오피(hiop) 개인정보 처리방침 안내 페이지입니다.",
  robots: { index: true, follow: true },
};

const UPDATED = "2025년 1월 1일";
const EMAIL = "help@hiop.com";
const BRAND = "하이오피";
const DOMAIN = "https://hiop.com";
const ACCENT = "#f5c518";

export default function PrivacyPage() {
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
            개인정보 처리방침
          </h1>
          <p className="text-sm" style={{ color: "#777" }}>
            최종 업데이트: {UPDATED}
          </p>
        </header>

        <div className="space-y-10 text-sm leading-loose" style={{ color: "#aaa" }}>
          <section>
            <h2 className="text-lg font-bold text-white mb-3">1. 수집하는 개인정보 항목</h2>
            <p>
              {BRAND}(이하 &quot;회사&quot;)는 최소한의 개인정보를 수집합니다. 주요 수집 항목은 다음과 같습니다.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>서비스 이용 기록, 접속 로그, 접속 IP 주소</li>
              <li>문의 제출 시: 이메일 주소, 문의 내용</li>
              <li>쿠키 및 유사 기술을 통한 방문 통계 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">2. 개인정보 수집 목적</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>서비스 운영 및 안정적인 접속 환경 제공</li>
              <li>문의 접수 및 답변 처리</li>
              <li>서비스 개선을 위한 통계 분석</li>
              <li>법령상 의무 이행</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">3. 개인정보 보유 및 이용 기간</h2>
            <p>
              수집한 개인정보는 수집 목적이 달성되면 지체 없이 파기합니다.
              단, 관계 법령에 따라 보존할 의무가 있는 경우에는 해당 기간 동안 보관합니다.
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>전자상거래 기록: 5년 (전자상거래 소비자 보호법)</li>
              <li>접속 로그: 3개월 (통신비밀보호법)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">4. 개인정보 제3자 제공</h2>
            <p>
              {BRAND}는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
              다만, 법령의 규정에 따르거나 수사기관 등의 적법한 요청이 있는 경우는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">5. 쿠키(Cookie) 사용</h2>
            <p>
              {BRAND}는 서비스 개선을 위해 쿠키를 사용할 수 있습니다.
              브라우저 설정에서 쿠키 저장을 거부할 수 있으나, 일부 서비스 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">6. 이용자의 권리</h2>
            <p>이용자는 다음 권리를 행사할 수 있습니다.</p>
            <ul className="mt-3 list-disc list-inside space-y-1 ml-2">
              <li>본인 개인정보 열람 요청</li>
              <li>오류 정정 또는 삭제 요청</li>
              <li>처리 정지 요청</li>
            </ul>
            <p className="mt-3">권리 행사는 아래 이메일로 문의해 주세요.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. 개인정보 보호 책임자</h2>
            <div
              className="rounded-xl p-5 mt-3"
              style={{ background: "rgba(245,197,24,0.06)", border: "1px solid rgba(245,197,24,0.2)" }}
            >
              <p className="font-bold text-white mb-1">{BRAND} 개인정보 보호 담당</p>
              <p>이메일: <a href={`mailto:${EMAIL}`} style={{ color: ACCENT }}>{EMAIL}</a></p>
              <p>운영 사이트: <a href={DOMAIN} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>{DOMAIN}</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">8. 개인정보 처리방침 변경</h2>
            <p>
              이 개인정보 처리방침은 법령 변경 또는 서비스 정책 변경 시 개정될 수 있습니다.
              변경 사항은 본 페이지에 공지하며, 변경일로부터 효력이 발생합니다.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t text-xs" style={{ borderColor: "rgba(245,197,24,0.15)", color: "#555" }}>
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="flex gap-4 mt-3">
            <Link href="/" style={{ color: "#666" }}>홈</Link>
            <a href={`mailto:${EMAIL}`} style={{ color: "#666" }}>{EMAIL}</a>
          </div>
        </footer>
      </article>
    </main>
  );
}
