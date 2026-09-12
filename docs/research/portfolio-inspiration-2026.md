# Live portfolio research, 2025–2026 — and a new visual lock

**Date:** 2026-09-12  
**Role:** design research only. No application code. No `src/` edits.  
**Subject:** Sudheer Singh — AI / LLM + production backend engineer, C-DOT Scientist-B, building ClauseNotebook. Audience is hiring managers, not Awwwards jurors.  
**Charge:** fetch live personal / engineer / designer sites; extract what is actually scannable and distinctive; lock **one** new direction for `/Users/tereishqmein/Dev/v2/portfolio` that is **not** the current `TS 00.001` spec dump.

---

## How this was fetched

Fetched on 2026-09-12 from this machine (HTTP HEAD + HTML GET with a desktop Chrome UA, plus page-content tools). “Loads” means HTTP 200 and extractable first-screen copy. Visual notes below are from live markup, titles, type files, colour tokens in the HTML, and (for the current Sudheer build) the checked-in screenshots in `docs/research/screenshots/`.

**Hard rejects still in force** (from the brief and from what 2026 junior tabs actually look like): dark glassmorphism; purple/indigo/mesh gradients; three equal project cards; Inter/Roboto/Geist-as-identity; “Hi I’m a passionate developer”; particle.js / Three.js heroes that hide content; Space Grotesk + gradient-text Vercel clones; Nothing Phone / JDoodle IDE costumes; **the current `SUDHEER TS 00.001` spec chrome**.

Awwwards’ annual board in 2025–26 still rewards WebGL worlds. The *useful* 2026 pattern for a backend/AI hire site is the opposite: a designed object you can read in ten seconds.

---

## Listed sites

### 1. Bruno Simon — https://bruno-simon.com

**Status:** live (200). Last-Modified 2026-04-07. MIT source at `github.com/brunosimon/folio-2025`.

**First screen (5s):** a playable 3D world. HUD: Interact / Unstuck / map / close. You are invited to *drive*. Copy is behind a welcome panel: “My name is Bruno Simon, and I’m a creative developer… Please drive around to learn more.”

**Type / colour / density / motion:** Google Fonts **Amatic SC 700** + Nunito (credited in the in-world “Behind the scene” panel). Cartoon 3D, high density of controls, continuous WebGL / WebGPU motion, physics (Rapier), audio (Howler), gamepad. This is a game that happens to be a CV.

**Work presentation:** spatial, not listed. Projects are places you drive to. Achievements, a circuit, visitor “whispers.”

**Hiring-manager 10s:** “creative WebGL developer who teaches Three.js.” You cannot extract employers, metrics, or a stack without playing. That is the point.

**Steal:** commitment. The site *is* the skill. Sudheer’s equivalent is not a car; it is a **readable system**.

**Do not copy:** the 3D world, the game loop, WebGPU, “please drive around.” For a C-DOT / AI-infra hire this reads as a junior frontend flex and hides the 99.99% / 4M+ proof.

---

### 2. Linus Rogge — https://linusrogge.com

**Status:** live (200, Vercel). Canonical is `linusrogge.com` (www redirects).

**First screen (5s):** almost nothing. `Linus Rogge` as H1. One line: **Design Engineer at SPACING**. Two links: Cosmos, Email. A tiny `[i]`. HTML is ~3 KB. No projects, no bio paragraph, no cards.

**Type / colour / density / motion:** no webfonts in the document; system UI. Rainbow hexes in the payload (`#E40303` … `#750787`) look like a pride/mark motif, not a palette. Extreme low density. Motion, if any, is not in the HTML.

**Work presentation:** off-site (Cosmos moodboard). The site is a calling card, not a portfolio.

**Hiring-manager 10s:** name, title, employer, email. That is the entire pitch. Works because SPACING is the proof. Sudheer cannot outsource proof to a brand the hiring manager already knows.

**Steal:** **first screen is identity + employer + a way to write.** No greeting. No stats bento.

**Do not copy:** empty-page mystique. A hiring manager who does not know C-DOT by name needs numbers and three systems on the same scroll.

---

### 3. Oliver Cederborg — https://olivercederborg.com

**Status:** live (200). Title “Oliver Cederborg.” Meta: “Full-stack developer and designer from Copenhagen, Denmark.”

