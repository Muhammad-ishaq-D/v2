import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Mouse } from "lucide-react";
import { ProximityMagnetic } from "@/components/ProximityMagnetic";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroProfileFrame } from "@/components/HeroProfileFrame";
import { PROJECTS } from "@/lib/portfolio-data";
import avatar from "@/assets/avatar.png";

const MARQUEE = ["Full Stack Developer", "AI Product Engineer", "React · Next.js · Node"];

const STATS = [
  { value: String(PROJECTS.filter((p) => p.links?.some((l) => l.label === "Live Website")).length), label: "Live products" },
  { value: String(PROJECTS.filter((p) => p.tags.includes("AI")).length), label: "AI products" },
  { value: "2+", label: "Years building" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
});

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 12 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <Mouse className="h-5 w-5" />
      <motion.span
        className="h-2 w-1 rounded-full bg-current"
        animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/** Compact portrait shown above the name on small screens, where the large frame would push content below the fold. */
function MobileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="relative mb-5 lg:hidden [@media(max-height:700px)]:mb-4"
    >
      <div
        className="pointer-events-none absolute -inset-4 rounded-full opacity-80 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--glow) 35%, transparent), color-mix(in oklab, var(--glow-2) 20%, transparent) 60%, transparent 75%)",
        }}
      />
      <div className="relative rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] p-[3px]">
        <img
          src={avatar}
          alt="Muhammad Ishaq"
          width={1024}
          height={1024}
          className="h-24 w-24 rounded-full border-4 border-background object-cover object-top [@media(max-height:700px)]:h-20 [@media(max-height:700px)]:w-20 sm:h-28 sm:w-28"
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const headingRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const bgx = useMotionValue(50);
  const bgy = useMotionValue(50);

  // Kinetic gradient that shifts on mouse movement across the heading
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      mx.set((px - 0.5) * 60);
      bgx.set(20 + px * 60);
      bgy.set(20 + py * 60);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, bgx, bgy]);

  const mxDeg = useTransform(mx, (v) => `${v}deg`);
  const bgxPct = useTransform(bgx, (v) => `${v}%`);
  const bgyPct = useTransform(bgy, (v) => `${v}%`);


  return (
    <section className="relative flex min-h-[100svh] items-center overflow-x-hidden px-6 pb-12 pt-24 [@media(max-height:700px)]:pt-20 sm:pt-28 lg:py-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10 xl:gap-16">
          {/* Left — identity, value proposition & CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <MobileAvatar />

            {/* Live status pill with scrolling roles */}
            <motion.div
              {...rise(0.1)}
              className="glass mb-5 flex items-center gap-3 rounded-full py-1.5 pl-3 pr-4 [@media(max-height:700px)]:mb-4 lg:mb-7"
            >
              <span
                className="status-dot h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: "oklch(0.78 0.18 150)" }}
              />
              <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                Available
              </span>
              <span className="h-3 w-px shrink-0 bg-border" />
              <span className="relative w-40 overflow-hidden text-left no-scrollbar sm:w-48">
                <span className="marquee text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {[...MARQUEE, ...MARQUEE].map((t, i) => (
                    <span key={i} className="px-3">
                      {t} •
                    </span>
                  ))}
                </span>
              </span>
            </motion.div>

            {/* Kinetic split-text heading */}
            <div ref={headingRef}>
              <h1 className="font-display text-[3.25rem] font-bold leading-[1] tracking-tight [@media(max-height:700px)]:text-[2.75rem] sm:text-7xl xl:text-[5.5rem]">
                <span className="sr-only">Muhammad Ishaq, Full Stack Developer</span>
                <span aria-hidden className="block overflow-hidden pb-[0.1em]">
                  <motion.span
                    className="text-stroke inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  >
                    Muhammad
                  </motion.span>
                </span>
                <span aria-hidden className="block overflow-hidden pb-[0.12em]">
                  {/* The transform lives on this wrapper, not on the gradient text: Safari and some GPU paths
                      stop painting background-clip:text inside transformed children, which hid the name. */}
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <motion.span
                      className="text-gradient-kinetic inline-block"
                      style={
                        {
                          "--mx": mxDeg,
                          "--bgx": bgxPct,
                          "--bgy": bgyPct,
                        } as React.CSSProperties
                      }
                    >
                      Ishaq
                    </motion.span>
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              {...rise(0.7)}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
            >
              <span className="sm:hidden">
                I build fast, polished web products: AI assistants, SaaS dashboards and booking flows.
              </span>
              <span className="hidden sm:inline">
                I build fast, polished web products for startups and growing businesses: AI chat and voice assistants,
                SaaS dashboards, and booking and payment flows, shipped to production with Next.js, React and Node.
              </span>
            </motion.p>

            <motion.div
              {...rise(0.85)}
              className="mt-6 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-7 sm:w-auto sm:gap-4 lg:mt-9 lg:justify-start"
            >
              <ProximityMagnetic radius={30}>
                <a
                  href="#projects"
                  data-cursor="View"
                  className="trace-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-[var(--glow)]/20"
                >
                  View My Work <ArrowRight className="h-4 w-4" />
                </a>
              </ProximityMagnetic>
              <ProximityMagnetic radius={30}>
                <a
                  href="#contact"
                  data-cursor="Hire"
                  className="trace-border glass inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold"
                >
                  Get in Touch
                </a>
              </ProximityMagnetic>
            </motion.div>

            {/* Proof points */}
            <motion.dl
              {...rise(1)}
              className="mt-7 grid w-full max-w-md grid-cols-3 divide-x divide-border [@media(max-height:700px)]:mt-5 lg:mt-10"
            >
              {STATS.map((s) => (
                <div key={s.label} className="px-2 text-center first:pl-0 lg:px-5 lg:text-left lg:first:pl-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-foreground sm:text-3xl">{s.value}</dd>
                  <dd className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right — profile frame & skill badges (desktop) */}
          <div className="hidden justify-end overflow-visible px-2 lg:flex">
            <HeroProfileFrame />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
