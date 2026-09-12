---
slug: clausenotebook
clause: "2.1"
name: ClauseNotebook
title: Provenance-first ingestion for a citation-grounded 3GPP copilot
status: in-progress
statusLabel: In progress · Stage 1 ingestion
role: Solo, personal
datesNote: In progress. Stage 1 ingestion. Solo, personal. Public 3GPP PDFs only.
repo: https://github.com/sudheer215s/ClauseNotebook
demo: null
stack: [Python, CLI, JSON, SHA-256, PyMuPDF4LLM]
problem: Engineers need the exact clause that specifies a requirement across large, versioned 3GPP documents; a confident paraphrase with no citation is a liability.
constraint: Public 3GPP PDFs only; reproducible SHA-256 citations; idempotent registration; no chat UI until retrieval can abstain.
line: "Citation-grounded 3GPP copilot. Provenance first: versioned JSON manifest, SHA-256, idempotent CLI, PyMuPDF4LLM, registered → converted. Next: clause-aware chunking, hybrid retrieval, inline citations, abstention."
claim: >-
  Engineers need the exact clause that specifies a requirement across large, versioned 3GPP documents. A confident paraphrase with no citation is a liability — someone will build against it. Generic RAG fails because clause numbering nests and carries semantics, normative requirements often live in tables under the prose, specs cross-reference constantly, and an answer correct against Release 17 can be wrong against Release 18. Retrieval quality here is a document-structure problem before it is a model problem. I am building ClauseNotebook, a citation-grounded 3GPP copilot, as a solo personal project. Motivation comes from the day job; the corpus is public 3GPP PDFs only — no C-DOT data, no internal specs. Stage 1 ingestion works today: a versioned JSON manifest with SHA-256, an idempotent CLI, atomic manifest writes, PyMuPDF4LLM conversion, and explicit registered → converted states. Retrieval is next. There is no Recall@k, no latency, and no users yet. The proof is the public repository.
proofIds: []
proofNote: Stage 1 CLI + public repo; no Recall@k.
publishPage: true
seoDescription: Provenance-first ingestion for a citation-grounded 3GPP copilot. Stage 1 JSON manifest, SHA-256, idempotent CLI. In progress.
---

## 1. Problem

Telecom engineers constantly need the exact clause that specifies a requirement. The documents are large, versioned, and cross-linked. A generic language-model answer is worse than useless here: a confident paraphrase with no citation is a liability, because someone will build against it.

I ran into this at work while implementing 5G-core service interfaces from 3GPP specifications. The requirement is never in one place. Architecture and procedures live in a stage-2 spec; message contracts live in stage-3; common types live somewhere else again. Miss a cross-reference and you ship a contract that looks correct and is incomplete. Normative meaning often lives in the tables under the prose, not in the narrative. I treated anything I could not attach to a clause number as unverified. That process is slow, manual, and obviously automatable — which is why this project exists.

The corpus for ClauseNotebook is **public 3GPP PDFs only**. No C-DOT documents, no internal specs, no subscriber data.

## 2. Constraints

Generic RAG is built on assumptions these documents break:

- Clause numbering nests several levels deep and carries semantics. `5.2.3.1` means something specific in relation to `5.2.3`.
- Requirements are often split between prose and the tables beneath them. A pipeline that treats tables as loose text drops the requirement itself.
- Specs cross-reference constantly, so a clause retrieved in isolation can be cited correctly and still be incomplete.
- An answer that was correct against Release 17 can be silent-wrong against Release 18. Provenance is a version problem, not a metadata flourish.

So I started at the foundation, not at the chat box. The pipeline shall not emit an uncited claim. Until retrieval can abstain — “I don’t have a clause that says that” — there is no assistant UI.

## 3. Design

Stage 1 is ingestion. It exists today, in public, at [github.com/sudheer215s/ClauseNotebook](https://github.com/sudheer215s/ClauseNotebook).

Source PDFs are registered in a versioned JSON manifest with metadata and SHA-256 hashes, so every later citation can resolve to a byte-identical document version. Registration is idempotent: the same file does not get a second identity unless explicitly overridden. Manifest writes are atomic, so an interrupted run cannot leave a half-updated registry. The CLI enforces repository-contained source paths. PyMuPDF4LLM converts each PDF to Markdown with YAML front matter. Documents move through explicit states: `registered` → `converted`. The repository stores pointers and hashes, not a dump of PDF bytes.

That is unglamorous work. It is also the part that does not get easier if you put a chat interface in front of it.

I built the CLI so a run is safe to repeat. Duplicate protection is the default. Atomic writes mean I can kill the process and rerun. Conversion is a state transition, not a side effect that you discover later by grepping a folder. If a citation cannot name a hash and a source span, it does not belong in an answer. That rule is the product.

## 4. Proof

There is no Recall@k, no latency number, and no user count. Stage 1 is not an evaluated retrieval system. The proof is the public repository: a CLI you can run, a manifest schema, conversion that is repeatable, and a state machine you can read.

I am not claiming a finished copilot. Ingestion works; retrieval is what I am building next.

## 5. What I would do next

Clause-aware chunking that respects nested numbering and tables. Hybrid retrieval rather than naive vector search. Inline citations that point at a hashed document version. An abstention path, because in this domain a fluent guess is a failure mode.

I want evals that score citation quality, not fluency: did the span exist, was the version right, did we refuse when we should have. That is the release gate I would not skip.

## 6. What this is not

This is not a Chat-with-PDF wrapper. It is not an evaluated RAG product. It is not trained on C-DOT documents. It does not invent a 3GPP document number for itself. The site you are reading is `SUDHEER TS 00.001`, a personal specification — not an ETSI publication.
