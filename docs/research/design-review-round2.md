# Design Document Review: Sudheer TS 00.001 — Personal engineering portfolio

**Reviewer:** staff engineer (design-review round 2)  
**Canonical doc:** `/var/folders/74/05xt1bf56nxb33y5frh_j5rh0000gn/T/grok-tereishqmein/grok-design-doc-fcf8af0f.md` (1575 lines, SHA-1 `44a03dcc5b0a947596352d4730ce32f47a9be18c`)  
**Repo copy:** `/Users/tereishqmein/Dev/v2/portfolio/docs/DESIGN.md` (identical)  
**Date:** 2026-09-12

Round-1 issues were checked against the revised design, not against Response fields. Scratch and `docs/DESIGN.md` match. Round-1 persist copy (`docs/research/design-review-round1.md`) still holds the addressed round-1 notes; this file is the current review.

## Summary

**Needs revision.** Round 1’s blocking defects are actually in the document: 360 proof-cell contract + wireframe, Sans 600 array preload, PR0 omits `ClauseRail` and copies `resume.pdf`, work collection SSOT, PR5 depends on PR3∧PR4, `commit.ts`, and the minor locks (H1 vs title, stack chips, NSSAAF “may be,” `entry.css`, golden `claim`s, `/_astro/*` cache, copy lint, `trailingSlash` / Node 22 / 404). The design still is not an unambiguous PR0 contract: §6 says the builder cannot paraphrase Clause 1, while the 360 wireframe silently shortens role, employer, now-line, and the running header, and the Now slot still 404s `/work/clausenotebook` in PR0 after they correctly refused that for Resume.

---

### Issue 1: 360 wireframe shortens locked Clause 1 / chrome strings with no compact-copy table
- **Severity**: major
- **Section**: §3.4 compact header, §4.2 wireframe, §6 (“Builder cannot paraphrase these strings”)
- **Description**: Proof details now have an explicit compact contract (§4.1). Nothing equivalent exists for the other first-viewport slots. §6 still forbids paraphrasing and still locks:

  - Role: `AI Systems Builder — backend engineer for AI-powered products.`
  - Employer: `Scientist-B / Backend Engineer, C-DOT (Centre for Development of Telematics)` plus Location `New Delhi, India`
  - Now: the full ClauseNotebook paragraph, including ingestion SHA-256 / CLI and both links
  - Running header: `SUDHEER TS 00.001` · `V1.0.0 (2026-09)` · `RELEASED`

  The 360×640 wireframe paints different strings at the budgeted heights: role `AI Systems Builder` (20px), employer `Scientist-B, C-DOT · New Delhi` (20px), now `Now: ClauseNotebook · in progress` / Stage 1 (32px / 2 lines), identity `TS 00.001 · V1.0.0 · RELEASED` (drops `SUDHEER` and `(2026-09)`). An engineer who typesets §6 verbatim blows the 564px ceiling (the Now paragraph alone is ~4–6 lines, not 32px). An engineer who typesets the wireframe paraphrases locked copy.

  ASCII abbreviation is fine as a drawing aid only if a table says which exact compact strings ship at `<1024`. That table exists for proofs and for the availability chip; it does not exist here.
- **Suggestion**: Add a compact column to the §6 table (and the running-header line) for `<1024`, same pattern as proofs: painted string vs full string in `aria-describedby` / `title` / ≥1024. Lock the 360 Now line to something like `Now: ClauseNotebook · in progress · Stage 1` (GitHub only until `publishPage`). Keep the full identity string; shrink type or wrap the stamp, do not drop `SUDHEER`. Point the wireframe at those strings so it is a height check, not a second copy deck.
- **Status**: addressed
- **Response**: Added a compact vs full column to §6 (and `site.clause1`) for running header, stamp, role, employer, location, Now, Now links, proofs, chip. Compact identity keeps `SUDHEER TS 00.001 · V1.0.0 (2026-09) · RELEASED` at 11px (no dropped tokens). Compact Now is `Now: ClauseNotebook · in progress · Stage 1`. Full strings live in `aria-describedby` / `title` / ≥1024. §4.2 wireframe is labeled a height check of that compact column, not a second copy deck.

