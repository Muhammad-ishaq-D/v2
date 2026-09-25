import { motion } from "framer-motion";
import { Bot, Code2, Server, Wrench } from "lucide-react";
import { PROFICIENCY, SKILL_GROUPS, LANGUAGES, type SkillGroup, type SkillLevel } from "@/lib/portfolio-data";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const GROUP_ICONS: Record<SkillGroup["icon"], typeof Code2> = {
  frontend: Code2,
  backend: Server,
  ai: Bot,
  tools: Wrench,
};

const LEVEL_DOTS: Record<SkillLevel, number> = { Expert: 3, Advanced: 2, Proficient: 1 };

function LevelDots({ level }: { level: SkillLevel }) {
  return (
    <span className="flex gap-1" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${
            i < LEVEL_DOTS[level] ? "bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]" : "bg-secondary/60"
          }`}
        />
      ))}
    </span>
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
        {/* Core strengths */}
        <motion.div {...fade} transition={{ duration: 0.5 }} className="glass glow-border space-y-5 rounded-3xl p-7">
          <h3 className="font-display text-xl font-semibold">Core Strengths</h3>
          {PROFICIENCY.map((p) => (
            <div key={p.label}>
              <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                <span className="font-medium">{p.label}</span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <LevelDots level={p.level} />
                  {p.level}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = GROUP_ICONS[g.icon];
            return (
              <motion.div
                key={g.title}
                {...fade}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass glow-border rounded-3xl p-6"
              >
                <Icon className="h-6 w-6 text-[var(--glow)]" />
                <h3 className="mt-3 font-display text-lg font-semibold">{g.title}</h3>
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
            );
          })}
        </div>
      </div>

      {/* Languages */}
      <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }} className="glass glow-border mt-5 rounded-3xl p-7">
        <h3 className="mb-5 font-display text-xl font-semibold">Languages</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {LANGUAGES.map((l) => (
            <div key={l.label} className="rounded-2xl border border-border bg-secondary/30 px-4 py-3">
              <p className="text-sm font-medium">{l.label}</p>
              <p className="text-xs text-muted-foreground">{l.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
