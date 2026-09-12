export const site = {
  person: {
    name: "Sudheer Singh",
    given: "Sudheer",
    family: "Singh",
    mark: ["S", "S", "."] as const,
    role: "AI Systems Builder",
    roleLine: "AI Systems Builder — backend engineer for AI-powered products.",
    shortPhrase:
      "AI engineer with three years building high-availability backends for India's national telecom infrastructure.",
    location: "New Delhi, India",
    email: "singhsudheer215@gmail.com",
    github: "https://github.com/sudheer215s",
    linkedin: "https://linkedin.com/in/sudheer-singh-975889195",
  },
  employer: {
    name: "C-DOT",
    legalName: "Centre for Development of Telematics",
    titleCurrent: "Scientist-B / Backend Engineer",
    datesCurrent: "Jul 2024 – Present",
    titlePrior: "Research Engineer",
    datesPrior: "Jul 2023 – Jun 2024",
  },
  education: {
    school: "Maulana Azad National Institute of Technology (MANIT)",
    schoolShort: "MANIT · Bhopal",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    dates: "2019 – 2023",
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
  resumeHref: "/resume.pdf",
  lookingFor:
    "An AI / LLM engineering role building LLM-powered products end to end and owning the production layer — retrieval and RAG, agentic workflows, evals, tracing. Drawn to developer tools, AI infrastructure, and applied AI over technical corpora. Wants shorter feedback loops than a government R&D lab.",
  lookingForShort:
    "AI / LLM roles that own production: RAG, agents, evals, tracing.",
  avoidingShort:
    "Prompt-tweaking by feel. Thin wrappers. Prototypes that never ship. Speed over tests.",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
