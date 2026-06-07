import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-5xl items-center justify-between rounded-full px-5 py-2.5 glass"
    >
      <a href="#" className="font-display text-lg font-bold tracking-tight">
        M<span className="text-gradient">I</span>.
      </a>
      <nav className="hidden gap-1 md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <Magnetic>
        <a
          href="#contact"
          data-cursor="Hire"
          className="rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-4 py-1.5 text-sm font-semibold text-background"
        >
          Hire me
        </a>
      </Magnetic>
    </motion.header>
  );
}
