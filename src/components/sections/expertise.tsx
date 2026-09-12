import { EXPERTISE } from "@/data/expertise";

export default function Expertise() {
  return (
    <section id="expertise" className="section-block scroll-mt-8">
      <div className="narrow">
        <span className="heading-meta">What I do</span>
        <h2 className="section-title">What I work on</h2>
        <ul className="grid md:grid-cols-3 gap-6 list-none p-0 m-0">
          {EXPERTISE.map((item) => (
            <li
              key={item.title}
              className="surface-card p-6 text-left"
            >
              <h3 className="font-serif text-lg m-0 mb-3 text-foreground">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
