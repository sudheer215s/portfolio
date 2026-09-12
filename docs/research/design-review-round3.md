# Design Document Review: Sudheer TS 00.001 — Personal engineering portfolio

**Reviewer:** staff engineer (design-review round 3)  
**Canonical doc:** `/var/folders/74/05xt1bf56nxb33y5frh_j5rh0000gn/T/grok-tereishqmein/grok-design-doc-fcf8af0f.md` (1643 lines, SHA-1 `55c6c336fb554477e967af7c9fccd032c22df73f`)  
**Repo copy:** `/Users/tereishqmein/Dev/v2/portfolio/docs/DESIGN.md` (identical)  
**Date:** 2026-09-12

Round-2 issues were checked against the revised design, not against Response fields. Scratch and `docs/DESIGN.md` match.

## Summary

**Approve.** The five round-2 issues are in the document. No new blocking problems were introduced. An engineer can implement PR0 from this contract without inventing tokens, routes, compact copy, or metrics.

No open issues.

---

### Strengths
- Compact vs full Clause 1 copy is locked in §6 and `site.clause1`; the §4.2 wireframe is a height check of those strings; `SUDHEER` stays on the identity line.
- Now-line href is GitHub-only until PR2 `publishPage`; PR2 updates `index.astro`. Same rule as `WorkItem`.
- 11px `--stamp` on `--paper` is an explicit identity-row exception (5.72:1); filled chip stays ≥14px/600 at ≥1024.
- All three work files have paste-ready YAML (`name`, `statusLabel`, `datesNote`, `line`, `stack`, `seoDescription`, `problem`, `constraint`, `proofIds`).
- Slice 0 heading matches the documented amendments. Theme/IA/stack locks are not reopened.

---

### Round-2 disposition (verified in the design)

| # | Round-2 issue | In the doc? |
|---|---|---|
| 1 | Compact-copy table for header / role / employer / Now | Yes — §6 two-column table + `site.clause1`; wireframe cites that column |
| 2 | Now-line 404 `/work/clausenotebook` in PR0 | Yes — GitHub only until `publishPage`; PR2 file list updates `index.astro` |
| 3 | 11px stamp vs contrast rule | Yes — §3.1 gate + amendments table |
| 4 | Missing work frontmatter strings | Yes — YAML blocks for all three files |
| 5 | Slice 0 “unchanged” heading | Yes — “theme slice 0 + documented amendments” |

### Verification notes

| Claim | Result |
|---|---|
| Scratch DESIGN vs `docs/DESIGN.md` | Identical (1643 lines, SHA-1 `55c6c336…`) |
| Theme/IA/stack locks | Not reopened; amendments named |
| Greenfield repo | Still research/docs only; no application code |
