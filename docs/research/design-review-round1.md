# Design Document Review: Sudheer TS 00.001 — Personal engineering portfolio

**Reviewer:** staff engineer (design-review round 1)  
**Canonical doc:** `/var/folders/74/05xt1bf56nxb33y5frh_j5rh0000gn/T/grok-tereishqmein/grok-design-doc-fcf8af0f.md`  
**Repo copy:** `/Users/tereishqmein/Dev/v2/portfolio/docs/DESIGN.md`  
**Date:** 2026-09-12

Copies are **identical** (1412 lines, SHA-1 `de5d9368c9ad435abd48fa7305cb0e02bb54051b`). No divergence issue.

## Summary

**Needs revision.** This is a strong, lock-respecting implementation contract: tokens, routes, copy facts, NSSAAF handling, font legality, and the slice/PR map are specific enough that an engineer could scaffold PR0 *after* a short revision. It does **not** reopen the art-direction, IA, or stack locks. It is **not** ready to implement as written: the PR0 merge gate (first viewport at 360 without scrolling) has no composition spec that can pass it, the font-preload sketch fights the LCP rule, `Base.astro` and the PR0 file list disagree, work-item data is dual-sourced with unmapped table rows, and the PR plan sequences `/resume.pdf` and PR5 dependencies incorrectly.

Verified against the greenfield workspace (`.git` + `docs/` only; no `src/`, no `package.json`), locked research, CV5, and live font/API docs. Contrast ratios and oklch conversions match the hex contract. Fontsource latin woff2 for the four files sum to **81,128 bytes** (under 90 kb). IBM *complete* Sans Regular woff2 is **63,020 bytes** alone — latin split is mandatory, as the doc says.

---

### Issue 1: Clause 1 cannot pass the 360 no-scroll gate with the locked chrome + locked proof details
- **Severity**: critical
- **Section**: Proposed Design §4 (homepage clause map), §6 (locked first-viewport copy), Chrome §3.4, Slice 0 / PR0 merge gate, Risks
- **Description**: Slice 0 / PR0 merge gate requires that on **360 and 1280**, without scrolling, a stranger answers what he does, employer, one proof, and how to email. Locked first-viewport copy includes name, role, the full short phrase, employer, **four proof cells with long details** (e.g. “PostgreSQL primary-replica cluster, streaming replication + auto-failover; sub-30s recovery; zero unplanned outages since launch”), the ClauseNotebook now-line, and visible email. Chrome on every page is a sticky running header (~2.5–3rem) + stamp + five-item nav (`Work · Production · GitHub · Resume · Email`). Nav labels at 12–14px with ≥24px (prefer 44px) hit areas will wrap to two lines at 360.

  Mitigation as written is insufficient: “If type size prevents it on 360, reduce H1 toward 32px and proof figures toward 32px before dropping a slot. Do not drop email.” H1 and proofs are **already** at the 32px floor in the type table. The optional availability chip is the only droppable slot; the overflow is the proof *details* plus chrome, not the chip. The risk table names the overflow as High but does not give a compact-cell contract.

  An engineer who typesets the locked strings as four stacked full-detail cells **will fail the PR0 gate**. An engineer who truncates details will be accused of paraphrasing locked copy. The design does not choose.
- **Suggestion**: Lock a **responsive proof-cell contract** for PR0: at `<1024` (or `<768`), each cell is numeral + qualifier only (e.g. `99.99%` / `uptime`); full `detail` string remains in `title`/`aria-describedby` and is painted in `#production` / case studies. Specify a single compact header band at 360 (identity + stamp + wrapping nav with explicit row count and `scroll-margin-top`). Rehearse the 360 composition as an ASCII wireframe with approximate heights that sum to ≤640px. Keep 1280 as the engraved four-cell strip with details visible.
- **Status**: addressed
- **Response**: Locked a responsive proof-cell contract (§4.1): `<1024` paints numeral + qualifier + citations only; full `detail` stays in `aria-describedby`/`title` and is visible in `#production` / case studies. Compact header band at 360 is 104px (32px identity with stamp as 11px text on the same row + two 36px nav rows). Added a 360×640 ASCII wireframe (§4.2) whose blocks sum to 468px (ceiling 564px ≤ 640). Availability chip is ≥1024 only. Compact numerals 28px at 360 (documented floor exception).

