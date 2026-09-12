#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("/Users/tereishqmein/Dev/v2/portfolio-v3")


def sub(rel: str, pairs: list[tuple[str, str]]) -> None:
    path = ROOT / rel
    text = path.read_text()
    missing = []
    for old, new in pairs:
        if old not in text:
            missing.append(old[:140])
            continue
        text = text.replace(old, new)
    path.write_text(text)
    if missing:
        print(f"WARN {rel} missing {len(missing)}:")
        for m in missing:
            print("  ", repr(m))
    else:
        print(f"ok {rel}")


# ── work.tsx ─────────────────────────────────────────────────────────────────
sub("src/components/sections/work.tsx", [
    ('import Image from "next/image";\n',
     'import Image from "next/image";\nimport { ProjectPoster } from "@/components/work/project-poster";\n'),
    (
        """          {/* next/image — plan requirement */}
          <motion.div
            className="relative w-full h-full"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              onLoad={() => setImgLoaded(true)}
              priority={index < 3}
            />
          </motion.div>""",
        """          <motion.div
            className="relative w-full h-full"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`Figure for ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                onLoad={() => setImgLoaded(true)}
                priority={index < 3}
              />
            ) : (
              <ProjectPoster project={project} hovered={hovered} />
            )}
          </motion.div>""",
    ),
    (
        """            {!imgLoaded && (""",
        """            {project.image && !imgLoaded && (""",
    ),
    (
        """              {[
                { n: 8, suffix: "", label: "Projects" },
                { n: 1.5, suffix: " yrs", label: "Experience" },
                { n: 100, suffix: "%", label: "Shipped" },
              ].map(({ n, suffix, label }) => (""",
        """              {[
                { n: 3, suffix: "", label: "Works" },
                { n: 3, suffix: " yrs", label: "Production" },
                { n: 1, suffix: "", label: "Shipped AI pipeline" },
              ].map(({ n, suffix, label }) => (""",
    ),
    ("            8 selected works", "            3 selected works"),
    ('            Precision Engineered', "            Public artifacts"),
])

# ── experience ───────────────────────────────────────────────────────────────
sub("src/components/sections/experience-timeline.tsx", [
    (
        """function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}""",
        """function useCountUp(target: number, inView: boolean, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(decimals > 0 ? (0).toFixed(decimals) : "0");
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * target;
      setCount(decimals > 0 ? value.toFixed(decimals) : String(Math.round(value)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);
  return count;
}""",
    ),
    ("  const count = useCountUp(exp.stat, isInView);",
     "  const count = useCountUp(exp.stat, isInView, 2000, 'statDecimals' in exp ? exp.statDecimals : 0);"),
    (
        """          The Chronicles""",
        """          Production""",
    ),
    (
        """          Professional <br />
          <em className="italic font-normal text-accent bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">
            Landscape
          </em>""",
        """          Professional <br />
          <em className="italic font-normal text-accent bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">
            record
          </em>""",
    ),
    (
        """          A trajectory of technical growth, product engineering, and strategic contributions across diverse industries.""",
        """          C-DOT — Centre for Development of Telematics. Resume-public facts only; internals stay off this site.""",
    ),
    (
        """          Future Proofing""",
        """          Next role""",
    ),
    (
        """          Ready to scale your next <br />
          <span className="text-accent italic">technical venture?</span>""",
        """          AI / LLM work that owns <br />
          <span className="text-accent italic">production reliability.</span>""",
    ),
])

# ── education ────────────────────────────────────────────────────────────────
sub("src/components/sections/education-foundation.tsx", [
    (
        """              Academic foundations that shaped my engineering thinking.""",
        """              One degree. No invented GPA.""",
    ),
    (
        """                    OIST · Bhopal, M.P.""",
        """                    MANIT · Bhopal""",
    ),
    (
        """                    Computer Science (AIML)""",
        """                    Computer Science and Engineering""",
    ),
    (
        """                    Jul 2020 — Jun 2024""",
        """                    2019 — 2023""",
    ),
    (
        """                    {[
                      'Specialization in AI/ML alongside core computer science fundamentals',
                      'Systems thinking, algorithms, and full-stack backend development',
                      'Built production-ready web applications from sophomore year onward',
                    ].map((item, i) => (""",
        """                    {[
                      'B.Tech in Computer Science and Engineering',
                      'National Institute of Technology, Bhopal',
                      'Foundation for the systems work at C-DOT',
                    ].map((item, i) => (""",
    ),
    (
        """                    {['Algorithms', 'System Design', 'Data Structures', 'Backend Dev', 'AI / ML'].map((tag, i) => (""",
        """                    {['Algorithms', 'Systems', 'Databases', 'Networks', 'CSE'].map((tag, i) => (""",
    ),
    (
        """                        7.9""",
        """                        —""",
    ),
    (
        """                        / 10""",
        """                        GPA""",
    ),
    (
        """                    CGPA""",
        """                    not published""",
    ),
    (
        """                Oriental Institute of Science and Technology""",
        """                Maulana Azad National Institute of Technology""",
    ),
])

