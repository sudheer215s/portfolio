import { Server, BookMarked, Network, FileText } from "lucide-react";
import { site } from "@/data/site";
import { ABOUT_CARDS } from "@/data/about";

const ICONS = [Server, BookMarked, Network, FileText];

export default function About() {
  return (
    <section id="about" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">About Me</span>
        <h2 className="section-title">Who Am I?</h2>
        <div className="space-y-4 text-base leading-[1.75] text-foreground max-w-[46rem]">
          <p>
            <strong className="font-semibold">{site.person.name}.</strong> {site.person.role} —
            Scientist-B / Backend Engineer at {site.employer.legalName} ({site.employer.name}),{" "}
            {site.person.location}. Three years on India&apos;s national telecom infrastructure:{" "}
            <strong>99.99% Postgres uptime</strong>, <strong>40% faster</strong> IMS/ENUM lookups.
          </p>
          <p className="text-foreground/85">
            Looking for {site.lookingForShort}
          </p>
          <p className="text-sm text-muted-foreground">{site.confidentiality}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 list-none p-0 m-0">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = ICONS[i] ?? Server;
            return (
              <li key={card.title} className="surface-card p-5">
                <Icon className="size-7 text-accent mb-3" strokeWidth={1.5} aria-hidden />
                <h3 className="font-sans text-[15px] font-medium text-foreground m-0 leading-snug">
                  {card.title}
                </h3>
              </li>
            );
          })}
        </ul>

        <div className="hire-banner mt-10">
          <p className="font-serif text-xl md:text-2xl leading-snug m-0 max-w-3xl">
            99.99% uptime. 40% faster lookups. Building citation-grounded RAG for 3GPP.
          </p>
          <a href={`mailto:${site.person.email}`} className="btn-hire">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
