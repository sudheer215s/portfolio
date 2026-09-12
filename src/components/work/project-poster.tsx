"use client";

import { type Project } from "@/types";

export function ProjectPoster({
  project,
  hovered,
}: {
  project: Project;
  hovered: boolean;
}) {
  const poster = project.poster ?? {
    kicker: project.tag,
    mark: project.title.slice(0, 2).toUpperCase(),
    line: project.annotation,
  };

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-6"
      style={{
        background:
          "linear-gradient(160deg, rgba(245,239,230,0.96) 0%, rgba(232,226,217,0.92) 55%, rgba(198,169,105,0.18) 100%)",
      }}
    >
      <div className="dark:hidden absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.25), transparent 50%)",
        }}
      />
      <div className="flex items-start justify-between relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          {poster.kicker}
        </span>
        <span className="font-mono text-[10px] text-foreground/40">{project.year}</span>
      </div>
      <div className="relative z-10">
        <div
          className="font-serif leading-none text-foreground/90"
          style={{
            fontSize: "clamp(3.4rem, 8vw, 5.2rem)",
            letterSpacing: "-0.06em",
            transform: hovered ? "translateY(-4px)" : undefined,
            transition: "transform 0.4s ease",
          }}
        >
          {poster.mark}
        </div>
        <p className="mt-3 font-mono text-xs tracking-widest text-foreground/55">
          {poster.line}
        </p>
      </div>
    </div>
  );
}
