# Information architecture and content model
**Sudheer Singh — 2026 personal engineering portfolio**

Decision date: 2026-09-12  
Subject brief: confirmed 2026-07-09 positioning, “AI Systems Builder.”  
This document decides pages, first-screen jobs, case-study depth, what to leave out, CTA, and SEO. It does not design visuals and does not invent employers, metrics, or repos.

---

## 1. Sources

### 1.1 Subject materials (facts only from these)

- Subject brief (`profile-brief.md`) — identity, positioning, C-DOT proof numbers, three projects, stack, audience, avoid-list.
- `/Users/tereishqmein/Dev/v2/profile/resume/sudheer_cv5_back.md` — current backend CV; primary numeric source.
- `/Users/tereishqmein/Dev/v2/profile/resume/sudheer_cv_ai_engineer.md` — AI-forward CV; use for positioning language, **not** for skills that the brief does not list (LoRA, ChromaDB, MongoDB, AWS).
- `/Users/tereishqmein/Dev/v2/profile/resume/sudheer_cv_ai_engineer_target.md` — **future-state template**. SpecAgent, LLM Reliability Gateway, and every `{{PLACEHOLDER}}` metric are **out of scope** until true.
- `/Users/tereishqmein/Dev/v2/profile/resume/profile_share_answers.md` and `profile_share_answers_long.md` — “what I’m looking for,” ClauseNotebook thesis, abstention stance.
- `/Users/tereishqmein/Dev/v2/profile/resume/anima_application_answers.md` — 3GPP reading process; **TS 29.509 vs TS 29.526 flag**.
- `/Users/tereishqmein/Dev/v2/profile/github/README.md` and `PLAN.md` — 2026-07-09 decision: Option A, AI Systems Builder; telecom numbers as proof, not headline.
- `/Users/tereishqmein/Dev/v2/profile/interview/aligner-interview-prep.md` — spoken explanations of HA Postgres, query plans, outbox, TranslateLive latency budget (use as interview-depth source, not as extra metrics).
- Live public repos (verified 2026-09-12):
  - https://github.com/sudheer215s/ClauseNotebook — README title “Ingestion (Stage 1)”; 7 commits.
  - https://github.com/sudheer215s/TranslateLive — public; README contains claims **beyond the brief** (see §9). Do not copy those numbers onto the site.

### 1.2 Hiring-scan and IA research (2025–2026 practice + older empirical)

| Source | What it is used for | Epistemic status |
|---|---|---|
| Nielsen Norman Group, “How Long Do Users Stay on Web Pages?” (Nielsen, 2011), citing Liu, White & Dumais, SIGIR 2010 | First **10 seconds** decide stay vs leave; after ~30s the leave-rate flattens and a “good” page can hold **2+ minutes**. Value proposition must be obvious in 10s. | Empirical (2B+ dwell times). Strongest number we have for *web pages*, not portfolios specifically. |
| Nielsen Norman Group, “F-Shaped Pattern of Reading” (Pernice, 2017; last reviewed 2026-08-19) | First lines and first words on the left get disproportionate fixations. Format for scan (headings, bullets, numbers), do not rely on a wall of prose. | Empirical eyetracking. Still relevant on desktop and mobile. |
| TheLadders eye-tracking study (2012: ~6s; 2018 update: **7.4s** initial resume screen; PR Newswire 2018-11-06; HR Dive 2018-11-08) | Recruiters make a keep/drop decision in single-digit seconds on *resumes*. Name, title, current company, dates, previous title, education take ~80% of that pass. | Empirical, but **resumes not portfolios**. Treat as a lower bound on how fast a recruiter will bounce from a vague hero. |
| ShowProof, “How Recruiters Read Developer Portfolios (The 6-Second Scan)” (updated Apr 2026) | Honest that the 6s figure is borrowed from Ladders. Recruiter first pass wants: (1) role + domain + stack in one line, (2) stack keywords above the fold, (3) a recognizable employer or a numbered outcome. Tab-closers: >3s load, unclear role in first 5 words, intro animation, broken demos, mobile-broken layout. Case studies are for later-funnel hiring managers, not the first pass. | Practitioner + platform analytics. Directional engagement table is **not** peer-reviewed. |
| DevPlaybook, “Developer Portfolio Checklist: 20 Things Hiring Managers Look For” (Mar 2026) | 60-second HM flow: 10s homepage → 20s one project → 20s code/README → 10s GitHub. Projects in the first two sections. Email in hero, not a contact form. 3–4 strong projects beat 8–12. Load <2s. | Practitioner checklist. Useful as a review protocol. |
| Wrok, “How to Build an Engineering Portfolio That Actually Gets You Hired” (Apr 2026) | 2026 signal shift: AI can generate “looks like production” code; HMs look for **judgment** — problem worth solving, tradeoffs, what was left out, production failure modes. Finished > polished. README that explains why > README that lists stack. Skip tutorial clones and an elaborate site whose only complexity is itself. | Practitioner. Matches this subject’s risk of overclaiming AI depth. |
| Mantlr, “Design Portfolio 2026” (May 2026) | 6–8s first scan is industry observation, not a study. **3–5 deep case studies beat 12 thumbnails.** Homepage must communicate positioning and impact immediately. | Design-hiring observation; the 3–5 rule transfers. |
| FolioX, “Developer Portfolio Ideas That Get You Hired (2026)” | For active job search: one page, 3 projects, resume, no blog, no testimonials, no animations — unless you have depth that needs permalinks. | Product-blog; the “lean job-seeker page” is the homepage job, not the whole IA. |
| Refactor Talent, “Developer Portfolio Projects That Impress Hiring Managers” (May 2026) | Unfinished work is hard to evaluate and raises follow-through questions. If WIP, document problem, decisions, current state, next. | Practitioner. Directly shapes ClauseNotebook treatment. |
| Sensei AI, “How to Talk About Personal Projects… Even if They’re Incomplete” (2025/2026) | Frame as **in progress**, not unfinished: what exists now / milestones / next / why next. Never lead with apology. | Career-advice. Useful phrasing, not data. |
| Dev Weekends, “Case Study Template” (May 2026) | SWE case study: problem as user pain, stack-with-why, challenges table (symptom / alternatives / solution / tradeoff), metrics table with **how measured**, next steps. If no production metrics, say load-test and be transparent. | Template. Adopted in §5. |
| techinterview.org, “Describing Engineering Work Without Violating NDAs” (Apr 2026) | Government/cleared work: generic technical class + public employer + numbered outcomes that are already disclosable. Specific architecture, algorithms, customer data, unreleased internals: no. Three public projects can carry depth the day job cannot. If in doubt, ask the security officer. | Practitioner legal-hygiene. |
| Design Force / Skillhub / SlateGit NDA portfolio pieces (2025–2026) | “Confidential” as a labeled constraint is a **trust signal**. White-labeling internal UIs or inventing dummy architecture diagrams of real classified systems is the wrong move for national telecom. Methodology + public specs + already-on-resume metrics is the right move. | Practitioner. |
| NN/g “No More Pogo Sticking” (2015) | Hub pages that force a click to learn the one fact the visitor needed cause bounce. Homepage must stand alone for the 2-minute reader. | UX research. |
| Public C-DOT facts | C-DOT is a public Govt. of India telecom R&D centre; IMS and 5G core are **public product lines** (cdot.in, Voice&Data 2025-08-14). That does **not** authorize publishing Sudheer’s internal topology. | Public org facts vs. employee internals. |
| 3GPP / ETSI | TS 23.501 = 5G system architecture (stage 2). **TS 29.509 = AUSF** (Authentication Server Function). **TS 29.526 = NSSAAF stage-3** (Nnssaaf). Citing 29.509 as NSSAAF stage-3 is likely wrong. | Standards. Flag on every mention. |

