import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/work" }),
  schema: z.object({
    slug: z.enum(["clausenotebook", "translatelive", "distributed-social"]),
    clause: z.enum(["2.1", "2.2", "2.3"]),
    name: z.string(),
    title: z.string(),
    status: z.enum(["in-progress", "released", "architecture"]),
    statusLabel: z.string(),
    role: z.literal("Solo, personal"),
    datesNote: z.string(),
    repo: z.string().url().nullable(),
    demo: z.literal(null),
    stack: z.array(z.string()).min(3).max(10),
    problem: z.string(),
    constraint: z.string(),
    line: z.string(),
    claim: z.string(),
    proofIds: z.array(z.string()),
    proofNote: z.string().optional(),
    publishPage: z.boolean(),
    seoDescription: z.string().max(160),
  }),
});

export const collections = { work };