**First screen (5s):** `Hi, I'm Oliver ✌️` + a passion sentence + “I currently /work as a full-stack developer at Franklin.” Portrait. A **GitHub stats** block (Followers / Stars / Contributions as a contribution graph) and “Copenhagen.” Nav: home / work / guestbook. Theme toggle.

**Type / colour / density / motion:** self-hosted woff2 (Next font). Colours from the graph: GitHub greens `#9be9a8` / `#40c463` on `#262626`, LinkedIn `#0077B5`, a pink `#FF8EDD`. Medium density, card/bento energy.

**Work presentation:** `/work` is an **employment timeline** (Franklin 2024–now; Miinto 2022–2024) with “deeper dive coming soon” — not case studies.

**Hiring-manager 10s:** name, junior-full-stack vibe, current employer, GitHub activity. No product, no metric, no system.

**Steal:** current employer is in the first sentence, linked.

**Do not copy:** “Hi, I’m … ✌️”, GitHub-as-hero, guestbook, theme toggle as personality. This is the 2022–24 developer-folio default. Stats are vanity, not production proof.

---

### 4. Kent C. Dodds — https://kentcdodds.com

**Status:** live (200). Self-hosted fonts. Dark-mode toggle.

**First screen (5s):** product promo **“Kody is live — your AI teammate…”** then the name, then a koala-on-a-onewheel illustration, then the mission line “Helping people make the world a better place through quality software.” Blog / course CTAs. “Hi, I’m Kent C. Dodds” appears *below* the fold.

**Type / colour / density / motion:** illustrated, yellow-team gamification, high density. Course logos (Epic Product Engineer, Epic AI, Epic Web) are the real work objects.

**Work presentation:** **courses and posts as products**, not project cards. Blog count is a metric (213 posts, 963,856 reads).

**Hiring-manager 10s:** this is an educator/product business, not a candidate. You grasp “JavaScript teacher who now sells AI/product courses.” You do not grasp an employment stack.

**Steal:** **the product is the homepage.** Kent sells Kody / Epic *; Sudheer can lead with ClauseNotebook as a named system, not as clause 2.1.

**Do not copy:** mascot illustration, course grid, newsletter forms, “Hi, I’m,” dark-mode as identity. A 24-year-old backend engineer with one flagship repo cannot wear educator-brand chrome.

---

### 5. Lee Robinson — https://leerob.com

**Status:** live (200, Vercel/Next). Title “Lee Robinson.” Meta: “Developer and writer.”

**First screen (5s):** `@leerob` as the H1. Bio length toggle (Default / Long). One dense paragraph: engineer and writer; **ML at SpaceX (formerly Cursor)**; previously Vercel / Next.js; 15 years coding. Then **Notes** (beliefs, AI, DX…) and **Blogs** as dated text links. A painted SF/Iowa collage sits under the index, not on top of it.

**Type / colour / density / motion:** near-black/white (`#000` / `#fff`). Editorial, medium density, almost no chrome. Motion is not the point.

**Work presentation:** **an index of writing**, not a project gallery. Employers are inline links in the bio. No cards.

**Hiring-manager 10s:** SpaceX ML, Cursor, Vercel/Next — the résumé is the first paragraph. The rest is taste.

**Steal:** **one paragraph that names employers; work as a text index.** Dates on the right. No equal cards.

**Do not copy:** a writing-first homepage (Sudheer has no blog corpus), Geist/Vercel adjacency, collage-as-personality. Do not lead with “I’m an engineer and writer.”

---

### 6. Sarah Drasner — https://sarah.dev

**Status:** live (200, Netlify). Title “Sarah Drasner’s Site.” Nav: writing / speaking / projects.

**First screen (5s):** H1 **“I Make Things.”** Then “About Me,” a photo, and a **curriculum paragraph**: Distinguished Engineer and Area Tech Lead for AI and the Web Ecosystem for Chrome at Google; former Sr. Director (Search, YouTube, Workspace…); Incident Commander; former Netlify VP, Microsoft Principal; books; Concatenate; “She likes cheese.” Contact form at the bottom.

**Type / colour / density / motion:** display **Placard Next** + **Neue Plak Text** + Palatino-like body; dark canvas `#141618`, lilac `#7f7ff8` / `#44f`. Dense prose, almost no motion required.

