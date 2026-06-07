import { motion } from "framer-motion";
import { PROFICIENCY, SKILL_GROUPS, LANGUAGES } from "@/lib/portfolio-data";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function Bar({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">My Expertise</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Skills & Technologies</h2>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Proficiency */}
        <motion.div {...fade} transition={{ duration: 0.5 }} className="glass glow-border space-y-5 rounded-3xl p-7">
          <h3 className="font-display text-xl font-semibold">Technical Proficiency</h3>
          {PROFICIENCY.map((p, i) => (
            <Bar key={p.label} label={p.label} value={p.value} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass glow-border rounded-3xl p-6"
            >
              <span className="text-2xl">{g.icon}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs transition-colors hover:border-[var(--glow)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }} className="glass glow-border mt-5 rounded-3xl p-7">
        <h3 className="mb-5 font-display text-xl font-semibold">Languages</h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {LANGUAGES.map((l, i) => (
            <Bar key={l.label} label={l.label} value={l.value} delay={i * 0.1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
