import { Suspense } from "react";
import { HomeHeader } from "@/components/home/home-header";
import { PhoneMenu } from "@/components/home/phone-menu";
import { SiteShell } from "@/components/layout/site-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SearchHighlighter } from "@/components/layout/search-highlighter";
import { buildSearchIndex } from "@/lib/search-index";

// Every page except the homepage: the homepage's menu bar on top, then the
// page with its table of contents, then the footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const searchIndex = buildSearchIndex();

  return (
    <div className="site-theme flex flex-1 flex-col">
      <HomeHeader searchIndex={searchIndex} nameAs="p">
        <PhoneMenu />
      </HomeHeader>
      <main className="flex-1">
        <SiteShell>{children}</SiteShell>
      </main>
      <SiteFooter />
      {/* Reads ?h= from the URL, so it renders client-side only. */}
      <Suspense fallback={null}>
        <SearchHighlighter />
      </Suspense>
    </div>
  );
}
