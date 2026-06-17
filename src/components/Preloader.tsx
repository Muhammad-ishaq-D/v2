import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAME = "Muhammad Ishaq";

/**
 * Cinematic preloader: staggered letter-by-letter masked reveal of the name,
 * an animated subtitle, then a curtain "slide up" scale-out.
 * Runs only once per browser session (sessionStorage).
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("splash-seen");
    if (seen) {
      onComplete();
      return;
    }
    setShow(true);
    const t = setTimeout(() => {
      sessionStorage.setItem("splash-seen", "1");
      setShow(false);
    }, 2600);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ y: 0 }}
          exit={{ y: "-100%", scale: 0.96, borderBottomLeftRadius: "40%", borderBottomRightRadius: "40%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="overflow-hidden">
            <motion.h1 className="flex font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              {NAME.split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.045, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>

          <div className="mt-3 overflow-hidden">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.4em] text-gradient"
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            >
              MERN Stack Developer
            </motion.p>
          </div>

          <motion.div
            className="mt-10 h-[2px] w-40 origin-left overflow-hidden rounded-full bg-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
