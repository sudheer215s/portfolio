import { FaGithub } from "react-icons/fa";
import { home } from "@/data/home";
import { cn } from "@/lib/utils";
import { isExternal, newTab, sans, sectionHeading } from "@/components/home/home-shared";

export function HomeProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-14">
      <h2 id="projects-heading" className={cn(sectionHeading, "mb-4")}>
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-5 phone:grid-cols-1 phone:gap-4">
        {home.projects.map((project) => (
          <article
            key={project.title}
            className="relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-150 ease-in-out hover:-translate-y-0.5 hover:border-[var(--border-hover)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <h3 className="text-[19px] font-semibold leading-snug">
              {/* Stretched link: its ::after covers the card, so the whole card opens the project. */}
              <a
                href={project.href}
                {...(isExternal(project.href) ? newTab : {})}
                className="text-[var(--text)] no-underline after:absolute after:inset-0 after:rounded-xl after:content-['']"
              >
                {project.title}
              </a>
            </h3>
            <p className="mt-2 line-clamp-2 text-[16px] leading-normal">{project.summary}</p>
            <div className={cn(sans, "mt-auto flex items-center justify-between pt-4 text-[15px]")}>
              {/* Visual cue only: the stretched title link above handles the click. */}
              <span aria-hidden="true" className="font-medium text-[var(--link)]">
                View project →
              </span>
              <a
                href={project.github}
                {...newTab}
                className="relative z-10 inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--text)] hover:underline"
              >
                <FaGithub className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
