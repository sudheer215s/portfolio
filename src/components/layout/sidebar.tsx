"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { NAV } from "@/data/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[60] size-11 rounded-md border border-border bg-background/90 backdrop-blur flex items-center justify-center"
        aria-expanded={open}
        aria-controls="site-rail"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
        <span className="sr-only">Menu</span>
      </button>

      {open && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 z-40 bg-foreground/30"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        id="site-rail"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[300px] overflow-y-auto border-r border-sidebar-border",
          "bg-sidebar text-sidebar-foreground",
          "flex flex-col px-6 pt-12 pb-8 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="text-center">
          <div
            className="mx-auto mb-7 size-[150px] rounded-full flex items-center justify-center border border-accent/40"
            style={{
              background:
                "radial-gradient(circle at 32% 28%, #fdf6ec 0%, #e8e2d9 55%, #c6a969 140%)",
            }}
            aria-hidden
          >
            <span className="font-serif text-5xl tracking-tight text-foreground">
              S<span className="italic font-normal">S</span>
            </span>
          </div>
          <h1 className="font-serif text-[22px] font-bold mb-2">
            <a href="#about" className="text-foreground hover:underline">
              {site.person.name}
            </a>
          </h1>
          <p className="text-[15px] leading-snug text-foreground mb-1">
            {site.person.role}
          </p>
          <p className="text-[13px] text-muted-foreground mb-5">
            {site.person.location}
          </p>
          <a
            href={site.resumeHref}
            className="inline-block text-sm font-semibold px-4 py-2.5 rounded-sm bg-accent text-foreground hover:bg-foreground hover:text-background"
          >
            Download Resume
          </a>
        </div>

        <nav className="mt-10" aria-label="Page">
          <ul className="text-center space-y-2.5">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-[12px] font-medium uppercase tracking-[0.14em] transition-colors",
                    active === item.id
                      ? "text-foreground underline decoration-accent underline-offset-4"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-10 flex flex-col items-center gap-5">
          <div className="flex items-center gap-4 text-foreground/70">
            <a href={site.person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href={site.person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <a href={`mailto:${site.person.email}`} aria-label="Email" className="hover:text-foreground">
              <Mail className="size-5" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
