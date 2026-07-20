export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item">
      <summary>
        <span>{q}</span>
        <span className="faq-arrow" aria-hidden>↓</span>
      </summary>
      <div>{a}</div>
    </details>
  );
}
