#!/usr/bin/env node
// Build-time script: writes public/llms.txt and public/llms-full.txt from /content.
// Run via `npm run generate:llms` (wired into `prebuild`, so it runs before `next build`).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, "content");
const PUBLIC_ROOT = path.join(ROOT, "public");
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function readCollection(dir) {
  const full = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(full, f), "utf8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data, body: content };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

const projects = readCollection("projects");
const writing = readCollection("writing");

const aboutSummary =
  "Sudheer Singh is an AI Systems Builder in New Delhi. He is a Scientist-B at C-DOT, building high-availability backends for India's national telecom infrastructure (99.99% Postgres uptime, 40% faster IMS/ENUM lookups). His personal work is ClauseNotebook, a citation-grounded 3GPP copilot in Stage 1, and TranslateLive, a voice pipeline under three seconds. He holds a B.Tech in Computer Science and Engineering from MANIT Bhopal.";

function section(title, entries, basePath) {
  if (entries.length === 0) return "";
  const links = entries
    .map(
      (e) =>
        `- [${e.frontmatter.title}](${SITE_URL}${basePath}/${e.slug}): ${e.frontmatter.summary}`
    )
    .join("\n");
  return `## ${title}\n\n${links}\n`;
}

const llmsTxt = `# Sudheer Singh

${aboutSummary}

${section("Projects", projects, "/projects")}
${section("Writing", writing, "/writing")}
## About

- [Resume](${SITE_URL}/resume): Experience, education, and skills.
`;

const fullParts = [
  `# Sudheer Singh\n\n${aboutSummary}\n`,
  "# About\n\n" + aboutSummary + "\n",
  ...projects.map(
    (p) => `# Project: ${p.frontmatter.title}\n\n${p.body.trim()}\n`
  ),
  ...writing.map(
    (p) => `# ${p.frontmatter.title}\n\n${p.body.trim()}\n`
  ),
];

fs.mkdirSync(PUBLIC_ROOT, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_ROOT, "llms.txt"), llmsTxt.trim() + "\n");
fs.writeFileSync(
  path.join(PUBLIC_ROOT, "llms-full.txt"),
  fullParts.join("\n---\n\n")
);

console.log(
  `[generate-llms-txt] wrote public/llms.txt and public/llms-full.txt (${projects.length} projects, ${writing.length} writing posts)`
);
