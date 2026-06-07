import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">Work History</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Professional Experience</h2>
      </motion.div>

      <div className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.role + i}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glow-border relative rounded-3xl p-7"
          >
            <span className="absolute -left-[34px] top-8 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] text-background sm:-left-[54px]">
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--glow)]">{e.period}</p>
            <h3 className="mt-2 font-display text-xl font-semibold">{e.role}</h3>
            <p className="text-sm text-muted-foreground">
              {e.company} · {e.place}
            </p>
            <ul className="mt-4 space-y-2">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow-2)]" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