**What we do not have:** peer-reviewed eyetracking on *engineer portfolios* in 2025–2026; measured time-on-page for this site (it does not exist yet); written C-DOT disclosure approval.

---

## 2. Audience jobs-to-be-done

Three visitors, three clocks. One homepage must serve the first two without a click. Case-study routes exist for the third.

### 2.1 Recruiter / sourcer — ~15 seconds (often 6–10)

**Job:** “Can I put this person in the AI/LLM or backend-for-AI pipeline without getting yelled at?”

They are matching a req, not reading architecture. Ladders 7.4s resume scan plus ShowProof’s borrowed 6s heuristic: they will not scroll far.

They must leave with:

1. **Role fit:** AI / LLM engineer who owns production, not a prompt intern, not an ML researcher.
2. **Employer shortcut:** Scientist-B, C-DOT (Centre for Development of Telematics) — India’s government telecom R&D lab. Recognizable enough as “serious production,” even if they have never heard of ENUM.
3. **Stack keywords** visible without scrolling: Python, FastAPI, PostgreSQL, RAG, Kubernetes, TypeScript/NestJS.
4. **One number they can paste into a notes field:** 99.99% uptime, or millions of lookups/day, or <3s LLM pipeline.
5. **How to reach him:** raw email, not a form.

They will not open a case study. If the hero is a typing animation, a photo, or “Hi, I’m Sudheer,” they close the tab.

### 2.2 Hiring manager — ~2 minutes (the “good page” dwell from NN/g)

**Job:** “Is this person a production engineer I would trust with an LLM system that can fail in front of customers?”

Wrok 2026: they pattern-match on shipped things, production instincts, and a README they could defend in a staff meeting. DevPlaybook 60s protocol: homepage → one project → GitHub.

They must leave with:

1. Positioning is specific, not “passionate full-stack.”
2. **C-DOT is real production**, with quoted metrics, without sounding like a leak or a vibe.
3. **One completed AI system** (TranslateLive) with a latency number and a concurrency number.
4. **One in-progress flagship** (ClauseNotebook) that shows taste: provenance before chat UI, abstention over fluency.
5. **One distributed-systems artifact** (NestJS/Kafka/outbox) so “systems thinker” is not only claimed in prose.
6. Explicit **what he wants next** (AI/LLM role, shorter loops than a government lab) and **what he will not do** (prompt-tweaking by feel, thin wrappers, prototype-only AI).
7. Resume PDF in one click; GitHub in one click.

They may open **one** case study if the card is specific. They will not read three essays.

### 2.3 Staff / senior engineer on the loop — ~10 minutes

**Job:** “Would I want to be on-call with this person? Can they talk about constraints, failure, and what they would do next?”

They will click through. They will open GitHub. They will smell overclaim (TranslateLive README vs brief; LangGraph listed but not shipped; “RAG engineer” with only an ingestion CLI).

They must leave with:

1. A case study they could use as an interview script: problem → constraints → design → proof → next.
2. Honest WIP status on ClauseNotebook, with a repo that matches the write-up (Stage 1 ingestion).
3. Confidentiality hygiene on C-DOT that makes them *more* willing to hire him for regulated work, not less.
4. No particle field, no skill bars, no fake testimonials.

