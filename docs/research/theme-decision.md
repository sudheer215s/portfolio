# Theme Decision Record

**Date:** 2026-09-12  
**Status:** LOCKED  
**Subject:** Sudheer Singh — AI Systems Builder portfolio  
**Primary theme:** TS 00.001 — Standards Document as Product  
**Runner-up (do not build, do not mash):** Field Instrument — C-DOT Bench

This file is the art-direction and product-decision source of truth. Visual tokens here override `stack-decision.md`. Framework, hosting, motion-library, and quality gates in `stack-decision.md` stand. Routes, content, confidentiality, and hire-scan order in `portfolio-ia.md` stand except where this record amends them by name.

---

## Locked decisions (numbered)

1. **Primary theme (one):** **TS 00.001 — Standards Document as Product** (`theme-alternatives.md` Candidate A, rank 1). The site is a productized spec reader you can actually read — not a scanned ETSI PDF, not a lab bench, not an IDE, not a Nothing storefront. No fifth theme. No mashup with the runner-up.

2. **From Nothing — two principles, zero assets** (`theme-nothing.md` ADAPT; `theme-alternatives.md` §5):
   1. **Identity is format.** The running header `SUDHEER TS 00.001 · V1.0.0` is the mark. No logo, no lettermark, no dotted wordmark.
   2. **Spec-sheet information design.** Proof numbers are first-class objects: Plex Mono labels, tabular figures, units adjacent, conformance tables. Not testimonials, not bento cards.

3. **From JDoodle — two principles, zero IDE skin** (`theme-jdoodle.md` ADAPT; `theme-alternatives.md` §5):
   1. **Working surface, not a greeting.** The visitor is already in the document. No splash, no “Hi, I’m”, no typing SVG.
   2. **Split for inspectability.** Desktop ≥1024: clause map | clause body. Inside a project: conformance table | narrative. Mobile: linear stack. Splits are reading aids, never an editor.

4. **Explicit bans:** see **What we are not doing**. Treat that list as merge-blocking.

5. **Color + type:** Paper + ink + hairline + one stamp red. IBM Plex Sans + Serif + Mono, SIL OFL 1.1, self-hosted woff2. **Theme wins over stack visual defaults** (Plex Sans+Mono only; teal signal). Stack still wins on Astro, CSS, motion, TypeScript, Cloudflare Pages.

6. **IA:** Confirm `portfolio-ia.md` multi-page hub-and-spoke. Four HTML routes plus `/resume.pdf`. Homepage is a complete 2-minute pitch; case studies are optional depth. **Amendment:** clause numbers are *chrome on IA sections*. They do not add routes and they do not reorder the page. Stack’s `/contact`, `/projects`, and `/work/index` are not built.

7. **Stack:** Confirm Astro latest stable, `output: 'static'`, no SSR adapter, vanilla CSS + `src/styles/tokens.css`, CSS-only motion, TypeScript `strict`, Cloudflare Pages production, GitHub Pages Action as fallback. No Tailwind, no React/Vue/Svelte, no GSAP, no Framer Motion, no WebGL.

8. **Art-direction lock sentence (builder cannot violate):** Paper spec, Plex superfamily, one stamp red, clause-tree navigation, every number cited, no hero illustration, no WebGL, no dots, no orange, no Inter.

9. **First vertical slice:** Document shell + Clause 1 Scope (homepage first viewport). See **Build slice 0**.

10. **Document identity:** `SUDHEER TS 00.001`. Never a fake `3GPP TS 23.xxx` number for this site. No 3GPP, ETSI, or C-DOT logos.

11. **Citations (from Candidate D, not as a magazine):** Every numeric claim carries a visible source token (`[brief]`, `[CV5]`, `[repo]`). Uncited superlatives are a design-system defect.

12. **v1 surface:** Paper only. No dark-mode toggle, no `prefers-color-scheme` second identity.

13. **CTA:** Visible `singhsudheer215@gmail.com` (mailto), `/resume.pdf`, GitHub, LinkedIn. No form. Phone stays on the PDF resume only.

14. **Runner-up use:** Field Instrument may donate *engraved-metric treatment* for the four proof figures inside Clause 1. It may not donate aluminum, screws, amber, teal, Fragment Mono as house face, or a night-watch palette.

---

## Theme system (tokens, type, chrome, motion)

### Color