# ── currently building ───────────────────────────────────────────────────────
sub("src/components/sections/currently-building.tsx", [
    (
        """const PROJECT = {
  index: "01",
  codename: "PropTech\\nCRM",
  status: "Active",
  phase: "Phase II — Pipeline Automation",
  stack: "Next.js · Node.js\\nMongoDB · Fine tuning",
  progress: 72,
  description:
    "Scalable backend architecture for a property-tech CRM — automating lead generation pipelines, optimizing API performance via scheduled caching, and integrating a production-grade softphone module with real-time call lifecycle management.",
  features: [
    { label: "Lead generation pipeline — automated & live", done: true },
    { label: "API caching layer — 40% performance gain", done: true },
    { label: "Softphone module — call lifecycle integration", done: false },
    { label: "Async background jobs — throughput scaling", done: false },
  ],
  techs: [
    { abbr: "NX", name: "Next.js" },
    { abbr: "ND", name: "Node.js" },
    { abbr: "PG", name: "PostgreSQL" },
    { abbr: "FT", name: "Fine tuning" },
    { abbr: "DK", name: "Docker" },
  ],
};""",
        """const PROJECT = {
  index: "01",
  codename: "Clause\\nNotebook",
  status: "In progress",
  phase: "Stage 1 — Ingestion. Retrieval is next.",
  stack: "Python · CLI\\nJSON · SHA-256 · PyMuPDF4LLM",
  progress: 50,
  description:
    "Provenance-first ingestion for a citation-grounded 3GPP copilot. Versioned JSON manifest, SHA-256, idempotent CLI, atomic writes, registered → converted. Public 3GPP PDFs only. No Recall@k yet — the proof is the public repo.",
  features: [
    { label: "Versioned JSON manifest with SHA-256 provenance", done: true },
    { label: "Idempotent CLI and atomic manifest writes", done: true },
    { label: "Clause-aware chunking that keeps tables", done: false },
    { label: "Hybrid retrieval, inline citations, abstention", done: false },
  ],
  techs: [
    { abbr: "PY", name: "Python" },
    { abbr: "CLI", name: "CLI" },
    { abbr: "SHA", name: "SHA-256" },
    { abbr: "PDF", name: "PyMuPDF" },
    { abbr: "RAG", name: "Retrieval" },
  ],
};""",
    ),
])

# ── final CTA ────────────────────────────────────────────────────────────────
sub("src/components/sections/final-cta.tsx", [
    ("https://drive.google.com/uc?export=download&id=1qmNVtwVGhX9Pg8EAaXR53GU_PYznxvUA",
     "/resume.pdf"),
    ('href="#contact"', 'href="/contact"'),
    ("Focused systems. Thoughtful execution. Built to last.",
     "Email is the fastest path. Resume is a static PDF."),
    ("END.SEQUENCE — SYS.PORTFOLIO.v1",
     "SUDHEER · V3 — PAPER + GOLD"),
])

# ── contact signature ────────────────────────────────────────────────────────
sub("src/components/sections/contact.tsx", [
    ('            <span className="text-xs font-bold text-accent">AV</span>',
     '            <span className="text-xs font-bold text-accent">SS</span>'),
    (
        """        <h3 className="text-3xl font-bold leading-tight font-serif text-foreground">
          Ajay
          <br />
          <span className="text-accent">Vishwakarma</span>
        </h3>""",
        """        <h3 className="text-3xl font-bold leading-tight font-serif text-foreground">
          Sudheer
          <br />
          <span className="text-accent">Singh</span>
        </h3>""",
    ),
    (
        """          Architecting scalable systems
          <br />
          with precision and purpose.""",
        """          AI systems builder
          <br />
          production reliability first.""",
    ),
    ('{ label: "Role", value: "Software Engineer" }',
     '{ label: "Role", value: "AI Systems Builder" }'),
    ('{ label: "Status", value: "Available for Project" }',
     '{ label: "Status", value: "Open to AI / LLM roles" }'),
    ('{ label: "Location", value: "Remote / India" }',
     '{ label: "Location", value: "New Delhi, India" }'),
    (
        """                    Initialize communication protocol.""",
        """                    Or email singhsudheer215@gmail.com — no phone on this page.""",
    ),
])

print("rest pass 1 done")