**Work presentation:** **the job history is the work.** Projects live on `/projects` (CodePen / GitHub tables), not on the first screen.

**Hiring-manager 10s:** you know seniority, employer, domain (AI + web platform) without a CV. Proof is the title ladder.

**Steal:** **lead with the strongest true title and the domain.** For Sudheer that is Scientist-B / backend at C-DOT + “AI systems that stay up,” not “I Make Things.”

**Do not copy:** contact form, “I Make Things,” cheese, dark+lilac, a photo-led about. Sudheer does not have a Distinguished Engineer ladder; he has production numbers. Put the numbers where Sarah puts the titles.

---

### 7. Adham Dannaway — https://www.adhamdannaway.com

**Status:** live (200 with a browser UA; the generic fetcher received 403). Title: “Adham Dannaway | Product designer & front end developer.” WordPress. Still the split-hero site as of this fetch (ADPList re-checked the URL in July 2026).

**First screen (5s):** split headline **“designer” / “`< coder >`.”** Left: UI/UX, design systems. Right: front-end who writes clean code. Nav: about / learn / portfolio / blog / contact. Then “Some of my latest work.”

**Type / colour / density / motion:** light marketing site, `#fff` / `#32373c`, many accent leftovers in WP CSS. The split is the motion/idea.

**Work presentation:** **case studies under a dual-identity hero.** Classic product-designer folio once you scroll.

**Hiring-manager 10s:** “this person is both design and code.” Instant positioning. The work has to cash the cheque.

**Steal:** **the first screen answers “what kind of engineer” in one structural idea** — not a punny face-split. Sudheer’s split is **production HA × AI systems**, expressed as a dateline of numbers, not as two hemispheres of a portrait.

**Do not copy:** the face split (most-copied hero in design; costume), “designer / coder” wordplay, WP marketing chrome.

---

## Six more live sites (not Brittany Chiang, not glass, not three equal cards)

Picked for editorial / Swiss / industrial / product-as-portfolio / individual-engineer studio / 2025–26 honors.

### 8. Wildy Riftian — https://www.wildyriftian.com

**Status:** live (200, Framer). **Awwwards Site of the Day, 12 Sep 2025** (score 7.25). Also Framer Awards 2024 Best Visual Design. Palette locked on Awwwards as `#FFE430` / `#212121`.

**First screen (5s):** archival object. Nav HOME / WORKS / ABOUT / CONTACT. Masthead **“A COLLECTION OF VISUAL WORKS” / “WILDY RIFTIAN 2026.”** `01 MOTION DESIGN` · `01 / 06`. Then a verb rotator: “Wildy Riftian does `< motion design >`.” Location as coordinates. Then **FEATURED WORK 01 / 02 / 03** as full-width stories, not a row of equal cards.

**Type / colour / density / motion:** **Fragment Mono** + **Lock Serif** + Biro Script + Inter. Yellow on charcoal. Archive density (folders, papers, keychains). Heavy 3D/Framer motion.

**Work presentation:** **numbered archive + featured issues.** Categories 01–06 (Motion, Brand, Editorial, Photo, Illustration, 3D). Project pages, not bento.

**Hiring-manager 10s:** multidisciplinary visual artist, Bay Area, three named pieces. Not an engineering hire site — but the *index* is instantly graspable.

**Steal:** **archive as format.** Numbered featured work (`01 / 02 / 03`), one open at a time, physical metaphor. Sudheer’s archive is systems, not keychains.

**Do not copy:** yellow/black play, 3D keychains, Fragment Mono as house face (already banned as Field Instrument), Inter, script faces, Framer theatre.

---

### 9. Gionatan Nese ’26 — https://www.gionatannese.com

**Status:** live (200, Next/Vercel). **Awwwards Site of the Day, 5 Sep 2026** (7.32) + Developer Award. Two-colour palette `#000` / `#FFF`.

**First screen (5s):** `GN .D` mark. H1 name + “Multi-disciplinary designer based in Italy…” Nav as **Creative Space 1 / Projects 2 / About 3**. Then **Selected work** as a **vertical list of named projects** with discipline + a short paragraph (own site, Ferrari 330 P4 concept, Erica Basile, Anchor). Explorations as a plain list (Blob, Athena, Minerals…).

**Type / colour / density / motion:** black/white, cinematic type, WebGL / liquid-glass / 3D head (Awwwards elements: preloader, page transition, infinite scroll). High craft, high motion.

