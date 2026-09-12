# Design: Sudheer Singh — Portfolio v3

| Field | Value |
|---|---|
| **Title** | Sudheer Singh — v3 personal engineering portfolio |
| **Date** | 2026-09-12 |
| **Status** | Active on branch `v3` |
| **Worktree** | `/Users/tereishqmein/Dev/v2/portfolio-v3` |
| **Base** | Customize `tmp/pp` (Next.js cream/gold portfolio). Do not rebuild from zero. |
| **v2** | Remains on `main` as TS 00.001 (Astro spec). v3 does not reopen that lock. |

This file is the v3 implementation contract. Content facts still come from `docs/research/profile-brief.md` and CV5. Visual language comes from the tmp site. Narrative shape comes from [Utkarsh Aman](https://utkarshexample.github.io/portfolio/).

---

## Sources (what to take / leave)

### 1. tmp/pp — theme and visual flow (take)

- Cream paper (`#F5EFE6`) + charcoal ink (`#1C1C1C`) + gold accent (`#A38340` / `#C6A969` / `#D4AF37`).
- Playfair Display headlines, Inter body, DM Mono labels.
- Light default, optional dark toggle (kept as a surface, not a second product).
- Glass cards, corner brackets, gold hairlines, grain, serif italic accent word.
- Section rhythm: hero → marquee → impact numerals → selected work → zigzag experience → education → capability matrix → currently building → notes → CTA → contact.
- Desktop letter-swap nav + mobile bottom dock.
- Motion: Framer springs, hover bloom, count-up numerals. Honor `prefers-reduced-motion` where we touch motion.

**Do not take from tmp:** Ajay identity, clone projects, invented ATS/CRM metrics, purple marquee glow, skill-percentage bars, fake live demos, Twitter, Google Drive resume, project PNG screenshots of other people’s apps.

### 2. Utkarsh example — content shape (take)

- Hire-readable single page: who I am → experience with bullets → recent work → what I do → education → contact.
- Name, role, and location visible immediately.
- Experience as dated roles with concrete bullets, not vibe paragraphs.
- Work as a small set of named artifacts, not a 12-card wall.
- Education as one real degree.
- Contact as visible email, not a maze.

**Do not take:** skill bars, generic “passionate developer” voice, phone in HTML, address, invented specialty percentages.

### 3. Research already done (take)

- Identity: Sudheer Singh, New Delhi, AI Systems Builder.
- Short phrase, C-DOT titles/dates, four proof numbers, three projects, stack he actually uses.
- Recruiter 6–10s first viewport: name, role, employer, one proof, email/resume/GitHub.
- Confidentiality: C-DOT internals stay off the site; already-on-resume facts only.
- No invented employers, metrics, repos, or demos.
- TranslateLive README extras stay out. ClauseNotebook is Stage 1 ingestion, not a finished copilot.
- Distributed social backend has **no public repo**.
- Phone stays on the PDF resume only.

---

## Product

v3 is a **narrative engineering portfolio** with a paper-and-gold instrument finish. It is not the v2 spec document, not a junior glassmorphism template, and not Ajay’s site with the name swapped.

Three clocks, same as research:

1. Recruiter, first screen: name, role, C-DOT, one number, how to reach him.
2. Hiring manager, home scroll: three works, production proof, what he wants next.
3. Staff engineer: honest WIP on ClauseNotebook, shipped TranslateLive, systems artifact, GitHub.

---

## Routes

```
/                 homepage — complete pitch
/projects         the same three works, archive layout
/contact          mailto + form (form sends only if SMTP env is set)
/resume.pdf       CV5 copy
```

No blog, `/about` page (About is a home section), `/skills`, Calendly, chatbot.

Nav: **About · Work · Experience · Contact**. Tech stack stays on the page (`#tech-stack`) and in the footer.

---

## Homepage order

| # | Section | Job |
|---|---|---|
| 1 | Hero | 6–10s hire scan |
| 2 | Marquee | Stack keywords without a chip row in the hero |
| 3 | About | Utkarsh “Who Am I” — positioning, looking-for, four capability cards |
| 4 | Impact | Four cited production numbers |
| 5 | Selected work | ClauseNotebook, TranslateLive, Distributed Social |
| 6 | Experience | Scientist-B, then Research Engineer (C-DOT) |
| 7 | Education | B.Tech CSE, MANIT Bhopal, 2019–2023 (no invented CGPA) |
| 8 | Capability matrix | Stack he actually uses — no Mongo/Firebase/Figma identity |
| 9 | Currently building | ClauseNotebook Stage 1, honest checklist |
| 10 | Notes | Four real engineering notes from his work |
| 11 | Final CTA | Email + resume |
| 12 | Footer | SS mark, links, availability |

---

## Visual tokens (tmp, tightened)

Keep tmp CSS variables. Add missing `--accent-glow`. Remove purple from the marquee (gold only).

| Token | Light | Role |
|---|---|---|
| `--background` | `#F5EFE6` | Paper |
| `--foreground` | `#1C1C1C` | Ink |
| `--accent` | `#A38340` | Gold signal |
| `--muted` | `#E8E2D9` | Inset |
| `--glass-surface` | `rgba(255,255,255,0.5)` | Cards |

Type: Playfair Display (serif), Inter (sans), DM Mono (mono). Self-hosted later if we ship; Google `next/font` is acceptable in v3 because we started from tmp.

Mark: **SS.** — second S italic, period in accent gold. Not `AV.`, not `SUDHEER TS 00.001`.

---

## Content rules

- Copy facts into `src/data/*`. Do not import `../profile` at build time.
- Every numeric claim on the site is already in the brief or CV5.
- Uncited superlatives are a defect.
- No headshot. No typing “Hi I’m”. Hero may keep the instrument card + restrained typewriter as chrome, not as the identity.
- Project cards use typographic posters, not screenshots of other products.

---

## Quality bar (v3, looser than v2)

- Mobile and desktop both readable; dock must not cover CTA.
- Keyboard focus visible; form labels exist.
- `prefers-reduced-motion: reduce` disables looping typewriter, orb float, marquee, count-up (show final values).
- Contact form degrades to mailto if SMTP env is missing.
- No Ajay strings, no `ajayv.vercel.app`, no other-people’s GitHub.

---

## Implementation slices

0. Worktree + tmp copy (done)
1. Data layer + chrome (identity, nav, footer, metadata)
2. Hero, marquee, about, impact
3. Work, experience, education, expertise
4. Currently building, notes, CTA, contact
5. Browser pass, desktop + mobile
