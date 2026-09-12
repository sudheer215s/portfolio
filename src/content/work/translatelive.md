---
slug: translatelive
clause: "2.2"
name: TranslateLive
title: Real-time voice translation under a hard latency budget
status: released
statusLabel: Shipped personal
role: Solo, personal
datesNote: Shipped personal. Code public.
repo: https://github.com/sudheer215s/TranslateLive
demo: null
stack: [Python, FastAPI, WebSocket, Redis, Deepgram, OpenAI, Docker, Kubernetes]
problem: Orchestrate speech recognition, translation, and playback as one pipeline that still feels like conversation.
constraint: End-to-end under three seconds; concurrent live sessions; instances stateless for horizontal scale; production hygiene from day one.
line: "Real-time voice translation. Deepgram STT → GPT translation → TTS, <3s e2e. FastAPI, WebSocket, Redis session state, 10+ concurrent sessions, Kubernetes."
claim: >-
  Real-time voice translation has to feel like conversation, not a batch job. TranslateLive is a shipped personal system that orchestrates Deepgram STT, GPT translation, and TTS as one pipeline with a hard end-to-end budget under three seconds. Transport is WebSocket; concurrency is Python asyncio plus connection pooling; session state lives in Redis so instances stay stateless and the service can scale horizontally on Kubernetes. Load tests held more than ten simultaneous WebSocket sessions without dropped connections. Production hygiene from day one: CI, integration tests, structured JSON logging, health checks. This is not a research STT model, not a C-DOT deployment, and not a claim of extra vendors beyond Deepgram, GPT, and TTS. No live demo URL is published.
proofIds: [translate-e2e, translate-sessions]
publishPage: true
seoDescription: Real-time voice translation under a hard latency budget. Deepgram STT → GPT → TTS, under 3s, 10+ WebSocket sessions.
---

## 1. Problem

Real-time voice translation has to feel like conversation, not a batch job. The user speaks; they should hear a translation before the moment has moved on. That is a pipeline problem: speech recognition, a language model for translation, and speech playback, in sequence, on a live connection, under a hard time budget.

I built TranslateLive as a personal system to own that orchestration layer — the same shape I would later recognize in any LLM product that has to run in production: retries, backpressure, session state, and instrumentation, with a model in the middle instead of a database.

## 2. Constraints

The budget is end-to-end under three seconds, measured speech-to-text through translation through playback. The service has to hold concurrent live sessions. Instances must stay stateless so the thing can scale horizontally. Production hygiene is not a later phase: CI, integration tests, structured JSON logging, and health checks from day one.

I am not claiming a research speech model. I am not claiming C-DOT production users. The public README for this repo has at times overclaimed versus these facts; this write-up follows the brief and CV, not those extras.

## 3. Design

The pipeline is linear and explicit:

Deepgram speech-to-text → GPT translation → text-to-speech playback.

Transport is WebSocket. Concurrency is Python asyncio plus connection pooling on FastAPI. Session state lives in Redis, so any instance can pick up a session and the service stays horizontally scalable. The deployment target is Kubernetes.

That is a small system. The interesting part is that it is an orchestration layer with a latency budget, not a notebook that calls three APIs in a row. Connection pooling, shared session state, and health checks are the difference between a demo and a service.

A sequence, generically:

Client → orchestration layer → STT API → LLM provider → TTS API → client, with session state in Redis.

The orchestration layer is the piece I care about. Each provider is a dependency with its own tail latency. The service has to survive a slow transcription without dropping the socket, and it has to survive two users talking at once without sharing buffers. Redis is the shared notebook; the FastAPI process is disposable. That is the same instinct as putting session state off the box so Kubernetes can scale replicas that do not know each other.

I kept the pipeline strictly sequential for v1. A streaming partial transcript that starts translation early would be a later experiment, and I would not ship it without a latency eval that says it actually helps. The public code is the sequential path that met the three-second budget in the tests I ran.

## 4. Proof

End-to-end latency under three seconds (STT → translation → TTS). Load tests held more than ten simultaneous WebSocket sessions without dropped connections. Code is public: [github.com/sudheer215s/TranslateLive](https://github.com/sudheer215s/TranslateLive).

No p50/p95. No cost per query. No live demo URL. No extra vendor names and no inflated user counts.

## 5. What I would do next

Traces on every call, so a regression in tail latency has a span, not a guess. An eval set of utterances with a latency gate in CI. Explicit backpressure when a provider slows down, rather than letting WebSocket clients time out in the dark.

I would also pin provider timeouts per stage so a hung TTS cannot hold the whole budget, and I would document the failure the client should see when the budget is already spent. Those are production details, not model details.

## 6. What this is not

This is not a research STT model. It is not a C-DOT deployment. It is not a site chatbot. The numbers on this page are the brief and CV numbers, cited, and nothing else.