**Work presentation:** **list + case study**, not three cards. Projects are named like products.

**Hiring-manager 10s:** Milan designer, selected clients/concepts. Personality > proof. Fine for a creative hire; wrong signal for applied ML / infra.

**Steal:** **selected work as a numbered list of named objects**, each with a discipline line. `001` as an index, not as a fake spec number.

**Do not copy:** WebGL head, liquid glass, preloader, infinite scroll, page-transition theatre. That is 2026 Awwwards, not a C-DOT engineer.

---

### 10. Arnaldo Petrazzini — https://arnaldo.zip

**Status:** live (200, Framer). HTML last-modified **8 Sep 2026**. Title: “The Office of Arnaldo Petrazzini.”

**First screen (5s):** a date (`Tuesday, Sep 8, 2026`). H1 **The Office of Arnaldo Petrazzini.** Subhead **Brand & Digital Design for Startups.** Visible email `hello@arnaldo.zip`. Then a **column of text entries** — Ethos, About, Socials — “Read more,” not thumbnails. A1 Gallery (Mar 2026) still describes the work index as **ten projects in a plain vertical column, no thumbnails, one micro-interaction (copy email)**.

**Type / colour / density / motion:** **Instrument Sans** + **Noto Serif**. Paper-warm `#f8f6f3` / `#191510` / `#2f2a22`. Very low density. Motion ≈ none except “Copied.”

**Work presentation:** **office stationery + a text index.** The domain *is* the joke/object (`.zip`).

**Hiring-manager 10s:** 10+ years, startups, email. You must click for proof. Restraint is the brand.

**Steal:** **the office as the object.** Visible email. Work as a column, not a grid. A live date is more honest than `V1.0.0 RELEASED`.

**Do not copy:** Instrument Sans (2026 Framer/AI-default adjacency), empty-of-proof homepage, `.zip` gimmick, “The Office of” if it becomes costume. Sudheer’s office has numbers; show them.

---

### 11. Gabriel Valdivia — https://www.gabrielvaldivia.com

**Status:** live (200). Ported off Framer to Next/Payload **Mar 2026** (his own writeup). Title/H1: **“Your design partner for first-generation products.”**

**First screen (5s):** positioning line, then **product shots as the portfolio** — Twinsi, Dex Camera, Daylight, Slingshot AI — each a named product with three tags (Fitness / Consumer / AI). Not three equal cards: a **product billboard**. Testimonial. Approach as 1–2–3–4. Contact is a real compose-to-Gabe module.

**Type / colour / density / motion:** light/dark system, `#F7F7F7` / `#1E1E24` / `#29170e`. Product photography does the colour. CSS hover scale (his older Framer notes: 1.03×). Studio density.

**Work presentation:** **product site that happens to be a person.** Case studies are product pages.

**Hiring-manager 10s:** fractional product designer for hardware/AI startups. You can name four products without reading a CV.

**Steal:** **homepage = product lineup.** ClauseNotebook, TranslateLive, the social backend are *products*, not subclauses. One line + three tags + one proof beat per product.

**Do not copy:** client photography we do not have, chat widget, “fractional partner” voice, rounded-card hover kit, testimonial carousel. No fake device mockups for a CLI/ingestion tool.

---

### 12. Rauno Freiberg — https://rauno.me

**Status:** live (200, Vercel). Individual interaction designer (Vercel; Devouring Details).

**First screen (5s):** one sentence, typeset as the whole hero: **“Rauno Freiberg is an Estonian interaction designer working with Vercel and Devouring Details.”** Then a small index: DD, Craft, History of Software Design, Projects, Field Notes, Twitter, year archives, GitHub, Email (copy). A manifesto list: “Make it fast. Make it beautiful. …”

**Type / colour / density / motion:** custom `dd.woff2`; black/white with a red `#FF484C` and a blue `#0000FF` used as marks, not fills. Low density. Craft pages hold the motion.

**Work presentation:** **studio index.** Work lives in `/craft` and `/projects`, not on the first viewport as cards.

**Hiring-manager 10s:** Vercel + a named studio. Taste is the pitch. Same Linus problem: the employer is the proof.

**Steal:** **one sentence that contains name, craft, and affiliation.** Secondary index, not a hero illustration. Email copy-on-click.

