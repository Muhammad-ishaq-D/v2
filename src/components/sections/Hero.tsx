import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import { ProximityMagnetic } from "@/components/ProximityMagnetic";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroProfileFrame } from "@/components/HeroProfileFrame";

const MARQUEE = ["Frontend Architect", "UI Specialist", "Open to Offers"];

function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
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

  const letters = "Ishaq".split("");

  return (
    <section className="relative flex min-h-screen items-center overflow-x-hidden px-6 py-28 lg:py-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left — kinetic typography & CTAs */}
          <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Live status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass mb-7 flex items-center gap-3 rounded-full py-1.5 pl-3 pr-4"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="status-dot h-2.5 w-2.5 rounded-full"
                  style={{ background: "oklch(0.78 0.18 150)" }}
                />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                Available
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="relative w-40 overflow-hidden text-left no-scrollbar">
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
              <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="text-stroke inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  >
                    Muhammad
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="text-gradient-kinetic inline-flex"
                    style={
                      {
                        "--mx": mxDeg,
                        "--bgx": bgxPct,
                        "--bgy": bgyPct,
                      } as React.CSSProperties
                    }
                  >
                    {letters.map((char, i) => (
                      <span key={i} className="inline-block overflow-hidden">
                        <motion.span
                          className="inline-block"
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{
                            delay: 0.35 + i * 0.05,
                            duration: 0.7,
                            ease: [0.33, 1, 0.68, 1],
                          }}
                        >
                          {char}
                        </motion.span>
                      </span>
                    ))}
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              I craft dynamic, accessible and highly responsive web experiences with clean
              code and creative UI — turning ambitious ideas into polished products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <ProximityMagnetic radius={30}>
                <a
                  href="#projects"
                  data-cursor="View"
                  className="trace-border inline-flex items-center rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-7 py-3 text-sm font-semibold text-background"
                >
                  View My Work
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
          </div>

          {/* Right — profile frame & skill badges */}
          <div className="order-2 flex justify-center overflow-visible px-4 py-6 sm:px-6 lg:justify-end lg:px-2 lg:py-10">
            <HeroProfileFrame />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
