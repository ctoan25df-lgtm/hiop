"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES, SITE } from "@/lib/site-brand";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <Link href="/" className="brand-mark" aria-label={`${SITE.name} 홈`}>
          <span style={{ color: SITE.accent }}>하이</span>오피
        </Link>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {ROUTES.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-accent nav-cta">문의하기</Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="menu-button"
        >
          <span aria-hidden>{open ? "닫기" : "메뉴"}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="모바일 메뉴">
          {ROUTES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-accent mobile-contact">
            문의하기
          </Link>
        </nav>
      )}
    </header>
  );
}