**Do not copy:** Vercel-craft mystique, manifesto as filler, hiding the three systems behind `/craft`. Sudheer’s affiliation (C-DOT) is not self-explanatory in SF.

---

### 13. Frank Chimero — https://frankchimero.com

**Status:** live (200, GitHub Pages). Last-Modified 2026-08-12. Meta: “Personal site of designer Frank Chimero.”

**First screen (5s):** `Frank Chimero` · `New York-based designer`. Then a **short editorial index**: Studio Frank; *The Shape of Design* (Book · 2012); Dust (Collages · 2017–2020); essays with years (*Beyond the Machine* · 2025; *Everything Easy is Hard Again* · 2018; *The Web’s Grain* · 2015). About / archive.

**Type / colour / density / motion:** black `#000000` on paper, Swiss-editorial, almost no chrome, no animation required. The HTML is ~3 KB of structure; the site is type + order.

**Work presentation:** **a bibliography.** Books, essays, a studio. Dates do the hierarchy.

**Hiring-manager 10s:** New York designer who writes and publishes. Not a candidate site — a body of work.

**Steal:** **masthead + dated index.** Hierarchy by typography, not by cards. A 2025 essay sitting next to a 2012 book tells you the person is still in motion.

**Do not copy:** essay-only IA (Sudheer needs proof numbers), designer-essay voice, hiding email.

---

### Also loaded (supporting, not in the six)

These answered 200 and informed the lock, but are either the wrong genre or the wrong cliché to feature as a model:

| URL | Why it loaded into the notes | Why it is not a model |
|---|---|---|
| https://ia.net | Swiss **product studio** as homepage (Writer / Presenter / Notebook). IDEA Gold 2026, iF Gold 2026, Red Dot Best of the Best 2025. | Company, not a person. Steal the *product billboard*, not the brand. |
| https://paco.me | Engineer studio list. Fonts: **Inter + Söhne + Newsreader**. Dark `#1c1c1c`. Craft / cmdk / Writer. | Closest thing to a Linear clone in type. Steal the **list**, not Inter/Söhne/dark. |
| https://maggieappleton.com | Editorial garden: Essays / Notes / Patterns. Serif/sans tokens, teal `#04A4BA`. GitHub Next. | Writing corpus we do not have. Steal sectioning, not the garden. |
| https://jvns.ca | Engineer index of *artifacts* (zines, TILs, tools). 2026 posts on the home list. | Blog-as-site. Steal “proof is a thing you can open,” not the wall of links. |
| https://dennissnellenberg.com | Live, Neue Montreal, work list with hover images. | **The 2024–26 designer-folio default** (widely cloned). Do not copy. |

---

## What is actually scannable in 2026

Across the sites that loaded, hiring-manager scan is won by **five structural choices**, not by motion:

1. **The first viewport is a designed object, not a greeting.** Linus, Rauno, Frank, Arnaldo, Lee. “Hi I’m Oliver ✌️” and “I Make Things” waste the 5-second clock.
2. **Work is an index of named objects** (products, essays, issues), **never three equal cards.** Gabriel’s products, Wildy’s `FEATURED WORK 01`, Gionatan’s selected list, Lee’s dated blogs, Frank’s bibliography.
3. **Proof is whatever the person actually has, placed where Sarah places titles.** Sarah: title ladder. Lee: employers in sentence one. Kent: product. Julia: artifacts. Sudheer: **uptime, latency, lookups, three systems.** If those are not on screen one, the site is lying about its audience.
4. **Density is a moral choice.** Arnaldo/Linus/Frank go empty; Bruno/Kent/Wildy go maximal. Empty without proof is arrogance. Maximal without hierarchy is a game. The scannable middle is **a masthead, a dateline of numbers, a short index.**
5. **Motion is optional for meaning.** The sites we should steal from (Frank, Lee, Arnaldo, Linus, Sarah’s *content*) work with CSS or none. The sites we must not copy (Bruno, Gionatan’s WebGL, Wildy’s 3D archive, Dennis hover-theatre) use motion as the product.

---

## What the current Sudheer site is doing (and why it fails uniqueness)

Live screenshots: `docs/research/screenshots/visual-1280.png`, `visual-360.png`, `pr2-home-full.png`. Theme lock in `docs/research/theme-decision.md`: paper spec, Plex superfamily, stamp red, clause-tree, `SUDHEER TS 00.001`.

