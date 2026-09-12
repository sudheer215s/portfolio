# Design: Sudheer Singh — Portfolio v4

| Field | Value |
|---|---|
| **Worktree** | `/Users/tereishqmein/Dev/v2/portfolio-v4` |
| **Branch** | `v4` (from `v3`) |
| **Style** | [Utkarsh Aman / Colorlib Jackson](https://utkarshexample.github.io/portfolio/) — left rail, one column of sections, timeline, 2-up work tiles |
| **Theme** | v3 only — cream paper, charcoal ink, gold accent, Playfair + Inter + DM Mono |
| **Facts** | Same Sudheer brief / CV5 as v3. Not Utkarsh’s biography. |

v3 was hard to scan: animation, glass, zigzag, competing headlines. Utkarsh is readable because identity lives in a **fixed 300px rail** and the rest is a **linear document**.

## Take from Utkarsh (structure + style)

- Sticky left aside: mark, name, role, location, resume, section nav, socials
- Main column: About → Experience → Work → Expertise → Skills → Education → Contact
- `heading-meta` (10px, uppercase, wide tracking) + serif section title
- Vertical experience timeline (icon + card)
- 2-column work tiles with hover overlay
- 3-column expertise cards with a bottom rule
- Skills as labeled groups (tags, **no fake percentages**)
- Education as one expandable panel
- Contact as visible email, not a form maze
- Mobile: hamburger slides the rail

## Take from v3 (theme only)

| Token | Value |
|---|---|
| Paper (page) | `#FAF7F0` |
| Rail | `#E8E2D4` |
| Card | `#FFFCF7` |
| Ink | `#1C1C1C` |
| Muted type | `#4A463F` |
| Rule | `#C4BBA8` |
| Accent | `#A38340` / `#C6A969` |
| Type | Playfair Display, Inter, DM Mono |

### Theme pass (2026-09-12)

Keep the cream/gold system. Change how it is used:

- **Gold is a stamp.** Active nav, resume, hire button, current job dot, links. Not a fill on banners, cards, or fake skill bars.
- **Rail vs page.** Rail `#E8E2D4`, page `#FAF7F0`, cards `#FFFCF7`. Utkarsh’s readability comes from that split.
- **Titles are sentence case Playfair** (~1.7–2rem). The Colorlib 18px all-caps heading was the least readable part of the source.
- **Hire banner** is paper + a 4px gold spine, not a gold slab.
- **Body** 16px / 1.75.

### Readability pass

- Small type is ink, not gold (`#A38340` on cream is 3.3:1). Gold is fills, rules, underlines.
- Resume / Hire me: **ink on gold**, 14px (4.8:1).
- Sidebar role is sentence case ~15px.
- Work cards show title + sentence; no hover-only copy.
- About opens with who / role / C-DOT / one number.

No v3 orb, marquee, count-up, zigzag, glass 3D cards, or purple.

## Do not take

- Utkarsh’s employers, photo, phone, street address, skill bars, rainbow icon colors
- Invented metrics, C-DOT internals, TranslateLive README extras

## Routes

```
/              single readable page
/resume.pdf    CV5
```
