"use client";

import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [replyTo, setReplyTo] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("[하이오피 안내] 기록 정정·안전 제보");
    const body = encodeURIComponent(`회신 이메일: ${replyTo}\n\n문의 내용:\n${message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div>
        <label htmlFor="contact-email">회신받을 이메일</label>
        <input
          id="contact-email"
          type="email"
          value={replyTo}
          onChange={(e) => setReplyTo(e.target.value)}
          required
          autoComplete="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message">문의 내용</label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          placeholder="정정할 페이지와 근거 또는 안전 문제를 구체적으로 적어 주세요."
        />
      </div>
      <p className="form-help">
        전송 버튼을 누르면 기본 이메일 앱이 열립니다. 이 웹사이트는 입력 내용을 서버에 저장하지 않습니다.
      </p>
      <button type="submit" className="btn-accent">이메일로 문의 보내기</button>
    </form>
  );
}
