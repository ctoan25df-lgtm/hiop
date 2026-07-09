"use client";

export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="group rounded-xl overflow-hidden"
      style={{ background: "#120000", border: "1px solid rgba(223,49,49,0.2)" }}
    >
      <summary className="flex items-center justify-between gap-4 px-6 py-4 font-bold text-sm cursor-pointer select-none">
        <span>{q}</span>
        <span className="faq-arrow flex-shrink-0 text-lg" style={{ color: "#df3131" }}>▾</span>
      </summary>
      <div
        className="px-6 pb-5 pt-1 text-sm leading-relaxed"
        style={{ color: "#999", borderTop: "1px solid rgba(223,49,49,0.1)" }}
      >
        {a}
      </div>
    </details>
  );
}