### 2.4 First screen must do (non-negotiable)

In the first viewport, on a 1280×800 laptop and on a phone, without scrolling:

| Slot | Content | Why |
|---|---|---|
| Name | Sudheer Singh | Ladders fixation #1 |
| Role | AI Systems Builder | Brief positioning, 2026-07-09 |
| One sentence | “AI engineer with three years building high-availability backends for India's national telecom infrastructure.” | Confirmed short phrase |
| Employer | Scientist-B, C-DOT · New Delhi | Recruiter shortcut |
| Proof strip | Four numbers from the brief (see §4) | HM 2-min; F-pattern loves numerals |
| Now | ClauseNotebook — in progress, citation-grounded 3GPP copilot | Active engineer, not a static CV |
| CTA | Email · Resume PDF · GitHub · LinkedIn | DevPlaybook #4; no form |

If a stranger cannot answer “what does he do / what’s his stack / what’s one proof” after 6–10 seconds, the hero has failed (ShowProof 6-second test).

---

## 3. IA decision + sitemap

### Decision: **multi-page hub-and-spoke**, homepage complete without a click

Not a long single page. Not a marketing site with `/about` `/skills` `/blog` `/contact`.

**Why not single-page.** Three systems-thinking case studies plus a confidentiality-safe C-DOT block cannot live in one scroll without either (a) truncating proof until it sounds like a resume, or (b) creating a 3–4k-word page that NN/g F-pattern readers skip the middle of. Staff engineers also need **permalinks** they can drop in Slack (“read this one”). ClauseNotebook will change as retrieval ships; a dedicated page can be updated without rewriting the homepage.

**Why not a fat multi-page.** Recruiter 15s and HM 2 min will not click. NN/g pogo-sticking: if the homepage withholds the one fact they need, they bounce. FolioX 2026 is right that job-seeker portfolios should feel like one page. So the homepage **is** that one page.

**Pattern:** Homepage = 2-minute complete pitch. Three case-study routes = 10-minute depth. No other HTML pages.

### Sitemap (four HTML routes + one file)

```
/                              homepage — 2-minute pitch (required)
/work/clausenotebook           case study 1 — flagship, in progress
/work/translatelive            case study 2 — shipped AI pipeline
/work/distributed-social       case study 3 — systems/microservices
/resume.pdf                    static file, not a page
```

Nav (persistent, tiny): **Work · Production · GitHub · Resume · Email**  
“Work” jumps to `#work` on `/`. “Production” jumps to `#production` on `/`. Case-study pages highlight Work.

**Explicitly no routes for:** `/about`, `/blog`, `/skills`, `/contact`, `/now`, `/uses`, `/photos`, `/testimonials`.

**Hosting implication (constraint):** all four routes are static. GitHub Pages / Vercel / Cloudflare Pages. Case studies are Markdown or MDX compiled at build. No CMS, no contact-form backend.

### Homepage as a complete artifact

A hiring manager who never leaves `/` still gets: who, role, numbers, three project cards with links (repo where they exist), C-DOT production block, seeking/anti-seeking, stack-in-context, email. Case studies are **additive**.

---

## 4. Section-by-section content outline (facts only)

Every quoted metric below appears in the subject brief and/or `sudheer_cv5_back.md`. Do not “round up.” Do not import TranslateLive README extras. Do not import future-state SpecAgent.

### 4.1 Exact section order of the first view (homepage)

**A. First screen (above the fold)**

1. **Identity**  
   Sudheer Singh  
   New Delhi, India  
   Scientist-B / Backend Engineer, C-DOT (Centre for Development of Telematics)

2. **Role**  
   AI Systems Builder — backend engineer for AI-powered products.

3. **Positioning sentence (confirmed short phrase)**  
   “AI engineer with three years building high-availability backends for India's national telecom infrastructure.”

4. **Proof strip — four facts, four cells, numerals first**
   - **99.99%** uptime — PostgreSQL primary-replica cluster, streaming replication + auto-failover; sub-30s recovery; **zero unplanned outages since launch**
   - **40% faster** — critical IMS/ENUM queries under peak load (query-plan analysis + index redesign)
   - **Millions / day** — national IMS/ENUM subscriber lookups, **sub-second**
   - **<3s** — TranslateLive STT → GPT translation → TTS, end-to-end

5. **Now line**  
   Building **ClauseNotebook** — citation-grounded 3GPP standards copilot. Status: **in progress**. Ingestion (versioned JSON manifest, SHA-256, idempotent CLI) works today; retrieval is next.  
   Link: `/work/clausenotebook` and https://github.com/sudheer215s/ClauseNotebook

6. **CTA cluster (always visible on first screen and in footer)**  
   - Email: `singhsudheer215@gmail.com` (mailto, visible text, not an icon-only)  
   - Resume: `/resume.pdf`  
   - GitHub: https://github.com/sudheer215s  
   - LinkedIn: https://linkedin.com/in/sudheer-singh-975889195  

   Optional fifth chip, one clause, no calendar widget:  
   “Open to AI / LLM engineering roles that own production reliability.”

**B. Below the fold, still on `/`**

