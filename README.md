# SUDHEER TS 00.001

Personal specification site for Sudheer Singh — AI Systems Builder.

Paper spec, Plex superfamily, one stamp red, clause-tree navigation, every number cited. Not a template.

## Run

Node 22 LTS (see `.nvmrc`). npm.

```bash
npm install
npm run dev      # http://127.0.0.1:4321
npm run build    # static output in dist/
npm run preview
npm run check
```

## Content

Copy facts into `src/data/site.ts` and (from PR1) `src/content/work/*.md`. **Do not import `../profile` at build time.** Cloudflare CI will not have that tree.

`public/resume.pdf` is a copy of CV5 (`sudheer_cv5_back.pdf`). Do not regenerate it.

## Routes

- `/` — homepage (clauses 1–5)
- `/work/clausenotebook`
- `/work/translatelive`
- `/work/distributed-social`
- `/resume.pdf`

Still to do: Open Graph image, `@astrojs/sitemap`, Playwright/Lighthouse CI, Cloudflare Pages project.

## Navigation notes

- Hash targets `#work`, `#production`, `#seeking`, `#stack` are on the homepage.
- Case-study hrefs render when that entry’s `publishPage` is true.

## Design

Implementation contract: [`docs/DESIGN.md`](docs/DESIGN.md). Theme lock: [`docs/research/theme-decision.md`](docs/research/theme-decision.md).
