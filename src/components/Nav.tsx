import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import { DownloadIcon, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/portfolio-data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-3rem)] max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border border-[var(--glow)]/30 shadow-[0_0_20px_rgba(var(--glow),0.15)]"
          : "glass"
      }`}
    >
      <a href="#" className="group flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] shadow-[0_0_15px_rgba(var(--glow),0.3)] transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 256 256" fill="none" stroke="white" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M60 180V76L128 144L196 76V180" />
          </svg>
        </div>
        <span className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--glow)]">
          Ishaq<span className="text-[var(--glow-2)]">.</span>
        </span>
      </a>
      <nav className="hidden gap-1 lg:flex">
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
      <div className="flex items-center gap-2">
      <Magnetic>
        <a
          href={CONTACT.resume}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Download"
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-4 py-1.5 text-sm font-semibold text-background"
        >
          <DownloadIcon className="w-4 text-black" />
          <span>Resume</span>
        </a>
      </Magnetic>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col rounded-3xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