7. **`#work` Selected work — three cards, this order**

   Card order is the case-study order (see §5). Each card: name, one-line outcome, 4–6 stack chips, status badge, links.

   **Card 1 — ClauseNotebook**  
   Badge: `In progress · Stage 1 ingestion`  
   Line: Citation-grounded 3GPP copilot. Provenance first: versioned JSON manifest, SHA-256, idempotent CLI, PyMuPDF4LLM, `registered` → `converted`. Next: clause-aware chunking, hybrid retrieval, inline citations, abstention.  
   Stack: Python, CLI, JSON, SHA-256, PyMuPDF4LLM  
   Links: Case study · GitHub (`https://github.com/sudheer215s/ClauseNotebook`)  
   No live demo (none exists).

   **Card 2 — TranslateLive**  
   Badge: `Shipped personal`  
   Line: Real-time voice translation. Deepgram STT → GPT translation → TTS, **<3s e2e**. FastAPI, WebSocket, Redis session state, **10+ concurrent sessions**, Kubernetes.  
   Stack: Python, FastAPI, WebSocket, Redis, Deepgram, OpenAI, Docker, Kubernetes  
   Extra bullets allowed on the card (from CV): asyncio + connection pooling; **more than 10 simultaneous WebSocket sessions without dropped connections**; horizontal scaling via Redis session state; CI, integration tests, structured JSON logging, health checks.  
   Links: Case study · GitHub (`https://github.com/sudheer215s/TranslateLive`)  
   Live demo: **omit unless a working URL exists**. A dead demo is worse than none (DevPlaybook). The public README currently points at a placeholder `yourusername` demo path — do not surface it.

   **Card 3 — Distributed Social Media Backend**  
   Badge: `Architecture / personal`  
   Line: NestJS monorepo, **5 microservices** (User, Post, Graph, Notification, Search), gRPC, Kafka transactional outbox, Redis fan-out, Elasticsearch, Kubernetes, tracing.  
   Stack: NestJS, TypeScript, PostgreSQL, Kafka, Redis, gRPC, Elasticsearch, Kubernetes  
   Extra (from CV): JWT + RBAC, shared guards/interceptors, rate limiting, circuit breakers; Redis-backed timeline fan-out; cross-instance WebSocket notifications; Prometheus/Grafana; distributed tracing.  
   Links: Case study only. **No GitHub URL is in the brief.** Do not invent one. If a real public repo is added later, attach it; until then the case study carries the thinking and the card says “write-up” not “repo.”

8. **`#production` Production systems — C-DOT (not a fourth case study)**

   Header: Scientist-B, Backend Engineer · C-DOT · Jul 2024 – present  
   Prior: Research Engineer · Jul 2023 – Jun 2024  

   Short framing (from share answers, compressed): he owns backend for India’s national IMS/ENUM call-routing service. A dropped lookup is a call that never connects. This block is **credibility for the AI work**, not the headline (GitHub PLAN Option A).

   Allowed bullets, quoted from brief/CV5:

   - National IMS/ENUM call-routing backend: **millions of subscriber lookups/day**, **sub-second**.
   - PostgreSQL primary-replica cluster he rebuilt: streaming replication + auto-failover, **99.99% uptime**, **sub-30s recovery**, **zero unplanned outages since launch**.
   - **40% faster** critical IMS/ENUM queries under peak load via query-plan analysis + index redesign.
   - Monitoring/alerting reduced detection **from user reports to minutes**.
   - Number Portability Server on **SS7/SIGTRAN**.
   - NSSAAF 5G-core interfaces from **3GPP TS 23.501** and the stage-3 spec he actually implemented — **see confidentiality + spec flag in §6**. CV5 currently says TS 29.509; Anima notes and ETSI say NSSAAF stage-3 is **TS 29.526** (29.509 is AUSF). On the public site, prefer “3GPP TS 23.501 (stage 2) and the NSSAAF stage-3 service API” until he confirms the number, **or** write “TS 23.501 / TS 29.509 as listed on my CV — NSSAAF stage-3 may be TS 29.526; I will not guess.”
   - **First-submission compliance, zero non-conformances.**
   - Deployment automation (Python + Bash) cut manual effort **70%**.
   - Closed **3 auth gaps** from an internal security audit.
   - Research-engineer year (CV5 only, not in the brief’s proof list): Ubuntu Linux + PostgreSQL for live telecom services, **99.9% availability throughout the year**. Use this as a *separate, earlier* metric so it is not confused with 99.99%.

   What this section must **not** contain: diagrams of the national system, schemas, hostnames, capacity planning beyond “millions/day,” vendor product names, screenshots, packet traces, subscriber examples. See §6.

   One sentence of transfer (from long share answers, keep it one sentence):  
   “Retries, backpressure, tail latency, and instrumentation are the same problems whether the thing in the middle is a database or a model.”

9. **`#seeking` What I’m looking for / what I won’t do**

   From short share answers, trimmed for scan:

   Looking for: an AI / LLM engineering role where he builds LLM-powered products end to end and owns the production layer — retrieval and RAG, agentic workflows, evals, tracing. Drawn to developer tools, AI infrastructure, and applied AI over technical corpora (including telecom). Wants shorter feedback loops than a government R&D lab: shipping in weeks.

   Avoid: prompt-tweaking by feel with no evals or traces; thin wrapper work; AI that stops at the prototype; teams where shipping speed consistently wins over testing and reliability.

   Education, one line: **B.Tech CSE, MANIT Bhopal, 2019–2023**. No CGPA (placeholder in Anima answers; not in the brief). No high-school grades.

