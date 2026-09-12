# Theme research: Nothing (Nothing Tech / Nothing Phone / Nothing OS / Glyph)

**Subject:** Sudheer Singh — AI systems builder; Scientist-B / backend engineer at C-DOT (India’s national telecom R&D lab). Audience: hiring managers and senior engineers hiring for production AI/LLM, AI infra, and applied-AI-over-technical-corpora roles.

**Question:** Should Nothing’s visual and product language be the primary theme of his personal engineering portfolio?

**Verdict (preview):** **RECOMMEND ADAPT** — take 4 principles; do not clone the brand.

---

## 1. Sources (URLs)

Primary / official (live, 2026-09):

- https://nothing.tech/ — current storefront (Shopify Hydrogen + Sanity photography). Live CSS inspected 2026-09-12: `https://cdn.shopify.com/oxygen-v2/43495/38485/80939/4436627/assets/tailwind-Dg7hoORl.css`
- https://nothing.tech/nothing-os — Nothing OS 5.0 product page
- https://nothing.tech/products/phone-4a-pro — product + spec presentation
- https://support.nothing.tech/hc/en-us/articles/43227904206097-What-is-the-Glyph-Interface
- https://support.nothing.tech/hc/en-us/articles/43227863608209-How-do-I-change-fonts-on-the-Phone

Brand origin / type:

- https://fontsinuse.com/uses/59510/nothing-phone — Seventy Agency + Colophon Foundry: NDot, NType 82, NType 82 Mono, LL Lettera Mono
- https://fontsinuse.com/typefaces/233368/ntype-82 — NType 82 “designed in 2021 for exclusive use by tech company Nothing”
- https://github.com/xeji01/nothingfont — unofficial dump; credits “NOTHING Tech. All Rights Reserved”
- https://www.onlinewebfonts.com/fonts/Ndot_nothing — Ndot 55 metadata quoting the Nothing-only license (see §5)

Design interviews (2025–2026):

- https://www.creativebloq.com/design/product-design/why-nothing-designs-its-phones-like-logos (2026-03) — Adam Bates: phones designed “almost like a logo”; “alternative future from maybe back in the 1980s”
- https://www.wallpaper.com/tech/nothing-design-team-interview (2026-08) — Lucy Birley expanding a historically B/W+red palette into chromatic colour *inside* transparency
- https://design-milk.com/the-nothing-phone-3s-glyph-matrix-turns-notifications-into-pixel-art/ (2025-06) — Glyph Matrix: 489 micro-LEDs; “less distraction, more meaning”
- https://www.vogue.com/article/how-nothing-plans-to-become-the-go-to-tech-brand-for-gen-z-creatives (2025-12) — average customer age 26; Charli xcx; ex-Loewe CMO; “make tech fun”
- https://www.youtube.com/watch?v=zS83wXOuIbo — Carl Pei on Nothing OS 3: Ndot cannot live everywhere; readability over signature font saturation

Site / OS evolution:

- https://nothing.community/d/35279-nothingtech-is-getting-a-refresh (2025-06) — staff: 74% of sessions are mobile; framed product tiles; OS-widget navigation
- https://nothingnewsroom.com/nothing-new-website-design/ (2025-06) — site treated as “a digital product experience”
- https://www.91mobiles.com/reviews/nothing-os-5-hands-on/ (2026-09) — Geist replaces Inter; Lucent translucent widgets; compact Settings
- https://www.digitalsilk.com/digital-trends/minimalist-web-design-trends/ — cites nothing.tech for negative space + high contrast

Legal / trademarks / clones:

