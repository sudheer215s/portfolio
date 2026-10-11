import Link from "next/link";

export const serif = "font-[family-name:var(--font-lora),Georgia,serif]";
// The menu and buttons use the same face as the reading text.
export const sans = serif;

export const container = "mx-auto w-full max-w-[800px] px-6 phone:px-4";
export const isExternal = (href: string) => /^https?:\/\//.test(href);
export const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

const inlineLink = "text-[var(--link)] no-underline hover:text-[var(--link-hover)] hover:underline";

export const sectionHeading = "text-[20px] font-normal leading-normal";

const buttonBase =
  `${sans} inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 text-[16px] font-normal transition-colors ` +
  "phone:flex-1 phone:px-3 tiny:w-full tiny:flex-none";
// Colours come from the .home-page tokens in globals.css, so buttons follow the reading theme.
export const outlineButton = `${buttonBase} border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-hover)]`;
export const primaryButton = `${buttonBase} cursor-pointer border border-[var(--text)] bg-[var(--text)] text-[var(--on-text)] hover:border-[var(--text-hover)] hover:bg-[var(--text-hover)]`;
// A smaller primary button that sits beside a section heading.
export const headingButton = `${sans} inline-flex h-8 cursor-pointer items-center whitespace-nowrap rounded-lg border border-[var(--text)] bg-[var(--text)] px-3 text-[16px] font-normal text-[var(--on-text)] transition-colors hover:border-[var(--text-hover)] hover:bg-[var(--text-hover)]`;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-10-02" → "02 Oct 2026" */
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`;
}

/** Renders [text](href) links inside a bio paragraph; everything else is plain text. */
export function BioParagraph({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <p>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return part;
        const [, label, href] = match;
        return isExternal(href) ? (
          <a key={i} href={href} {...newTab} className={inlineLink}>
            {label}
          </a>
        ) : (
          <Link key={i} href={href} className={inlineLink}>
            {label}
          </Link>
        );
      })}
    </p>
  );
}