10. **`#stack` Stack he actually uses (brief only)**

    Do not render as percentage bars. Group by evidence:

    - Languages: Python, TypeScript, SQL, Bash  
    - Backend: FastAPI, NestJS, Node.js  
    - Data: PostgreSQL, Redis, Elasticsearch, Kafka  
    - Infra: Docker, Kubernetes, Linux, CI/CD, Prometheus/Grafana  
    - LLM (claimed in brief as stack he uses; **do not imply a shipped LangGraph product**): LangGraph/LangChain, RAG, evals, Langfuse, OpenTelemetry  

    Exclude from this site unless later proven in a public repo: MongoDB, AWS, ChromaDB, LoRA/QLoRA, fine-tuning, C/C++ as a professional skill.

11. **Footer**  
    Repeat email (visible), GitHub, LinkedIn, resume. Copyright line. One confidentiality note: “C-DOT production details on this site are limited to facts already on my public resume. I don’t publish internal architecture.”

### 4.2 What the first screen is *not*

Not a biography. Not a photo hero. Not a looping typing SVG (the GitHub README uses one; the site should not — ShowProof: intro animations delay signal). Not a three-card template with purple glow and no numbers.

---

## 5. Case study templates

Three projects get case-study depth. **C-DOT does not.** C-DOT is the production spine on `/#production`. A fourth “national telecom case study” would either leak or sound vague; both fail.

**Order (homepage cards and recommended reading order):**

1. **ClauseNotebook** — flagship for the role he wants; unique problem; honest WIP.  
2. **TranslateLive** — completed AI product with hard numbers; the “I ship” proof that offsets WIP risk.  
3. **Distributed Social Media Backend** — systems thinking (outbox, fan-out, gRPC) without pretending it is an AI product.

This order follows the 2026-07-09 Option A decision (AI Systems Builder) and the brief’s “flagship personal” label, while putting a numbered, finished AI system immediately beside the WIP so a skeptic does not bounce.

Shared template (Dev Weekends + systems-thinking requirement). Every case study page uses the same skeleton so staff engineers can skim:

```
Title (outcome, not “My Project”)
Status + dates + role (solo / personal)
One-paragraph claim (what this proves about him)
Snapshot table: stack · repo · demo (or “none”) · what exists now
1. Problem
2. Constraints
3. Design (decisions + alternatives + tradeoffs)
4. Proof (numbers, how measured, or “not measured yet”)
5. What I would do next
6. What this is not
```

Length target: **600–900 words**. First 150 words must stand alone (HM may only read that). No persona maps, no mood boards, no 2,500-word UX essays (Mantlr: those died).

### 5.1 ClauseNotebook — `/work/clausenotebook`

**Title:** Provenance-first ingestion for a citation-grounded 3GPP copilot  
**Status:** In progress. Stage 1 (ingestion) works. Retrieval is next.  
**Repo:** https://github.com/sudheer215s/ClauseNotebook  
**Role:** Solo, personal. Motivation from the day job; **no C-DOT data, no internal specs, public 3GPP PDFs only.**

**Problem (from share answers, quoteable):**  
Engineers need the exact clause that specifies a requirement across large, versioned 3GPP documents. “A confident paraphrase with no citation is a liability — someone will build against it.” Generic RAG fails because:

- Clause numbering nests and **carries semantics** (“5.2.3.1 means something specific in relation to 5.2.3”).
- Normative requirements often live in **tables under the prose**; treating tables as loose text drops the requirement.
- Specs **cross-reference** constantly; a clause retrieved in isolation can be cited correctly and still be incomplete.
- Releases change: an answer correct against **Release 17** can be wrong against **Release 18**.

Thesis sentence: “Retrieval quality here is a document-structure problem before it is a model problem.”

**Constraints:** Public 3GPP PDFs only (no employer corpus). Reproducible citations (byte-identical source). Idempotent registration. Interrupted runs must not corrupt the registry. No chat UI until retrieval can abstain.

**Design (what exists — must match the public README):**

- Versioned JSON manifest: document metadata, source locations, **SHA-256**.
- Idempotent Python CLI: sources must live inside the managed location; refuses accidental duplicates unless overridden; **atomic** manifest writes.
- PyMuPDF4LLM conversion to Markdown with YAML front matter.
- Explicit states: **`registered` → `converted`**.
- Manifest stores pointers, not PDF bytes.

**Proof (honest):**  
No Recall@k, no latency, no users. Proof is the artifact: public repo, Stage 1 README, CLI that can register and convert. Do not preview retrieval metrics. Do not show a chatbot screenshot.

**Next (brief, do not present as done):** clause-aware chunking, hybrid retrieval, inline citations tied to clause IDs, **abstention** (“I don’t have a clause that says that” is a correct answer; a fluent guess is a failure).

**WIP framing (Sensei / Refactor Talent):**  
Use “Stage 1 complete / Stage 2 in build,” never “unfinished.” Put the badge in the H1. State what he refused to do first (chat UI) as a judgment signal — Wrok 2026: what you left out is the tell.

**What this is not:** Not a Chat-with-PDF wrapper. Not SpecAgent. Not evaluated RAG yet. Not trained on C-DOT documents.

### 5.2 TranslateLive — `/work/translatelive`

**Title:** Real-time voice translation under a hard latency budget  
**Status:** Shipped personal system (code public).  
**Repo:** https://github.com/sudheer215s/TranslateLive  
**Role:** Solo.

**Problem:** Orchestrate speech recognition, translation, and playback as one pipeline that still feels like conversation, not a batch job.

