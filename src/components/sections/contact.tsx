import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section-block scroll-mt-8 pb-24">
      <div className="narrow">
        <span className="heading-meta">Get in Touch</span>
        <h2 className="section-title">Contact</h2>
        <p className="text-base leading-[1.75] text-foreground/80 max-w-[36rem] mb-8">
          {site.availability} Email is the fastest path. Phone stays on the PDF resume.
        </p>
        <ul className="space-y-4 list-none p-0 m-0 text-[16px]">
          <li className="flex items-center gap-3">
            <Mail className="size-4 text-accent shrink-0" />
            <a className="link-plain" href={`mailto:${site.person.email}`}>
              {site.person.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Github className="size-4 text-accent shrink-0" />
            <a
              className="link-plain"
              href={site.person.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sudheer215s
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin className="size-4 text-accent shrink-0" />
            <a
              className="link-plain"
              href={site.person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="size-4 text-accent shrink-0" />
            {site.person.location}
          </li>
        </ul>
        <p className="mt-16 mb-0 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.person.name}. C-DOT facts on this page are resume-public only.
        </p>
      </div>
    </section>
  );
}
