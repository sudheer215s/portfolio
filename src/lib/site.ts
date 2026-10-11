// Production domain is env-driven. Set NEXT_PUBLIC_SITE_URL when the site has one.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE_NAME = "Sudheer Singh";

export const SITE_TITLE = "Sudheer Singh — AI Systems Builder";

export const SITE_DESCRIPTION =
  "Backend engineer for AI-powered products. Three years on India's national telecom infrastructure — 99.99% uptime, 40% faster lookups. Building citation-grounded RAG for 3GPP.";

export const PERSON = {
  name: "Sudheer Singh",
  email: "singhsudheer215@gmail.com",
  jobTitle: "AI Systems Builder",
  location: "New Delhi, India",
  locality: "New Delhi",
  github: "https://github.com/sudheer215s",
  githubHandle: "sudheer215s",
  linkedin: "https://linkedin.com/in/sudheer-singh-975889195",
  linkedinHandle: "sudheer-singh-975889195",
  employer: "C-DOT",
  alumniOf: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
};

/** Buttondown embed form for https://buttondown.com/sudheers. The API key stays off the site. */
export const NEWSLETTER_ACTION = "https://buttondown.com/api/emails/embed-subscribe/sudheers";

export function personId() {
  return `${SITE_URL}/#person`;
}

export function absoluteUrl(pathname: string) {
  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
