# Sudheer Singh — Portfolio Subject Brief

Use this as source-of-truth for who the site is for and about.

## Identity
- Name: Sudheer Singh
- Location: New Delhi, India
- Email: singhsudheer215@gmail.com
- Phone: +91-9826235849
- LinkedIn: https://linkedin.com/in/sudheer-singh-975889195
- GitHub: https://github.com/sudheer215s
- Education: B.Tech CSE, MANIT Bhopal, 2019–2023

## Positioning (confirmed 2026-07-09)
**AI Systems Builder** — Backend engineer for AI-powered products.
Headline direction: AI / LLM engineering roles where he owns production reliability (RAG, agents, evals, tracing), not prompt-tweaking or thin wrappers.

Short phrase: "AI engineer with three years building high-availability backends for India's national telecom infrastructure."

## Day job
Scientist-B / Backend Engineer at C-DOT (Centre for Development of Telematics), India's government telecom R&D lab, Ministry of Communications.
- Jul 2024 – Present: Scientist-B
- Jul 2023 – Jun 2024: Research Engineer

Proof numbers:
- National IMS/ENUM call-routing backend: millions of subscriber lookups/day, sub-second
- PostgreSQL primary-replica cluster he rebuilt: streaming replication + auto-failover, **99.99% uptime**, sub-30s recovery, zero unplanned outages since launch
- **40% faster** critical IMS/ENUM queries under peak load via query-plan analysis + index redesign
- Monitoring/alerting reduced detection from user reports to minutes
- Number Portability Server on SS7/SIGTRAN
- NSSAAF 5G-core interfaces from 3GPP TS 23.501 / TS 29.509 (note: Anima notes say stage-3 for NSSAAF may be TS 29.526, AUSF is 29.509 — do not invent; if citing, flag this)
- First-submission compliance, zero non-conformances
- Deployment automation cut manual effort **70%**
- Closed 3 auth gaps from internal security audit

## Projects to feature
1. **ClauseNotebook** (in progress, flagship personal) — https://github.com/sudheer215s/ClauseNotebook
   Citation-grounded 3GPP standards copilot. Provenance-first: versioned JSON manifest, SHA-256, idempotent CLI, PyMuPDF4LLM, registered→converted states. Next: clause-aware chunking, hybrid retrieval, inline citations, abstention.
2. **TranslateLive** — https://github.com/sudheer215s/TranslateLive
   Real-time voice translation: Deepgram STT → GPT translation → TTS, <3s e2e, FastAPI, WebSocket, Redis session state, 10+ concurrent sessions, K8s.
3. **Distributed Social Media Backend** — NestJS monorepo, 5 microservices (User, Post, Graph, Notification, Search), gRPC, Kafka transactional outbox, Redis fan-out, Elasticsearch, K8s, tracing.

## Stack he actually uses
Python, TypeScript, SQL, Bash · FastAPI, NestJS, Node.js · PostgreSQL, Redis, Elasticsearch, Kafka · Docker, Kubernetes, Linux, CI/CD, Prometheus/Grafana · LLM: LangGraph/LangChain, RAG, evals, Langfuse, OpenTelemetry

## Audience
Hiring managers and senior engineers at product companies hiring AI/LLM engineers, AI infrastructure, developer tools, applied AI over technical corpora. Wants shorter product loops than a government lab.

## Avoid
Generic "dark glassmorphism + purple gradient + three project cards" developer portfolios. Do not look like every other Next.js + Tailwind template. Do not overclaim AI depth. Do not invent metrics. Do not use fake repo links.

## Constraints
- Static or cheap to host (GitHub Pages / Vercel / Cloudflare Pages)
- Fast, accessible, mobile-usable
- Unique visual identity that still reads as serious engineering, not a gimmick that hides content
- Content sourced only from this brief and ../profile files — no invented employers, dates, or numbers
