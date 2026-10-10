import { AudioLines, BookMarked, Network } from "lucide-react";

import { type Project } from "@/types";

export const CATEGORIES = ["All", "AI Systems", "Backend Systems"] as const;

export const PROJECTS: Project[] = [
  {
    slug: "clausenotebook",
    title: "ClauseNotebook",
    category: "AI Systems",
    tag: "RAG / 3GPP",
    description:
      "Citation-grounded 3GPP standards copilot. Provenance first: versioned JSON manifest, SHA-256, idempotent CLI, PyMuPDF4LLM. Ingestion works today; retrieval and abstention are next. Public 3GPP PDFs only.",
    tech: ["Python", "CLI", "JSON", "SHA-256", "PyMuPDF4LLM"],
    year: "2026",
    annotation: "In progress · Stage 1",
    href: "/projects/clausenotebook",
    image: "/projects/clausenotebook.svg",
    githubUrl: "https://github.com/sudheer215s/ClauseNotebook",
    icon: BookMarked,
    stat: { label: "Stage", value: "1" },
    featured: true,
  },
  {
    slug: "translatelive",
    title: "TranslateLive",
    category: "AI Systems",
    tag: "Voice pipeline",
    description:
      "Real-time voice translation under a hard latency budget. Deepgram STT, GPT translation, and TTS, under 3s end-to-end. FastAPI, WebSocket, Redis, 10+ concurrent sessions on Kubernetes.",
    tech: ["Python", "FastAPI", "WebSocket", "Redis", "Kubernetes"],
    year: "2025",
    annotation: "Shipped personal",
    href: "/projects/translatelive",
    image: "/projects/translatelive.svg",
    githubUrl: "https://github.com/sudheer215s/TranslateLive",
    icon: AudioLines,
    stat: { label: "e2e", value: "<3s" },
    featured: true,
  },
  {
    slug: "distributed-social",
    title: "Distributed Social Backend",
    category: "Backend Systems",
    tag: "Microservices",
    description:
      "NestJS monorepo with five domain services over gRPC. Kafka transactional outbox, Redis fan-out, Elasticsearch, tracing. Personal systems exercise. No public repository.",
    tech: ["NestJS", "gRPC", "Kafka", "Redis", "PostgreSQL"],
    year: "2025",
    annotation: "Architecture",
    href: "/projects/distributed-social",
    image: "/projects/distributed-social.svg",
    icon: Network,
    stat: { label: "services", value: "5" },
    featured: true,
  },
];
