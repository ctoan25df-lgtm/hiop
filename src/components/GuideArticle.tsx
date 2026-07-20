import Link from "next/link";

type GuideArticleProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  children: React.ReactNode;
};

export default function GuideArticle({
  eyebrow,
  title,
  description,
  updated,
  children,
}: GuideArticleProps) {
  return (
    <main id="main-content" className="article-main">
      <article className="article-shell">
        <nav aria-label="현재 위치" className="breadcrumb">
          <Link href="/">홈</Link>
          <span aria-hidden>/</span>
          <span>가이드</span>
        </nav>
        <header className="article-header">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="article-lead">{description}</p>
          <p className="article-updated">내용 검토일: {updated}</p>
        </header>
        <div className="article-body">{children}</div>
      </article>
    </main>
  );
}
