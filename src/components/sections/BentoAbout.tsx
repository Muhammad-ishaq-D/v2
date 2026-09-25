import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Rocket, Sparkles, Zap, Globe2 } from "lucide-react";
import { TECH, PROJECTS, PROFILE, CONTACT, EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";

const LIVE_PRODUCTS = PROJECTS.filter((p) => p.links?.some((l) => l.label === "Live Website")).length;
const AI_PRODUCTS = PROJECTS.filter((p) => p.tags.includes("AI")).length;

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function BentoAbout() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">About</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">The story so far</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Bio — large */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6 }}
          className="glass glow-border group relative col-span-1 flex flex-col overflow-hidden rounded-3xl p-7 sm:col-span-2 lg:row-span-2"
        >
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">Full stack, with a focus on AI products</h3>
          <p className="mb-6 mt-4 leading-relaxed text-muted-foreground">
            {PROFILE.summary}
          </p>
          <ul className="mt-auto space-y-2.5 border-t border-border pt-5 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Briefcase className="h-4 w-4 shrink-0 text-[var(--glow)]" />
              {EXPERIENCE[0].role} at {EXPERIENCE[0].company}
            </li>
            <li className="flex items-center gap-3">
              <GraduationCap className="h-4 w-4 shrink-0 text-[var(--glow)]" />
              {EDUCATION[0].degree}, CGPA 3.72
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[var(--glow)]" />
              {CONTACT.location}, working remotely worldwide
            </li>
          </ul>
        </motion.div>

        {/* Stat cards */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.05 }} className="glass glow-border rounded-3xl p-6">
          <Rocket className="mb-4 h-7 w-7 text-[var(--glow)]" />
          <p className="font-display text-3xl font-bold">{LIVE_PRODUCTS}</p>
          <p className="text-sm text-muted-foreground">Live products shipped</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="glass glow-border rounded-3xl p-6">
          <Sparkles className="mb-4 h-7 w-7 text-[var(--glow-2)]" />
          <p className="font-display text-3xl font-bold">{AI_PRODUCTS}</p>
          <p className="text-sm text-muted-foreground">AI products in production</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="glass glow-border rounded-3xl p-6">
          <Zap className="mb-4 h-7 w-7 text-[var(--glow)]" />
          <p className="font-display text-lg font-semibold">Performance first</p>
          <p className="text-sm text-muted-foreground">Fast loads, smooth motion, SEO built in.</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="glass glow-border rounded-3xl p-6">
          <Globe2 className="mb-4 h-7 w-7 text-[var(--glow-2)]" />
          <p className="font-display text-lg font-semibold">Remote-proven</p>
          <p className="text-sm text-muted-foreground">Shipping for teams in Thailand, the UK and Pakistan.</p>
        </motion.div>

        {/* Tech stack — wide */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass glow-border col-span-1 rounded-3xl p-7 sm:col-span-2 lg:col-span-4"
        >
          <h3 className="mb-5 font-display text-xl font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2.5">
            {TECH.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm transition-colors hover:border-[var(--glow)] hover:text-foreground"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