It is already better than a Brittany Chiang clone. It is also **a costume**. A hiring manager in 2026 has seen RFC-themed personal sites. On a phone the running header truncates to `SUDHEER TS 00.001 · V1.0.0 (2026-… PERSONAL SPECIF…`, the left rail is gone, and the four proof cells become a **2×2 card grid** — the same “equal boxes” problem as three project cards. Citation chips `[BRIEF][CV5]` compete with the numbers. Conformance tables on `/` read as a résumé poured into a spec. The object is clever; the scan is slower than Linus+Lee+Gabriel.

The new lock has to keep: paper-or-designed-object, CSS-only motion, cited numbers, three systems, legal fonts, no WebGL. It has to **delete the spec theatre.**

---

## Recommendation (one direction)

### Name

**Systems Journal — Issue 01**

Not a spec. Not a lab bench. Not an IDE. Not Nothing. Not a résumé. A **cool-newsprint journal of three built systems**, with a dateline of production figures and ClauseNotebook as the lead story.

Closest live relatives: Frank Chimero (masthead + dated index), Gabriel Valdivia (product lineup), Wildy Riftian (numbered featured work, minus 3D), Lee Robinson (employers in sentence one), Arnaldo (office stationery, plus proof), iA (product billboard as identity).

### Why this fits Sudheer

ClauseNotebook is a provenance product. C-DOT work is national-scale IMS/ENUM. The honest object is **an issue of systems with citations**, not a fake `TS 00.001`. Journal language gives us hierarchy (lead + two shorts), a dateline (the four numbers), an index (`01 02 03`), and CSS-friendly motion (rules, ink, issue-mark) without RFC cosplay.

---

## Art-direction lock sentence

**Cool newsprint systems journal: Source Serif masthead, Plex Sans UI, Plex Mono figures, one oxide index bar, four proof figures in a single dateline, three numbered system rows — no spec number, no clause rail, no stamp chip, no WebGL, no Inter.**

A builder may not violate that sentence.

---

## Colour tokens

Hex is the contract. Implement in `oklch` if the stack prefers. **Paper, not OLED. No gradients, no glow, no drop shadows.** Radius stays small (0–2px) because this is a printed object, not because it is a 3GPP PDF.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F7F4EE` | Page. Cool newsprint. **Not** aged spec `#F3EFE4`. |
| `--paper-2` | `#EFEBE3` | Inset, tables on case studies only. |
| `--ink` | `#161412` | Body, H1, proof numerals. |
| `--ink-muted` | `#5E5850` | Meta, dates, stack. Verify 4.5:1 on `--paper`; darken if it fails. |
| `--rule` | `#D4CDC0` | Hairlines, dateline rule, row rules. |
| `--index` | `#8C2A12` | Index numerals `01–03`, links, 2px lead bar, `:focus-visible`. Oxide, not rubber-stamp. |
| `--index-on` | `#F7F4EE` | Type sitting on a rare filled mark (availability text, not a header chip). |

**Rules**

- Proof numerals stay `--ink`. Never colour a metric to make it “pop.”
- `--index` is a **bar and a number**, never a `#B42318` filled `PERSONAL SPECIFICATION` chip, never a large fill.
- No indigo `#5e6ad2`, no teal `#3D9B8F`, no JDoodle orange, no Nothing `#ff0033`, no lilac `#7f7ff8`.
- v1 is paper only. No `prefers-color-scheme` second identity.

---

## Type

Legal only. Self-host woff2. `font-display: swap`. No Google Fonts CDN at runtime (download and vendor). Reserved names respected.

| Role | Face | License | Size / notes |
|---|---|---|---|
| Masthead / H1 / system names | **Source Serif 4** 600 | SIL OFL 1.1 (Adobe; Reserved Font Name “Source”) | 40–56px desktop, 32–36px mobile, 1.05, slight negative tracking. Sentence case. This is the journal voice. |
| Body, lede, case prose | **IBM Plex Sans** 400 | already vendored, OFL | 17–19px / 1.5. Measure ~62–68ch. |
| Nav, labels, status | **IBM Plex Sans** 600 | already vendored | 12–14px. Not uppercase walls. |
| Proof figures, index nums, hashes | **IBM Plex Mono** 400 | already vendored | Dateline 28–40px / 1.0 tabular; index `01` 13px. |

