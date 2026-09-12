import { PenLine } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">Experience</span>
        <h2 className="section-title">Work Experience</h2>

        <ol className="timeline m-0 p-0 list-none">
          {EXPERIENCES.map((exp) => (
            <li key={exp.id} className="timeline-item">
              <div className={exp.current ? "timeline-icon is-current" : "timeline-icon"}>
                <PenLine className="size-4" strokeWidth={1.75} />
              </div>
              <article className="timeline-card">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground m-0 leading-snug">
                  {exp.role}, {exp.companyFull}
                </h3>
                <p className="mt-1 mb-4 text-sm text-muted-foreground">
                  {exp.location}
                  <span className="mx-2 text-muted-foreground">·</span>
                  {exp.period}
                  {exp.current ? (
                    <span className="ml-2 text-xs font-medium text-foreground">
                      Present
                    </span>
                  ) : null}
                </p>
                <ul className="m-0 pl-5 space-y-2 text-base leading-relaxed text-foreground/80">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="mt-4 mb-0 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </p>
                <p className="mt-3 mb-0 font-mono text-sm text-foreground">
                  {exp.stat}
                  {exp.statSuffix} {exp.statLabel}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