### Issue 2: Clause 1 Now-line still 404s `/work/clausenotebook` in PR0
- **Severity**: major
- **Section**: §6 Now slot, Slice 0 / PR0, `publishPage` / WorkItem href rule
- **Description**: Resume was moved to PR0 specifically so a first-viewport control is not a 404. The locked Now slot still says `Links: /work/clausenotebook and https://github.com/sudheer215s/ClauseNotebook`. Slice 0 is “no case study”; `[slug].astro` arrives in PR2; `publishPage` is false until then. `WorkItem` correctly omits the case-study href until `publishPage`. Clause 1 does not. A branded `404.astro` (“Clause not found”) on a first-viewport “Now” link is the same hire-scan defect, just on a different control.
- **Suggestion**: Same rule as `WorkItem`: PR0/PR1 Now-line links to the public GitHub repo only. Add `/work/clausenotebook` when PR2 flips `publishPage`. Put that in the §6 compact column (Issue 1) so it cannot drift.
- **Status**: addressed
- **Response**: Compact Now links GitHub only. `/work/clausenotebook` is added when PR2 sets `publishPage: true` (index.astro listed in PR2). Same rule as `WorkItem`. Recorded as an amendment vs IA’s first-screen case-study href.

### Issue 3: 360 stamp is 11px `--stamp` on `--paper`, which the contrast table forbids
- **Severity**: minor
- **Section**: §3.1 contrast table, §3.4 compact header, amendments table
- **Description**: Contrast gate: “Pass AA for stamp text ≥14px. Do not use stamp red for 11px labels on paper.” Compact header: stamp is `PERSONAL SPECIFICATION`, 11px, `--stamp` text on `--paper`, same 32px row. Lab ratio 5.72:1 actually meets WCAG 1.4.3 normal text (4.5:1); the design’s own stricter rule still forbids this treatment. Theme-decision specified a filled stamp with `--stamp-on` type. Stamp-as-text at 360 is a real amendment and is not in the documented-amendments table.
- **Suggestion**: Either (a) record the amendment: 11px stamp-on-paper is allowed for the identity-row class label because 5.72:1 ≥ 4.5:1; filled chip remains ≥14px/600 at ≥1024, or (b) keep the ≥14px rule and use `--ink` / `--ink-muted` for the 360 class label (full stamp string in `title`). Do not leave both sentences in force.
- **Status**: addressed
- **Response**: Picked (a). Contrast table now allows 11px `--stamp` on `--paper` **only** for the identity-row class label (5.72:1 ≥ 4.5:1). All other stamp-on-paper text stays ≥14px. Filled chip at ≥1024 remains ≥14px/600. Amendment is in the documented-amendments table.

### Issue 4: Deleting `workIndex` dropped locked `line` / `stack` / `datesNote` / `seoDescription` strings
- **Severity**: minor
- **Section**: Content collection schema, Case-study frontmatter + body, PR1
- **Description**: Collection SSOT and `problem` / `constraint` / `proofIds` / `publishPage` are in the doc (round-1 Issue 5 is done). Zod still requires `line`, `stack`, `datesNote`, `statusLabel`, `name`, `seoDescription`. The deleted `workIndex` was the only copy-paste source for the home one-liners and stack arrays (e.g. ClauseNotebook `Citation-grounded 3GPP copilot. Provenance first…`, `["Python","CLI","JSON","SHA-256","PyMuPDF4LLM"]`). PR1 says “frontmatter complete” but those fields are not specified per file. IA still has the card lines (rank 2); this file promised to be the implementation contract.
- **Suggestion**: For each of the three markdown files, paste the exact `name`, `statusLabel`, `datesNote`, `line`, `stack`, `seoDescription` values next to the existing `problem` / `constraint` / `proofIds` bullets (restore from the old `workIndex` + IA §8.6-style descriptions ≤160 chars).
- **Status**: addressed
- **Response**: Pasted exact YAML frontmatter for all three work files: `name`, `statusLabel`, `datesNote`, `line`, `stack`, `seoDescription` (each ≤160 chars) plus the other Zod fields. Restored from the old `workIndex` + IA card lines.

