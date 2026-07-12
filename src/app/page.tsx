import SiteHeader from "@/components/SiteHeader";
import FaqItem from "@/components/FaqItem";
import ContactForm from "@/components/ContactForm";

const ACCESS_URL = "https://bamdalin.com";
const EMAIL = "help@noranghiop.com";
const ACCENT = "#f5c518";
const BRAND = "하이오피";
const SHORT = "하이오피";

const FEATURES = [
  { title: "하이오피 실시간 주소 업데이트", desc: "하이오피(hiop) 도메인이 변경되거나 새로운 주소가 생길 때마다 이 페이지의 바로가기 버튼을 즉시 갱신합니다. 별도의 검색 없이 한 번에 최신 하이오피 주소로 이동할 수 있습니다." },
  { title: "부산·울산·경남 전 지역 커버", desc: "하이오피는 부산 해운대·서면·연산동, 울산 남구·중구, 창원·김해·양산·거제까지 경남 전역의 지역별 업소 정보를 체계적으로 구분합니다. 원하는 지역의 하이오피 정보를 바로 확인할 수 있습니다." },
  { title: "안전한 하이오피 접속 경로", desc: "하이오피를 사칭하는 가짜 주소와 피싱 사이트를 구분하는 방법을 안내합니다. 이 안내 페이지를 즐겨찾기해 두면 도메인이 바뀌어도 항상 진짜 하이오피 경로로 연결됩니다." },
  { title: "모바일에서 즉시 이용 가능", desc: "스마트폰에서 하이오피 주소를 검색하면 이 안내 페이지가 가장 빠르게 열립니다. 복잡한 우회 절차 없이 버튼 한 번으로 최신 하이오피에 접속할 수 있습니다." },
  { title: "하이오피 도메인 패턴 정리", desc: "하이오피 도메인은 hiop37, hiop38, hiop39처럼 숫자가 순차적으로 올라가는 패턴으로 변경됩니다. 이 패턴을 알아두면 새 도메인을 빠르게 예측하고 접속할 수 있습니다." },
  { title: "하이오피 차단 우회 안내", desc: "일부 통신사·기관 네트워크에서 하이오피 접속이 차단될 수 있습니다. DNS 변경, 브라우저 설정 등 합법적인 방법으로 하이오피에 안전하게 접속하는 방법을 안내합니다." },
];

const FAQ = [
  { q: "Q1. 하이오피 공식 주소와 최신주소는 어디서 확인하나요?", a: "하이오피(hiop) 공식 최신주소는 이 안내 페이지의 '바로가기' 버튼에 항상 현재 운영 중인 주소가 연결됩니다. 이 페이지를 즐겨찾기(북마크)에 저장해두면 하이오피 주소가 바뀌어도 걱정 없이 빠르게 이동할 수 있습니다." },
  { q: "Q2. 하이오피 접속이 안 될 때는 어떻게 하나요?", a: "하이오피가 열리지 않는다면, ① 이 안내 페이지의 최신주소 바로가기 버튼을 클릭하거나, ② 브라우저 캐시와 쿠키를 삭제한 후 재시도하거나, ③ 모바일 데이터로 전환(와이파이 차단 우회)해보세요. 모두 안 된다면 하이오피 도메인이 변경된 경우입니다. 이 페이지에서 최신 경로를 바로 확인할 수 있습니다." },
  { q: "Q3. 하이오피 주소가 자주 바뀌는 이유는 무엇인가요?", a: "하이오피는 접속 제한 및 도메인 차단 이슈로 인해 주기적으로 새 도메인(hiop37, hiop38, hiop39 등)으로 이전합니다. 이는 사용자들이 안정적으로 하이오피에 접속할 수 있도록 하기 위한 조치이며, 이 안내 페이지는 항상 현재 운영 중인 최신 주소로 연결됩니다." },
  { q: "Q4. 하이오피에서 부산·울산·경남 지역 정보는 어떻게 찾나요?", a: "하이오피 접속 후 상단 지역 필터에서 부산, 울산, 창원, 김해, 양산, 거제 등 원하는 지역을 선택하면 해당 지역의 업소 정보를 바로 확인할 수 있습니다. 해운대, 서면, 연산동 등 세부 지역 검색도 지원합니다." },
];