Lock these hexes. Implement in `tokens.css` as oklch if the stack prefers; the hex is the contract.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F3EFE4` | Page canvas (aged spec stock, not hipster beige) |
| `--paper-2` | `#E8E2D4` | Inset panels, tables |
| `--ink` | `#1A1916` | Body, headings, proof numerals |
| `--ink-muted` | `#5C574E` | Labels, running-header meta (verify 4.5:1; darken if it fails) |
| `--rule` | `#C4BBA8` | Hairlines, table rules, clause rail |
| `--stamp` | `#B42318` | Document-class stamp, availability chip, `:focus-visible`, citation marks |
| `--stamp-on` | `#F3EFE4` | Type sitting on a stamp fill |

Rules: no gradients, no glow, no drop shadows, 0 radius, 1px hairlines. Stamp red is a rubber stamp on paper — never a large fill, never a value color on OLED black. Proof numerals stay `--ink`.

This **replaces** the Nothing-report instrument panel (`#0B0D10` + teal `#3D9B8F`) and the stack report’s implied teal default.

### Type

Legal: IBM Plex Sans, IBM Plex Serif, IBM Plex Mono — SIL OFL 1.1. Self-host woff2 under `src/assets/fonts/` with `OFL.txt`. Reserved Font Names “IBM Plex” / “Plex” respected; do not rename a derivative. Astro local font provider. `font-display: swap` + metric-adjusted fallbacks. Latin subset. No Google Fonts CDN.

| Role | Face | Size / leading | Notes |
|---|---|---|---|
| Name / H1 | Plex Sans 600 | 32–40px / 1.1, −0.02em | Sentence case. Typographic LCP. |
| Running header, nav | Plex Sans 400 | 12–14px | Spec controls, not pills |
| Body, short phrase, case prose | Plex Serif 400 | 18–20px / 1.55–1.7 | Measure 66–72ch |
| Clause IDs, hashes, versions, code | Plex Mono 400 | 12–13px | Tabular nums |
| Spec labels | Plex Mono 400 | 11px / 1.2, uppercase, +0.08em | |
| Proof figures | Plex Mono 400 | Hero 32–48px / 1.0; table 14–16px | Ink, not stamp |

**Home font files:** four woff2 — Sans 400 (**preload**), Sans 600, Serif 400, Mono 400. No italic until body uses it. **This overrides** `stack-decision.md` §3.1 “two families, three files.” New budget: ≤ 4 files, ≤ 90 kb total, Lighthouse performance still ≥ 95.

Titles are sentence case. Never all-caps body. Modal verbs (*shall / should / may*) only where true. Do not write the whole site in RFC-speak.

### Chrome

- Running header on every page: `SUDHEER TS 00.001` · `V1.0.0 (2026-09)` · `RELEASED`.
- Document-class stamp: `PERSONAL SPECIFICATION` — not `3GPP`, not ETSI cover geometry, not a coat of arms.
- Footer: `© Sudheer Singh` · git short hash · IA confidentiality sentence.
- Desktop ≥1024: left rail ~4.5–5.5rem for clause IDs. Mobile: clause ID as a kicker above the heading, never a squeezed sidebar.
- Nav labels stay IA: **Work · Production · GitHub · Resume · Email**. Work → `/#work`. Production → `/#production`. Case-study pages highlight Work. Hairline buttons, mono labels. Email is visible text, never icon-only.
- Projects are numbered subclauses with a **conformance table** (problem, constraint, stack, proof, repo, status). Not cards-with-shadows.
- Status words, used honestly: ClauseNotebook `in progress` (Stage 1 ingestion); TranslateLive `released` (shipped personal); social backend `architecture / personal`. No pulsing live dots on static numbers. `as of 2026-07` is allowed.
- `@media print` must produce a readable spec.
- Space scale: 4 / 8 / 16 / 24 / 32 / 48 / 72.

### Motion

CSS only. Default: none, except 150–200ms ease-out color/opacity on hover/focus of rules and links. `:target` highlight on clause jump. Sticky chrome must not fully hide focused controls (WCAG 2.4.11). `prefers-reduced-motion: reduce` kills animation and transition. No count-up, no Ken Burns, no scroll-jack, no view-transition until after the quality slice. Scroll-driven CSS only inside `@supports` and never required for meaning.

### Homepage clause map (IA order wins)

Theme Candidate A listed C-DOT before work. **Rejected.** Hire-scan needs the three work items immediately after the first screen (`portfolio-ia.md` §4.1).

