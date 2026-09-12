#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("/Users/tereishqmein/Dev/v2/portfolio-v3")


def sub(rel: str, pairs: list[tuple[str, str]]) -> None:
    path = ROOT / rel
    text = path.read_text()
    missing = []
    for old, new in pairs:
        if old not in text:
            missing.append(old[:120])
            continue
        text = text.replace(old, new)
    path.write_text(text)
    if missing:
        print(f"WARN {rel} missing {len(missing)}:")
        for m in missing:
            print("  ", repr(m))
    else:
        print(f"ok {rel}")


sub(
    "src/components/sections/hero.tsx",
    [
        (
            '{ text: "Architecting scalable backend systems", Icon: Sparkles }',
            '{ text: "Citation-grounded 3GPP copilot", Icon: Sparkles }',
        ),
        (
            '{ text: "Building production-grade web apps", Icon: Code }',
            '{ text: "HA backends for national telecom", Icon: Code }',
        ),
        (
            '{ text: "Optimizing performance at scale", Icon: Layers }',
            '{ text: "AI systems that own production", Icon: Layers }',
        ),
        (
            '{ text: "Turning complexity into reliable systems", Icon: Terminal }',
            '{ text: "Provenance before the chat UI", Icon: Terminal }',
        ),
        (
            '"function buildSystems() {",\n    "  return scalableSolutions();",\n    "}",',
            '"if (!citation) {",\n    "  return abstain();",\n    "}",',
        ),
        ("Ajay Vishwakarma", "Sudheer Singh"),
        ("Engineering scalable", "Engineering AI systems"),
        ("systems built for", "that own"),
        ("real-world impact.", "production."),
        (
            "I architect robust backend systems and performance-driven applications designed for scale and production stability.",
            "AI engineer with three years building high-availability backends for India's national telecom infrastructure.",
        ),
        ("<span>Scalable Backend Systems</span>", "<span>Scientist-B, C-DOT</span>"),
        ("<span>Production-Focused</span>", "<span>New Delhi</span>"),
        ("<span>Open to Remote</span>", "<span>Open to remote AI / LLM</span>"),
        (
            '<Link href="/projects" className="w-full sm:w-auto">',
            '<Link href="/#work" className="w-full sm:w-auto">',
        ),
        (
            "https://drive.google.com/uc?export=download&id=1qmNVtwVGhX9Pg8EAaXR53GU_PYznxvUA",
            "/resume.pdf",
        ),
        ("Currently Building...", "ClauseNotebook · Stage 1"),
        ("Software Engineer", "AI Systems Builder"),
        (
            '{["MERN", "AI/ML", "fastAPI"].map((tech) => (',
            '{["Python", "FastAPI", "RAG"].map((tech) => (',
        ),
        ('typedLines[0].startsWith("function")', 'typedLines[0].startsWith("if")'),
        (
            '<span className="text-accent/80 dark:text-accent">function</span>',
            '<span className="text-accent/80 dark:text-accent">if</span>',
        ),
        (
            '{typedLines[0].slice("function".length)}',
            '{typedLines[0].slice("if".length)}',
        ),
    ],
)

# drop target=_blank from the resume <a> now that it's local
hero = ROOT / "src/components/sections/hero.tsx"
ht = hero.read_text()
ht = ht.replace(
    """              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full sm:w-auto"
              >""",
    """              <a
                href="/resume.pdf"
                className="w-full sm:w-auto"
              >""",
)
hero.write_text(ht)

sub(
    "src/components/sections/impact.tsx",
    [
        (
            """const METRICS: Metric[] = [
  { value: 70,    suffix: "%", decimals: 0, label: "Manual Processing", subtext: "reduced via automation" },
  { value: 45,    suffix: "%", decimals: 0, label: "Matching Accuracy", subtext: "intelligent ATS scoring" },
  { value: 40,    suffix: "%", decimals: 0, label: "API Performance", subtext: "optimized synchronization" },
  { value: 60,    suffix: "%", decimals: 0, label: "Screening Time", subtext: "saved for recruiters" },
];""",
            """const METRICS: Metric[] = [
  { value: 99.99, suffix: "%", decimals: 2, label: "Postgres uptime", subtext: "primary-replica, auto-failover" },
  { value: 40,    suffix: "%", decimals: 0, label: "Faster lookups", subtext: "IMS/ENUM under peak load" },
  { value: 70,    suffix: "%", decimals: 0, label: "Less deploy toil", subtext: "Python + Bash automation" },
  { value: 3,     suffix: "s", decimals: 0, label: "TranslateLive e2e", subtext: "STT → GPT → TTS" },
];""",
        ),
    ],
)

sub(
    "src/components/sections/marquee-strip.tsx",
    [
        (
            '? "radial-gradient(ellipse, rgba(251,191,36,0.45) 0%, transparent 70%)"\n                : "radial-gradient(ellipse, rgba(167,139,250,0.35) 0%, transparent 70%)"',
            '"radial-gradient(ellipse, rgba(251,191,36,0.45) 0%, transparent 70%)"',
        ),
        (
            '? highlight\n                ? "linear-gradient(90deg, #f59e0b, #fbbf24, #fde68a, #f59e0b)"\n                : "linear-gradient(90deg, #a78bfa, #818cf8, #c4b5fd, #a78bfa)"',
            '? "linear-gradient(90deg, #f59e0b, #fbbf24, #fde68a, #f59e0b)"',
        ),
        (
            '? highlight\n                ? "0 0 28px rgba(251,191,36,0.55)"\n                : "0 0 24px rgba(167,139,250,0.5)"',
            '? "0 0 28px rgba(251,191,36,0.55)"',
        ),
        ("rgba(167,139,250,0.4)", "rgba(198,169,105,0.4)"),
        ("rgba(167,139,250,0.35)", "rgba(198,169,105,0.35)"),
        ("rgba(167,139,250,0.15)", "rgba(198,169,105,0.15)"),
        ("rgba(167,139,250,0.05)", "rgba(212,175,55,0.05)"),
        ("rgba(167,139,250,0.03)", "rgba(198,169,105,0.03)"),
    ],
)

print("done")