### Issue 2: Font preload sketch preloads the wrong face for LCP
- **Severity**: major
- **Section**: Theme system §3.2–3.3 (type / Fonts API), Base.astro sketch, Observability (LCP), Key Decision 5–6
- **Description**: Two contracts collide:

  1. “Preload **Sans 400 only**.”
  2. “LCP element is **type** (H1 / proof numerals).” H1 is **Plex Sans 600**; proof numerals are **Plex Mono 400**.

  The `Base.astro` sketch is:

  ```astro
  <Font cssVariable="--font-plex-sans" preload />
  <Font cssVariable="--font-plex-serif" />
  <Font cssVariable="--font-plex-mono" />
  ```

  Current Astro Fonts API: boolean `preload` emits preload links for **all variants of that family**. For IBM Plex Sans that is 400 **and** 600. The next paragraph hedges (“If `<Font preload />` preloads every variant… pass the API’s per-file preload array”) but the copy-pasteable sketch is the boolean form. An implementer following the code block violates “Sans 400 only” *and* still does not preload the LCP face (600) as a deliberate choice — or preloads 600 as a side effect while also preloading 400.

  Theme-decision locked “Sans 400 (**preload**)” for the running header/nav, not for H1. This design copies that lock without resolving the LCP contradiction. Metric-adjusted fallbacks may still hit lab LCP ≤ 1.8 s, but the preload rule as sketched is not implementable without guessing.
- **Suggestion**: Replace the boolean sketch with the documented array API, e.g. `<Font cssVariable="--font-plex-sans" preload={[{ weight: 400, style: "normal" }]} />` **or** (better for LCP) preload **Sans 600** as the H1 file and do not preload 400. State which file is the LCP font in DevTools terms. Keep the four-file / 90 kb disk cap (latin subsets are ~81 kb; see verification below). Do not leave “if the API preloads every variant” as a runtime discovery in PR0.
- **Status**: addressed
- **Response**: Replaced boolean `<Font preload />` with the array API: `preload={[{ weight: 600, style: "normal" }]}`. DevTools LCP is the home `h1` in IBM Plex Sans 600; that is the only preloaded file. Sans 400 / Serif / Mono are swap + fallbacks. Recorded as an amendment of theme-decision’s “Sans 400 (preload)” because that face is not the LCP element. Four-file / 90 kb cap unchanged (Fontsource latin splits 81,128 bytes).

### Issue 3: `Base.astro` always includes `ClauseRail`, but PR0 does not ship it
- **Severity**: major
- **Section**: Component tree §5.1 Layout contracts, PR0 file list, Slice 0
- **Description**: Layout contract: `SkipLink → header (RunningHeader + Stamp + Nav) → .document (ClauseRail + <main id="main">) → Footer`. PR0 files list chrome `{SkipLink,RunningHeader,Stamp,Nav,Footer}` and **omit** `ClauseRail.astro`. ClauseRail is a PR1 file. Slice 0 is first viewport only and does not require the rail.

  An engineer implementing `Base.astro` in PR0 has to invent a stub, conditionally render a missing component, or violate the layout contract. That is a PR0 blocker, not a PR1 polish item.
