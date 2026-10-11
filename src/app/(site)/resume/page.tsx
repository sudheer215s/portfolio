import type { Metadata } from "next";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { SITE_DESCRIPTION } from "@/lib/site";

// To update: replace public/resume/resume.pdf, then run `npm run resume:image`.
// That renders the first page and writes this preview. It is served as-is
// (unoptimized) so a visit does not wait on the image optimizer.
const RESUME_PDF = "/resume/resume.pdf";
const RESUME_PREVIEW = "/resume/resume.webp";
const DOWNLOAD_NAME = "Sudheer-Singh-Resume.pdf";

const buttonBase =
  "ui-font inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium transition-colors";
const primaryButton = `${buttonBase} border-[var(--md-primary)] bg-[var(--md-primary)] text-[var(--md-primary-fg)] hover:opacity-90`;
const outlineButton = `${buttonBase} border-border bg-card text-foreground hover:bg-muted`;

export const metadata: Metadata = {
  title: "Resume",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="max-w-none py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 id="resume" className="text-[20px] font-normal leading-normal text-foreground/70">
          Resume
        </h1>
        <div className="flex flex-wrap gap-3">
          <a href={RESUME_PDF} download={DOWNLOAD_NAME} className={primaryButton}>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer" className={outlineButton}>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Open PDF
          </a>
        </div>
      </div>

      {/* The page as a sheet of paper: white in every theme, like the printed PDF. */}
      <a
        href={RESUME_PDF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the resume PDF in a new tab"
        className="block overflow-hidden rounded-sm bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.14),0_12px_32px_rgba(0,0,0,0.14)]"
      >
        <Image
          src={RESUME_PREVIEW}
          alt="Sudheer Singh's one-page resume"
          width={1587}
          height={2246}
          sizes="(max-width: 840px) 100vw, 800px"
          priority
          unoptimized
          className="h-auto w-full"
        />
      </a>
    </div>
  );
}