- USPTO 90495323 — registered stylized “NOTHING” wordmark of circles (Nothing Technology Limited, 2024-04-16)
- https://www.trademarkia.com/owners/nothing-technology-limited — 64 marks including NOTHING, NOTHING X, ESSENTIAL SPACE, CMF BY NOTHING
- https://lineto.com/typefaces/lettera-mono/pricing — LL Lettera Mono family from CHF 570
- https://fonts.google.com/specimen/Doto — OFL legal dot-matrix alternative
- https://github.com/oliverlalan/Doto — OFL-1.1
- https://github.com/floriankarsten/space-grotesk — Space Grotesk OFL (Colophon DNA, legal)
- https://github.com/vercel/geist-font — Geist OFL (what Nothing OS 5.0 and nothing.tech themselves now ship for UI)
- https://www.androidcentral.com/phones/nothing-phone-3a-isnt-even-out-yet-but-this-brand-has-already-cloned-it — Doogee Blade GT Ultra hardware clone
- https://www.pcmag.com/news/dbrand-copies-the-nothing-phone-1-aesthetic-with-new-skins — dbrand “Something”
- https://chromewebstore.google.com/detail/notheme-nothing-inspired/hdgpghmdgpblgmmenajhanajhnipmlal — “NOTHEME”: black + dots + red
- https://www.pocket-lint.com/apps-that-feel-right-at-home-on-my-nothing-phone-3/ — third-party “Nothing-inspired” apps using NType and red
- https://www.pocket-lint.com/something-os-widgets-for-android/ — Something OS Widgets, $1.50 aesthetic pack

Community reconstruction (not official; use only as a *secondary* map of how fans read the system):

- https://nothing.wiki/nothing/brand_reference — unofficial 2026 wiki distilled from campaign PDFs: palette, NType case rules, 2/4/6/8/10-column grid with 2.3% margin
- https://nothing.community/d/104-ndot57-the-nothing-typeface — early leak of Ndot 55/57 from Shopify CDN
- https://raw.githubusercontent.com/dominikmartn/nothing-design-skill/main/nothing-design/references/tokens.md — fan token sheet (useful as a *legal-font* remapping, not as Nothing IP)

---

## 2. Visual system inventory

Facts below are from live nothing.tech CSS (2026-09-12), the OS 5.0 page, product pages, and 2025–2026 design interviews. Unofficial wiki notes are marked.

### 2.1 Typography

**Current nothing.tech `@font-face` stack (live):**

| Family as loaded | File | Role on site |
|---|---|---|
| `Geist Variable` | woff2 variable, 100–900 | Default UI / body (new as of OS 5 / 2026 site) |
| `Geist Mono Variable` | woff2 variable | Data / code-adjacent |
| `NType82-Regular` | `NType82-Regular.otf` | Titles, headlines, body (`.type-title`, `.type-headline`, `.type-body`) |
| `NType82-Headline` | `NType82-Headline.otf` | Display statements |
| `Ndot-Regular` | `Ndot-55.otf` (weight 55) | Logo, categories, product names |
| `Ndot-Bold` | `Ndot-57.otf` (weight 57) | Heavier dotted display |
| `LatteraMonoLL` | `LetteraMonoLL-Regular.otf` | Callouts, form fields, spec-like labels |

**CSS type roles (verbatim class names):**

- `.type-logo` — Ndot-Regular, **uppercase**, 1.25rem / 1.35rem, weight 55
- `.type-product-name` — Ndot-Regular, **lowercase**, 1.25rem, weight 55. Product names are always `phone ( 4a ) pro`, `ear ( 3a )` — lowercase, spaces inside parentheses
- `.type-category` — Ndot-Regular, uppercase, 2.5rem / 2.5rem
- `.type-title` — NType82-Regular, 2rem / 2.2rem, weight 100
- `.type-headline` — NType82-Regular, 1.5rem / 1.65rem, weight 100
- `.type-body` — NType82-Regular, 1rem / 1.4rem, weight 400
- `.type-callout` — Lettera Mono LL, **uppercase**, **0.6875rem (11px)**, line-height 0.75625rem. This is the “spec sheet / button / chrome” voice
- `.type-text-field` — Lettera Mono LL, 1rem, letter-spacing **−0.04em**

NType display scale on the site: 2.5rem / 3rem / 3.75rem at line-height 1. Ndot display: 1.875rem–3.75rem at line-height 1, weights 55 or 57 (the weight *is* the cut name).

**Origin (Fonts In Use / Seventy + Colophon, c. 2021):** custom suite inspired by “raw digital fonts and colours from IBM’s iconic mainframe era in the 1980s.” NType 82 is named after the Olivetti Lexikon 82 typewriter. LL Lettera Mono is Kobi Benezri / Lineto’s digital revival of Josef Müller-Brockmann’s 1968 Olivetti golf-ball drawings.

**OS path, not the same as the website:**