- **Suggestion**: Either (a) PR0 `Base.astro` omits the rail; PR1 adds `ClauseRail` and the `.document` two-column shell, or (b) PR0 ships a no-op/empty `ClauseRail` so the layout contract is stable. Pick one in the layout contract and the PR0 file list. Same decision for `clauses.css` (PR1) vs clause components that PR0 already creates (`Clause.astro`, `ClauseHeading.astro`).
- **Status**: addressed
- **Response**: Picked (a): PR0 `Base.astro` omits `ClauseRail`. Body is SkipLink → header → main → Footer. PR1 adds `.document`, the rail, and `clauses.css`. `showRail` prop defaults false. `Clause.astro` / `ClauseHeading.astro` stay in PR0 and style via `chrome.css` + scoped CSS.

### Issue 4: First-screen Resume CTA 404s until PR5; copying the PDF is not SEO work
- **Severity**: major
- **Section**: Rollout / Resume PDF, Slice 0 (“Resume CTA may 404 until slice 5”), PR5, IA §2.4 / §8.5 (via source precedence)
- **Description**: IA first screen **requires** Resume as a CTA. The design accepts “Resume CTA may 404 until slice 5 — the 6–10s gate is **email**, not PDF.” The file already exists at `/Users/tereishqmein/Dev/v2/profile/resume/sudheer_cv5_back.pdf` (**181,662 bytes**, confirmed). Copying it is a one-line `cp` and does not depend on OG, sitemap, or JSON-LD.

  A 404 on a first-viewport control is a hire-scan defect (IA itself cites DevPlaybook: every link live). Bundling the copy with PR5 is artificial sequencing, not a technical dependency. The “do not generate / copy CV5 only” rule is correct; the **when** is wrong.
- **Suggestion**: Move `public/resume.pdf` into **PR0 or PR1**. Keep OG/JSON-LD/sitemap in PR5. Document in README that the PDF is a copied artifact and must not be regenerated.
- **Status**: addressed
- **Response**: `public/resume.pdf` copies in PR0 / slice 0. First-viewport Resume CTA is live. README states the PDF is a copied artifact and must not be regenerated. PR5 is SEO/OG/sitemap only.

### Issue 5: Work data is dual-sourced; homepage conformance rows are unmapped
- **Severity**: major
- **Section**: Data Model (`site.workIndex` + `proofs`), Content collection contract, `WorkItemProps` / `ConformanceTable`, Page → data wiring, PR1–PR2
- **Description**: Two sources hold the same work facts: `export const workIndex` in `site.ts` (home) and Zod frontmatter in `src/content/work/*.md` (case studies). Wiring says `/` “maps `site.work` + collection titles/status” but PR1 has no collection (`content.config.ts` arrives in PR2) and PR2’s file list does **not** update `index.astro`. Proof numbers also live in `proofs[]` *and* in markdown `proofLines`. Drift is guaranteed.

  `WorkItem.astro` “is a numbered subclause plus `ConformanceTable.astro` with rows: problem, constraint, stack, proof, repo, status.” `workIndex` fields are `slug, clause, name, status, statusLabel, line, stack, repo`. There is **no** `problem` or `constraint` field. Collection `claim` / markdown `## 1. Problem` are not on the home path (home “no body markdown”). PR1 cannot build the table from the data model as specified.
- **Suggestion**: Pick one SSOT. Recommended: collection + Zod is SSOT for the three work items; `site.ts` holds identity, proofs, production, seeking, stack, chrome. Home `WorkList` reads `getCollection('work')` (move `content.config.ts` + the three md stubs with frontmatter-only bodies into PR1, or give `workIndex` explicit `problem` / `constraint` / `proof` strings and make markdown import those constants). Add a PR2 checkbox: home still renders from the same objects. Ban retyping numerals in markdown (already stated; enforce by importing `proofs`).
- **Status**: addressed
- **Response**: Work collection is SSOT. Deleted `workIndex` from `site.ts`. Zod schema now has `problem`, `constraint`, `line`, `proofIds`, `proofNote`, `publishPage`. PR1 ships `content.config.ts` + three frontmatter files; home `WorkList` uses `getCollection("work")`. Case studies look up `proofs[]` by id. `publishPage` gates `[slug]` so stub routes are not emitted.

