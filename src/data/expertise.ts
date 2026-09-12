export const EXPERTISE = [
  {
    title: "Production reliability",
    body: "HA Postgres, failover, query plans, alerting. A dropped lookup is a call that never connects.",
  },
  {
    title: "RAG with citations",
    body: "Provenance first. If a span cannot be named, the system should abstain — not paraphrase.",
  },
  {
    title: "Distributed writes",
    body: "Outbox, gRPC, fan-out, search. Practice the failure modes a monolith hides.",
  },
  {
    title: "LLM pipelines",
    body: "STT → model → TTS under a hard latency budget. Hygiene from day one: tests, logs, health checks.",
  },
  {
    title: "Operate after it ships",
    body: "Kubernetes, Linux, CI/CD, Prometheus/Grafana. Recovery time belongs in the design.",
  },
  {
    title: "Standards as a reading problem",
    body: "3GPP is nested clauses and tables. Public specs only. Internals stay off this site.",
  },
] as const;
