import { PROJECTS } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">My Work</span>
        <h2 className="section-title">Recent Work</h2>
        <div className="grid gap-5">
          {PROJECTS.map((project) => {
            const inner = (
              <article className="surface-card p-6 h-full flex flex-col">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <p className="m-0 text-sm text-muted-foreground">
                    {project.tag}
                    <span className="mx-2">·</span>
                    {project.annotation}
                  </p>
                  {project.poster?.mark ? (
                    <span className="font-mono text-xs tracking-widest text-muted-foreground" aria-hidden>
                      {project.poster.mark}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-serif text-2xl text-foreground m-0 mb-3">{project.title}</h3>
                <p className="m-0 text-base leading-[1.7] text-foreground/85 flex-1">
                  {project.description}
                </p>
                {project.githubUrl ? (
                  <p className="mt-4 mb-0 text-sm">
                    <span className="link-plain">GitHub</span>
                  </p>
                ) : (
                  <p className="mt-4 mb-0 text-sm text-muted-foreground">No public repository</p>
                )}
              </article>
            );

            if (project.githubUrl) {
              return (
                <a
                  key={project.slug}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:border-foreground/20"
                >
                  {inner}
                </a>
              );
            }

            return (
              <div key={project.slug}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
