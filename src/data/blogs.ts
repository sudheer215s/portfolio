export interface BlogPost {
  /** Title shown in the archive list. */
  title: string;
  /** Publish date as YYYY-MM-DD. Sets the year group and the sort order. */
  date: string;
  /** Primary category. Each distinct value becomes a filter pill on /blogs. */
  category: string;
  /** Topic tags, rendered as #tag under the title. */
  tags: string[];
  /** A short overview shown under the title. Leave it out to show only the title. */
  summary?: string;
  /** Platforms the post is published on. Each adds a "Read on <name>" link under the overview. */
  sources?: { name: string; href: string }[];
  /** "guide" marks a hands-on build guide: the overview shows as a TL;DR and `steps` as a numbered outline. */
  kind?: "guide";
  /** A build guide's steps, in order. */
  steps?: string[];
  /**
   * The post's main URL. An href marks the entry as a real post rather than a
   * placeholder, which site search relies on.
   */
  href?: string;
}

// Notes that live on this site. Dates are the note dates, not an external publication.
export const BLOGS: BlogPost[] = [
  {
    title: "Citations get checked, not trusted",
    date: "2026-03-01",
    category: "AI Systems",
    tags: ["rag", "3gpp", "citations"],
    summary:
      "ClauseNotebook starts at the document, not the chat box. A citation has to name a SHA-256 and a span. Stage 1 does not claim retrieval quality.",
    href: "/writing/citations-get-checked-not-trusted",
  },
  {
    title: "Abstention is the default path",
    date: "2026-03-01",
    category: "AI Systems",
    tags: ["rag", "abstention"],
    summary:
      "Until retrieval can say it does not have a clause, there is no assistant UI. A fluent guess is the failure mode.",
    href: "/writing/abstention-is-the-default-path",
  },
  {
    title: "Uptime is a personality",
    date: "2024-12-01",
    category: "Backend Engineering",
    tags: ["postgresql", "ha"],
    summary:
      "A dropped IMS/ENUM lookup is a call that never connects. 99.99% uptime on the Postgres cluster, with sub-30s recovery.",
    href: "/writing/uptime-is-a-personality",
  },
  {
    title: "Idempotency at the schema",
    date: "2025-11-01",
    category: "Distributed Systems",
    tags: ["kafka", "outbox"],
    summary:
      "Registration that is safe to repeat, and a transactional outbox so the database and the log do not disagree.",
    href: "/writing/idempotency-at-the-schema",
  },

  // Empty slots. Add a title, date, category, tags, and href when a post is ready.
  { title: "Placeholder Post 09", date: "2025-12-09", category: "Databases", tags: ["databases", "indexing"] },
  { title: "Placeholder Post 10", date: "2025-11-04", category: "Career Growth", tags: ["career-growth"] },
  { title: "Placeholder Post 11", date: "2025-10-01", category: "Distributed Systems", tags: ["distributed-systems", "kafka"] },
  { title: "Placeholder Post 12", date: "2025-08-26", category: "AI Systems", tags: ["ai-systems", "rag"] },
  { title: "Placeholder Post 13", date: "2025-07-15", category: "Backend Engineering", tags: ["backend"] },
  { title: "Placeholder Post 14", date: "2025-05-27", category: "Databases", tags: ["databases", "postgres"] },
  { title: "Placeholder Post 15", date: "2025-04-08", category: "Career Growth", tags: ["career-growth"] },
  { title: "Placeholder Post 16", date: "2025-02-18", category: "Distributed Systems", tags: ["distributed-systems", "consistency"] },
  { title: "Placeholder Post 17", date: "2024-12-03", category: "AI Systems", tags: ["ai-systems", "llm"] },
  { title: "Placeholder Post 18", date: "2024-10-15", category: "Backend Engineering", tags: ["backend", "microservices"] },
  { title: "Placeholder Post 19", date: "2024-08-06", category: "Databases", tags: ["databases", "indexing"] },
  { title: "Placeholder Post 20", date: "2024-06-11", category: "Career Growth", tags: ["career-growth"] },
  { title: "Placeholder Post 21", date: "2024-04-02", category: "Distributed Systems", tags: ["distributed-systems", "kafka"] },
  { title: "Placeholder Post 22", date: "2024-01-23", category: "AI Systems", tags: ["ai-systems", "rag"] },
];