### Issue 6: PR5 claims “all HTML routes exist” but does not depend on PR3
- **Severity**: major
- **Section**: PR Plan (PR3, PR4, PR5)
- **Description**: PR3 (TranslateLive) depends on PR2. PR4 (distributed-social) depends on PR2, **not** PR3. PR5 depends on **PR4 only**, with the rationale “(all HTML routes exist)”. That is false if PR4 merges without PR3: `/work/translatelive` 404s, sitemap/OG/canonical work is incomplete, and the “four HTML URLs” gate fails.

  Parallelizing PR3 and PR4 after PR2 is good; the join edge is missing.
- **Suggestion**: `PR5 depends on: PR3 AND PR4`. Optionally state PR3 ∥ PR4 after PR2.
- **Status**: addressed
- **Response**: PR5 depends on PR3 **and** PR4. PR3 ∥ PR4 after PR2. Rollout mermaid shows the join edge.

### Issue 7: Footer git short hash has no build-time injection
- **Severity**: major
- **Section**: Chrome §3.4 Footer, Annex B, `site.ts` document chrome, PR1 annexes, PR7 “env for commit hash”
- **Description**: Footer / Annex B is `© Sudheer Singh · git short hash · confidentiality sentence`. No field in `site.ts`, no `import.meta.env`, no `CF_PAGES_COMMIT_SHA`, no `git rev-parse` in `astro.config.mjs`. PR7 mentions “env for commit hash” as a README note, two PRs after the footer ships. A static Astro site will not magically know the SHA. Implementers will hardcode `V1.0.0` or omit the hash, violating Annex B.
- **Suggestion**: Lock a PR0/PR1 mechanism, e.g. `COMMIT_SHA = process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA ?? execSync("git rev-parse --short HEAD")` in `src/data/site.ts` or `astro.config.mjs` `define: { 'import.meta.env.PUBLIC_COMMIT_SHA': ... }`, with a local fallback of `"dev"`. Document that Cloudflare Pages provides `CF_PAGES_COMMIT_SHA` at build. Do not wait for PR7.
- **Status**: addressed
- **Response**: `src/data/commit.ts` in PR0 resolves `CF_PAGES_COMMIT_SHA` ?? `GITHUB_SHA` ?? `git rev-parse --short HEAD` ?? `"dev"`. Footer imports it at build time. Not deferred to PR7.

### Issue 8: Recruiter “stack keywords above the fold” is inherited from IA and left unresolved
- **Severity**: minor
- **Section**: Overview / Slice 0 gate vs `portfolio-ia.md` §2.1 item 3 and §2.4 test (“what’s his stack”)
- **Description**: IA recruiter job requires Python / FastAPI / PostgreSQL / RAG / Kubernetes / TypeScript visible without scrolling. IA §2.4 / §4.1.A and theme slice 0 (which this design follows) do **not** put stack chips in Clause 1. Definitions (`#stack`) are below the fold. The design’s 6–10s test quotes what / employer / proof / email and silently drops stack. That is a reasonable reading of the more specific first-screen table, but an engineer (or QA) using IA §2.1 will fail PR0 for missing chips.
- **Suggestion**: Add one sentence under Clause 1: stack keywords live in clause 5; the slice-0 gate does **not** require them above the fold; do not add a chip row in PR0. If product later wants one keyword line, it must be a locked string, not a bar.
- **Status**: addressed
- **Response**: Documented amendment + §4.1 sentence: stack keywords live in clause 5; slice-0 / PR0 gate does not require them above the fold; do not add a chip row in PR0.

