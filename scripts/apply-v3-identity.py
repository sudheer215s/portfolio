#!/usr/bin/env python3
"""Surgical content swaps for v3. Visual structure of tmp components stays."""
from pathlib import Path

ROOT = Path("/Users/tereishqmein/Dev/v2/portfolio-v3")


def patch(rel: str, replacements: list[tuple[str, str]], *, required=True) -> None:
    path = ROOT / rel
    text = path.read_text()
    for old, new in replacements:
        if old not in text:
            if required:
                raise SystemExit(f"MISSING in {rel}:\n{old[:180]!r}")
            continue
        text = text.replace(old, new)
    path.write_text(text)
    print(f"patched {rel}")


# ── globals: missing accent-glow + reduced motion ────────────────────────────
g = ROOT / "src/app/globals.css"
gt = g.read_text()
if "--accent-glow" not in gt:
    gt = gt.replace(
        "  --glass-border: rgba(220, 210, 195, 0.65);\n}",
        "  --glass-border: rgba(220, 210, 195, 0.65);\n  --accent-glow: rgba(212, 175, 55, 0.22);\n}",
        1,
    )
    gt = gt.replace(
        "  --glass-border: rgba(255, 255, 255, 0.1);\n}",
        "  --glass-border: rgba(255, 255, 255, 0.1);\n  --accent-glow: rgba(212, 175, 55, 0.18);\n}",
        1,
    )
if "prefers-reduced-motion" not in gt:
    gt += """
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .marquee-track { animation: none !important; }
}
"""
g.write_text(gt)
print("patched src/app/globals.css")


# ── navbar ───────────────────────────────────────────────────────────────────
patch(
    "src/components/layout/navbar.tsx",
    [
        (
            """const NAV_LINKS = [
  { name: "Work",       href: "/#work",       id: "work",       icon: Briefcase  },
  { name: "Tech",       href: "/#tech-stack", id: "tech-stack", icon: BrainCircuit },
  { name: "Experience", href: "/#experience", id: "experience", icon: ScrollText },
  { name: "Contact",    href: "/contact",     id: "contact",    icon: Mail       },
];""",
            """const NAV_LINKS = [
  { name: "About",      href: "/#about",      id: "about",      icon: BrainCircuit },
  { name: "Work",       href: "/#work",       id: "work",       icon: Briefcase  },
  { name: "Experience", href: "/#experience", id: "experience", icon: ScrollText },
  { name: "Contact",    href: "/contact",     id: "contact",    icon: Mail       },
];""",
        ),
        (
            '{["A", "V", "."].map((letter, i) => (',
            '{["S", "S", "."].map((letter, i) => (',
        ),
        (
            'letter === "V" && "italic font-light"',
            'letter === "S" && i === 1 && "italic font-light"',
        ),
    ],
)

# second logo overlay uses the same map - replace_all already happened for first pattern
# Check remaining AV
nav = (ROOT / "src/components/layout/navbar.tsx").read_text()
nav = nav.replace('{["A", "V", "."].map((letter, i) => (', '{["S", "S", "."].map((letter, i) => (')
nav = nav.replace('letter === "V" && "italic font-light"', 'letter === "S" && i === 1 && "italic font-light"')
(ROOT / "src/components/layout/navbar.tsx").write_text(nav)
print("navbar letters confirmed")


# ── footer ───────────────────────────────────────────────────────────────────
patch(
    "src/components/layout/footer.tsx",
    [
        (
            """const socialIcons = [
  { Icon: FaGithub, href: 'https://github.com/ajayvish0', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ajay-vishwakarma-3409a0225/', label: 'LinkedIn' },
  { Icon: FaTwitter, href: 'https://x.com/ajayvish01', label: 'Twitter' },
  { Icon: FaEnvelope, href: 'mailto:ajayvish936@gmail.com', label: 'Email' },
];""",
            """const socialIcons = [
  { Icon: FaGithub, href: 'https://github.com/sudheer215s', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/sudheer-singh-975889195', label: 'LinkedIn' },
  { Icon: FaEnvelope, href: 'mailto:singhsudheer215@gmail.com', label: 'Email' },
];""",
        ),
        (
            """  const navigationItems = [
    { name: 'Work', href: '/#work' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: 'https://drive.google.com/uc?export=download&id=1qmNVtwVGhX9Pg8EAaXR53GU_PYznxvUA' },
  ];""",
            """  const navigationItems = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume.pdf' },
  ];""",
        ),
        (
            """              AV
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-base leading-relaxed">
              Backend engineering focused on scalable, production-ready
              architecture and high-throughput systems.
            </p>""",
            """              SS
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-base leading-relaxed">
              AI systems builder. Production reliability for LLM products,
              after three years on national telecom infrastructure.
            </p>""",
        ),
        (
            """              {[
                'Backend Architecture',
                'REST & API Design',
                'Performance Optimization',
                'Cloud Deployment',
                'Scalable CRM Systems',
              ].map((item) => (""",
            """              {[
                'Production backends',
                'RAG & citations',
                'Distributed systems',
                'Kubernetes / HA',
                'Evals & tracing',
              ].map((item) => (""",
        ),
        (
            "Currently open to selective remote opportunities.",
            "Open to AI / LLM roles that own production reliability.",
        ),
        (
            "                href=\"mailto:ajayvish936@gmail.com\"",
            "                href=\"mailto:singhsudheer215@gmail.com\"",
        ),
        (
            "                ajayvish936@gmail.com",
            "                singhsudheer215@gmail.com",
        ),
        (
            "        © {new Date().getFullYear()} Ajay Vishwakarma — Crafted with precision.",
            "        © {new Date().getFullYear()} Sudheer Singh — C-DOT facts are resume-public only.",
        ),
    ],
)

# Twitter import may now be unused
ft = (ROOT / "src/components/layout/footer.tsx").read_text()
ft = ft.replace("import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';",
                "import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';")
(ROOT / "src/components/layout/footer.tsx").write_text(ft)


print("identity chrome done")