- Early Nothing OS: Ndot everywhere
- Nothing OS 3 (Carl Pei, 2025): “we had the Ndot font everywhere… Ndot is great but can’t just have it everywhere.” NType 82 for apps/settings; Inter (then) for UI
- Nothing OS 5.0 (2026): **Geist replaces Inter** “for improved legibility and a more cohesive look”; already on Nothing Playground. Settings spacing tightened. Two new lock-screen clocks: **Gooey** (liquid, playful) and **Micrographics** (“hardware-inspired,” more information)

**Unofficial wiki (campaign PDFs, treat as reconstructed):** NType headlines are sentence case — first letter uppercase, rest lowercase; never all-caps, never title case, never extra tracking. Ndot is reserved for the logotype and product names and must not mix with other fonts in the same lockup. Ndot 57 is **deprecated** for body copy (used on the 2021–early-2022 site; gone by Phone (1) launch, July 2022).

**Readability fact:** community members have complained Ndot is “a bit hard to read.” Nothing itself walked it back for body text. A portfolio that sets *paragraphs* in dots would be both illegal and worse than the brand it is copying.

### 2.2 Colour

**Live `:root` tokens from nothing.tech CSS** (space-separated sRGB, converted):

| Token | RGB | Hex | Use |
|---|---|---|---|
| `--accent-red` | 200 16 46 | **`#C8102E`** | Primary brand red (same as unofficial “N-Red”) |
| `--accent-yellow` | 255 199 0 | **`#FFC700`** | Primary yellow |
| `--accent-blue` | 0 47 108 | **`#002F6C`** | Primary blue |
| `--greyscale-white` | 255 255 255 | `#FFFFFF` | |
| `--greyscale-100` | 244 244 244 | `#F4F4F4` | Near-paper |
| `--greyscale-200` | 216 217 217 | `#D8D9D9` | |
| `--greyscale-default` | 177 179 179 | **`#B1B3B3`** | “Window Grey” |
| `--greyscale-900` | 89 90 90 | `#595A5A` | Frost overlays |
| `--greyscale-1000` | 60 60 60 | `#3C3C3C` | |
| `--greyscale-black` | 4 4 4 | **`#040404`** | Not pure `#000`; OLED-adjacent |
| `--greyscale-dm-light` | 24 24 24 | `#181818` | Dark-mode raised |
| `--greyscale-dm-dark` | 4 4 4 | `#040404` | Dark-mode ground |

Secondary red used in OS widgets (unofficial wiki, not in the public CSS `:root`): **`#D71920`**. Fan token sheets often flatten this to `#D71921`.

**Palette behaviour:**

- Core identity for four years: **black / white / one red signal**. Bates/Birley (Creative Bloq 2026): “wedded to a black and white with a touch of red.”
- 2024–2026: colour is allowed **inside transparency**, not as a filled logo. Phone (2a) Special Edition used primary red/blue/yellow as a Massimo Vignelli / Designers Republic transit graphic. Phone (4a) puts chromatic colour *under* translucent plastic so it “casts everything below into shadow and relief.”
- Ear (3a) 2026: pink; Headphone (a): yellow. Wallpaper* 2026: Birley spent 18 months on “a more expressive palette that’s also softer and friendlier.”
- Logo rule (wiki, consistent with live site): **black and white only**. No colour fills, no gradients, no drop shadows on the wordmark or graphic elements.

**Surfaces, not shadows:** frost utilities use `backdrop-filter: blur(45px)` with white at 5% / 80% or grey-900 at 60%. Cards do not rely on drop shadows. Dark mode is an instrument-panel black, not a purple-tinted “developer dark.”

### 2.3 Grid / layout

Live site (2026):

- `--header-height: 64px`
- `--grid-item-width: 355px`
- `--aside-width: 400px`
- Product home is a **widget-like tile grid**: large 16:9 / 4096×2305 studio stills, a dotted product name, a one-line benefit, a Lettera-uppercase CTA (`Discover`, `Shop now`, `Learn more`)
- Tailwind radii in use: `rounded-md` on buttons, `rounded-none` on full-bleed photos (photos go edge-to-edge inside the tile; chrome is the only rounding)
- Staff on the June 2025 redesign: **74% of sessions are mobile**; they kept a distinctive desktop “frame” around background visuals because they liked the finish, not because desktop is the primary canvas
- Unofficial wiki grid (campaign): evaluate format → pick 2/4/6/8/10 columns → **column margin = 2.3% of format width**, scaled from bottom-left. Logotype top-aligned, never in the rightmost column unless supported by text, never wider than its column

