"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { site } from "@/data/site";

export default function Education() {
  const [open, setOpen] = useState(true);

  return (
    <section id="education" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">Education</span>
        <h2 className="section-title">Education</h2>

        <div className="border border-border overflow-hidden">
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-foreground text-background text-left"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-sans text-[13px] uppercase tracking-[0.14em] font-medium">
              {site.education.degree}
            </span>
            <ChevronDown className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open ? (
            <div className="px-5 py-5 bg-card">
              <p className="m-0 font-serif text-xl text-foreground">
                {site.education.field}
              </p>
              <p className="mt-1 mb-4 text-sm text-muted-foreground">
                {site.education.school}
                <span className="mx-2 text-muted-foreground">·</span>
                {site.education.dates}
              </p>
              <ul className="m-0 pl-5 space-y-2 text-base leading-relaxed text-foreground/80">
                <li>B.Tech in Computer Science and Engineering at a National Institute of Technology.</li>
                <li>Foundation for the systems work at C-DOT: Linux, databases, networks, software engineering.</li>
                <li>No GPA published on this site.</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