### Issue 5: Slice 0 heading still says theme-decision is unchanged
- **Severity**: nit
- **Section**: Rollout Plan — Slice 0
- **Description**: Heading: “Document shell + Clause 1 Scope (theme-decision, unchanged)”. The slice now copies `resume.pdf`, preloads Sans 600, omits the rail, uses compact cells, and ships `commit.ts` / `404.astro`. Those are recorded amendments, not “unchanged.”
- **Suggestion**: Drop “(theme-decision, unchanged)” or replace with “(theme slice 0 + documented amendments).”
- **Status**: addressed
- **Response**: Slice 0 heading is now “theme slice 0 + documented amendments.”

---

### Strengths
- Round-1 **critical/major** items are in the spec, not only in review Responses: §4.1–4.2 composition, Fonts array `preload={[{ weight: 600, style: "normal" }]}`, PR0 `Base` without `ClauseRail`, `public/resume.pdf` in PR0, no `workIndex`, `publishPage` + `proofIds`, mermaid join `s3→s5` and `s4→s5`, `src/data/commit.ts` with `CF_PAGES_COMMIT_SHA ?? GITHUB_SHA ?? git ?? "dev"`.
- Documented amendments table (H1 vs title, preload Sans 600, no stack chips in PR0, resume in PR0) is the right way to disagree with research without reopening the theme.
- `entry.css` `@layer` + `@import` recipe, `/_astro/*` immutable cache, JSON-LD sha256 (no `'unsafe-inline'`), softened NSSAAF footnote, golden ~150-word `claim`s, `Snippet` not `any`, `trailingSlash: 'never'`, `.nvmrc` 22, branded 404 — all present.
- Still does not reopen TS 00.001, paper/Plex/stamp, four routes, no form, no Tailwind/React/WebGL, paper-only v1.
- Greenfield claim still matches the repo (`.git` + `docs/` only). Identity/metrics still match brief + CV5.

---

### Round-1 disposition (verified in the design)

| # | Round-1 issue | In the doc? |
|---|---|---|
| 1 | 360 proof cells + wireframe | Yes — §4.1–4.2. Residual: other slots (round-2 Issue 1) |
| 2 | Preload Sans 600 array API | Yes — §3.2–3.3, Base sketch |
| 3 | PR0 omits ClauseRail | Yes — §5.1, PR0 file list |
| 4 | `resume.pdf` in PR0 | Yes — tree, slice 0, PR0, Key Decision 9 |
| 5 | Collection SSOT | Yes — no `workIndex`; residual frontmatter strings (round-2 Issue 4) |
| 6 | PR5 depends on PR3∧PR4 | Yes — PR plan + mermaid |
| 7 | `commit.ts` in PR0 | Yes — §3.4 |
| 8–17 | Stack chips, H1, NSSAAF tone, layers, authoring/`claim`, `_headers`, lint, site URL, author, 404/trailingSlash/OG | Yes |

### Verification notes

| Claim | Result |
|---|---|
| Scratch DESIGN vs `docs/DESIGN.md` | Identical (1575 lines, SHA-1 `44a03dcc…`) |
| Round-1 review copies | Scratch review was the round-1 file with Responses; overwritten by this round-2 review |
| Writer summary preamble | Stale (still says Sans 400 preload, resume in PR5, 1412 lines). Round-1 addendum is correct. Not a design-doc defect |
| Theme/IA/stack locks | Not reopened; amendments are named |

---

## Revision Summary (design-review round 2)

All 5 open issues addressed in both design copies (scratch + `docs/DESIGN.md`, kept identical, 1643 lines). No `wontfix`. No `needs-user-input`. Theme/IA/stack locks not reopened.

1. **§6 compact-copy table** — painted vs full for header, role, employer, Now, proofs; wireframe is a height check of those strings; `SUDHEER` is not dropped.
2. **Now-line href** — GitHub only until PR2 `publishPage`.
3. **11px stamp-on-paper** — allowed only for the identity-row class label (5.72:1); filled chip ≥14px/600 at ≥1024.
4. **Exact work frontmatter** — YAML blocks with `name` / `statusLabel` / `datesNote` / `line` / `stack` / `seoDescription`.
5. **Slice 0 heading** — “theme slice 0 + documented amendments.”