The 2025 redesign is explicitly “inspired by desktop and mobile operating systems and apps” and “a simple nod to Nothing OS widgets.” The site is meant to feel like a **product**, not a magazine.

### 2.4 Motion

From live CSS + OS copy:

- Durations in the utility set: 100 / **150** / **200** / 300 / 500 ms. Buttons: `transition-all duration-200`
- Easing: `ease-out`, `ease-in-out`, `ease-linear`. No spring, no bounce
- Images: `transition-opacity` (fade, not Ken Burns)
- Frost: 45px backdrop blur on chrome, not on content
- OS 5: “smoother motion everywhere”; camera aspect-ratio change is a **curtain-opening** animation; status-bar icons *move* (aeroplane flies up; signal/Wi‑Fi slide)
- Glyph philosophy (Bates, Design Milk): ambient, glanceable, “subtle… stay present while still staying informed.” 60 Hz compositions in Glyph Composer (16.666 ms/frame)
- What they do **not** do: parallax-heavy scroll-jacking as a brand signature; gradient mesh blobs; purple glow

### 2.5 UI chrome

- Monochrome / tinted icon packs (official Nothing Icon Pack). Thin, circular, high-contrast
- Widgets as the unit of UI: clocks, Glyph Timer, Collector (sticker shelf), Away Time
- OS 5 Lucent theme: translucent widgets/folders that leak wallpaper
- Glyph Interface history: 5 LED strips (Phone 1) → 11 (Phone 2) → 3 (2a/3a) → **Glyph Matrix**, a circular 489-LED micro-display (Phone 3) → Glyph Bar (Phone 4a). Always a *secondary, glanceable* surface, never a second phone screen in marketing copy
- Glyph Composer: pad-based light+sound sequencer; ringtones ≤ 10 s
- Essential Space / Essential Apps / Playground: AI as *capture and widget-building*, consumer-facing, “no coding required”
- Copy in chrome is tiny, uppercase, mono: the 11px Lettera callout

### 2.6 Photography / product-spec presentation

- Hero stills: Sanity CDN, 3840×2160 to 7592×4271 webp/jpg, `auto=format`. Studio, directional light, product as the only subject
- Transparent / cassette-like backs, visible screws, camera clusters treated as **graphic marks** (“almost like a logo,” Bates)
- Lifestyle is fashion-adjacent: Charli xcx as Global Brand Ambassador + shareholder for Headphone (a); Jordan Hemingway (FKA Twigs collaborator) for headphone campaign; runway placements
- Product copy is **claim + three bullets**, not paragraphs. Phone (4a) Pro: “World’s first 140x ultra zoom*” / “3 camera system with Sony sensor” / “Nothing OS with Essential AI tools”
- Spec voice is Lettera Mono, small, legal-adjacent (wiki: “Tech specs (Main camera) — 50 MP, f/1.88…”). Specs are typeset like a datasheet, not like a blog
- Naming syntax is a trademark of the brand: `Phone (4a) Pro`, spaces around parentheses in Ndot lockups, no “(R)” when locked to a product name

### 2.7 Copy tone

House voice (Nothing OS 5.0 page and storefront):

- Short, lowercase-friendly, slightly coy: “More control, more personalisation, more fun.”
- “Designed for a lighter way to use your phone.”
- “Stay in the moment with Essential Notifications.”
- “Get live delivery updates with the new Glyph Bar.”
- “Tech for whoever you are this semester.”
- Manifesto fragments (wiki / early brand): “We make essential stuff that makes life work.” “Technical Warmth.” “Commercial success is never our starting point.”

This is **consumer lifestyle + design-cult manifesto**, not systems-engineering English. Average customer is **26** (Vogue Business, 2025-12). Mission: “to make tech fun, and inspire human creativity.” Incoming CBO is ex-Loewe. That is the intended reader.

---

## 3. What would translate well to a personal engineering portfolio

Four principles, not the costume.