**Home font files (budget: 4 woff2, ≤ 90 kb):** Source Serif 4 latin 600 · Plex Sans 400 · Plex Sans 600 · Plex Mono 400.

**Drop from the current spec face:** IBM Plex Serif (the “this is a document” tell). Plex Sans remains the working type; Source Serif is the *issue* type.

**Do not use:** Inter, Geist, Space Grotesk, Instrument Serif (2026 model-default “Claude beige”), Instrument Sans as identity, Söhne, Newsreader as house face, Fragment Mono, Ndot/NType, Neue Montreal.

Titles are sentence case. No RFC modal verbs (*shall / should / may*). No `RELEASED` / `V1.0.0` in the chrome.

---

## Homepage wireframe (ASCII)

Desktop ≥1024. Mobile: same order, single column; dateline wraps to 2×2 **text**, not boxed cells; no left rail.

```
┌──────────────────────────────────────────────────────────────────────────┐
│  SUDHEER SINGH                         Work · GitHub · Resume · Email    │
│  New Delhi                                                             │
│  ──────────────────────────────────────────────────────────────────────  │
│                                                                          │
│  AI systems that stay up.                                                │
│  Backend engineer at C-DOT. Building ClauseNotebook.                     │
│                                                                          │
│  99.99% uptime     40% faster     4M+ / day     <3s e2e                  │
│  ─────────────────────────────────────────────  (one rule, not 4 boxes)  │
│  IMS/ENUM cluster    ENUM queries     lookups         TranslateLive      │
│                                                                          │
│  Now  ClauseNotebook · stage 1 ingestion · GitHub                        │
│  Mail singhsudheer215@gmail.com    Resume    GitHub    LinkedIn          │
│  Open to AI / LLM roles that own production reliability.                 │
│                                                                          │
│  ═ 2px oxide bar ════════════════════════════════════════════════════    │
│                                                                          │
│  01  ClauseNotebook                                                      │
│      Citation-grounded 3GPP copilot. Provenance first.                   │
│      SHA-256 manifests · CLI · in progress                               │
│      [case]  [GitHub]                                                    │
│                                                                          │
│  02  TranslateLive                                                       │
│      STT → GPT → TTS in one pipeline.                                    │
│      <3s e2e · released · personal                                       │
│      [case]  [GitHub]                                                    │
│                                                                          │
│  03  Distributed social backend                                          │
│      Five services. Kafka. gRPC. Failure modes on purpose.               │
│      Architecture · no public repo                                       │
│      [case]                                                              │
│                                                                          │
│  Production   Scientist-B, C-DOT. National IMS/ENUM. Public facts only.  │
│  Seeking      AI/LLM engineering that owns the production layer.         │
│  Stack        Python · FastAPI · Redis · k8s · RAG  (no bars)            │
│                                                                          │
│  © Sudheer Singh · git hash · C-DOT details = public résumé only         │
└──────────────────────────────────────────────────────────────────────────┘
```

**10-second test (must pass without scrolling on a 1440×900 window):**

1. Name.  
2. C-DOT + AI/backend.  
3. Four figures.  
4. Three named systems.  
5. Email.

Case studies stay at `/work/clausenotebook`, `/work/translatelive`, `/work/distributed-social`. They inherit the journal chrome (masthead, oxide bar, Source Serif title) and may keep a *small* facts table. They are not spec clauses.

---

## Motion principles

CSS only. No WebGL, no GSAP, no Lenis, no view transitions in v1, no count-up.

| Event | Motion | Duration |
|---|---|---|
| First paint | Masthead + lede + dateline fade/translate 8px (keep existing `.rise` if useful) | 180–220ms ease-out, staggered ≤ 60ms |
| Dateline | The rule under the four figures draws 0→100% width | 200ms |
| System row hover/focus | Oxide 2px bar on the row’s left; title colour to `--index` | 150ms |
| Links | Underline from left, colour | 150ms |
| `:target` on `#work` etc. | Brief paper-2 flash | 300ms |
| `prefers-reduced-motion: reduce` | **All of the above off.** Colour change only. |

Meaning never depends on motion. No Ken Burns on diagrams. No sticky header that eats focus (WCAG 2.4.11). No preloader.

---