| Clause | IA section | Content |
|---|---|---|
| **1 Scope** | First viewport | Name, role, short phrase, C-DOT title, four-metric proof strip, ClauseNotebook now-line, CTA |
| **2 Work items** | `#work` | 2.1 ClauseNotebook · 2.2 TranslateLive · 2.3 Distributed Social Media Backend |
| **3 Production** | `#production` | C-DOT resume-public facts only |
| **4 Seeking** | `#seeking` | Looking for / will not do + education one-liner |
| **5 Definitions** | `#stack` | Stack he actually uses; no bars |
| **Annex A** | Footer | Contact |
| **Annex B** | Footer meta | Change history = git hash |

Routes (unchanged from IA):

```
/                         homepage — 2-minute pitch (required)
/work/clausenotebook      clause 2.1 expanded
/work/translatelive       clause 2.2 expanded
/work/distributed-social  clause 2.3 expanded
/resume.pdf               static file
```

Case-study skeleton remains IA §5 (600–900 words, first 150 stand alone). Typeset as a spec document with the same conformance table, not as a blog.

---

## What we are not doing

**Nothing costume:** Ndot 55/57, NType 82, LL Lettera Mono, Glyph / LED / dot-matrix grids, `#C8102E` `#D71920` `#ff0033`, `#040404` OLED field, parenthetical `name ( 1 )` syntax, transparent-phone photography, 45px frost, NOTHING / CMF / Essential Space marks, hotlinked Shopify fonts, unofficial `nothingfont` dumps.

**JDoodle / IDE costume:** orange Execute, play triangles as brand, Ace/Monaco, 110-language picker, STDIN, fake compile, vscode-portfolio, terminal `whoami` / `help`, OS-as-site, Carbon/Ray.so as global chrome, JDroid-style site chatbot.

**Other costumes:** Field Instrument aluminum/screws/TE orange `#ff6600`; Inter 510 + Linear indigo `#5e6ad2`; IBM Blue `#0f62fe` + Carbon components; Bloomberg scanlines and fake tickers; Swiss 120px poster type on a phone; Geist or Space Grotesk as identity.

**2026 junior defaults:** dark glassmorphism; purple/blue/indigo/mesh/aurora gradients; gradient text; three equal glass project cards; bento; Aceternity / Magic UI / shadcn / Tailwind; Inter, Roboto, SF Pro as the voice; Times as the spec voice; “Hi, I’m a passionate developer”; particle.js; Three.js / R3F heroes; Lenis / Locomotive scroll-jack; saffron/tricolour kitsch; fake NOC maps; WebGL globes.

**IA / content:** `/about` `/blog` `/skills` `/contact` `/now` `/uses` `/photos` `/testimonials`; contact form; Calendly; phone in the hero; invented metrics; fake social-backend repo; TranslateLive README extras (Claude, ElevenLabs, 50+ users, cache-hit %); SpecAgent / future-state CV; C-DOT internals; `TS 29.509` as NSSAAF stage-3 without confirmation; dead demos.

**Stack:** Next.js, Vite+React SPA, Remix, Tailwind, UnoCSS, CSS-in-JS, GSAP, Framer Motion, three.js, CMS, Google Fonts CDN, Vercel as host, Astro SSR adapters, `ClientRouter` in v1, GA4.

**Libraries / fonts not to ship:** Ndot/NType/Lettera, TE-20/TE-40, Söhne, Berkeley Mono, Druk, pirated Helvetica/Neue Haas, Monaco, Ace, particle.js, Lenis, Locomotive, AOS.

---

## Conflicts resolved (cite the two reports)

1. **Visual tokens — `theme-alternatives.md` vs `stack-decision.md` + `theme-nothing.md`.** Stack defaulted Plex Sans+Mono and left a teal door open; Nothing §6 recommended `--signal: #3D9B8F` on cool near-black. **Theme wins.** Paper `#F3EFE4`, ink `#1A1916`, stamp `#B42318`, Plex Sans+Serif+Mono. Teal, OLED, Geist, and Space Grotesk are out. Framework/hosting/motion-library in the stack report still stand.

2. **Font budget — `stack-decision.md` §3.1 (2 families, 3 files) vs `theme-alternatives.md` Candidate A (Plex superfamily of 3).** **Theme wins.** Four files, Sans 400 preloaded. Other performance gates unchanged (home JS 0 kb, Lighthouse ≥ 95, fonts ≤ 90 kb).