### Issue 9: Home H1 is the name only; IA SEO verdict said H1 matches the title string
- **Severity**: minor
- **Section**: Accessibility §3.7, SEO (PR5), IA §8.6 (source rank 2)
- **Description**: Design: “home H1 = name **Sudheer Singh**.” IA §8.6: “H1 on `/` matches the title” (`Sudheer Singh — AI Systems Builder`). Theme slice 0 lists name and role as separate lines and does not name the heading level. One `h1` that is the name is better scan/a11y; it is still an unstated override of an IA numbered verdict. `<title>` / OG correctly use the full string.
- **Suggestion**: Explicitly record the amendment: document title / OG = `Sudheer Singh — AI Systems Builder`; visible `h1` = `Sudheer Singh`; role is not inside the `h1`. Then it is a lock, not a silent conflict.
- **Status**: addressed
- **Response**: Recorded amendment: `<title>` / OG = `Sudheer Singh — AI Systems Builder`; visible `h1` = `Sudheer Singh`; role is not inside the `h1`.

### Issue 10: NSSAAF footnote asserts TS 29.526 as fact
- **Severity**: minor
- **Section**: `productionFacts.nssaafDisplay` / `nssaafFootnote`, Copy constraints, Open Question 1, Confidentiality
- **Description**: Display line is correct and matches IA: TS 23.501 + “NSSAAF stage-3 service API.” The footnote then states “NSSAAF stage-3 is TS 29.526” as fact and prints both `29.509` and `29.526`. IA’s safer alternate was “NSSAAF stage-3 **may be** TS 29.526; I will not guess.” ETSI Nnssaaf **is** 29.526 (research-backed); the career risk is implying that is what *he implemented* while CV5 lists 29.509. Copy lint carves out the footnote constant, so CI will not catch a later paraphrase that ships 29.509 in a bullet.
- **Suggestion**: Soften the footnote to IA’s “may be / I will not guess” until Open Question 1 is answered. Keep the lint exception. Add `29.526` to the lint allowlist only inside that constant.
- **Status**: addressed
- **Response**: Softened `nssaafFootnote` to IA’s “NSSAAF stage-3 may be TS 29.526; I will not guess.” Copy lint allowlists `29.509` and `29.526` only inside that constant.

### Issue 11: CSS file list, `@layer` names, and import order are not wired
- **Severity**: minor
- **Section**: Slice 0 step 2 (`@layer reset, tokens, base, components, utilities`), file tree (`reset.css`, `tokens.css`, `base.css`, `chrome.css`, `clauses.css`, `motion.css`, `print.css`), PR0 vs PR1
- **Description**: Layer names do not match files (`components` vs `chrome.css` / `clauses.css`; `utilities` has no file). No `Base.astro` import list or `@import … layer()` recipe. Stack-decision used `global.css`; this file wins on paths, but PR0 can still get cascade order wrong (print/motion leaking, tokens after chrome). `clauses.css` is PR1 while `Clause.astro` is PR0.
- **Suggestion**: Give the exact `Base.astro` stylesheet list and which file owns which `@layer`. Example: `@import "reset.css" layer(reset);` etc., with `chrome.css` in `components` until `clauses.css` exists.
- **Status**: addressed
- **Response**: Added §3.8: `entry.css` is the only Base import; exact `@layer reset, tokens, base, components, utilities` plus `@import … layer()`. `chrome.css` owns PR0 components; `clauses.css` is PR1 in the same `components` layer; `print.css` is unlayered after the list. No `global.css` / `utilities.css`.

### Issue 12: Case-study bodies are fact outlines, not 600–900 words
- **Severity**: minor
- **Section**: Case-study frontmatter + body, Slice 2–4 gates, PR2–PR4
- **Description**: Titles, status, repo, problem bullets, thesis sentence, design that exists, proof bans, and “what this is not” are locked. The 600–900 word prose is not. PR2’s merge gate (“600–900 words, first 150 stand alone, headings 1–6”) cannot be met by pasting the design; someone must write. That is acceptable if named; as written it looks like a complete copy deck.
- **Suggestion**: State that PR2–PR4 include **authoring** from the locked facts (share-answers language allowed where IA already compressed it), not transcription. Optionally add a 150-word opening paragraph per study so the “stands alone” gate has a golden string.
- **Status**: addressed
- **Response**: PR2–PR4 are named as authoring PRs from locked facts, not transcription. Added golden ~150-word `claim` strings per study for the stand-alone gate. Frontmatter `claim` is that string.

