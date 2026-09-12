import type { CitationToken } from "./site";

export const citationLabels: Record<CitationToken, string> = {
  brief: "Subject brief (positioning confirmed 2026-07-09)",
  CV5: "Public resume sudheer_cv5_back",
  repo: "Public GitHub repository named on that page",
};

export function citationAccessibleName(tokens: readonly CitationToken[]): string {
  return `Source: ${tokens.map((token) => citationLabels[token]).join("; ")}`;
}
