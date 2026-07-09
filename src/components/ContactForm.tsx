"use client";

import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [addr, setAddr] = useState("");
  const [msg, setMsg]   = useState("");
  const [sub, setSub]   = useState(false);
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  const inputCls = "w-full rounded-lg px-4 py-3 text-sm focus:outline-none";
  const inputStyle = {
    background: "#181200",
    border: "1px solid rgba(245,197,24,0.25)",
    color: "#fff",
  };

  if (done) {
    return (
      <div className="rounded-xl py-10 text-center" style={{ background: "#181200", border: "1px solid rgba(245,197,24,0.3)" }}>
        <p className="text-2xl mb-2">✅</p>
        <p className="font-bold">문의가 접수되었습니다.</p>
        <p className="text-sm mt-1" style={{ color: "#888" }}>빠른 시일 내에 답변 드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3 text-left">
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#888" }}>Email *</label>
        <input
          type="email"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
          required
          placeholder={email}
          className={inputCls}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1" style={{ color: "#888" }}>문의 내용 *</label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          required
          rows={4}
          placeholder="문의하실 내용을 입력해 주세요."
          className={inputCls}
          style={inputStyle}
        />
      </div>
      <label className="flex items-center gap-2 text-xs cursor-pointer" style={{ color: "#888" }}>
        <input type="checkbox" checked={sub} onChange={(e) => setSub(e.target.checked)} className="accent-[#f5c518]" />
        Yes, subscribe me to your newsletter.
      </label>
      <button type="submit" className="btn-accent w-full py-3">Subscribe</button>
    </form>
  );
}