### Issue 13: Cloudflare `_headers` “cache woff2” misses how Astro actually emits fonts
- **Severity**: minor
- **Section**: Security CSP, PR7 `public/_headers`, Fonts API
- **Description**: Astro Fonts API copies registered files to `dist/_astro/fonts/` with hashed names (documented behavior). Committed `src/assets/fonts/*.woff2` are build inputs, not public URLs. `Cache-Control` on `*.woff2` in `public/` will not apply. A naive `/*.woff2` rule also will not match hashed `_astro` paths depending on glob support. CSP `font-src 'self'` is fine.
- **Suggestion**: Specify `_headers` for `/_astro/*` as `public, max-age=31536000, immutable`, HTML as short cache, PDF as `application/pdf` + optional `inline`. Keep CSP as drafted; after JSON-LD, document the exact `script-src` exception (hash of the ld+json block vs `'unsafe-inline'`).
- **Status**: addressed
- **Response**: `_headers` now caches `/_astro/*` as `public, max-age=31536000, immutable`, HTML as 300s, PDF as inline `application/pdf`. No `/*.woff2` on `public/`. CSP uses a sha256 of the JSON-LD block after PR5, not `'unsafe-inline'`.

### Issue 14: Copy-lint patterns are slightly too narrow / too sharp
- **Severity**: minor
- **Section**: Copy constraints, PR6
- **Description**: Banned `Claude 3.5` misses `Claude` / `Claude 3`. `50+` is the right README extra. `29.509` exception is only “footnote constant” — good. No lint for `yourusername` demo URLs beyond the token, Inter, `#0f62fe`, Ndot, etc. (visual banned-list is screenshot-based, which is correct). `children: any` on `ClauseProps` fights “TypeScript strict.”
- **Suggestion**: Lint `Claude`, `ElevenLabs`, `Whisper` (as stack), `29.509`, `29.526` (allowlist the footnote), `9826235849`, `Calendly`, `ChromaDB`, `LoRA`, `SpecAgent`, `MongoDB`, `yourusername`. Type `ClauseProps.children` as `any` → Astro HTML slot / `Snippet`.
- **Status**: addressed
- **Response**: Lint list is now `Claude`, `ElevenLabs`, `Whisper` (as stack), `29.509`, `29.526` (footnote allowlist), `9826235849`, `Calendly`, `ChromaDB`, `LoRA`, `SpecAgent`, `MongoDB`, `yourusername`; scope is `src/` + `dist/`. `ClauseProps.children` is `Snippet`, not `any`.

### Issue 15: Astro `site` URL is specified twice
- **Severity**: nit
- **Section**: Fonts API sketch vs Astro config contract
- **Description**: Sketch uses `site: "https://example.pages.dev"`. Config table uses `https://sudheer215s.pages.dev` as the PR0 working default. Harmless but the sketch is what people copy.
- **Suggestion**: One placeholder: `https://sudheer215s.pages.dev`, replaced in PR7.
- **Status**: addressed
- **Response**: One placeholder everywhere: `https://sudheer215s.pages.dev`. Fonts sketch and config table match. PR7 changes it only for a custom domain.

### Issue 16: Author field is TBD
- **Severity**: nit
- **Section**: Title table
- **Description**: `Author | TBD (implementing engineer)` does not block PR0.
- **Suggestion**: Put the implementing engineer or “portfolio repo owners” so the contract has an owner.
- **Status**: addressed
- **Response**: Author set to “Portfolio repo owners.”