**A. Material honesty / inside-out.** Bates designs phones so circuitry, screws, and camera geometry *are* the graphic. For Sudheer that maps cleanly to: show the internals of ClauseNotebook (versioned JSON manifest, SHA-256, registered→converted states), the IMS/ENUM path, the Postgres failover diagram, the TranslateLive STT→GPT→TTS pipeline. Do not hide the system behind three glossy project cards. The *idea* is “the engineering is the aesthetic.” That is on-brand for a Scientist-B. The transparent-phone skin is not.

**B. Spec-sheet information design.** The 11px uppercase mono callout, the datasheet camera line, the three-bullet product claim — this is how you present **99.99% uptime**, **sub-30s recovery**, **40% faster** IMS/ENUM queries, **&lt;3s e2e** TranslateLive, **10+ concurrent sessions**. Numbers as first-class objects, labels in a mechanical mono, units smaller and adjacent. Hiring managers scan. Nothing’s product pages are built for scanning. Most developer portfolios are not.

**C. Restricted, high-contrast field.** Near-black `#040404`, paper `#F4F4F4` / white, one signal colour used as a *status lamp* not a gradient. Generous tile margins. Photos/diagrams edge-to-edge; chrome rounded; no drop shadow. This is the opposite of “dark glassmorphism + purple gradient + three project cards,” which the brief forbids. It will still look designed in 2026.

**D. Glanceable status, not a second essay.** Glyph’s actual design claim is “less distraction, more meaning”: a secondary surface that tells you state without opening the thing. For a production-AI portfolio that is: a small always-visible reliability strip (uptime, last eval, p95, citation coverage), a provenance chip on ClauseNotebook, a failover state on the Postgres cluster. Ambient, not animated-LED cosplay.

Bonus, used lightly: the **IBM-mainframe / Olivetti** ancestry Colophon cited is closer to C-DOT/telecom than to Charli xcx. If any “Nothing DNA” belongs on this site, it is that industrial-computing layer, reached through **legal** type (IBM Plex, Space Grotesk/Mono, Geist) — not through Ndot.

---

## 4. What would look like a cheap clone or off-brand for a hiring manager

These are the tells. Any two together will read as “Nothing Phone fan site,” not “AI systems builder from national telecom.”

1. **The dotted wordmark.** Ndot 55/57 at display size, especially uppercase Latin. USPTO 90495323 protects the stylized NOTHING of circles. Even a personal name set in Ndot will trigger “that’s the Nothing font.” Fan GitHubs and FontStruct clones do not make this safe.
2. **Nothing red `#C8102E` (or widget red `#D71920`) on OLED black with a dot grid.** This combo is now a $1.50 Chrome theme (NOTHEME), a Play Store widget pack (Something OS / Everything Widgets), and a dozen Dribbble shots. It is a meme, not a personal brand.
3. **Parenthetical product syntax.** `sudheer ( 1 )`, `clause ( notebook )`, `phone ( 3 )`-style names. That punctuation *is* the brand’s naming system.
4. **Glyph strips / 11-zone LED bars / circular micro-LED toys** as hero decoration. Bates is explicit that the Matrix is “unmistakably Nothing.” Hardware clones (Doogee Blade GT Ultra, Infinix GT 10 Pro, dbrand Something) already proved the look reads as knockoff when transplanted.
5. **NType 82 as the body face, Lettera Mono as the chrome, Ndot as the logo** — the exact three-family lockup. That is not “inspired”; that is a stolen kit.
6. **Gooey clocks, Collector stickers, Charli-xcx-grade lifestyle photography, “Technical Warmth” slogans, lowercase manifesto poetry.** Sudheer’s proof is 99.99% uptime on national call-routing and a provenance-first 3GPP copilot. A hiring manager at an AI-infra team will bounce if the first screen is a fashion-tech landing.
7. **All-over dot-matrix body text.** Nothing themselves abandoned this by mid-2022 because it fails at paragraph length. Doing it in 2026 is both behind the brand and hostile to reading a RAG architecture.
8. **Trademarked marks:** NOTHING wordmark, CMF by Nothing, Glyph Interface / Glyph Matrix / Glyph Composer, Essential Space, the red circular favicon. Do not use them. Do not put a Nothing logo in a “inspired by” footer.

**Derivative vs inspired (worked examples):**

