import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Layers, Palette, GitBranch } from "lucide-react";
import avatar from "@/assets/avatar.png";

const BADGES = [
  {
    label: "MERN Stack Specialist",
    icon: Layers,
    position: "top-[-0.75rem] left-[-0.5rem] sm:left-[-1.25rem]",
    float: { y: [0, -7, 0], x: [0, 3, 0] },
    duration: 5.2,
    delay: 0,
    glow: "var(--glow)",
  },
  {
    label: "AI Assistant Integration",
    icon: Palette,
    position: "top-[45%] right-[-0.75rem] sm:top-[18%] sm:right-[-1.5rem]",
    float: { y: [0, 6, 0], x: [0, -4, 0] },
    duration: 4.6,
    delay: 0.4,
    glow: "var(--glow-2)",
  },
  {
    label: "Clean Code Architecture",
    icon: GitBranch,
    position: "bottom-[12%] left-[-0.5rem] sm:left-[-1.75rem]",
    float: { y: [0, -5, 0], x: [0, 5, 0] },
    duration: 5.8,
    delay: 0.8,
    glow: "var(--glow)",
  },
] as const;

function SkillBadge({
  label,
  icon: Icon,
  position,
  float,
  duration,
  delay,
  glow,
  reduced,
}: (typeof BADGES)[number] & { reduced: boolean }) {
  return (
    <motion.div
      className={`absolute z-20 max-w-[11.5rem] ${position}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.div
        className="hero-skill-badge flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg"
        style={{ "--badge-glow": glow } as React.CSSProperties}
        animate={reduced ? undefined : { y: [...float.y], x: [...float.x] }}
        transition={
          reduced
            ? undefined
            : {
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
        }
      >
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `color-mix(in oklab, ${glow} 18%, transparent)`,
            boxShadow: `0 0 14px color-mix(in oklab, ${glow} 35%, transparent)`,
          }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: glow }} strokeWidth={2.2} />
        </span>
        <span className="text-[10px] font-semibold leading-tight tracking-wide text-foreground sm:text-[11px]">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

export function HeroProfileFrame() {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const imgScale = useMotionValue(1);
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });
  const springImgScale = useSpring(imgScale, { stiffness: 220, damping: 26 });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (reduced || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -14);
    rotateY.set(px * 14);
  };

  const handlePointerEnter = () => {
    if (!reduced) imgScale.set(1.06);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    imgScale.set(1);
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-none lg:mx-0"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Ambient glow behind frame */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 40% 35%, color-mix(in oklab, var(--glow) 28%, transparent), transparent 65%), radial-gradient(ellipse at 70% 75%, color-mix(in oklab, var(--glow-2) 22%, transparent), transparent 60%)",
        }}
      />

      {/* Bento accent tile */}
      <div
        className="pointer-events-none absolute -bottom-4 -left-3 z-0 h-16 w-16 rounded-2xl border border-white/10 sm:h-20 sm:w-20"
        style={{
          background: "color-mix(in oklab, var(--card) 45%, transparent)",
          backdropFilter: "blur(12px)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-2 -top-3 z-0 h-10 w-24 rounded-xl border border-white/8 sm:h-12 sm:w-28"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--glow) 12%, transparent), color-mix(in oklab, var(--glow-2) 8%, transparent))",
          backdropFilter: "blur(10px)",
        }}
      />

      <motion.div
        className="relative z-10"
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={
          reduced
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div style={{ perspective: 900 }}>
          <motion.div
            ref={frameRef}
            className="hero-profile-frame cursor-pointer"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >
            <div className="hero-profile-frame-inner overflow-hidden rounded-[1.75rem]">
              <motion.img
                src={avatar}
                alt="Muhammad Ishaq"
                width={1024}
                height={1024}
                className="aspect-[4/5] h-full w-full object-cover object-top"
                style={{ scale: springImgScale }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {BADGES.map((badge) => (
        <SkillBadge key={badge.label} {...badge} reduced={reduced} />
      ))}
    </motion.div>
  );
}