**Constraints (only those in brief/CV):** end-to-end **under three seconds**; concurrent live sessions; instances must stay **stateless** so the service can scale horizontally; production hygiene from day one (K8s, CI, tests, logs, health checks).

**Design:**

- Pipeline: **Deepgram STT → GPT translation → TTS**.
- Transport: **WebSocket** audio in, audio/status out.
- Concurrency: **Python asyncio** + connection pooling (I/O-bound; interview prep: not threads).
- State: **Redis session state**, not in-process memory, so any instance can take any request.
- Deploy: **Kubernetes**; CI; integration tests; structured JSON logging; health checks.

A simple sequence diagram is allowed (client → API → STT → GPT → TTS; API ↔ Redis). The GitHub README already has a mermaid-like architecture; **redraw from brief facts**, do not copy README boxes that name Claude, ElevenLabs, 50+ users, or 30–40% cache hit.

**Proof (quote):**

- **<3s** end-to-end (STT → translation → TTS).
- **10+** simultaneous WebSocket sessions **without dropped connections** (CV: load tests).
- Horizontal scaling via Redis session state.

**How measured:** Say “load tests, 10+ concurrent sessions, zero dropped connections” — that is what CV5 states. Do not invent p50/p95, error rate, or cost/query.

**Next (only if he will stand behind it in an interview):** tighter tail latency, provider failure behavior, evals on translation quality. Do not list README roadmap items (WebRTC, mobile SDK, voice cloning) unless he actually intends them; they read as vapor.

**What this is not:** Not a research STT model. Not a claim of production users at C-DOT. Not Claude/ElevenLabs unless he updates the brief.

**README hygiene (action for him, not the site builder):** the public TranslateLive README currently overclaims vs the brief (Claude 3.5, ElevenLabs, 50+ concurrent users, 30–40% Redis hit rate, placeholder demo). Staff engineers will open it. Align README to the brief **before** the portfolio ships, or the case study and the repo will contradict each other.

### 5.3 Distributed Social Media Backend — `/work/distributed-social`

**Title:** Five-service backend with a transactional outbox and fan-out timelines  
**Status:** Personal architecture project.  
**Repo:** none in the brief — case study is the artifact.  
**Role:** Solo.

**Problem:** A social graph + feed + search + notifications cannot honestly live in one process if the point is to practice the failure modes of distributed writes.

**Constraints:** Domain-separated services; no dual-write to DB and Kafka; reads of timelines must be cheap; notifications must cross instances; public edge vs internal RPC.

**Design (from CV5 + interview prep — these are the talking points staff want):**

- NestJS **monorepo**, five services: **User, Post, Graph, Notification, Search**.
- **gRPC** internally (typed contracts, HTTP/2); REST would still sit at a public edge if one existed.
- **Kafka transactional outbox** — dual-write problem named, outbox as the fix, at-least-once delivery.
- **Redis** timeline **fan-out on write**; celebrity-problem tradeoff belongs in the write-up (interview prep already has this answer).
- Cross-instance WebSocket notifications via **Redis Pub/Sub**.
- **Elasticsearch** for search; PostgreSQL as source of truth; events keep them in sync.
- JWT + RBAC in **shared guards/interceptors**; rate limiting; **circuit breakers**.
- Kubernetes, CI/CD, Prometheus/Grafana, distributed tracing.

**Proof:** Architectural completeness and the ability to explain tradeoffs. **No user count, no QPS, no “used in production.”** Do not fake a demo. If there is no public repo, say so in one line: “Not published as a public repo; happy to walk the design in an interview.” That is better than a 404.

**Next:** What he would change (hybrid fan-out for celebrities, exactly-once vs at-least-once, etc.) — only as judgment, not as a fake backlog.

**What this is not:** Not Twitter. Not a tutorial clone presented as a startup. If any of it followed a course, attribute that (DevPlaybook anti-pattern: unattributed tutorial clones). If it was original, say “personal systems exercise.”

### 5.4 Proof-number table (site-wide, do not exceed)

| Claim | Where it may appear | Do not upgrade to |
|---|---|---|
| millions of subscriber lookups/day, sub-second | Hero, production, resume | Exact QPS, national subscriber census |
| 99.99% uptime; sub-30s recovery; zero unplanned outages since launch | Hero, production | Five-nines, RPO=0, sync-replication unless he confirms |
| 40% faster critical IMS/ENUM queries under peak load | Hero, production | p95 milliseconds |
| detection from user reports → minutes | Production | MTTD in seconds, specific alert rules |
| 70% less manual deployment/config effort | Production | Hours saved |
| 3 auth gaps closed (internal audit) | Production | CVE IDs, gap descriptions |
| first-submission compliance, zero non-conformances | Production | “external validator” unless he confirms |
| 99.9% availability (research-engineer year) | Production, clearly dated 2023–24 | Do not mix with 99.99% |
| <3s TranslateLive e2e | Hero, TranslateLive | Per-stage ms table from README |
| 10+ concurrent WS sessions, no drops | TranslateLive | 50+ users, 100 meetings/cluster |
| SHA-256, idempotent CLI, registered→converted | ClauseNotebook | Recall@5, grounded-answer pass rate |

---

## 6. Confidentiality rules for C-DOT work

C-DOT is a public national lab; IMS and 5G core are publicly marketed products. Sudheer’s **implementation, topology, data, and unreleased internals are not**. Hiring managers in regulated domains treat over-sharing as a **negative** signal (techinterview.org 2026; NDA portfolio practice). Discretion here is part of the pitch: he already works where a wrong packet is a failed call.

