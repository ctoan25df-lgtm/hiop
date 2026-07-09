"use client";

import { useState } from "react";
import Link from "next/link";

const ACCESS_URL = "https://bamdalin.com";
const BRAND = "하이오피";

const NAV = [
  { label: "메인", href: "/#top" },
  { label: "서비스", href: "/#features" },
  { label: "주소안내", href: "/#domain" },
  { label: "문의", href: "/#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(8,8,0,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(245,197,24,0.2)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label={`${BRAND} 홈`}>
          <span className="text-xl font-black tracking-tight" style={{ color: "#f5c518" }}>
            {BRAND.slice(0, 2)}
          </span>
          <span className="text-xl font-black text-white">{BRAND.slice(2) || BRAND}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:text-[#f5c518]"
            >
              {item.label}
            </Link>
          ))}
          <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-red ml-3 !py-2 !px-4 text-sm">
            최신주소 바로가기 →
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col gap-1.5 p-2"
        >
          <span className="block h-0.5 w-6 transition-all" style={{ background: "#f5c518", transform: open ? "rotate(45deg) translate(4px,4px)" : "" }} />
          <span className="block h-0.5 w-6 transition-all" style={{ background: "#f5c518", opacity: open ? 0 : 1 }} />
          <span className="block h-0.5 w-6 transition-all" style={{ background: "#f5c518", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "" }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-5 py-4 space-y-1" style={{ borderColor: "rgba(245,197,24,0.2)", background: "#080800" }}>
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold text-white border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              {item.label}
            </Link>
          ))}
          <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="btn-red mt-3 w-full text-sm">
            최신주소 바로가기 →
          </a>
        </div>
      )}
    </header>
  );
}
