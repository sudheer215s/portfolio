export interface SideProject {
  /** Card title. */
  title: string;
  /** One or two sentences on what the project does. */
  description: string;
  /** Main language, shown in the grey line under the description. */
  language?: string;
  /** GitHub star count. Leave it out to hide the count. */
  stars?: number;
  /**
   * Where the title links: a site path ("/projects/my-project") or a full URL.
   * Leave it out while the card is a placeholder — the title then renders as
   * plain text, so visitors never land on a missing page.
   */
  href?: string;
  /** Source repository, shown as [code]. */
  code?: string;
  /** Live site or demo, shown as [website]. */
  website?: string;
}

// Cards on the Projects page (/side-projects).
export const SIDE_PROJECTS: SideProject[] = [
  {
    title: "ClauseNotebook",
    description:
      "Citation-grounded 3GPP standards copilot. Stage 1 ingestion is public: versioned JSON manifest, SHA-256, idempotent CLI. Public 3GPP PDFs only.",
    language: "Python",
    href: "/projects/clausenotebook",
    code: "https://github.com/sudheer215s/ClauseNotebook",
  },
  {
    title: "TranslateLive",
    description:
      "Real-time voice translation under a hard latency budget. Deepgram STT, GPT translation, and TTS, under 3 seconds, on FastAPI and Kubernetes.",
    language: "Python",
    href: "/projects/translatelive",
    code: "https://github.com/sudheer215s/TranslateLive",
  },
  {
    title: "Distributed Social Backend",
    description:
      "Personal systems exercise: five NestJS services, a Kafka transactional outbox, Redis fan-out, and Elasticsearch. No public repository.",
    language: "TypeScript",
    href: "/projects/distributed-social",
  },
  { title: "Placeholder Project 04", description: "A one or two sentence description of the project goes here.", language: "TBD" },
  { title: "Placeholder Project 05", description: "A one or two sentence description of the project goes here.", language: "TBD" },
  { title: "Placeholder Project 06", description: "A one or two sentence description of the project goes here.", language: "TBD" },
  { title: "Placeholder Project 07", description: "A one or two sentence description of the project goes here.", language: "TBD" },
  { title: "Placeholder Project 08", description: "A one or two sentence description of the project goes here.", language: "TBD" },
];