### Issue 17: Small implementability leftovers (404, trailing slash, Node pin, OG production, Nav hashes)
- **Severity**: nit
- **Section**: Folder tree, Astro config, PR0 nav, PR5 OG
- **Description**: No branded `404.astro` (default Astro 404 will not look like TS 00.001 — out of IA scope, but Work/Now links 404 until PR2–4). `trailingSlash` / `build.format` unspecified (canonical + sitemap). No `engines.node` / `.nvmrc` for Node 22. OG 1200×630 is “typographic spec sheet” with no production method (Playwright screenshot vs hand-made PNG vs Satori — design forbids an API route, so it must be a committed PNG). PR0 Nav `Work` → `/#work` and `Production` → `/#production` are no-ops until PR1.
- **Suggestion**: `trailingSlash: 'never'` (or whatever CF Pages + sitemap will use) in PR0. `.nvmrc` `22`. README: hash nav targets exist from PR1; case-study hrefs 404 until PR2–4. PR5: generate OG with a one-off Playwright screenshot of Clause 1 at 1200×630 **or** a checked-in SVG rasterized at build without adding a runtime endpoint. Optional `src/pages/404.astro` using `Base.astro` + “clause not found.”
- **Status**: addressed
- **Response**: `trailingSlash: 'never'` in PR0; `.nvmrc` / `engines.node` = 22; branded `404.astro` in PR0; README notes hash nav until PR1 and case-study hrefs when `publishPage`; OG is a one-off Playwright screenshot (or Sharp-rasterized SVG) committed as PNG, no API route.

---

### Strengths
- **Does not reopen locks.** Theme TS 00.001, paper/ink/stamp hexes, Plex superfamily, four files / 90 kb, no teal/OLED/Ndot/orange/Inter, IA hire-scan order (work before production), four HTML routes, no `/contact` / form / phone-in-HTML, Astro static + vanilla CSS + CSS-only motion + CF Pages, paper-only v1. Conflicts already resolved in `theme-decision.md` are encoded, not relitigated. Alternatives A–E are implementation-level and fair.
- **Greenfield claims match the repo.** Workspace is `.git` + `docs/` only. No fake “existing architecture.” Content-sync rule (copy, don’t import `../profile`) is correct for Cloudflare CI.
- **Identity and metrics match the brief + CV5.** Name, email, GitHub `sudheer215s`, LinkedIn, MANIT Bhopal CSE 2019–2023, C-DOT titles/dates, proof table, TranslateLive `<3s` / `10+` sessions, ClauseNotebook Stage 1, social backend `repo: null`. Live HTTP 200 on `github.com/sudheer215s`, `ClauseNotebook`, and `TranslateLive` (README extras not re-read this round; IA’s 2026-09-12 verification still stands). CV5 PDF size **181,662** matches. Phone kept off HTML.
- **NSSAAF is flagged, not silently shipped.** Display line avoids printing 29.509 as NSSAAF stage-3. Open Question 1 is correctly Sudheer-owned (see Issue 10 for footnote tone).
- **Font legality is implementable.** OFL 1.1, reserved names, committed woff2 + `OFL.txt`, no Google CDN, no `fontProviders.google()` / network Fontsource at runtime. Fonts API sketch matches current `fontProviders.local()` + `options.variants`. Latin subsets from Fontsource (verified): Sans 400 **22,588** + Sans 600 **24,252** + Serif 400 **19,580** + Mono 400 **14,708** = **81,128 bytes**. Complete IBM Sans Regular is **63,020 bytes** — the “if over budget, use Latin1 split” warning is load-bearing and correct.
- **Tokens are exact.** Lab contrast on sRGB: ink/paper **15.30:1**, ink-muted/paper **6.24:1**, ink/paper-2 **13.61:1**, ink-muted/paper-2 **5.55:1**, stamp/paper **5.72:1**, stamp-on/stamp **5.72:1**, rule/paper **1.66:1**. Hex→oklch matches the table to three decimals. Darken-muted-only fallback is the right contrast escape.
- **`site.ts` is copy-pasteable.** Citations, proofs, production bullets, seeking, stack caveat (LangGraph listed ≠ shipped), workIndex, `demo: z.literal(null)` are a real content model. Forbidden-string list is pointed at the actual leak/overclaim set.
- **Quality gates and threat model fit a static brochure.** 0 kb home JS, JSON-LD as `application/ld+json`, no GA4, no form, CSP draft, confidentiality default-deny, rollback = git revert. Playwright 360/1280 follows the theme contract (not stack’s 390).
- **Slice 0 is the theme slice, not stack’s empty scaffold.** PR order matches theme-decision “next slices.” Open questions are all Sudheer-owned (domain, README hygiene, C-DOT comms, social repo, NSSAAF number) — not undecided stack/theme.

