export const citationTokens = ["brief", "CV5", "repo"] as const;
export type CitationToken = (typeof citationTokens)[number];

export const site = {
  document: {
    id: "SUDHEER TS 00.001",
    version: "V1.0.0",
    versionDate: "2026-09",
    status: "RELEASED",
    stamp: "PERSONAL SPECIFICATION",
  },
  person: {
    name: "Sudheer Singh",
    role: "AI Systems Builder",
    roleLine: "AI Systems Builder — backend engineer for AI-powered products.",
    shortPhrase:
      "AI engineer with three years building high-availability backends for India's national telecom infrastructure.",
    location: "New Delhi, India",
    email: "singhsudheer215@gmail.com",
    github: "https://github.com/sudheer215s",
    linkedin: "https://linkedin.com/in/sudheer-singh-975889195",
  },
  clause1: {
    identity: "SUDHEER TS 00.001 · V1.0.0 (2026-09) · RELEASED",
    stamp: "PERSONAL SPECIFICATION",
    roleCompact: "AI Systems Builder",
    roleFull: "AI Systems Builder — backend engineer for AI-powered products.",
    employerCompact: "Scientist-B, C-DOT · New Delhi",
    employerFull:
      "Scientist-B / Backend Engineer, C-DOT (Centre for Development of Telematics)",
    location: "New Delhi, India",
    nowCompact: "Now: ClauseNotebook · in progress · Stage 1",
    nowFull:
      "Building ClauseNotebook — citation-grounded 3GPP standards copilot. Status: in progress. Ingestion (versioned JSON manifest, SHA-256, idempotent CLI) works today; retrieval is next.",
    nowGithub: "https://github.com/sudheer215s/ClauseNotebook",
    nowCaseStudy: "/work/clausenotebook",
  },
  employer: {
    name: "C-DOT",
    legalName: "Centre for Development of Telematics",
    ministry: "Ministry of Communications",
    titleCurrent: "Scientist-B / Backend Engineer",
    datesCurrent: "Jul 2024 – present",
    titlePrior: "Research Engineer",
    datesPrior: "Jul 2023 – Jun 2024",
  },
  education: {
    line: "B.Tech CSE, MANIT Bhopal, 2019–2023",
  },
  seo: {
    title: "Sudheer Singh — AI Systems Builder",
    description:
      "Backend engineer for AI-powered products. Three years on India’s national telecom infrastructure — 99.99% uptime, 40% faster lookups. Building citation-grounded RAG for 3GPP.",
  },
  availability:
    "Open to AI / LLM engineering roles that own production reliability.",
  confidentiality:
    "C-DOT production details on this site are limited to facts already on my public resume. I don’t publish internal architecture.",
} as const;

export const proofs = [
  {
    id: "uptime",
    value: "99.99%",
    qualifier: "uptime",
    detail:
      "PostgreSQL primary-replica cluster, streaming replication + auto-failover; sub-30s recovery; zero unplanned outages since launch",
    citations: ["brief", "CV5"] as const,
    surfaces: ["hero", "production"] as const,
  },
  {
    id: "query",
    value: "40%",
    qualifier: "faster",
    detail:
      "critical IMS/ENUM queries under peak load (query-plan analysis + index redesign)",
    citations: ["brief", "CV5"] as const,
    surfaces: ["hero", "production"] as const,
  },
  {
    id: "lookups",
    value: "Millions / day",
    qualifier: "lookups",
    detail: "national IMS/ENUM subscriber lookups, sub-second",
    citations: ["brief", "CV5"] as const,
    surfaces: ["hero", "production"] as const,
  },
  {
    id: "translate-e2e",
    value: "<3s",
    qualifier: "e2e",
    detail: "TranslateLive STT → GPT translation → TTS, end-to-end",
    citations: ["brief", "CV5"] as const,
    surfaces: ["hero", "translatelive"] as const,
  },
  {
    id: "translate-sessions",
    value: "10+",
    qualifier: "sessions",
    detail:
      "simultaneous WebSocket sessions without dropped connections (load tests)",
    citations: ["CV5"] as const,
    surfaces: ["translatelive"] as const,
  },
] as const;

export const productionFacts = {
  framing:
    "He owns backend for India’s national IMS/ENUM call-routing service. A dropped lookup is a call that never connects. This block is credibility for the AI work, not the headline.",
  transfer:
    "Retries, backpressure, tail latency, and instrumentation are the same problems whether the thing in the middle is a database or a model.",
  nssaafDisplay:
    "NSSAAF 5G-core service interfaces from 3GPP TS 23.501 (stage 2) and the NSSAAF stage-3 service API.",
  nssaafFootnote:
    "CV5 lists TS 29.509 alongside TS 23.501. TS 29.509 specifies AUSF. NSSAAF stage-3 may be TS 29.526; I will not guess. This site does not print 29.509 as NSSAAF stage-3.",
  bullets: [
    {
      text: "National IMS/ENUM call-routing backend: millions of subscriber lookups/day, sub-second.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "PostgreSQL primary-replica cluster he rebuilt: streaming replication + auto-failover, 99.99% uptime, sub-30s recovery, zero unplanned outages since launch.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "40% faster critical IMS/ENUM queries under peak load via query-plan analysis + index redesign.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "Monitoring/alerting reduced detection from user reports to minutes.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "Number Portability Server on SS7/SIGTRAN.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "First-submission compliance, zero non-conformances.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "Deployment automation (Python + Bash) cut manual effort 70%.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "Closed 3 auth gaps from an internal security audit.",
      citations: ["brief", "CV5"] as const,
    },
    {
      text: "Research-engineer year (Jul 2023 – Jun 2024): Ubuntu Linux + PostgreSQL for live telecom services, 99.9% availability throughout the year.",
      citations: ["CV5"] as const,
      dated: "2023–24",
    },
  ],
} as const;

export const seeking = {
  lookingFor:
    "An AI / LLM engineering role building LLM-powered products end to end and owning the production layer — retrieval and RAG, agentic workflows, evals, tracing. Drawn to developer tools, AI infrastructure, and applied AI over technical corpora (including telecom). Wants shorter feedback loops than a government R&D lab: shipping in weeks.",
  lookingForShort:
    "AI / LLM roles that own production: RAG, agents, evals, tracing.",
  lookingChips: ["RAG", "Agents", "Evals", "Tracing", "Dev tools"] as const,
  avoiding:
    "Prompt-tweaking by feel with no evals or traces; thin wrapper work; AI that stops at the prototype; teams where shipping speed consistently wins over testing and reliability.",
  avoidingShort:
    "Prompt-tweaking by feel. Thin wrappers. Prototypes that never ship. Speed over tests.",
  avoidingChips: [
    "No evals",
    "Thin wrappers",
    "Prototype-only",
    "Speed over tests",
  ] as const,
} as const;

export const stack = {
  languages: ["Python", "TypeScript", "SQL", "Bash"],
  backend: ["FastAPI", "NestJS", "Node.js"],
  data: ["PostgreSQL", "Redis", "Elasticsearch", "Kafka"],
  infra: ["Docker", "Kubernetes", "Linux", "CI/CD", "Prometheus/Grafana"],
  llm: ["LangGraph/LangChain", "RAG", "evals", "Langfuse", "OpenTelemetry"],
  llmCaveat:
    "Listed as tools in use. This site does not claim a shipped LangGraph/Langfuse product. Evidence is TranslateLive (GPT in a pipeline) and ClauseNotebook (ingestion).",
} as const;
