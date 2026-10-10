# Sudheer Singh — AI Systems Builder

Personal site for Sudheer Singh. The visual system and app shell come from [rakeshnitb23/Portfolio](https://github.com/rakeshnitb23/Portfolio). The biography, employment, projects, and writing are Sudheer's, taken from `Dev/v2/portfolio` and the profile brief.

---

## Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js (App Router), TypeScript, Tailwind CSS |
| **Content** | MDX in `content/` |
| **Backend** | FastAPI contact form and a grounded Q&A demo over this site's writing |

---

## Work on this site

- **ClauseNotebook** — citation-grounded 3GPP copilot. Stage 1 ingestion is public.
- **TranslateLive** — voice translation under a three-second budget.
- **Distributed Social Backend** — five-service write-up. No public repository.
- **C-DOT** — Scientist-B, national telecom routing backends.

Numeric claims are only the ones already on the public CV: 99.99% Postgres uptime, sub-30s recovery, 40% faster IMS/ENUM queries, 70% less deploy toil, TranslateLive under 3s and 10+ sessions.

---

## Development

```bash
npm install
npm run dev
npm run build
```

`public/resume/resume.pdf` is CV5. The preview image is `public/resume/resume.webp`. Replace the PDF, then run `npm run resume:image`. Do not regenerate the CV from scratch.

The Q&A index at `backend/index.json` was cleared with the author change. Rebuild it with `backend/scripts/build_index.py` before running `/api/ask`.