---

### Verification notes (not issues)

| Claim | Result |
|---|---|
| Scratch DESIGN vs `docs/DESIGN.md` | Identical |
| Repo is research-only greenfield | Confirmed (`ls` + `git status`: untracked `docs/` only) |
| CV5 PDF path and 181,662 bytes | Confirmed |
| Education NIT Hamirpur / GitHub `ssingh13m` (stale session memory) | **False**; brief + CV5 + design all say MANIT Bhopal / `sudheer215s` |
| `src/content.config.ts` as Astro collections entry | Matches current Astro docs (not stack-decision’s old `src/content/config.ts`) |
| TranslateLive README extras today | **Not re-fetched**; treat IA §9 as the last verification |
| C-DOT comms clearance | Cannot verify; correctly an open question |
| Custom domain | None in brief; correctly an open question |

---

### PR plan (after the issues above)

Order **0 shell+Clause 1 → 1 homepage rest → 2 ClauseNotebook → 3 TranslateLive → 4 social → 5 SEO → 6 CI → 7 CF Pages** matches the theme lock and is the right review granularity (one spec document per case-study PR). Do not squash 2–4.

Must-fix before calling the plan realistic:

1. Compact Clause 1 composition (Issue 1) or the PR0 gate is theater.
2. Font preload array + LCP file (Issue 2).
3. `Base` vs PR0 file list (Issue 3).
4. `resume.pdf` in PR0/PR1 (Issue 4).
5. Work SSOT + table fields (Issue 5) before PR1.
6. PR5 depends on PR3 ∧ PR4 (Issue 6).
7. Commit SHA at footer-ship time (Issue 7).

PR0 is large (scaffold + fonts + chrome + proof components + locked copy) but **theme-mandated**; do not split it except for the ClauseRail decision. PR6 after content exists matches stack slice 8; accepting a11y debt until then is OK if every slice is still visually gated in a real browser as written.

---

## Revision Summary (design-review round 1)

All 17 issues addressed in both design copies (scratch + `docs/DESIGN.md`, kept identical). No `wontfix`. No `needs-user-input`. Theme TS 00.001, paper/Plex/stamp, four HTML routes, no `/contact`/form/Tailwind/React/WebGL were not reopened.

Implementability locks added:

1. **360 Clause 1 composition** — compact proof cells, 104px header band, ASCII wireframe ≤640px.
2. **LCP preload** — Sans 600 array API only.
3. **Base vs rail** — PR0 omits ClauseRail; PR1 adds it.
4. **`resume.pdf` in PR0** — first-viewport CTA is live.
5. **Work SSOT** — Zod collection; no `workIndex`; `proofIds` + `publishPage`.
6. **PR5 depends on PR3 ∧ PR4**; PR3 ∥ PR4 after PR2.
7. **`commit.ts` in PR0** for Annex B hash.
8–17. Stack-chips amendment, H1 vs title, softened NSSAAF footnote, `entry.css` layers, authored case-study copy + golden 150-word claims, `/_astro/*` cache + JSON-LD sha256 CSP, broader copy lint + `Snippet` children, single `site` URL, author field, `trailingSlash` / Node 22 / 404 / OG production method.

Open questions for Sudheer are unchanged (NSSAAF number, domain, TranslateLive README, C-DOT comms, social repo).
