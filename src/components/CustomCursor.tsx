import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Floating custom cursor with spring physics.
 * Reacts to elements marked with [data-cursor] — scales up and shows a label.
 * Only renders on devices with a fine pointer (desktop).
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("hide-native-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor], a, button"
      );
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor") || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", downH);
    window.addEventListener("mouseup", upH);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", downH);
      window.removeEventListener("mouseup", upH);
      document.documentElement.classList.remove("hide-native-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: active ? (label ? 76 : 46) : 14,
        height: active ? (label ? 76 : 46) : 14,
        backgroundColor: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        scale: down ? 0.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-wide text-black">
          {label}
        </span>
      )}
    </motion.div>
  );
}
