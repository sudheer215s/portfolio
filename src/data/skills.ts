export const SKILL_GROUPS = [
  {
    title: "Languages",
    tags: ["Python", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Backend",
    tags: ["FastAPI", "NestJS", "Node.js", "REST", "gRPC", "WebSocket"],
  },
  {
    title: "Data & messaging",
    tags: ["PostgreSQL", "Redis", "Kafka", "Elasticsearch"],
  },
  {
    title: "Infrastructure",
    tags: ["Docker", "Kubernetes", "Linux", "CI/CD", "Prometheus", "Grafana"],
  },
  {
    title: "LLM systems",
    tags: ["RAG", "LangGraph", "evals", "Langfuse", "OpenTelemetry"],
    note: "Tools in use. Evidence on this site is TranslateLive and ClauseNotebook Stage 1 — not a shipped LangGraph product.",
  },
] as const;