## What to delete from the current spec-layout

Treat this as a kill list. If it survives a restyle, the site is still `TS 00.001`.

**Chrome / identity**

- Running header `SUDHEER TS 00.001 · V1.0.0 (2026-09) · RELEASED`
- Filled stamp `PERSONAL SPECIFICATION` (and the 11px mobile exception)
- Left **clause rail** (`1 2 2.1 2.2 2.3 3 4 5 A`)
- Clause kickers (`1 Scope`, `2 Work items`, `3 Production`, `4 Seeking`, `5 Definitions`, `Annex A/B`)
- Document-class language in footers (`SUDHEER TS 00.001`, change-history-as-spec)
- Dual compact/full identity strings as a spec feature (`roleCompact` / `employerCompact` / `nowCompact` as a *design* idea — one honest line per viewport is enough)

**Layout / components**

- Four **boxed** proof cells (`.proof-strip` as a 4-column card row / 2×2 on mobile). Replace with a **single dateline**: figures + qualifiers + one shared rule. Citations move to `title` / case studies / a footnote, not red chips on the hero.
- Homepage **conformance tables** and the `<details>Spec table</details>` pattern on `/`
- Clause-tree navigation as IA chrome (in-page `#work` `#production` stay; they are not clauses)
- “Definitions” as a spec clause heading — it can be a quiet **Stack** line
- RFC voice in copy (`shall`, `this document`, `scope`, `conformance`)

**Type / colour**

- IBM Plex Serif as the house reading face
- `--stamp` `#B42318` as a filled identity colour
- `--paper` `#F3EFE4` aged-spec beige (shift to cool newsprint `#F7F4EE`)
- 0-radius as a *spec* religion (0–2px is fine as print; do not advertise it)

**Keep (these are content, not costume)**

- Facts and citations as a *data* rule (uncited superlatives remain a defect; they just must not be a visual system on screen one)
- Four HTML routes + `/resume.pdf`
- Visible email, no form, no phone in HTML
- CSS-only motion, 0 JS on home until a written exception
- Self-hosted OFL fonts, Astro static, Cloudflare Pages
- Confidentiality sentence about C-DOT
- Three systems, ClauseNotebook as now-line
- Availability sentence

---

## Explicit non-goals for this restyle

- Do not mash Field Instrument (aluminum, teal, amber, Fragment Mono).
- Do not restyle the spec and call it a journal.
- Do not introduce Inter, indigo, glass, bento, or three equal project cards.
- Do not add a blog, `/about`, a guestbook, a 3D archive, or a product screenshot we do not have.
- Do not generate fake ClauseNotebook UI photography.

---

## Source log (live, 2026-09-12)

| URL | HTTP | Notes |
|---|---|---|
| https://bruno-simon.com | 200 | WebGL folio; HTML dated 2026-04-07 |
| https://linusrogge.com/ | 200 | ~3 KB calling card |
| https://olivercederborg.com/ | 200 | “Hi I’m Oliver”; GitHub stats |
| https://kentcdodds.com/ | 200 | Kody promo + educator brand |
| https://leerob.com | 200 | SpaceX/Cursor bio + notes index |
| https://sarah.dev | 200 | “I Make Things” + Chrome AI title ladder |
| https://www.adhamdannaway.com/ | 200 (browser UA) | Split designer/coder hero; fetcher 403 |
| https://www.wildyriftian.com/ | 200 | Awwwards SOTD 2025-09-12 |
| https://www.gionatannese.com/ | 200 | Awwwards SOTD 2026-09-05 |
| https://arnaldo.zip | 200 | Framer HTML 2026-09-08 |
| https://www.gabrielvaldivia.com/ | 200 | Product-site-as-portfolio |
| https://rauno.me | 200 | One-sentence studio index |
| https://frankchimero.com/ | 200 | Editorial bibliography; HTML 2026-08-12 |
| https://paco.me | 200 | List; Inter+Söhne — steal structure only |
| https://ia.net | 200 | Swiss product billboard |
| https://maggieappleton.com | 200 | Garden |
| https://jvns.ca | 200 | Engineer artifact index |
| https://dennissnellenberg.com | 200 | Designer-folio default — do not copy |

This file is the visual-research input for a later theme restyle. It does **not** amend `docs/research/theme-decision.md` by itself; it is the case for replacing that lock.
