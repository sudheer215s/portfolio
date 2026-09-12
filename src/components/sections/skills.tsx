import { SKILL_GROUPS } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">My Specialty</span>
        <h2 className="section-title">My Skills</h2>
        <p className="text-base leading-[1.75] text-foreground/80 max-w-[46rem] mb-10">
          Stack I actually use at work and on the three projects above. No skill bars — percentages
          would be theatre.
        </p>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8 list-none p-0 m-0">
          {SKILL_GROUPS.map((group) => (
            <li key={group.title}>
              <h3 className="font-sans text-[13px] uppercase tracking-[0.18em] font-medium text-foreground m-0 mb-3">
                {group.title}
              </h3>
              <div className="h-px w-10 bg-accent mb-3" />
              <p className="m-0 flex flex-wrap gap-2">
                {group.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] tracking-wide px-2.5 py-1 bg-muted text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </p>
              {"note" in group && group.note ? (
                <p className="mt-2 mb-0 text-xs text-muted-foreground leading-relaxed">{group.note}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