| Example | Verdict | Why |
|---|---|---|
| Doogee Blade GT Ultra, Infinix GT 10 Pro | Derivative (hardware) | Transparent back + rear LEDs + visible screws = the product *is* the clone |
| dbrand “Something” skins | Self-aware plagiarism | They said so |
| NOTHEME, Something OS Widgets, MissingCore Music, “Notes with Markdown” | Derivative (software) | Dot grid + NType + red accent + AMOLED black. Explicitly “Nothing-inspired” as a selling point |
| Fan Figma widget recreations | Derivative | 1:1 OS chrome |
| A spec-sheet layout + IBM Plex Mono labels + one status colour that is *not* `#C8102E` + diagrams of internals | Inspired | Same *information design* without the protected costume |
| Using Geist because it is OFL and highly readable | Not even Nothing | Nothing adopted Geist; Geist is Vercel’s. Using it is normal in 2026, not a tribute |

---

## 5. Legal / licensing notes

This is not legal advice. It is what the public record currently says.

### Fonts — do not ship

**Ndot 55 / Ndot 57 / NType 82 / NType 82 Mono**

- Custom, exclusive, Colophon Foundry for Nothing (Fonts In Use). NType 82: “Designed in 2021 for exclusive use by tech company Nothing.”
- Ndot 55 metadata (as republished on OnlineWebFonts, Colophon/Nothing copyright string): *“By using Ndot, you agree to their use solely on the Nothing brand materials and will not use them for any other purpose whatsoever. You must not modify, adapt, alter, convert, translate or otherwise change the Ndot font software. You must not send or share the Ndot font software, with any persons or organisation, or any third party who is not commissioned by, or directly associated with, Nothing.”*
- Unofficial GitHub `xeji01/nothingfont`: “NOTHING Tech. All Rights Reserved.” Hosting or `@font-face`-ing those files on a personal site is redistribution of unlicensed font software.
- Community answers (“for personal-use we should be fine”) are not a license. A public engineering portfolio used to get hired is not a private hobby file.
- FontStruct “NDOT 47 (inspired by NOTHING)” is OFL **as a FontStruction**, but the author warns “many letters are possibly well within the copyright claims.” Do not use lookalike Ndots. They exist to look like a registered stylized mark.

**LL Lettera Mono**

- Commercial Lineto family. Public pricing: family 6 cuts **CHF 570**; single cuts **CHF 160**. Desktop ≠ web. A personal site serving `LetteraMonoLL-Regular.otf` from a scraped Shopify CDN is unlicensed.

Hotlinking Nothing’s Shopify Oxygen font URLs is still using their font software on a third-party site. Do not.

### Fonts — legal to use (OFL)

| Face | License | Why it is the honest substitute |
|---|---|---|
| **Geist / Geist Mono** (Vercel) | SIL OFL 1.1 | What nothing.tech and Nothing OS 5 actually use for UI now. Readable. Not exclusive. |
| **Space Grotesk + Space Mono** | SIL OFL 1.1 | Space Mono is Colophon for Google; Grotesk is Florian Karsten’s proportional sibling. Same foundry *family* as NType’s maker, without the exclusive cuts. |
| **IBM Plex Sans + IBM Plex Mono** | SIL OFL 1.1 | Literally the mainframe-era corporate lineage Colophon cited as inspiration. Closer to C-DOT than to Nothing’s fashion layer. Name “IBM Plex” is reserved — you may *use* the font, you may not brand the site as IBM. |
| **Doto** (Óliver Lalan, Google Fonts) | SIL OFL 1.1 | 6×10 dot matrix, variable roundness + weight. Display-only. **Do not use as a wordmark substitute for Ndot.** One or two oversized numerals/metrics at most, or skip it to stay further from the clone. |
| **Inter** | SIL OFL 1.1 | What OS 3–4 used. Fine, but generic in 2026. |

OFL allows commercial/personal web embedding. Do not sell the font files. Do not keep Reserved Font Names on derivatives.

### Marks, glyphs, wordmarks — do not use

- Stylized **NOTHING** of circles (USPTO 90495323, registered 2024-04-16)
- **NOTHING**, **NOTHING X**, **CMF BY NOTHING**, **ESSENTIAL SPACE**, and related device/software classes (Nothing Technology Limited, 64 US filings)
- Glyph Interface / Glyph Matrix hardware graphics, official weather icons, folder “toys,” and the red circular favicon (wiki: proprietary; inspiration only)
- Product naming punctuation as a lockup (`Name ( 2a ) Pro`) if it could confuse sponsorship

