import { PERSON } from "@/lib/site";

export type SocialType = "email" | "linkedin" | "x" | "github";

export interface HomeProject {
  title: string;
  /** One or two lines; the card clamps it to two. */
  summary: string;
  /** Internal project page (/projects/slug) or an external URL. */
  href: string;
  github: string;
}

export interface HomeSocial {
  type: SocialType;
  label: string;
  href: string;
}

export interface HomeContent {
  name: string;
  /**
   * Path under /public. Until the file exists, the page shows initials
   * in its place.
   */
  photo: string;
  /** 3–5 short paragraphs. Inline links use markdown syntax: [text](/path). */
  bio: string[];
  /** Exactly two. The rest of the work lives on /projects. */
  projects: [HomeProject, HomeProject];
  email: string;
  linkedinDm: string;
  /** Omit when there is no X account. */
  xDm?: string;
  /** Shown in this order in the footer. */
  socials: HomeSocial[];
}

// Everything the homepage says lives here.
export const home: HomeContent = {
  name: PERSON.name,
  photo: "/images/sudheer.jpg",
  bio: [
    "I'm an AI Systems Builder in New Delhi. I build the production layer of AI-powered products: retrieval that can cite a source, pipelines with a latency budget, and systems that refuse when the evidence isn't there.",
    "By day I'm a Scientist-B at C-DOT, India's government telecom R&D lab. For three years I've owned high-availability backends for national call routing — a PostgreSQL cluster at 99.99% uptime, and IMS/ENUM lookups I made 40% faster under peak load.",
    "On my own time I'm building [ClauseNotebook](/projects/clausenotebook), a citation-grounded copilot for public 3GPP specs. Stage 1 ingestion is in the repo; retrieval and abstention are next. I also shipped [TranslateLive](/projects/translatelive), a voice pipeline that stays under three seconds. I studied computer science at MANIT Bhopal. If you're hiring for an AI / LLM role that owns production reliability, [get in touch](/contact).",
  ],
  projects: [
    {
      title: "ClauseNotebook",
      summary:
        "Citation-grounded 3GPP copilot. Stage 1 is provenance: a versioned manifest, SHA-256, and an idempotent CLI. Public specs only.",
      href: "/projects/clausenotebook",
      github: "https://github.com/sudheer215s/ClauseNotebook",
    },
    {
      title: "TranslateLive",
      summary:
        "Real-time voice translation. Deepgram, GPT, and TTS in one pipeline, under 3 seconds, with 10+ concurrent sessions.",
      href: "/projects/translatelive",
      github: "https://github.com/sudheer215s/TranslateLive",
    },
  ],
  email: PERSON.email,
  linkedinDm: PERSON.linkedin,
  socials: [
    { type: "email", label: PERSON.email, href: `mailto:${PERSON.email}` },
    { type: "linkedin", label: PERSON.linkedinHandle, href: PERSON.linkedin },
    { type: "x", label: "X", href: "" },
    { type: "github", label: PERSON.githubHandle, href: PERSON.github },
  ],
};