### 6.1 Default rule

If it is not already on the **public resume (CV5)** or the **subject brief**, it does not go on the website. If it is on the resume but is operationally sensitive (schemas, IPs, dashboards), it still does not go on the website. When unsure: omit, and say he can discuss method in a signed process.

Ask C-DOT comms / security **before adding anything new**. Do not treat this IA as legal clearance.

### 6.2 Allowed (already public in his materials)

- Employer name, ministry, titles, dates: Scientist-B (Jul 2024 – present), Research Engineer (Jul 2023 – Jun 2024), C-DOT, Ministry of Communications, New Delhi.
- Class of system: “national IMS/ENUM call-routing backend,” “Number Portability Server on SS7/SIGTRAN,” “NSSAAF service interfaces for the 5G core.”
- Metrics in the table in §5.4.
- Public standards: 3GPP specs are public documents. Discussing **how one reads a public spec** (tables vs prose, nested clauses, cross-references) discloses nothing about C-DOT systems (Anima answers already use this). That discussion belongs on **ClauseNotebook**, not as a leak of NSSAAF internals.
- Generic HA patterns named at textbook level: primary-replica, streaming replication, automatic failover, `EXPLAIN ANALYZE`, composite indexes. No cluster diagrams of the real deployment.

### 6.3 Forbidden

- Code, configs, runbooks, Grafana screenshots, packet captures, CDR samples, subscriber identifiers, MSISDNs, even fake ones that look real.
- Internal service names, hostnames, IPs, rack/AZ layout, exact hardware, vendor appliance models, unreleased NF internals.
- Architecture diagrams of the national IMS/ENUM path, ENUM zone layout, SS7 point codes, SIGTRAN linksets, capacity/headroom, peak QPS as a precise integer.
- “We run on BSNL / operator X” unless a public C-DOT citation already ties *his* service to that operator. Org-level press (Voice&Data: C-DOT IMS in BSNL) is **not** his to personalize.
- Security-audit gap details (the number **3** is enough; the gaps are not).
- Anything that would help an attacker: auth internals, monitoring thresholds, failover timing beyond “sub-30s.”
- Uploading C-DOT documents into ClauseNotebook, demos, or eval sets.

### 6.4 How to sound specific without leaking

Use **class + constraint + already-disclosed number + method name**, not topology.

Good: “Lookup-heavy national routing: millions of subscriber lookups/day, sub-second. I rebuilt the PostgreSQL primary-replica cluster with streaming replication and automatic failover — 99.99% uptime, sub-30s recovery, zero unplanned outages since launch. Peak-load lookups were sequential-scanning; composite indexes matching the real predicates cut that path 40%.”

Bad: “Here is the ERD of the ENUM database and the keepalived config.”

Label the constraint once on `/#production` and in the footer. That label is a trust signal (SlateGit 2026), not an apology.

### 6.5 3GPP number flag (must not silently ship)

CV5 and the brief say NSSAAF interfaces from **TS 23.501 / TS 29.509**. Anima application notes: **TS 29.509 is AUSF; NSSAAF stage-3 is TS 29.526**. ETSI TS 129 526 confirms it specifies Nnssaaf.  

**Site rule:** do not print “TS 29.509” as NSSAAF stage-3 without his confirmation. Prefer TS 23.501 + “NSSAAF stage-3 API,” or a footnote. Getting the spec number wrong is a cheap hit in a telecom-aware interview (Anima: “cheap, avoidable hit in a tech chat”).

Also do not use “200+ pages” (appears in cv4 duplicate section and the AI CV, **not** in the brief or CV5).

Do not say the compliance validation was “external” unless he confirms (Anima explicitly removed that word).

---

## 7. Out of scope

Leave these out. Several are anti-patterns; several are untrue or unproven.

**Do not build**

- Blog / essays index. He does not have a writing corpus. An empty or AI-generated blog is a negative signal. One case-study page *is* the writing. Revisit only after two public technical posts exist.
- Fake testimonials, recs, or “clients.” None sourced.
- Contact form, “I’ll reply in 48 hours,” Calendly, chatbot-of-Sudheer.
- `/skills` page or animated skill bars (DevPlaybook: skills without projects are noise).
- `/about` page (about is `#seeking` on the homepage).
- Photo-heavy personal brand, hobbies, MANIT club lists, JEE rank, CGPA, Class 12 marks.
- Phone number in the hero. It is in the brief and on the resume; a public site will harvest it. Keep `+91-9826235849` on the PDF resume only.
- Typing SVG, particle backgrounds, splash loaders, dark-glass purple gradient three-card template (brief avoid-list + ShowProof tab-closers).
- GitHub streak widgets / `github-readme-stats` public endpoint (PLAN.md: unreliable; decorative).
- Live demos that are not actually up. TranslateLive placeholder demo: omit.
- Invented GitHub URL for the social backend.
- Fourth, fifth, sixth project cards (tutorial residue, academic OS assignments, “todo with microservices”).
- SpecAgent, LLM Reliability Gateway, eval golden-sets, cost-per-query, Recall@k — **future-state resume only**.
- Fine-tuning, LoRA, PEFT, TRL, HyDE-as-shipped, ChromaDB, MongoDB, AWS-as-core-stack.
- Claiming Langfuse/LangGraph **products** beyond “stack I use / I’m applying to production AI.” Evidence on site is TranslateLive (GPT in a pipeline) and ClauseNotebook (ingestion). Overclaiming AI depth is in the brief’s avoid-list.
- Open-source contribution theater he has not done.
- “Available for freelance / hire me to build your startup.” Wrong audience.
- Password-gated “confidential case study” of C-DOT. Don’t.

