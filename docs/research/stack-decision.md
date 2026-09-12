# Stack, motion, and quality bar — Sudheer Singh portfolio

**Subject:** Sudheer Singh, New Delhi. AI systems / backend engineer (C-DOT Scientist-B). Audience: hiring managers and senior engineers at product companies hiring AI/LLM engineers. Constraint from the brief: unique visual identity (Nothing-inspired, JDoodle-inspired, or spec/lab-notebook), **not** a generic Next.js + Tailwind template. Static or cheap to host. Fast, accessible, mobile-usable. Content only from the profile brief and sibling `../profile` files.

**Workspace:** `/Users/tereishqmein/Dev/v2/portfolio` (git init on `main`, otherwise empty). Canonical bio lives in `/Users/tereishqmein/Dev/v2/profile/` and is **copied into this repo**, not imported at build time from outside the tree.

**Date:** 2026-09-12.

---

## 1. Sources

Primary / official (used for decisions):

- Astro islands, images, fonts, GitHub Pages deploy, view transitions: [docs.astro.build](https://docs.astro.build/en/concepts/islands/), [images](https://docs.astro.build/en/guides/images/), [fonts](https://docs.astro.build/en/guides/fonts/), [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [view transitions](https://docs.astro.build/en/guides/view-transitions/).
- Cloudflare Pages Astro preset (`npm run build` → `dist`): [developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/), [build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).
- WCAG 2.2 (AA is the bar): [W3C How to Meet WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/). New AA items used below: 2.4.11 Focus Not Obscured, 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum) 24×24 CSS px.
- Core Web Vitals 2026 (unchanged thresholds; INP replaced FID in 2024): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. [web.dev / CrUX reporting](https://httparchive.org/reports/chrome-ux-report).
- SIL Open Font License use on the web: [openfontlicense.org/how-to-use-ofl-fonts](https://openfontlicense.org/how-to-use-ofl-fonts). IBM Plex OFL-1.1: [github.com/IBM/plex](https://github.com/IBM/plex). Geist OFL-1.1: [github.com/vercel/geist-font](https://github.com/vercel/geist-font). Space Grotesk OFL: [github.com/floriankarsten/space-grotesk](https://github.com/floriankarsten/space-grotesk).
- Motion sizes and WAAPI: [motion.dev/docs/gsap-vs-motion](https://motion.dev/docs/gsap-vs-motion) (`animate` mini ~2.3–2.6 kb; full ~18 kb; GSAP ~23 kb). CSS scroll-driven animations: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations); **not Baseline** — Firefox still unflagged as of 2026-09 ([Can I Use](https://caniuse.com/wf-scroll-driven-animations): Chrome 115+, Safari 26+, Firefox ❌).
- Playwright visual snapshots: `expect(page).toHaveScreenshot()` with `animations: 'disabled'`.

2026 comparison pieces (used for tables, treated as secondary):

- Astro vs Next for content/portfolios: UnfoldCMS (2026-06), LogRocket (2026-04), SoloDevStack (2026-02), BitDoze (2026-07), Inhaq CIR heuristic (2026-01). Consensus: Astro for content sites; Next.js when the site is an app.
- SSG landscape: Talos “9 Best Static Site Generators in 2026”; Eleventy performance tables (11ty.dev/docs/performance — note: 4k-Markdown numbers are from 2022).
- Styling: Solid Web Tailwind vs vanilla CSS (2026-02); Kunal Ganglani Tailwind vs CSS Modules (2026-05) — custom art-direction is cleaner in CSS than in utilities.
- Hosting: SpeedVitals Cloudflare vs Vercel (2026-06); Klymentiev free hosting (updated 2026-09-11); ecn-apps TTFB table (2026-05). Cloudflare Pages: unlimited free bandwidth, stronger APAC TTFB.
- Fonts / GDPR: German courts treated Google Fonts CDN IP leakage as a GDPR issue (LG München I, 2022). Self-hosting removes the third-party request. Performance: extra DNS+TLS to fonts.googleapis.com typically costs 100–400 ms on LCP (SOSEI, Constellate).
- Animation INP cost (Mintec, 2026-06, production Next.js traces — treat as directional, not gospel): CSS/WAAPI 0 kb / 0 ms INP; GSAP core ~23 kb gzip + 8–15 ms; Framer Motion tree-shaken ~34 kb + 30–50 ms.

Subject brief: `/var/folders/74/05xt1bf56nxb33y5frh_j5rh0000gn/T/grok-tereishqmein/profile-brief.md`. Session memory: distinctive brand-inspired look; build and test one site part at a time; content from `../profile`.

---

## 2. Comparison tables

### 2.1 Frameworks

| Criterion | **Astro (static)** | Next.js App Router | Vite + React | Eleventy (11ty) | Plain HTML/CSS |
|---|---|---|---|---|---|
| Default JS shipped | **0 kb**; islands opt-in | React runtime on every page (~50–95 kb gzip typical) | Full SPA (~150 kb+) | 0 kb | 0 kb |
| Fit for this site | **Content + one or two islands** (nav, contact). CIR ~90–95% | Overkill. Site is not an app. | SPA hurts first load / SEO; hiring managers bounce | Philosophically closest to “just HTML”, but you wire images, fonts, scoped CSS, TS yourself | Fine for a 1-page brochure; painful for shared layout, typed content, image pipeline, incremental slices |
| Typed content | Content collections + Zod schemas | DIY | DIY | Collections, untyped unless you add it | None |
| Image pipeline | Built-in `<Image>` / `<Picture>` + Sharp at **build time** | `next/image` needs a server or paid image optimizer | Plugin (vite-imagetools) | DIY | DIY |
| Fonts | Fonts API: local/Fontsource, preload, fallback metrics | `next/font` (Vercel-shaped) | DIY | DIY | DIY |
| Hosting | Any static host; `dist/` | Vercel-native; static export is a subset and fights App Router features | Static `dist/` | Static | Static |
| Looks like a 2026 template? | Less so, if you skip Tailwind/React | **Yes — this is the default “dev portfolio” stack** | Yes if using typical Vite+Tailwind starters | No | No |
| Incremental build | File-based pages + layout; add a page/component per slice | App Router layouts work, but the toolchain is heavier than the site | Component tree from day one | Templates work | Copy-paste layouts |
| Sudheer’s TS/NestJS skill | `.astro` is HTML-first; TS in frontmatter. Low frontend-framework demo risk | High risk of looking like a React résumé | High | Lowest framework surface | Lowest |

**Verdict in this row:** Astro. Next.js is the wrong center of gravity (app, not document). Vite+React is the wrong runtime model. 11ty and plain HTML lose the image/font/TS pipeline that a *crafted* visual system still needs. Astro is the simplest stack that still has those pipes and ships zero JS until we ask.

### 2.2 Styling

| Criterion | **Vanilla CSS + tokens** | Tailwind v4 | CSS Modules | UnoCSS |
|---|---|---|---|---|
| Unique visual system (Nothing / JDoodle / lab notebook) | **Best.** Art-directed type, grids, rules, stamps, hairlines live in CSS | Fights the brief. Utility soup reads as “every other 2026 portfolio.” Arbitrary values become a second language | Fine encapsulation; extra file per component; Astro already scopes `<style>` | Custom presets can look unique, but you still think in utilities and add a compiler |
| Bundle | Small if you write only what you use; `@layer` keeps cascade honest | Purged, often 3–8 kb gzip | Small | Smallest atomic output |
| DX for this author | Sudheer is a backend/AI engineer. A 80-line token file + scoped component CSS is learnable and inspectable | Fast for product UI, slow for a one-off art direction | Extra ceremony | Extra ceremony + smaller community |
| Theme-agent swap | Change `tokens.css`; components inherit | Theme config + class churn | Token file + modules | Preset rewrite |
| Matches “not a frontend-framework demo” | **Yes** | No | Mostly | No |

**Verdict in this row:** Vanilla CSS with a single token file, `@layer reset, tokens, base, components, utilities`, and Astro scoped styles. A *tiny* home-grown utility layer (spacing, vis-hidden) is allowed. Tailwind, UnoCSS, CSS-in-JS, and shadcn are out.

### 2.3 Motion

| Criterion | **CSS only** | Motion mini (`motion/mini`) | GSAP | Framer Motion / Motion React |
|---|---|---|---|---|
| Gzip JS | **0** | ~2.3–2.6 kb | ~23 kb core; +ScrollTrigger ~30 kb | ~34–46 kb |
| Thread | Compositor (transform/opacity) | WAAPI → compositor | Main thread (most tweens) | Mixed; React scheduler involved |
| `prefers-reduced-motion` | One media query | Must be wired in JS | `gsap.matchMedia` | Must be wired |
| Crafted, not heavy | **This is the hiring-manager bar** | Allowed later for one sequenced island | Feels like an awards site / frontend demo | Requires React island; overkill |
| Scroll-linked | CSS `animation-timeline: view()` **inside `@supports`** (Firefox still no, 2026-09) | `scroll()` uses ScrollTimeline where present | ScrollTrigger is the gold standard and we do not need it | `useScroll` |
| Page transitions | Native CSS `@view-transition { navigation: auto }` (progressive) | n/a | n/a | n/a |

**Verdict in this row:** CSS-only. Do not add a motion library in slice 0–6. Optional later: Motion mini as a single Astro island if a case-study diagram needs sequenced steps CSS cannot express. GSAP and Framer Motion are banned for this site.

### 2.4 Hosting

| Criterion | GitHub Pages | **Cloudflare Pages** | Vercel |
|---|---|---|---|
| Model | Static CDN from the repo | Static (+ Workers if we ever need them) | App platform |
| Free bandwidth | ~100 GB/mo soft | **Unlimited** | 100 GB/mo hard |
| Free commercial use | Personal/project | **Allowed** | Hobby: personal-use restriction |
| APAC TTFB (Sudheer in Delhi; hiring managers global) | Weakest of the three | **Best** (330+ cities; published APAC TTFB ~19–50 ms vs Vercel ~80 ms in secondary benches) | Good in US/EU |
| Astro static | Official `withastro/action@v6`; needs `site` + often `base: '/repo'` | Preset: `npm run build`, output `dist`. **No adapter** if fully static | Works; overkill |
| Previews | Manual | Git-connected preview deploys | Best-in-class PR previews |
| Lock-in | Lowest | Low (it's a `dist/` folder) | Highest (Next-shaped habits) |

**Verdict in this row:** Cloudflare Pages as production target. GitHub Pages as documented fallback (same `dist/`, official Action). Do not start on Vercel — it nudges the stack toward Next and is worse for unmetered/APAC.

---

## 3. Recommended stack with rationale

Sudheer is a backend/AI engineer. The site should look **obsessively well-made**, like a spec you would trust, not like a framework demo. The distinctive theme (Nothing, JDoodle, or lab-notebook) is art direction. Art direction wants CSS, not utilities. The content is a handful of pages plus two or three case studies. Interactivity is: mobile nav, maybe a theme-respecting motion, a contact form that POSTs to a third party. That is a static document with optional islands.

### Chosen stack (locked)

| Layer | Choice |
|---|---|
| Runtime / pages | **Astro, latest stable, `output: 'static'`**. No SSR adapter. Node **22 LTS**. npm + `package-lock.json`. |
| UI islands | **None on day one.** If mobile nav or a form helper needs JS, a vanilla `<script>` in an `.astro` file — not React. |
| Styling | **Vanilla CSS.** `src/styles/tokens.css` is the design system. Component styles live in the `.astro` file. Colors in **oklch**. Type scale and spacing as custom properties. |
| Motion | **CSS only.** Global `prefers-reduced-motion: reduce` kills animation/transition. Scroll-driven effects only inside `@supports (animation-timeline: view())` and never required for meaning. |
| Language | **TypeScript** (`strict`). Content collections typed. `src/data/site.ts` is the single identity module. |
| Hosting | **Cloudflare Pages** (Git-connected, build `npm run build`, output `dist`). GitHub Pages workflow checked in as fallback. |
| Fonts | **Self-hosted OFL woff2** via Astro Fonts API (`fontProviders.local()`), latin subset, 2 families, 2–3 weights. See §3.1. |
| Images | Astro `<Picture formats={['avif','webp']}>` from `src/assets/`. LCP image: `loading="eager"` + `fetchpriority="high"` + width/height. Everything else lazy. SVG inlined as components. Sharp at build time (Cloudflare Pages build image supports it; we are **not** using the Cloudflare adapter, so no passthrough service). |
| Content | Markdown/YAML collections copied from `../profile`. No CMS. No live fetch. |
| Contact | `mailto:singhsudheer215@gmail.com` plus LinkedIn/GitHub. Optional static form POST to **Web3Forms or Formspree** (free tier, no backend). Never a custom API. |
| SEO | `site` in `astro.config.mjs`, `@astrojs/sitemap`, `robots.txt`, per-page title/description, Open Graph PNG, JSON-LD `Person`. |

### Why this is the simplest stack that can still be unique

- **Astro vs Next:** 2026 content-site consensus is Astro. Next.js ships a React runtime Sudheer does not need and is the visual cliché the brief forbids. Static Astro deploys for $0 at any traffic.
- **Astro vs 11ty / HTML:** 11ty and HTML can hit 100 Lighthouse. They will not give us typed case-study schemas, a first-class `<Picture>` pipeline, or the Fonts API without a pile of plugins. That pile *is* a framework; Astro already is one, and a small one.
- **CSS vs Tailwind:** The brief is explicit. Tailwind is how “dark glass + purple gradient + three cards” happens. A lab-notebook or Nothing-like system is hairlines, modular type, numbered sections, mono annotations — CSS.
- **CSS vs GSAP/Framer:** Hiring managers on a 4G phone in Bangalore or a laptop in SF should feel *craft*, not download 30 kb of tween engine. CSS transitions + one reduced-motion query is the quality bar.
- **Cloudflare vs GitHub Pages vs Vercel:** Same `dist/`. Cloudflare wins on APAC TTFB and unlimited bandwidth. GitHub Pages remains a one-file-workflow fallback so the site never depends on a second vendor’s dashboard. Vercel is unused.

### 3.1 Font loading strategy (decision)

**Do not** load from fonts.googleapis.com / fonts.gstatic.com. Extra connection, extra LCP, and a GDPR-sensitive third-party IP request.

**Do:**

1. Check the theme agent’s pairing (see substitutes). Default if the theme agent has not picked yet:
   - **Body / UI:** IBM Plex Sans (SIL OFL 1.1, Reserved Font Name “Plex”) — engineered, not Inter-generic, matches a standards/telecom engineer.
   - **Code / spec chrome:** IBM Plex Mono (same license).
2. Commit `woff2` files + `OFL.txt` under `src/assets/fonts/`. Register them with Astro `fontProviders.local()`, `cssVariable: '--font-sans' | '--font-mono'`, latin subset, weights **400 and 600** only (add italic 400 only if body copy actually uses it).
3. In `Base.astro`: `<Font cssVariable="--font-sans" preload />` for the **single** above-fold file (regular). Do not preload mono or bold.
4. `font-display: swap` (Astro default). Keep Astro **optimized fallbacks** on so metric-adjusted Arial/Georgia stand-ins hold CLS near 0.
5. Cap at **two families, three files** on the home LCP path. Variable fonts are allowed if one file replaces two weights *and* the file is smaller; measure.

**Theme-agent substitutes (all OFL, self-host the same way):**

| Theme | Display / body | Mono | Forbidden |
|---|---|---|---|
| Spec / lab notebook (default) | IBM Plex Sans | IBM Plex Mono | Inter, Roboto, system-only (too generic for a distinctive site) |
| Nothing-inspired | Space Grotesk or Geist Sans | IBM Plex Mono or Geist Mono | Nothing’s **NType82 / NDot** (proprietary; do not embed, do not clone as a webfont) |
| JDoodle-inspired | Geist Sans or Space Grotesk | Geist Mono | Comic display fonts; anything not OFL/Apache |

System fonts are a **fallback stack only**, not the brand.

### 3.2 Image strategy

- Source files in `src/assets/images/` (processed) vs `public/` (favicon, `robots.txt`, OG that must be a stable URL).
- Photographs / screenshots: `<Picture formats={['avif','webp']}>` with `widths` 480 / 800 / 1200 (hero may add 1600). `sizes` must be honest.
- Diagrams / UI chrome: SVG components, `currentColor`, no bitmap.
- Always `width` + `height` (or `layout="constrained"`) to kill CLS.
- One `fetchpriority="high"` per page, on the LCP element. If the LCP is **text** (likely for this identity — a headline, not a photo), do **not** preload a hero image.
- No remote CMS images. No unsplash. No generated “AI portraits.” If a headshot exists in `../profile`, copy it; if not, the hero is typographic.
- Case-study figures: real screenshots of ClauseNotebook / TranslateLive / architecture diagrams. Invented metrics and fake repo shots are forbidden by the brief.

### 3.3 TypeScript

Use it. Astro’s default, Sudheer already writes TS (NestJS), hiring managers who open the repo should see the same discipline as his backends: typed `site.ts`, Zod collections, no implicit `any`. Do not add React types. `tsconfig` extends `astro/tsconfigs/strict`.

---

## 4. Folder structure

Actual paths under `/Users/tereishqmein/Dev/v2/portfolio/`:

```
portfolio/
  astro.config.mjs
  tsconfig.json
  package.json
  package-lock.json
  README.md                         # run, deploy, content-sync notes only
  public/
    favicon.svg
    robots.txt
    og/default.png                  # 1200×630, generated later
    CNAME                           # only if GH Pages custom domain
  src/
    env.d.ts
    assets/
      fonts/
        ibm-plex-sans-400.woff2
        ibm-plex-sans-600.woff2
        ibm-plex-mono-400.woff2
        OFL.txt
      images/                       # photos, screenshots (processed)
      icons/                        # svg
    content/
      config.ts                     # collections + Zod
      work/                         # C-DOT, education if needed
      projects/                     # ClauseNotebook, TranslateLive, social backend
    data/
      site.ts                       # name, email, phone, socials, headline — from brief
    styles/
      reset.css
      tokens.css                    # color, type, space, elevation, motion durations
      global.css
      motion.css                    # keyframes + reduced-motion + @supports scroll
    layouts/
      Base.astro                    # html, head, Font, skip link, landmarks
      CaseStudy.astro
    components/
      chrome/
        SkipLink.astro
        Header.astro
        Nav.astro
        Footer.astro
      hero/
        Hero.astro
      work/
        WorkList.astro
        WorkItem.astro
      projects/
        ProjectList.astro
        ProjectCard.astro
      contact/
        ContactBlock.astro
        ContactForm.astro           # only if third-party form is added
    pages/
      index.astro
      work/
        index.astro
        [slug].astro
      projects/
        index.astro
        [slug].astro
      contact.astro
    scripts/                        # empty until an island is justified
  tests/
    visual/                         # Playwright, added in slice 8
    a11y/                           # axe smoke, added in slice 8
  .github/
    workflows/
      lighthouse.yml                # on PR / main
      pages.yml                     # GH Pages fallback only
```

**Content sync rule:** copy, do not import. A human (or a later script) copies facts from `/Users/tereishqmein/Dev/v2/profile/` into `src/data/site.ts` and `src/content/**`. The portfolio repo must build on a machine that does not have `../profile`.

**Do not create:** `src/pages/api/`, `src/middleware.ts`, `src/components/ui/` (shadcn), `tailwind.config.*`, `three/`, a CMS folder.

---

## 5. Incremental build slices

Each slice is independently testable in a browser (`npm run dev`, then `npm run build && npm run preview`). Do not start the next slice until the current one passes its gate. Visual check means: look at it, tab through it, resize it — not “the code compiles.”

### Slice 0 — Scaffold (no visual identity yet, but tokens exist)

**Build:** `npm create astro@latest` (empty / minimal, TypeScript, strict). Set `output` static. `site` placeholder. Token file with *temporary* neutrals (theme agent will replace). Fonts wired. `Base.astro` with `lang="en"`, skip link, one `<h1>Sudheer Singh</h1>`.

**Test:** `http://localhost:4321` renders. View-source shows **no** client JS. Lighthouse home ≥ 95 performance already (empty page). Fonts do not come from Google.

### Slice 1 — Shell (chrome)

**Build:** Header, footer, nav (Work, Projects, Contact), skip link target `#main`, landmarks (`header`, `nav`, `main`, `footer`). Mobile: CSS-only or a 20-line `<script>` disclosure button (`aria-expanded`, `aria-controls`). No hamburger library.

**Test in browser:** 360 / 768 / 1280. Keyboard: Tab order matches visual order. Focus ring visible (3 px, 3:1 against adjacent). Sticky header must **not** fully cover focused items (WCAG 2.4.11). Reduced-motion: if any open/close animation exists, it dies. Targets ≥ 24×24 (prefer 44×44).

### Slice 2 — Hero

**Build:** Headline from the brief (“AI engineer with three years building high-availability backends…”), name, location, primary CTA (Work or Contact). Typographic LCP unless a real headshot exists. No three.js, no particle field, no looping video.

**Test:** LCP element identified in DevTools Performance. Lab LCP ≤ 1.5 s on Simulated Fast 4G. CLS ≤ 0.05 (font fallback metrics). Contrast 4.5:1. Screenshot at 360 and 1280 saved into `tests/visual/baselines/` by hand (Playwright comes in slice 8).

### Slice 3 — Work (C-DOT)

**Build:** `src/content/work/` entries from the brief only. List on `/work` and a home section. Proof numbers exactly as given (99.99% uptime, 40% faster queries, 70% less manual effort). NSSAAF citation: do not invent TS numbers; if cited, flag the Anima note from the brief.

**Test:** Semantic list/headings. Links have unique accessible names. Mobile wrapping of long telecom terms. Print-ish lab-notebook or Nothing chrome must not hide body text.

### Slice 4 — Projects index

**Build:** ClauseNotebook, TranslateLive, Distributed Social Media Backend. Real GitHub URLs only (`sudheer215s/...`). Cards are not the generic three-column glassmorphism grid — layout follows the chosen theme.

**Test:** Same as slice 3. External links `rel="noopener"`; GitHub links announce they open GitHub.

### Slice 5 — Case study template + one study

**Build:** `CaseStudy.astro` + `[slug].astro`. First study: **ClauseNotebook** (flagship). Provenance-first copy from the brief; no overclaim. Optional: one architecture SVG.

**Test:** Reading width ~60–70 ch. Headings outline is logical (`h1` title, `h2` sections). Images have real alt. Back-to-index link. Page is usable with CSS disabled (content order).

### Slice 6 — Remaining case studies + contact

**Build:** TranslateLive + social backend studies. `/contact`: email, phone, LinkedIn, GitHub. Optional Web3Forms/Formspree: labels, `autocomplete`, error text not color-only, no CAPTCHA that blocks (WCAG 1.1.1). `mailto` remains if the form vendor is down.

**Test:** Form keyboard + VoiceOver/TalkBack smoke. 2.5.8 on submit. No dragging-only UI (2.5.7).

### Slice 7 — SEO / social / sitemap

**Build:** Unique titles/descriptions, OG image, JSON-LD Person (name, jobTitle, email, sameAs GitHub+LinkedIn, alumniOf MANIT, worksFor C-DOT — all from the brief). `@astrojs/sitemap`. `robots.txt` allows `/`.

**Test:** Rich Results tester / Open Graph debugger. `sitemap.xml` lists every public URL.

### Slice 8 — Quality automation (after the site exists)

**Build:** Playwright `toHaveScreenshot` at 390 and 1280 for home, one work page, one case study, contact; `animations: 'disabled'`. `axe-core` smoke. GitHub Action Lighthouse CI on the preview URL. Cloudflare project connected.

**Test:** CI red if a11y or performance gate fails. Baselines committed.

**Deploy:** Cloudflare Pages production from `main`. Custom domain when Sudheer has one. GitHub Pages workflow present but unused unless CF is unavailable.

---

## 6. A11y, performance, SEO gates

These are **merge gates**, not aspirations. Theme work cannot violate them.

### Accessibility — WCAG 2.2 **AA** (plus two AAA extras we will keep because they are cheap)

| Gate | Rule |
|---|---|
| Conformance | WCAG 2.2 Level AA on every shipped page |
| 1.4.3 Contrast | Text 4.5:1; large text 3:1; UI 3:1 (1.4.11) |
| 2.4.7 Focus visible | Custom `:focus-visible` ≥ 2 px, offset 2 px, 3:1 vs adjacent. We will also meet **2.4.13 Focus Appearance (AAA)** because a 3 px ring is free. |
| 2.4.11 Focus not obscured | Sticky chrome may not fully hide the focused control |
| 2.5.8 Target size | 24×24 CSS px minimum; **prefer 44×44**. Nav, buttons, icon links. |
| 2.5.7 Dragging | No drag-only interaction |
| 2.3.3 / 2.2.2 Motion | `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; scroll-timeline: none; } }`. Decorative motion never required to understand content. Pause any >5 s animation. |
| 1.1.1 Alt | `<Image>` / `<Picture>` `alt` required. Decorative: `alt=""`. |
| 1.3.1 Structure | Landmarks, one `h1`, lists as lists, form labels |
| 1.4.4 / 1.4.10 | Text 200% zoom; no horizontal scroll at 320 CSS px except overflow tables with a note |
| 2.4.1 Skip link | First focusable control |
| 3.1.1 Language | `html lang="en"` |
| Keyboard | All actions without a pointer. No keyboard trap. |
| Reduced-data | No autoplay video/audio |

Manual: keyboard-only pass; one VoiceOver or TalkBack pass on home + contact before launch.

### Performance

Lab (Lighthouse mobile, simulated 4G, production build):

| Metric | Gate | Stretch |
|---|---|---|
| Performance | **≥ 95** | 100 |
| Accessibility | **100** | 100 |
| Best Practices | **100** | 100 |
| SEO | **100** | 100 |
| LCP | **≤ 1.8 s lab** (field good is 2.5 s) | ≤ 1.2 s |
| CLS | **≤ 0.05** | 0.00 |
| TBT (INP proxy) | **≤ 50 ms** | 0 |
| INP (field, if CrUX appears) | **≤ 200 ms** | ≤ 100 ms |
| Transfer home (gzip, no video) | **≤ 200 kb** | ≤ 120 kb |
| JS on home | **0 kb** until an island is justified; hard cap **15 kb** gzip | 0 |
| Fonts on home | **≤ 3 files, ≤ 80 kb** total | 2 files |

Implementation rules that make those numbers:

- No client router on day one (`ClientRouter` is JS). If page morphs are wanted later, prefer native CSS `@view-transition { navigation: auto }` first.
- No analytics until post-launch; if added, Plausible/Cloudflare Web Analytics, never GA4 in the critical path.
- No webfont from a third-party origin.
- No hydration of React/Vue/Svelte.

### SEO

- One `h1`, unique `<title>` (`Sudheer Singh — AI Systems Builder` pattern), unique meta description.
- Canonical = `site` + pathname.
- `Person` JSON-LD; do not add `sameAs` we cannot prove.
- Sitemap + robots.
- No cloaking, no keyword stuffing, no invented employers.

### Reduced motion — explicit contract

| User setting | Site behavior |
|---|---|
| No preference | Subtle CSS: 150–300 ms opacity/transform, ease-out. Scroll-driven **enhancement** only. |
| `prefers-reduced-motion: reduce` | Instant state changes. No parallax, no view-transition animation, no staggered reveals. Content already in final position (never `opacity: 0` without the `@supports`+motion query pair). |
| `prefers-reduced-motion: reduce` + JS island | Island must no-op animation. |

### Mobile breakpoints

Use **content-driven** CSS (container queries where a component owns its layout). Global viewport gates for QA:

| Name | Width | Must not break |
|---|---|---|
| small | **360** (also spot-check **320**) | Nav, hero type, contact |
| medium | **768** | Two-column → one |
| large | **1024** | Shell + reading column |
| xl | **1280** | Max measure; do not stretch body text past ~70 ch |

No orientation lock (1.3.4). Thumb-reachable primary CTA on small.

---

## 7. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Theme agent picks a look that needs heavy JS (WebGL, scroll-pinning, canvas noise) | Medium | **Reject.** Theme must express in CSS + SVG. Nothing/JDoodle/lab-notebook all can. |
| Nothing NType82 / NDot temptation | High if the theme is Nothing-inspired | Use Space Grotesk / Geist. Do not clone the proprietary faces. |
| Tailwind sneaks in via a starter | High | Scaffold empty. No `@astrojs/tailwind`. |
| Astro `ClientRouter` added “for polish” | Medium | Forbidden until slice 8 review. Native CSS view transitions first. |
| CSS scroll-driven animations as the only reveal | Medium | Firefox users (and older iOS) would see blank/hidden content. Always paint the final state; enhance inside `@supports`. |
| GitHub Pages `base` path vs Cloudflare root | Medium | Prefer a custom domain on Cloudflare so `base` stays `/`. If falling back to `username.github.io/portfolio`, set `base` and prefix links. |
| Font CLS from `font-display: swap` | Medium | Astro optimized fallbacks + preload one file + max 2 weights. |
| Form vendor becomes the “backend” | Low | `mailto` always works; form is optional progressive enhancement. |
| Content drift vs `../profile` | High over time | Slice 0 README: “copy, don’t import.” No invented numbers. |
| Lighthouse 100 worship vs craft | Medium | 95/100/100/100 is the gate. Do not delete the visual system to chase 100 performance. |
| Playwright flakiness | Medium | Slice 8 only; `animations: 'disabled'`; element-level shots first. |
| Over-claiming AI depth in case studies | High (career risk) | Case-study copy is sourced from the brief; ClauseNotebook is “in progress.” |

---

## 8. Verdicts as numbered decisions

1. **Framework:** Astro, latest stable, `output: 'static'`, no SSR adapter, no React/Vue/Svelte until a written exception. Node 22 LTS. npm.

2. **Styling:** Vanilla CSS with `src/styles/tokens.css` + `@layer` + Astro scoped styles. **Not** Tailwind, UnoCSS, CSS Modules-as-a-system, or CSS-in-JS.

3. **Motion library:** **CSS-only.** `prefers-reduced-motion` is mandatory. Scroll-driven CSS is progressive enhancement. Motion mini is the only later exception (one island, <3 kb). **No GSAP. No Framer Motion.**

4. **Language:** TypeScript, `strict`.

5. **Hosting target:** **Cloudflare Pages** (production). GitHub Pages Action as fallback. Not Vercel.

6. **Font loading:** Self-hosted OFL `woff2` via Astro Fonts API (local provider). Default pairing **IBM Plex Sans + IBM Plex Mono**. Theme agent may swap to Space Grotesk or Geist (still OFL, still self-hosted). **No Google Fonts CDN. No Nothing proprietary faces.** Preload one above-fold file. `font-display: swap` + metric-adjusted fallbacks.

7. **Repo folder structure:** As listed in §4 (paths under `/Users/tereishqmein/Dev/v2/portfolio/`). Content collections for work/projects; `src/data/site.ts` for identity; `src/styles/` for the design system; `src/components/{chrome,hero,work,projects,contact}/`.

8. **Quality gates:** Lighthouse mobile **95 / 100 / 100 / 100**; lab LCP ≤ 1.8 s; CLS ≤ 0.05; TBT ≤ 50 ms; home JS 0 kb (cap 15 kb); WCAG **2.2 AA**; target 24×24 (prefer 44); focus not obscured; 360 / 768 / 1024 / 1280; reduced-motion kills animation. Visual test after every slice in a real browser; Playwright snapshots in slice 8.

9. **What NOT to use, and why:**
   - **Next.js / Vite+React SPA / Remix:** Wrong runtime; template look; extra JS.
   - **Tailwind / shadcn / DaisyUI:** Brief forbids the generic look; art direction loses.
   - **CMS (Sanity, Contentful, Keystatic, Notion):** A dozen pages, one author, content already in git markdown. A CMS is a second system to keep honest.
   - **Backend, auth, DB, serverless contact API:** Email exists. Forms go to a hosted form vendor or `mailto`.
   - **three.js / R3F / WebGL / particle heroes:** Unjustified for a backend/AI résumé; wrecks INP/LCP; reads as frontend-flex.
   - **GSAP, Framer Motion, AOS, Locomotive Scroll, Lenis:** Weight and motion-sickness; CSS covers the need.
   - **Astro Cloudflare/Node adapter:** We are static. Adapters add a runtime we will not use.
   - **Google Fonts / Adobe Fonts CDN:** Privacy + LCP.
   - **GA4, Intercom, cookie banners:** No tracking until post-launch; no cookie wall.
   - **MDX on day one:** Markdown + `.astro` components. Add MDX only if a case study must embed a live widget.
   - **Dark-mode as a product feature:** Follow `prefers-color-scheme` if the theme has two palettes; do not ship a novelty toggle that fights the art direction.
   - **Invented metrics, fake repos, stock Unsplash heroes, AI portraits.**

---

## 9. Confidence and gaps

**Confidence**

- Framework / static hosting / no-CMS / no-backend / no-three.js: **high** (0.9). 2026 sources and the brief agree.
- CSS-over-Tailwind for this identity: **high** (0.85). The brief names the failure mode.
- CSS-only motion: **high** (0.85). Hiring-manager sites should feel tight; Firefox gap is handled by `@supports`.
- Cloudflare over GitHub Pages as primary: **medium-high** (0.8). Both work; CF is better for India/global TTFB and unmetered traffic. If Sudheer wants “only GitHub, no extra account,” GH Pages is an acceptable demotion — the build artifact does not change.
- IBM Plex as default pairing: **medium** (0.65). Correct legally and tonally for a spec/lab reading; the **theme agent may override** with Geist or Space Grotesk. That is expected, not a stack change.
- Skipping `ClientRouter`: **medium-high** (0.8). Native view transitions are enough; SPA routing is how JS creeps back.

**Gaps (do not block this stack; block later slices)**

- Theme not chosen yet (Nothing vs JDoodle vs lab-notebook). Stack is theme-agnostic; tokens and type pairing wait on that agent.
- No custom domain decided. Affects `site` / `base` / `CNAME` only.
- Unknown whether a real headshot or project screenshots exist in `../profile`. Hero may be type-only.
- NSSAAF spec number conflict is already flagged in the brief; case-study copy must not invent TS 29.509 vs 29.526.
- Playwright/Lighthouse CI needs a public preview URL (Cloudflare preview or `astro preview` in Actions). Wire in slice 8, not slice 0.
- Form vendor (Web3Forms vs Formspree vs mailto-only) can be chosen in slice 6.
- Exact Astro minor version should be “current stable at scaffold time”; do not pin a number in this document that will rot.

**Non-goals for v1:** blog, CMS, i18n, auth, CMS-driven OG, view-transition SPA, dark-mode marketing, animation awards.

This stack is intentionally boring as engineering and strict as design: static HTML, typed content, a real CSS system, and a cheap global CDN. The uniqueness has to come from the theme, the type, and the writing — which is the point.
