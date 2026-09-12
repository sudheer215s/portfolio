"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { ABOUT_CARDS } from "@/data/about";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full section-padding overflow-hidden scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.06), transparent 65%)",
        }}
      />

      <motion.div
        className="relative container-constrained"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-accent/70 font-mono">
            Who I am
          </p>
          <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-normal leading-tight tracking-tight text-foreground">
            Backend engineer for{" "}
            <em className="italic text-accent">AI-powered products.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 lg:gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80 max-w-xl">
              {site.person.shortPhrase} Scientist-B at {site.employer.legalName}{" "}
              ({site.employer.name}), Ministry of Communications.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
              {site.lookingFor}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-xl font-mono">
              Will not do: {site.avoidingShort}
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground/70 max-w-xl">
              {site.confidentiality}
            </p>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0"
          >
            {ABOUT_CARDS.map((card) => (
              <li
                key={card.title}
                className="rounded-2xl border border-glass-border bg-glass-surface backdrop-blur-xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
              >
                <h3 className="font-serif text-lg text-foreground mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
