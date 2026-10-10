export const NOTES = [
  {
    index: "01",
    cat: "Retrieval",
    date: "2026",
    title: "Provenance before the chat box",
    summary:
      "A confident paraphrase with no citation is a liability in 3GPP work — someone will build against it. ClauseNotebook starts at ingestion: hashed PDFs, idempotent registration, explicit states. Retrieval comes after the document is a thing you can point at.",
    expanded:
      "Generic RAG assumes a blob of prose. These specs nest clause numbers, hide requirements in tables, and go silent-wrong across releases. Stage 1 is unglamorous on purpose: a versioned JSON manifest, SHA-256, atomic writes, PyMuPDF4LLM conversion, registered → converted. If a citation cannot name a hash and a span, it does not belong in an answer.",
    meta: "ClauseNotebook · 3GPP · ingestion",
  },
  {
    index: "02",
    cat: "Reliability",
    date: "2026",
    title: "Abstention is a feature",
    summary:
      "Until retrieval can say “I don’t have a clause that says that,” there is no assistant UI. Fluency without a refuse path is the failure mode, not the product.",
    expanded:
      "The release gate I will not skip is citation quality, not chat polish: did the span exist, was the version right, did we refuse when we should have. That is the same instinct as treating an uncited 5G interface as unverified at work. Evals belong in the spec, not in a post-incident review.",
    meta: "RAG · evals · product taste",
  },
  {
    index: "03",
    cat: "Operations",
    date: "2024",
    title: "Failover is a product personality",
    summary:
      "A dropped IMS/ENUM lookup is a call that never connects. 99.99% on the Postgres cluster is not a vanity number — it is the difference between a national routing service and a pager at 2 a.m.",
    expanded:
      "Streaming replication, auto-failover, sub-30s recovery, zero unplanned outages since launch. Query-plan work that made critical lookups 40% faster under peak. Monitoring that moved detection from user reports to minutes. Retries, backpressure, and tail latency are the same problems whether the thing in the middle is a database or a model.",
    meta: "C-DOT · PostgreSQL · HA",
  },
  {
    index: "04",
    cat: "Systems",
    date: "2025",
    title: "Dual-write is the bug",
    summary:
      "A social graph plus feed plus notifications cannot honestly live in one process if the point is to practice distributed-write failure. The outbox exists so the database and Kafka do not disagree.",
    expanded:
      "Five NestJS services over gRPC, Kafka transactional outbox, Redis fan-out, Elasticsearch, tracing. Changing what an event means is harder than changing a synchronous API — the feedback loop is slower and the blast radius larger. Schema as contract, not as a side effect you discover by grepping logs.",
    meta: "NestJS · Kafka · outbox",
  },
];
