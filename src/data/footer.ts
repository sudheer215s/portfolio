import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { PERSON } from "@/lib/site";

export interface FooterLink {
  label: string;
  /** Small grey descriptor after the label, e.g. "Essays". */
  hint?: string;
  /**
   * A site path or a full URL (full URLs open in a new tab with an ↗ icon).
   * Leave it out for a placeholder: it renders greyed out and unlinked.
   */
  href?: string;
  /** "cta" renders bold in the primary colour; "rss" adds the RSS icon. */
  variant?: "cta" | "rss";
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  icon: IconType;
  /** Leave it out for a placeholder. */
  href?: string;
}

// Site-wide footer. Entries without an href are placeholders — add an href
// when the page or profile exists and the entry becomes a normal link.
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Site",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Blogs", hint: "Essays", href: "/blogs" },
      { label: "Writing", hint: "Notes", href: "/writing" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "ClauseNotebook", href: "https://github.com/sudheer215s/ClauseNotebook" },
      { label: "TranslateLive", href: "https://github.com/sudheer215s/TranslateLive" },
      { label: "Distributed Social Backend", href: "/projects/distributed-social" },
    ],
  },
  {
    title: "About & Contact",
    links: [
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_TAGLINE = "Built with Next.js.";

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", icon: FaLinkedin, href: PERSON.linkedin },
  { label: "GitHub", icon: FaGithub, href: PERSON.github },
  { label: "Email", icon: FaEnvelope, href: `mailto:${PERSON.email}` },
];
