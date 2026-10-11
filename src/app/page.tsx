import type { Metadata } from "next";
import { HomeBlogs } from "@/components/home/home-blogs";
import { HomeFooter } from "@/components/home/home-footer";
import { HomeHeader } from "@/components/home/home-header";
import { HomePortrait } from "@/components/home/home-portrait";
import { HomeProjects } from "@/components/home/home-projects";
import { BioParagraph, container, serif } from "@/components/home/home-shared";
import { home } from "@/data/home";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { buildSearchIndex } from "@/lib/search-index";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
};

export default function Home() {
  const searchIndex = buildSearchIndex();

  return (
    <div
      className={cn(
        serif,
        "home-page flex min-h-screen flex-col bg-[var(--bg)] text-[16px] font-normal leading-[1.5] text-[var(--text)]"
      )}
    >
      {/* Header: the site-wide menu bar (also used on every inner page). */}
      <HomeHeader searchIndex={searchIndex} />

      <main className={cn(container, "flex-1")}>
        {/* About: the bio wraps around the circular photo, then runs full width under it. */}
        <section aria-label="About" className="flow-root pt-14">
          <HomePortrait />
          <div className="space-y-4">
            {home.bio.map((paragraph, i) => (
              <BioParagraph key={i} text={paragraph} />
            ))}
          </div>
        </section>

        <HomeProjects />
        <HomeBlogs />
      </main>

      <HomeFooter />
    </div>
  );
}
