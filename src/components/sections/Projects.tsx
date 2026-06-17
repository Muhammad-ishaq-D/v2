import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, FILTERS } from "@/lib/portfolio-data";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [expanded, setExpanded] = useState<boolean>(false);
  
  const visible = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter));
  const displayed = expanded ? visible : visible.slice(0, 4);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">Work</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Selected projects</h2>
      </motion.div>

      <div className="mb-10 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              filter === f ? "text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayed.map((p) => (
            <motion.article
              key={p.title}
              layout
              data-cursor="View"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => p.links?.[0] && window.open(p.links[0].url, "_blank")}
              className={`glass glow-border group relative overflow-hidden rounded-3xl ${p.links?.[0] ? "cursor-pointer" : ""}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.links?.[0]?.url ? `/api/og?url=${encodeURIComponent(p.links[0].url)}` : p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith(p.image)) {
                      target.src = p.image;
                    }
                  }}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--glow)]" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                {p.links && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-20 inline-flex items-center gap-1 text-xs font-semibold text-[var(--glow)] transition-colors hover:text-[var(--glow-2)]"
                      >
                        {link.label} <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length > 4 && (
        <motion.div layout className="mt-14 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[var(--glow)] hover:text-[var(--glow)] shadow-sm hover:shadow-[0_0_15px_rgba(var(--glow),0.15)]"
          >
            {expanded ? "Show Less" : "View More"}
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="mt-0.5"
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </button>
        </motion.div>
      )}
    </section>
  );
}