const POSTS = [
  "하이오피(hiop) 최신주소와 새주소 한눈에 보기",
  "하이오피 도메인 패턴 — hiop37·hiop38·hiop39 변경 규칙",
  "부산 하이오피 해운대·서면 지역 업소 정보 찾기",
  "하이오피 접속 차단 시 빠른 우회 접속 방법",
  "하이오피 vs 유사 사이트 — 진짜 주소 구별법",
  "하이오피 공식 안내 페이지를 즐겨찾기해야 하는 이유",
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q.replace(/^Q\d+\.\s*/, ""),
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <SiteHeader />

      <main id="top">
        <section
          className="relative flex flex-col items-center text-center px-5 py-28"
          style={{ background: "linear-gradient(180deg, #181200 0%, #080800 70%, #080800 100%)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(245,197,24,0.20) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-3xl">
            <div className="mx-auto mb-6 h-1 w-20 rounded" style={{ background: ACCENT }} />
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
              하이오피 주소 <span style={{ color: ACCENT }}>바로가기</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "#b0b0b0" }}>
              하이오피(hiop) 공식 최신주소 안내입니다. 하이오피 새주소·바로가기를 실시간으로 확인하고
              <br className="hidden sm:block" />
              부산·울산·경남 전역 업소 정보에 빠르게 접속하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-accent text-base px-9 py-3">
                최신주소 바로가기
              </a>
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-9 py-3">
                {SHORT} 바로가기
              </a>
            </div>

            <div
              className="mt-9 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm"
              style={{ background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.3)" }}
            >
              <span style={{ color: ACCENT }}>북마크</span>
              <span style={{ color: "#b0b0b0" }}>이 페이지를 저장하면 {BRAND} 관련 최신 안내를 빠르게 확인할 수 있습니다</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "#070700" }}>
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge>ABOUT</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {BRAND} <span style={{ color: ACCENT }}>최신주소 안내 사이트</span>
            </h2>
            <h3 className="text-lg font-bold mb-6" style={{ color: "#cfcfcf" }}>
              하이오피 주소 변경 시에도 항상 최신 경로로 안내
            </h3>
            <p className="text-base leading-loose" style={{ color: "#999" }}>
              하이오피(hiop)는 부산·울산·경남 전역의 업소 정보를 제공하는 플랫폼으로, 도메인이 주기적으로 변경됩니다.
              이 안내 페이지는 하이오피 주소·하이오피 새주소·하이오피 바로가기를 검색하는 이용자가
              복잡한 우회 과정 없이 <strong style={{ color: "#fff" }}>최신 하이오피 주소</strong>로 즉시 이동하도록 구성되었습니다.
              해운대·서면·연산동·울산·창원·김해·양산 등 경남 전역 정보를 빠르게 확인하세요.
            </p>
          </div>
        </section>

        <section id="features" className="py-20 px-5" style={{ background: "#080800" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge>SERVICE</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-black">
                {BRAND} <span style={{ color: ACCENT }}>사이트 특징</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-7 transition-transform hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #131000, #1e1800)", border: "1px solid rgba(245,197,24,0.15)" }}
                >
                  <div className="mb-3 inline-block h-1 w-10 rounded" style={{ background: ACCENT }} />
                  <h3 className="text-lg font-black mb-3">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#999" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "#070700" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge>FAQ</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-black">
                자주 묻는 <span style={{ color: ACCENT }}>질문</span>
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "#080800" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge>BLOG</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-black">
                {BRAND} <span style={{ color: ACCENT }}>키워드 안내</span>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {POSTS.map((title, i) => (
                <a
                  key={title}
                  href={ACCESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl p-6 transition-colors"
                  style={{ background: "#131000", border: "1px solid rgba(245,197,24,0.15)" }}
                >
                  <span className="text-xs font-bold" style={{ color: ACCENT }}>POST {String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-bold leading-relaxed">{title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="domain"
          className="py-20 px-5"
          style={{ background: "linear-gradient(135deg, #0d0b00 0%, #181200 50%, #0d0b00 100%)", borderTop: "1px solid rgba(245,197,24,0.15)", borderBottom: "1px solid rgba(245,197,24,0.15)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">LINK</div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              {BRAND} <span style={{ color: ACCENT }}>도메인 패턴 안내</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#999" }}>
              하이오피 도메인은 접속 차단 시 <b style={{ color: "#fff" }}>hiop37 → hiop38 → hiop39</b> 형태로
              순차적으로 변경됩니다. 새 주소가 생길 때마다 이 안내 페이지가 자동으로 최신 경로를 반영하므로,
              하이오피 바로가기를 매번 검색하지 않아도 됩니다. 지금 즐겨찾기에 추가해 두세요.
            </p>
            <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-accent text-base px-8 py-3">
              최신주소로 이동 →
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 px-5" style={{ background: "#0d0b00", borderTop: "1px solid rgba(245,197,24,0.15)" }}>
          <div className="max-w-xl mx-auto text-center">
            <SectionBadge>CONTACT</SectionBadge>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">문의하기</h2>
            <p className="text-sm mb-8" style={{ color: "#888" }}>
              제휴·키워드·주소 오류 신고는 아래로 남겨 주세요.
            </p>
            <ContactForm email={EMAIL} />
          </div>
        </section>
      </main>

      <footer className="py-10 px-5" style={{ background: "#050400", borderTop: "1px solid rgba(245,197,24,0.2)" }}>
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-1 text-xl font-black">
            <span style={{ color: ACCENT }}>{BRAND.slice(0, 2)}</span>
            <span>{BRAND.slice(2) || BRAND}</span>
          </div>
          <p className="text-xs max-w-md leading-relaxed" style={{ color: "#666" }}>
            {BRAND}는 {BRAND} 최신주소와 관련 키워드를 안내하는 가이드 사이트입니다.
            실제 정보는 연결된 최신 경로에서 확인할 수 있습니다.
          </p>
          <a href={`mailto:${EMAIL}`} className="text-xs transition-colors hover:text-[#f5c518]" style={{ color: "#555" }}>
            {EMAIL}
          </a>
          <div className="flex gap-4 text-xs" style={{ color: "#555" }}>
            <a href="/privacy" className="hover:text-[#f5c518]">개인정보 처리방침</a>
            <a href="/terms" className="hover:text-[#f5c518]">접근성 표시 정보</a>
          </div>
          <p className="text-xs" style={{ color: "#333" }}>
            © 2024–{new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-block rounded-full px-3 py-1 text-xs font-bold mb-4"
      style={{ background: "rgba(245,197,24,0.15)", color: "#f5c518", border: "1px solid rgba(245,197,24,0.3)" }}
    >
      {children}
    </div>
  );
}
