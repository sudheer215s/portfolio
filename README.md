# Sudheer Singh — portfolio v3

Paper-and-gold engineering portfolio. Customized from the tmp visual system, with hire-scan content from the v2 research lock and a Utkarsh-style narrative (who I am → work → experience → education → contact).

**Worktree:** `/Users/tereishqmein/Dev/v2/portfolio-v3` on branch `v3`.
**v2** (Astro spec document) stays on `main` at `/Users/tereishqmein/Dev/v2/portfolio`.

Design contract: [`docs/DESIGN-v3.md`](docs/DESIGN-v3.md).

## Run

Node 22. npm.

```bash
npm install
npm run dev      # http://127.0.0.1:3000
npm run build
npm run start
```

## Content

Facts live in `src/data/`. Do not import `../profile` at build time. `public/resume.pdf` is CV5.

Numeric claims on this site are from the brief / CV5 only:

- 99.99% Postgres uptime, sub-30s recovery
- 40% faster IMS/ENUM queries
- 70% less deploy toil
- TranslateLive <3s e2e, 10+ sessions
- ClauseNotebook is Stage 1 ingestion (in progress)

## Routes

- `/` — homepage
- `/projects` — the three works
- `/contact` — email + form (form sends only if SMTP env is set)
- `/resume.pdf`

## Identity

Sudheer Singh · AI Systems Builder · Scientist-B, C-DOT · New Delhi
`singhsudheer215@gmail.com` · [GitHub](https://github.com/sudheer215s) · [LinkedIn](https://linkedin.com/in/sudheer-singh-975889195)