3. **Reading order — `theme-alternatives.md` (C-DOT then work) vs `portfolio-ia.md` §4.1 (work then production).** **IA wins.** Clause numbers relabel IA sections; they do not reshuffle them.

4. **Routes / CTA — `stack-decision.md` §4 (`/contact`, optional form, phone) vs `portfolio-ia.md` (four routes, mailto only, phone on PDF).** **IA wins.** No `/contact`, no form, no `/projects`.

5. **Run / replay — `theme-jdoodle.md` §6 canned traces vs `theme-alternatives.md` “no Run triangles” vs IA “metrics visible without click.”** **No Run chrome.** Tables and numbers are always visible. A copy-labeled canned replay log may appear later on `/work/translatelive` only. It is not identity, not homepage, not Monaco, not orange. Slice 0 does not include it.

6. **Night mode — `theme-alternatives.md` “document night invert later” vs stack “follow `prefers-color-scheme` if two palettes.”** **Paper only in v1.** Invert is a post-v1 enhancement, not a second brand.

7. **Nothing’s four principles vs this record’s two.** `theme-nothing.md` offered inside-out, spec-sheet, high-contrast field, and glanceable Glyph-like status. **Only identity-as-format and spec-sheet are taken.** OLED field, Glyph chrome, and transparent-hardware skin are banned. Internals still appear as IA-safe spec figures — that is content, not Nothing principle A as a look.

---

## Build slice 0

**Name:** Document shell + Clause 1 Scope (homepage first viewport).

After the plan is approved, build this and nothing else:

1. Astro latest stable, `output: 'static'`, TypeScript strict, Node 22 LTS, npm. Empty scaffold — no Tailwind, no React.
2. `src/styles/tokens.css` with the color, type, and space tokens in this record. `@layer reset, tokens, base, components, utilities`.
3. Self-host the four Plex woff2 files + `OFL.txt`. Astro local font provider. Preload Sans 400 only.
4. `Base.astro`: `lang="en"`, skip link, landmarks, running header, footer with the confidentiality one-liner. 0 radius, hairlines, paper canvas.
5. `src/pages/index.astro` **first viewport only** (IA §2.4 / §4.1.A), typeset as **Clause 1 Scope**:
   - Sudheer Singh
   - AI Systems Builder
   - Confirmed short phrase
   - Scientist-B, C-DOT · New Delhi
   - Four-metric proof strip: **99.99%** · **40% faster** · **millions/day** · **&lt;3s** (exact brief wording; numerals first; source tokens)
   - Now: ClauseNotebook, In progress, Stage 1 ingestion
   - CTA: visible email, resume, GitHub, LinkedIn
6. No other routes. No `#work` list. No case study. No form. No JS island. No images (LCP is type).

**Gate before any next slice:**

- 360 and 1280: a stranger answers what he does, employer, one proof, how to email, in ~6–10s without scrolling.
- View-source: **no** client JS. Fonts are not from Google.
- Contrast 4.5:1; 3px stamp focus ring; skip link works; 200% zoom; no horizontal scroll at 320.
- Screenshot already fails the banned-list test (not Inter/glass/three cards; not Ndot/red-on-black; not an IDE).
- `npm run build` emits `dist/`.

**Next slices (ordered, not this record’s job to build):** rest of homepage (clauses 2–5 + annexes) → `/work/clausenotebook` as the first full spec document → TranslateLive → distributed-social → SEO/OG → Playwright/Lighthouse CI → Cloudflare Pages.

Stack-report slices 0–2 (empty scaffold, generic shell, generic hero) are **replaced** by this theme-proving slice 0. Later stack slices (quality automation, hosting) still apply after the pages exist.

---

## Confidence

**High (0.85)** on the theme pick, the two-plus-two absorption, IA confirmation, and stack confirmation. `theme-alternatives.md` ranking is accepted. No contradiction was found that would promote Field Instrument.

**High** that paper + Plex superfamily + stamp red will not read as a Nothing clone if dots, OLED, Ndot, and `#C8102E` stay gone. `#B42318` on paper is a document stamp, not a phone brand.

**Medium (0.7)** on `--ink-muted` contrast until it is checked in a browser. If it fails 4.5:1, darken that token only. Do not lighten `--ink`. Do not switch to teal.

Gaps that do **not** reopen this decision: custom domain, headshot existence, TranslateLive README vs brief (content hygiene), NSSAAF TS number (IA §6.5), written C-DOT clearance.

If a mock violates the lock sentence, it is a mashup. Kill it.
