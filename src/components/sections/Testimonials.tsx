import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/portfolio-data";

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">Testimonials</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">What people say</h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glow-border flex flex-col rounded-3xl p-7"
          >
            <Quote className="mb-4 h-7 w-7 text-[var(--glow)]" />
            <blockquote className="flex-1 leading-relaxed text-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
