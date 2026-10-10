import {
  Activity,
  Binary,
  Clock,
  Code2,
  Container,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Radio,
  Server,
  Shield,
  Terminal,
} from "lucide-react";

export const DOMAINS = [
  {
    index: "01",
    title: "Backend systems",
    descriptor: "APIs, services, contracts",
    depth:
      "Production services with explicit contracts, retries, and a latency budget.",
    techs: [
      { label: "Python", Icon: Code2 },
      { label: "FastAPI", Icon: Terminal },
      { label: "NestJS", Icon: Layers },
      { label: "Node.js", Icon: Server },
      { label: "TypeScript", Icon: FileCode2 },
    ],
  },
  {
    index: "02",
    title: "Data & messaging",
    descriptor: "Stores, queues, fan-out",
    depth:
      "Query plans, replication, outbox writes — the parts that keep calls connected.",
    techs: [
      { label: "PostgreSQL", Icon: Database },
      { label: "Redis", Icon: Clock },
      { label: "Kafka", Icon: Radio },
      { label: "Elasticsearch", Icon: Activity },
      { label: "SQL", Icon: Binary },
    ],
  },
  {
    index: "03",
    title: "Infrastructure",
    descriptor: "Run, watch, recover",
    depth: "Kubernetes, Linux, CI/CD, Prometheus/Grafana — operate it after it ships.",
    techs: [
      { label: "Docker", Icon: Container },
      { label: "Kubernetes", Icon: Cpu },
      { label: "Linux", Icon: Terminal },
      { label: "CI/CD", Icon: GitBranch },
      { label: "Prometheus", Icon: Shield },
    ],
  },
  {
    index: "04",
    title: "LLM systems",
    descriptor: "Retrieval, evals, traces",
    depth:
      "Tools in use. Evidence on this site is TranslateLive (GPT in a pipeline) and ClauseNotebook (ingestion). No shipped LangGraph product is claimed.",
    techs: [
      { label: "RAG", Icon: Layers },
      { label: "LangGraph", Icon: GitBranch },
      { label: "evals", Icon: Activity },
      { label: "Langfuse", Icon: Radio },
      { label: "OpenTelemetry", Icon: Shield },
    ],
  },
] as const;
