import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Magnetic wrapper that reacts when the cursor enters a proximity radius
 * around the element (not just on direct hover) — the content warps toward
 * the pointer and springs back when the cursor leaves the field.
 */
export function ProximityMagnetic({
  children,
  className,
  radius = 90,
  strength = 0.4,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const field = Math.max(rect.width, rect.height) / 2 + radius;
      if (dist < field) {
        x.set(dx * strength);
        y.set(dy * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [radius, strength, x, y]);

  return (
    <motion.div ref={ref} className={className} style={{ x: sx, y: sy }}>
      {children}
    </motion.div>
  );
}
