import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="glass mb-6 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground"
      >
        Frontend Developer · Available for work
      </motion.span>

      <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
        {["Muhammad", "Ishaq"].map((word, wi) => (
          <span key={word} className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 + wi * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              {wi === 1 ? <span className="text-gradient">{word}</span> : word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
      >
        I craft dynamic, accessible and highly responsive web experiences with clean
        code and creative UI — turning ambitious ideas into polished products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Magnetic>
          <a
            href="#projects"
            data-cursor="View"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-7 py-3 text-sm font-semibold text-background"
          >
            View My Work
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#contact"
            className="glass inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
          >
            Get in Touch
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        className="absolute bottom-10 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