Nominative fair use (“this site is not affiliated with Nothing Technology Limited”) is for *talking about* them, not for dressing a personal brand in their clothes.

---

## 6. Concrete implementation tokens **if adapted**

Use these, not Nothing’s exclusive files. Goal: spec-sheet + inside-out systems, legally.

### Colour (do **not** use `#C8102E`)

Pick a palette that keeps the *structure* (near-black, paper, one lamp) and changes the *identity*.

**Recommended “instrument panel” (dark default, light available):**

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0B0D10` | Cool near-black (blue-black, not Nothing’s `#040404`) |
| `--surface` | `#14181D` | Raised |
| `--surface-2` | `#1C2229` | Spec panel |
| `--line` | `#2A323C` | Hairline rules, not shadows |
| `--text` | `#E6E8EB` | Body |
| `--text-dim` | `#8B939E` | Labels |
| `--display` | `#F4F6F8` | Headlines / numbers |
| `--signal` | `#3D9B8F` | One lamp: teal — telecom / link / “up”. Never decorative, one per view |
| `--signal-warn` | `#C9A227` | Degraded |
| `--signal-down` | `#B33A3A` | Down/error — *not* Nothing red; slightly brown-red |
| `--paper` | `#F3F1EC` | Light-mode page (warm paper, not `#F4F4F4` grey) |
| `--ink` | `#12151A` | Light-mode text |

Rules: no gradients on type; no glow; signal colour on **values** (99.99%, 40%, &lt;3s), never on large fills; hairlines 1px; frost optional at 20–30px blur, not Nothing’s 45px signature.

### Type (legal pairings)

**Pairing A — closest to “industrial computing,” furthest from fan-clone (preferred for this person):**

- Display / headings: **IBM Plex Sans** (400/500/600)
- Body: **IBM Plex Sans** 400, 16–18px, line-height 1.5
- Specs, labels, code, metrics: **IBM Plex Mono** 400/500, labels 11–12px, **uppercase**, letter-spacing 0.06–0.1em
- Optional display numerals only: **Doto** at ≥ 48px, roundness 0–40, never for his name

**Pairing B — if the site should feel more 2026-product than IBM-corporate:**

- UI/body: **Geist** 400/500/600 (OFL; coincidentally what Nothing OS 5 chose — that is not a problem if Ndot/NType/red/Glyph are absent)
- Specs/code: **Geist Mono** or **Space Mono**
- No Doto at all

Do not mix Plex + Doto + red. That reconstructs the costume.

### Type scale (adapted, not copied)

| Role | Size | Line-height | Tracking | Face |
|---|---|---|---|---|
| Display metric | 48–72px | 1.0 | −0.02em | Plex Sans medium or Doto |
| Page title | 32–40px | 1.1 | −0.02em | Plex Sans |
| Section | 22–24px | 1.2 | 0 | Plex Sans |
| Body | 16–18px | 1.5 | 0 | Plex Sans |
| Spec label | 11px | 1.2 | 0.08em | Plex Mono, uppercase |
| Spec value | 14–16px | 1.3 | 0 | Plex Mono tabular |

Max four levels. Sentence case for titles (this is a useful NType *rule* that does not require NType). Never all-caps body.

### Layout rules

- Mobile-first; 74% of Nothing’s own traffic is mobile — a portfolio should assume the same
- One 8px spacing scale: 4 / 8 / 16 / 24 / 32 / 48 / 72
- Project modules as **spec tiles**, not as cards-with-shadows: full-bleed diagram or architecture on top; name + one-line claim; a 3-row spec table (stack, constraint, proof number); links as 11px mono callouts
- Hairline grid, not a 16px polka-dot wallpaper
- Name lockup: **Sudheer Singh** in Plex Sans, not in dots; small mono location line `NEW DELHI · C-DOT · SCIENTIST-B`
- Do not frame the viewport in a fake phone bezel

### Interaction ideas (Glyph-the-principle, not Glyph-the-product)

