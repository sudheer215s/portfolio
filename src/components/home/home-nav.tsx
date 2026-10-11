"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { isNavLinkActive } from "@/lib/nav";
import type { SearchItem } from "@/lib/search-index";
import { loadSearchIndex } from "@/lib/site-search";
import { cn } from "@/lib/utils";

// The search panel is a separate file, loaded when the reader opens search,
// so the first view does not wait on it.
const SiteSearch = dynamic(
  () => import("@/components/layout/site-search").then((mod) => mod.SiteSearch),
  { ssr: false }
);

const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blogs" },
  { label: "How I work", href: "/user-manual" },
  { label: "Resume", href: "/resume" },
];

const sans = "font-[family-name:var(--font-lora),Georgia,serif]";
const navLink = "whitespace-nowrap text-[var(--text)] hover:underline";

/**
 * Homepage header nav plus the site search. Rendered as siblings of the site
 * name so the header can reflow them: one row on desktop; on phones the
 * search button sits next to the name and the links drop to a second row.
 */
export function HomeNav({ githubUrl, searchIndex }: { githubUrl: string; searchIndex: SearchItem[] }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const searchButtonRef = React.useRef<HTMLButtonElement>(null);

  const prepareSearch = () => {
    void import("@/components/layout/site-search");
    loadSearchIndex(searchIndex);
  };

  // Same shortcuts as the docs header: "/" (outside text fields) or Cmd/Ctrl+K.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest(
        "input, textarea, select, [contenteditable='true']"
      );
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeSearch = (options?: { navigating?: boolean }) => {
    setSearchOpen(false);
    if (!options?.navigating) searchButtonRef.current?.focus();
  };

  return (
    <>
      <nav
        aria-label="Main"
        className={cn(
          sans,
          "ml-auto flex items-center gap-5 text-[16px] font-normal leading-[54px]",
          "phone:order-last phone:ml-0 phone:w-full phone:flex-wrap phone:gap-x-3 phone:gap-y-2 phone:pb-3 phone:leading-[1.5]"
        )}
      >
        {NAV_ITEMS.map(({ label, href }) => {
          const active = isNavLinkActive(pathname, href);
          return (
            <Link
              key={label}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(navLink, active && "underline decoration-[var(--text)] decoration-2 underline-offset-4")}
            >
              {label}
            </Link>
          );
        })}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(navLink, "inline-flex items-center gap-1.5")}
        >
          <FaGithub className="size-3.5" aria-hidden="true" />
          GitHub
        </a>
      </nav>

      <button
        ref={searchButtonRef}
        type="button"
        aria-label="Search"
        onClick={() => setSearchOpen(true)}
        // Build the index and fetch the panel as soon as the reader reaches for search.
        onPointerEnter={() => prepareSearch()}
        onFocus={() => prepareSearch()}
        className={cn(
          sans,
          "inline-flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-[16px] font-normal text-[var(--muted)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text)]",
          "phone:ml-auto phone:w-9 phone:justify-center phone:px-0"
        )}
      >
        <Search className="size-4" aria-hidden="true" />
        <span className="phone:hidden">Search</span>
      </button>

      {searchOpen &&
        // Portalled to <body>, outside the homepage wrapper, so the panel keeps the
        // site-wide theme (the homepage's --muted and --border tokens would restyle it).
        createPortal(<SiteSearch pages={searchIndex} onClose={closeSearch} />, document.body)}
    </>
  );
}