**Do not copy from GitHub README onto the site without reconciling**

- TranslateLive: Claude, ElevenLabs, Whisper, 50+ concurrent users, 30–40% cache hit, 3–20 pods, 100+ meetings, P95 stage table.
- GitHub profile: MongoDB, AWS, “2.5+ years” (brief/positioning: **three years** as of 2026).

---

## 8. Verdicts (numbered decisions)

1. **Information architecture: multi-page hub-and-spoke.** Four HTML routes (`/`, `/work/clausenotebook`, `/work/translatelive`, `/work/distributed-social`) plus `/resume.pdf`. Homepage is a complete 2-minute pitch; case studies are optional depth. No `/blog`, `/about`, `/skills`, `/contact`.

2. **First-view section order (homepage):**  
   (1) Name + location + C-DOT title → (2) role “AI Systems Builder” → (3) confirmed short phrase → (4) four-metric proof strip (99.99% · 40% faster · millions/day · <3s) → (5) ClauseNotebook “now” line with In progress badge → (6) CTA: email, resume, GitHub, LinkedIn → then scroll: (7) three work cards in the order below → (8) C-DOT production block → (9) seeking / will-not-do + education one-liner → (10) stack-in-context → (11) footer with email + confidentiality note.

3. **Three case studies, this order:**  
   (1) **ClauseNotebook** — flagship, in progress, provenance-first 3GPP copilot.  
   (2) **TranslateLive** — shipped AI pipeline, <3s, 10+ sessions, K8s.  
   (3) **Distributed Social Media Backend** — five services, outbox, fan-out, no public repo unless one is added later.  
   C-DOT is **not** a case study; it is `#production` on the homepage.

4. **Out of scope:** blog, testimonials, contact form, phone-in-hero, skill bars, typing/particle chrome, GitHub stat widgets, SpecAgent/gateway/future metrics, LoRA/MongoDB/AWS as core claims, fake social-backend repo, dead demos, C-DOT internals, unattributed tutorial clones, empty extra projects.

5. **Contact / CTA:** Visible `singhsudheer215@gmail.com` in the first screen and footer (mailto). Resume PDF. GitHub. LinkedIn. One optional availability line for AI/LLM production roles. **No form.** Phone on resume only. Do not promise SLA on replies.

6. **SEO — one recommended title string:**  
   `Sudheer Singh — AI Systems Builder`  
   Meta description (not the title, for implementers):  
   `Backend engineer for AI-powered products. Three years on India’s national telecom infrastructure — 99.99% uptime, 40% faster lookups. Building citation-grounded RAG for 3GPP.`  
   H1 on `/` matches the title. Canonical `/`. OG title = same string. Do not keyword-stuff “GenAI LLM RAG Agent Engineer.”

---

## 9. Confidence and gaps

**Confidence: medium-high on IA shape; medium on copy-level claims that touch specs and TranslateLive.**

Solid:

- Hub-and-spoke with a self-contained homepage matches recruiter 15s + HM 2 min + engineer 10 min better than a single endless scroll or a five-page personal brand site.
- Three-project cap and no blog match 2026 practitioner consensus (Mantlr 3–5; DevPlaybook 3–4; Wrok “finished > polished”).
- ClauseNotebook-as-flagship + TranslateLive-as-shipped-proof + social-backend-as-systems-proof matches Option A (2026-07-09) and the brief.
- Confidentiality default (resume-public facts only) is the only safe rule without a written C-DOT clearance.

Gaps / blockers for implementers:

1. **TranslateLive README ≠ brief.** Staff will open the repo. Reconcile before launch or the portfolio will look like it was written by a different person than the code.
2. **No public repo for the social backend.** Case study without code is acceptable if labeled; a 404 is not.
3. **NSSAAF spec number.** Confirm TS 29.509 vs TS 29.526 before printing either.
4. **Compliance validator** internal vs external: unknown; do not say “external.”
5. **Live demo for TranslateLive:** none verified. Omit.
6. **LangGraph / Langfuse / evals** are in the brief’s stack list but not evidenced as shipped systems. Site may list them as tools; it must not imply a production agent platform.
7. **C-DOT disclosure:** no written approval on file. Everything in §6 assumes resume-level facts are already employer-acceptable because they are already public on his CV. That assumption should be checked once.
8. **No eyetracking on this audience’s portfolios.** 6–10s and 2-minute figures are transferred from resumes (Ladders) and general web dwell (NN/g 2011). Directionally right; not a KPI to instrument against until the site has traffic.
9. **Future-state documents** (`sudheer_cv_ai_engineer_target.md`, product-research SpecAgent) are tempting and **must stay off the site**.
10. **ClauseNotebook is early** (Stage 1, 7 commits). The write-up’s honesty is the asset; if retrieval does not land, keep the badge forever rather than mock a copilot UI.

**Test before considering the IA “built”:** ShowProof 6-second test on a phone — stranger answers what he does, stack, one proof. DevPlaybook audit: mobile layout, every link live, GitHub README matches the card, no form required to email.

---

*End of IA. Content model is closed unless new public facts (repo URL, demo URL, confirmed spec number, C-DOT clearance) appear.*
