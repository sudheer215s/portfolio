---
slug: distributed-social
clause: "2.3"
name: Distributed Social Media Backend
title: Five-service backend with a transactional outbox and fan-out timelines
status: architecture
statusLabel: Architecture / personal
role: Solo, personal
datesNote: Personal systems exercise. No public repo.
repo: null
demo: null
stack:
  [
    NestJS,
    TypeScript,
    PostgreSQL,
    Kafka,
    Redis,
    gRPC,
    Elasticsearch,
    Kubernetes,
  ]
problem: A social graph + feed + search + notifications cannot honestly live in one process if the point is to practice distributed-write failure modes.
constraint: Domain-separated services; no dual-write to DB and Kafka; cheap timeline reads; notifications cross instances.
line: NestJS monorepo, 5 microservices (User, Post, Graph, Notification, Search), gRPC, Kafka transactional outbox, Redis fan-out, Elasticsearch, Kubernetes, tracing.
claim: >-
  A social graph, feed, search, and notifications cannot honestly live in one process if the point is to practice the failure modes of distributed writes. This personal systems exercise is a NestJS monorepo with five domain services — User, Post, Graph, Notification, Search — talking gRPC internally. Writes use Kafka's transactional outbox so the database and the log do not dual-write. Timelines fan out on write through Redis; notifications cross instances via Redis Pub/Sub; Elasticsearch is kept in sync from PostgreSQL as source of truth. JWT and RBAC live in shared guards; rate limiting and circuit breakers sit on the edges. There is no public repo and no user-count or QPS claim. The artifact is the write-up; happy to walk the design in an interview.
proofIds: []
proofNote: Not published as a public repo; happy to walk the design in an interview.
publishPage: true
seoDescription: Five-service NestJS backend with a transactional outbox and fan-out timelines. Personal architecture write-up; no public repo.
---

## 1. Problem

A social graph, a feed, search, and notifications cannot honestly live in one process if the point of the exercise is to practice the failure modes of distributed writes. Dual-writing a row to PostgreSQL and an event to Kafka is how you get a timeline that never sees a post that “succeeded.” Fan-out on read is a different product from fan-out on write. Cross-instance WebSockets need a shared bus or they lie about “real-time.”

This is a personal systems exercise: a Twitter/LinkedIn-shaped backend built so those tradeoffs are in the code, not in a slide.

## 2. Constraints

Domain-separated services, not a modular monolith pretending. No dual-write to the database and the log. Timeline reads should be cheap after a write. Notifications have to cross process boundaries. Authn/authz should not be reimplemented five times. The system should degrade with circuit breakers and rate limits rather than cascading.

There is **no public repository** for this project. I will not invent a GitHub URL. The artifact on this site is the write-up. I am happy to walk the design in an interview.

## 3. Design

NestJS monorepo, five services talking gRPC internally: User, Post, Graph, Notification, Search.

Writes that must be followed by events use Kafka with a transactional outbox, so the database commit and the event share a fate. Timeline fan-out is Redis-backed on write. Notifications use Redis Pub/Sub so a WebSocket on another instance still fires. Elasticsearch is for full-text search; PostgreSQL remains the source of truth. JWT with RBAC lives in shared guards and interceptors. Rate limiting and circuit breakers sit on the edges. The runtime is Kubernetes, with Prometheus/Grafana and distributed tracing.

The celebrity-problem tradeoff on fan-out is real: write-time fan-out is simple until one author has a million followers. I would not pretend this design solves that; it is the honest default for a personal system, and the place I would change first under load.

Shared libraries in the monorepo carry the guards, interceptors, and error shapes so five services do not invent five JWT stories. gRPC keeps internal contracts explicit. Elasticsearch is a projection: if it drifts, PostgreSQL still has the post. The outbox is the seam I would demo first in an interview, because that is where “the write succeeded” and “the timeline moved” stop being the same sentence.

I operated this as an architecture exercise, not as a hosted product. There is no production URL. Observability is part of the design (Prometheus, Grafana, tracing) because a distributed write you cannot see is just a race you have not named yet.

## 4. Proof

There is no user count, no QPS, no “handled N million events.” Those numbers are not in the brief, so they are not on this page. The proof is the architecture: five services, outbox, fan-out, search, tracing — and the willingness to say the repo is not public.

## 5. What I would do next

Publish a stripped repository if the code can be made public without leftover secrets. Add a failure-injection test that kills the outbox relay mid-flight and checks the timeline still converges. Replace write-time fan-out for large graphs with a hybrid read path. Keep tracing as a release gate, not a dashboard I look at after an incident.

## 6. What this is not

This is not Twitter. It is not an unattributed tutorial clone dressed up as production. It is not a claim of live users. It is a personal systems exercise whose interesting parts are the outbox, the fan-out, and the edges. Until a real public repo exists, treat the case study as the artifact.
