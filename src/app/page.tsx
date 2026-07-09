import SiteHeader from "@/components/SiteHeader";
import FaqItem from "@/components/FaqItem";
import ContactForm from "@/components/ContactForm";

const ACCESS_URL = "https://bamdalin.com";
const EMAIL = "help@hiop.com";
const RED = "#f5c518";
const BRAND = "하이오피";
const SHORT = "하이오피";

const FEATURES = [
  { title: "최신주소 바로 연결", desc: "하이오피 검색 사용자가 헤매지 않도록 주요 버튼을 현재 접속 가능한 최신 경로로 연결합니다." },
  { title: "지역 키워드 최적화", desc: "부산·울산·경남 생활권 키워드를 중심으로 구성해 부산·울산·경남 정보를 찾는 사용자의 검색 의도에 맞췄습니다." },
  { title: "주소 변경 안내", desc: "하이오피 주소와 최신주소, 바로가기 관련 검색어를 자연스럽게 반영해 접속 안내 목적을 분명히 했습니다." },
  { title: "모바일 우선 구성", desc: "가벼운 단일 페이지 랜딩 구조로 모바일에서도 빠르게 열리고 즉시 최신주소로 이동할 수 있습니다." },
  { title: "사칭 주소 예방", desc: "도메인 변경과 우회 접속 문구를 정리해 사용자가 임의 주소보다 안내 페이지를 먼저 확인하도록 유도합니다." },
  { title: "콘텐츠형 유입", desc: "FAQ와 블로그 카드, 도메인 패턴 안내를 통해 단순 링크 페이지가 아닌 키워드 콘텐츠형 안내 사이트로 구성했습니다." },
];

const FAQ = [
  { q: "Q1. 하이오피 공식 주소와 최신주소는 어디서 확인하나요?", a: "하이오피 주소는 접속 환경에 따라 바뀔 수 있습니다. 이 안내 페이지의 바로가기 버튼은 현재 접속 가능한 최신 경로로 연결되므로 즐겨찾기해 두면 빠르게 이동할 수 있습니다." },
  { q: "Q2. 하이오피 접속이 안 될 때는 어떻게 하나요?", a: "기존 주소가 열리지 않는다면 브라우저 캐시를 지우거나 이 안내 페이지의 최신주소 바로가기를 이용하세요. 현재 운영 중인 안내 경로로 이동할 수 있습니다." },
  { q: "Q3. 하이오피 도메인이 자주 바뀌는 이유는 무엇인가요?", a: "하이오피 관련 도메인은 접속 제한이나 운영 환경에 따라 변경될 수 있습니다. 이 페이지는 변경된 주소를 찾는 사용자가 빠르게 최신 경로를 확인하도록 만든 안내 사이트입니다." },
  { q: "Q4. 부산·울산·경남 지역 정보는 어떻게 확인하나요?", a: "최신주소로 이동한 뒤 부산, 울산, 창원, 김해, 양산 등 주요 지역별 정보를 확인할 수 있습니다." },
];

const POSTS = [
  "하이오피 최신주소 확인 전 꼭 봐야 할 접속 안내",
  "하이오피 주소 변경 패턴과 안전한 바로가기 정리",
  "부산 하이오피 이용자가 많이 찾는 지역 키워드",
  "하이오피에서 지역 정보를 빠르게 찾는 법",
  "하이오피 접속 안될 때 확인할 우회 안내",
  "하이오피 공식 안내 페이지를 즐겨찾기해야 하는 이유",
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
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
            <div className="mx-auto mb-6 h-1 w-20 rounded" style={{ background: RED }} />
            <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
              하이오피 주소 <span style={{ color: RED }}>안내</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "#b0b0b0" }}>
              하이오피 최신주소와 지역별 유흥 정보를 빠르게 안내합니다.
              <br className="hidden sm:block" />
              부산·울산·경남 실시간 지역 정보를 빠르게 확인하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-red text-base px-9 py-3">
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
              <span style={{ color: RED }}>북마크</span>
              <span style={{ color: "#b0b0b0" }}>이 페이지를 저장하면 {BRAND} 관련 최신 안내를 빠르게 확인할 수 있습니다</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "#070700" }}>
          <div className="max-w-3xl mx-auto text-center">
            <SectionBadge>ABOUT</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              {BRAND} <span style={{ color: RED }}>최신주소 안내 사이트</span>
            </h2>
            <h3 className="text-lg font-bold mb-6" style={{ color: "#cfcfcf" }}>
              부산·울산·경남 지역 정보 유입을 위한 키워드 가이드
            </h3>
            <p className="text-base leading-loose" style={{ color: "#999" }}>
              하이오피는 부산·울산·경남 전역의 유흥명소와 지역 업소 정보를 빠르게 찾는 사용자를 위한 최신 주소 안내형 사이트입니다. 해운대·서면·연산동·울산·창원·김해·양산 등 주요 지역을 찾는 사용자가
              복잡한 주소 변경에 헤매지 않고 최신 경로로 이동하도록 구성했습니다.
            </p>
          </div>
        </section>

        <section id="features" className="py-20 px-5" style={{ background: "#080800" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <SectionBadge>SERVICE</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-black">
                {BRAND} <span style={{ color: RED }}>사이트 특징</span>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-7 transition-transform hover:-translate-y-1"
                  style={{ background: "linear-gradient(135deg, #131000, #1e1800)", border: "1px solid rgba(245,197,24,0.15)" }}
                >
                  <div className="mb-3 inline-block h-1 w-10 rounded" style={{ background: RED }} />
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
                자주 묻는 <span style={{ color: RED }}>질문</span>
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
                {BRAND} <span style={{ color: RED }}>키워드 안내</span>
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
                  <span className="text-xs font-bold" style={{ color: RED }}>POST {String(i + 1).padStart(2, "0")}</span>
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
              {BRAND} <span style={{ color: RED }}>도메인 패턴 안내</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#999" }}>
              {BRAND} 관련 도메인은 차단·접속 이슈로 변경될 수 있습니다.
              예시는 <b style={{ color: "#fff" }}>hiop37 → hiop38 → hiop39</b> 처럼 숫자가 올라가는 방식이며,
              가장 빠른 확인은 아래 최신주소 바로가기를 이용하는 것입니다.
            </p>
            <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-red text-base px-8 py-3">
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
            <span style={{ color: RED }}>{BRAND.slice(0, 2)}</span>
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