- A persistent **status strip**: Postgres cluster `UP 99.99%` / ClauseNotebook `MANIFEST VALID` / TranslateLive `P95 &lt; 3s`. Colour the value, not the bar
- Hover = hairline and label brighten. No scale, no shadow, 150–250ms ease-out
- Project “internals” reveal: click a tile to expand the diagram (inside-out), not a modal of marketing
- Respect `prefers-reduced-motion`; Glyph-like strobe is an epilepsy warning on Nothing’s own support page — do not flash
- Optional: a 12px mono “composition” of eval traces that fills in at 60Hz *once* on first view, then static. If it looks like a ringtone visualizer, cut it

### Copy tone (adapted)

Keep: short claims, numbers first, no purple prose.  
Drop: “fun,” “semester,” “stay in the moment,” “technical warmth,” manifesto fragments.  
Use Sudheer’s actual register: “AI engineer with three years building high-availability backends for India’s national telecom infrastructure.” Provenance, uptime, citations, failover. That is already more distinctive than Nothing’s lifestyle voice.

---

## 7. Verdict + rationale

**RECOMMEND ADAPT**

Do not use Nothing as the primary theme. Do not put Ndot, NType, Lettera, Glyph, or `#C8102E` on this site. Do take four principles: inside-out systems, spec-sheet typography, a restricted high-contrast field with one status lamp, and glanceable reliability chrome.

Nothing in 2025–2026 is a **consumer gadget and fashion-tech brand**. Vogue Business: average customer 26, Charli xcx as ambassador-shareholder, ex-Loewe CMO hired to own brand and stores, mission “make tech fun.” Bates wants every phone to work “almost like a logo.” That is a visibility strategy for a challenger handset company in a sea of black glass. Sudheer is a Scientist-B who rebuilt a PostgreSQL cluster to 99.99% uptime for national IMS/ENUM routing and is building a citation-grounded 3GPP copilot. His hiring managers are not shopping Ear (3a) pink. They are asking whether he can own RAG evaluation, tracing, and production failure modes. A full Nothing skin answers a question they did not ask, and answers it with someone else’s trademark.

The clone surface is also exhausted. Hardware knockoffs, dbrand “Something,” and a cottage industry of “Nothing-inspired” widget packs mean the dotted-red-on-black look now signals *fan aesthetic pack*, not *original designer*. Exclusive type cannot legally be used; hotlinking Shopify’s `Ndot-55.otf` is not a personal-use loophole. Even Nothing pulled Ndot off body text because it does not read.

What *is* worth stealing is the industrial-computing layer under the fashion: Colophon’s IBM-mainframe brief, Müller-Brockmann/Olivetti spec type, circuitry-as-graphic, datasheet claims, ambient status. Those ideas predate Nothing and map to telecom infrastructure better than they map to Gen Z headphones. Execute them with IBM Plex or Geist + a teal lamp + diagrams of real systems. The site will still refuse the generic Next.js/Tailwind portfolio. It will not look like he applied to Nothing’s brand studio by mistake.

---

## 8. Confidence and what could not be verified

**Confidence: high** on the visual inventory, live tokens, type exclusivity, and the ADOPT/ADAPT/REJECT call. **Medium** on reconstructed campaign-PDF rules (case, 2.3% grid) because they come from an unofficial wiki that claims to summarise internal PDFs, not from a public brand book. **Low** on whether Nothing would ever send a cease-and-desist over a personal portfolio — the license text is already enough to not take the bet.

Could not verify:

- An official, public Nothing brand PDF (community has asked for years; wiki is unofficial)
- Colophon’s full NType 82 EULA (not sold; exclusive)
- Exact Glyph Matrix LED count beyond press (“489” in Android Authority; treat as reported)
- Whether Geist on OS 5 is a full system default on every SKU at general release (Open Beta on Phone (3) as of 2026-09; Micrographics clock and refreshed homescreen were still gated)
- The unofficial wiki’s N-Grey `#DCD7D2` vs listed RGB 242/242/238 (internally inconsistent). **Prefer live CSS** `#F4F4F4` / `#B1B3B3` / `#040404`
- India-specific trademark status of the dotted wordmark (US registration confirmed; Indian registry not pulled)
- Pixel-perfect motion curves beyond the public Tailwind durations

**Do not treat this file as permission to use Nothing IP.** Adapt the four principles in §3 with the legal tokens in §6.
