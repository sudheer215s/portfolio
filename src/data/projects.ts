import { BookMarked, AudioLines, Network, type LucideIcon } from "lucide-react";
import { type Project } from "@/types";

export const CATEGORIES = ["All", "AI Systems", "Backend Systems"] as const;

export const PROJECTS: Project[] = [
  {
    slug: "clausenotebook",
    title: "ClauseNotebook",
    category: "AI Systems",
    tag: "RAG / 3GPP",
    description:
      "Citation-grounded 3GPP standards copilot. Provenance first: versioned JSON manifest, SHA-256, idempotent CLI, PyMuPDF4LLM. Ingestion works today; retrieval, inline citations, and abstention are next. Public 3GPP PDFs only — no C-DOT data.",
    tech: ["Python", "CLI", "JSON", "SHA-256", "PyMuPDF4LLM"],
    year: "2026",
    annotation: "In progress · Stage 1",
    href: "https://github.com/sudheer215s/ClauseNotebook",
    githubUrl: "https://github.com/sudheer215s/ClauseNotebook",
    icon: BookMarked,
    stat: { label: "Stage", value: "1" },
    featured: true,
    poster: {
      kicker: "Provenance-first ingestion",
      mark: "CN",
      line: "cite(sha) || abstain()",
    },
  },
  {
    slug: "translatelive",
    title: "TranslateLive",
    category: "AI Systems",
    tag: "Voice pipeline",
    description:
      "Real-time voice translation under a hard latency budget. Deepgram STT → GPT translation → TTS, under 3s end-to-end. FastAPI, WebSocket, Redis session state, 10+ concurrent sessions on Kubernetes. Shipped personal — no live demo URL.",
    tech: ["Python", "FastAPI", "WebSocket", "Redis", "Kubernetes"],
    year: "2025",
    annotation: "Released",
    href: "https://github.com/sudheer215s/TranslateLive",
    githubUrl: "https://github.com/sudheer215s/TranslateLive",
    icon: AudioLines,
    stat: { label: "e2e", value: "<3s" },
    featured: true,
    poster: {
      kicker: "Speech · translate · speak",
      mark: "TL",
      line: "budget < 3000ms",
    },
  },
  {
    slug: "distributed-social",
    title: "Distributed Social Backend",
    category: "Backend Systems",
    tag: "Microservices",
    description:
      "NestJS monorepo with five domain services — User, Post, Graph, Notification, Search — over gRPC. Kafka transactional outbox, Redis fan-out timelines, Elasticsearch, Kubernetes, tracing. Personal systems exercise. No public repository.",
    tech: ["NestJS", "gRPC", "Kafka", "Redis", "PostgreSQL"],
    year: "2025",
    annotation: "Architecture",
    href: "/#work",
    icon: Network,
    stat: { label: "services", value: "5" },
    featured: true,
    poster: {
      kicker: "Outbox · fan-out · search",
      mark: "DS",
      line: "no dual-write",
    },
  },
];

export type { LucideIcon };
