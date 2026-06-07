import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { EDUCATION, CERTIFICATIONS, COURSES } from "@/lib/portfolio-data";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">Academic Background</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Education & Certifications</h2>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Education */}
        <div className="space-y-5">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={e.degree}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass glow-border rounded-3xl p-7"
            >
              <GraduationCap className="mb-4 h-7 w-7 text-[var(--glow)]" />
              <h3 className="font-display text-xl font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[var(--glow)]">{e.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              {e.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          {/* Courses */}
          <motion.div {...fade} transition={{ duration: 0.5 }} className="glass glow-border rounded-3xl p-7">
            <BookOpen className="mb-4 h-7 w-7 text-[var(--glow-2)]" />
            <h3 className="mb-4 font-display text-xl font-semibold">Courses</h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {COURSES.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-secondary/30 px-4 py-3">
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }} className="glass glow-border rounded-3xl p-7">
          <Award className="mb-4 h-7 w-7 text-[var(--glow)]" />
          <h3 className="mb-5 font-display text-xl font-semibold">Certifications</h3>
          <div className="space-y-3">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.title}
                className="flex items-center justify-between rounded-2xl border border-border bg-secondary/30 px-4 py-3.5"
              >
                <div>
                  <p className="text-sm font-medium">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
                <span className="text-sm font-semibold text-[var(--glow)]">{c.year}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
