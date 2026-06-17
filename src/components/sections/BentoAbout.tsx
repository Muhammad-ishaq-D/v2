import { motion } from "framer-motion";
import { Code2, Sparkles, Zap, MapPin } from "lucide-react";
import { TECH } from "@/lib/portfolio-data";
import avatar from "@/assets/avatar.png";

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
          className="glass glow-border group relative col-span-1 overflow-hidden rounded-3xl p-7 sm:col-span-2 lg:row-span-2"
        >
          <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-2xl">
            <img
              src={avatar}
              alt="Muhammad Ishaq"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <h3 className="font-display text-2xl font-semibold">Results-driven MERN Developer</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I am a MERN Stack Developer with a Bachelor’s in Software Engineering and hands-on experience in building modern, scalable web applications. Passionate about learning new technologies and integrating AI-powered features.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.05 }} className="glass glow-border rounded-3xl p-6">
          <Code2 className="mb-4 h-7 w-7 text-[var(--glow)]" />
          <p className="font-display text-3xl font-bold">20+</p>
          <p className="text-sm text-muted-foreground">Technologies mastered</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }} className="glass glow-border rounded-3xl p-6">
          <Sparkles className="mb-4 h-7 w-7 text-[var(--glow-2)]" />
          <p className="font-display text-3xl font-bold">6+</p>
          <p className="text-sm text-muted-foreground">Featured projects</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }} className="glass glow-border rounded-3xl p-6">
          <Zap className="mb-4 h-7 w-7 text-[var(--glow)]" />
          <p className="font-display text-lg font-semibold">Performance first</p>
          <p className="text-sm text-muted-foreground">Smooth, hardware-accelerated UI.</p>
        </motion.div>

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }} className="glass glow-border rounded-3xl p-6">
          <MapPin className="mb-4 h-7 w-7 text-[var(--glow-2)]" />
          <p className="font-display text-lg font-semibold">Remote ready</p>
          <p className="text-sm text-muted-foreground">Open to global collaboration.</p>
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
