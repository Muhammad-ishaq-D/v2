import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { C as CONTACT, a as PROFILE, E as EXPERIENCE, b as EDUCATION, T as TECH, P as PROJECTS, F as FILTERS, e as TESTIMONIALS, d as PROFICIENCY, S as SKILL_GROUPS, L as LANGUAGES, c as CERTIFICATIONS } from "./router-8YbxIcDQ.mjs";
import { u as useChat } from "../_libs/ai-sdk__react.mjs";
import { D as DefaultChatTransport } from "../_libs/ai.mjs";
import { A as AnimatePresence, m as motion, u as useMotionValue, a as useSpring, b as useTransform, c as useReducedMotion } from "../_libs/framer-motion.mjs";
import { D as Download, X, M as Menu, A as ArrowRight, B as Briefcase, G as GraduationCap, a as MapPin, R as Rocket, S as Sparkles, Z as Zap, E as Earth, b as ArrowUpRight, Q as Quote, W as Wrench, c as Bot, d as Server, C as CodeXml, e as Award, f as Mail, P as Phone, g as Github, L as Linkedin, h as Send, i as LoaderCircle, j as Check, k as MessageCircle, l as Layers, m as GitBranch, n as Mouse, o as ExternalLink } from "../_libs/lucide-react.mjs";
import { o as object, a as string } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/ai-sdk__google.mjs";
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
import "../_libs/throttleit.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const NAME = "Muhammad Ishaq";
function Preloader({ onComplete }) {
  const [show, setShow] = reactExports.useState(true);
  const [skip, setSkip] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("splash-seen");
    if (seen) {
      setSkip(true);
      onComplete();
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("splash-seen", "1");
      setShow(false);
    }, 1800);
    return () => clearTimeout(t);
  }, [onComplete]);
  if (skip) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { onExitComplete: onComplete, children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background",
      initial: { y: 0 },
      exit: { y: "-100%", scale: 0.96, borderBottomLeftRadius: "40%", borderBottomRightRadius: "40%" },
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { className: "flex font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl", children: NAME.split("").map((char, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "inline-block",
            initial: { y: "110%" },
            animate: { y: 0 },
            transition: { delay: 0.15 + i * 0.045, duration: 0.6, ease: [0.33, 1, 0.68, 1] },
            children: char === " " ? " " : char
          }
        ) }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "text-sm font-medium uppercase tracking-[0.4em] text-gradient",
            initial: { y: "120%", opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { delay: 1.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] },
            children: "Full Stack Developer"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "mt-10 h-[2px] w-40 origin-left overflow-hidden rounded-full bg-border",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full w-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]",
                initial: { scaleX: 0 },
                animate: { scaleX: 1 },
                style: { originX: 0 },
                transition: { delay: 1.2, duration: 1.2, ease: "easeInOut" }
              }
            )
          }
        )
      ]
    },
    "preloader"
  ) });
}
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });
  const [enabled, setEnabled] = reactExports.useState(false);
  const [label, setLabel] = reactExports.useState(null);
  const [active, setActive] = reactExports.useState(false);
  const [down, setDown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("hide-native-cursor");
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target?.closest(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference",
      style: { x: springX, y: springY, translateX: "-50%", translateY: "-50%" },
      animate: {
        width: active ? label ? 76 : 46 : 14,
        height: active ? label ? 76 : 46 : 14,
        backgroundColor: active ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        scale: down ? 0.8 : 1
      },
      transition: { type: "spring", stiffness: 400, damping: 30 },
      children: label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wide text-black", children: label })
    }
  );
}
function SmoothScroll() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let frame = 0;
    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
}
function Magnetic({
  children,
  className,
  strength = 0.4
}) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      className,
      onMouseMove: onMove,
      onMouseLeave: reset,
      style: { x: sx, y: sy },
      children
    }
  );
}
const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.3, duration: 0.6 },
      className: `fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-3rem)] max-w-7xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border border-[var(--glow)]/30 shadow-[0_0_20px_rgba(var(--glow),0.15)]" : "glass"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] shadow-[0_0_15px_rgba(var(--glow),0.3)] transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 256 256", fill: "none", stroke: "white", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M60 180V76L128 144L196 76V180" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-[var(--glow)]", children: [
            "Ishaq",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--glow-2)]", children: "." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden gap-1 lg:flex", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: l.label
          },
          l.href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: CONTACT.resume,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-cursor": "Download",
              className: "flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-4 py-1.5 text-sm font-semibold text-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 text-black" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Resume" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setMenuOpen((o) => !o),
              "aria-label": menuOpen ? "Close menu" : "Open menu",
              "aria-expanded": menuOpen,
              className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden",
              children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.nav,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.2 },
            className: "absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col rounded-3xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden",
            children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setMenuOpen(false),
                className: "rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/40 hover:text-foreground",
                children: l.label
              },
              l.href
            ))
          }
        ) })
      ]
    }
  );
}
function ProximityMagnetic({
  children,
  className,
  radius = 90,
  strength = 0.4
}) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  reactExports.useEffect(() => {
    const onMove = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ref, className, style: { x: sx, y: sy }, children });
}
function HeroBackground() {
  const canvasRef = reactExports.useRef(null);
  const blobX = useMotionValue(0);
  const blobY = useMotionValue(0);
  const sx = useSpring(blobX, { stiffness: 40, damping: 20, mass: 1.2 });
  const sy = useSpring(blobY, { stiffness: 40, damping: 20, mass: 1.2 });
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let nodes = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor(w * h / 16e3));
      nodes = Array.from({ length: count }, () => {
        const depth = 0.4 + Math.random() * 0.8;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: depth * 1.6,
          depth
        };
      });
    };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      blobX.set(e.clientX);
      blobY.set(e.clientY);
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          n.x += dx / (dist || 1) * force * 2.4 * n.depth;
          n.y += dy / (dist || 1) * force * 2.4 * n.depth;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.18 * n.depth})`;
        ctx.fill();
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    blobX.set(window.innerWidth / 2);
    blobY.set(window.innerHeight / 2);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    if (!reduce) raf = requestAnimationFrame(draw);
    else draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [blobX, blobY]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute h-[42rem] w-[42rem] rounded-full blur-[120px]",
        style: {
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle at center, color-mix(in oklab, var(--glow) 22%, transparent), transparent 65%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0 h-full w-full" })
  ] });
}
const avatar = "/assets/avatar-eQuE8cVe.png";
const BADGES = [
  {
    label: "MERN + Next.js",
    icon: Layers,
    position: "top-[-0.75rem] left-[-0.5rem] sm:left-[-1.25rem]",
    float: { y: [0, -7, 0], x: [0, 3, 0] },
    duration: 5.2,
    delay: 0,
    glow: "var(--glow)"
  },
  {
    label: "AI Chat & Voice Assistants",
    icon: Bot,
    position: "top-[45%] right-[-0.75rem] sm:top-[18%] sm:right-[-1.5rem]",
    float: { y: [0, 6, 0], x: [0, -4, 0] },
    duration: 4.6,
    delay: 0.4,
    glow: "var(--glow-2)"
  },
  {
    label: "Clean, Scalable Code",
    icon: GitBranch,
    position: "bottom-[12%] left-[-0.5rem] sm:left-[-1.75rem]",
    float: { y: [0, -5, 0], x: [0, 5, 0] },
    duration: 5.8,
    delay: 0.8,
    glow: "var(--glow)"
  }
];
function SkillBadge({
  label,
  icon: Icon,
  position,
  float,
  duration,
  delay,
  glow,
  reduced
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `absolute z-20 max-w-[11.5rem] ${position}`,
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: 1 + delay, duration: 0.5, ease: [0.33, 1, 0.68, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          className: "hero-skill-badge flex items-center gap-2 rounded-2xl px-3 py-2 shadow-lg",
          style: { "--badge-glow": glow },
          animate: reduced ? void 0 : { y: [...float.y], x: [...float.x] },
          transition: reduced ? void 0 : {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-xl",
                style: {
                  background: `color-mix(in oklab, ${glow} 18%, transparent)`,
                  boxShadow: `0 0 14px color-mix(in oklab, ${glow} 35%, transparent)`
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", style: { color: glow }, strokeWidth: 2.2 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold leading-tight tracking-wide text-foreground sm:text-[11px]", children: label })
          ]
        }
      )
    }
  );
}
function HeroProfileFrame() {
  const frameRef = reactExports.useRef(null);
  const reduced = useReducedMotion() ?? false;
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const imgScale = useMotionValue(1);
  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });
  const springImgScale = useSpring(imgScale, { stiffness: 220, damping: 26 });
  const handlePointerMove = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "relative w-[min(30rem,calc((100svh-11rem)*0.8))]",
      initial: { opacity: 0, y: 32 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.55, duration: 0.8, ease: [0.33, 1, 0.68, 1] },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70 blur-3xl",
            style: {
              background: "radial-gradient(ellipse at 40% 35%, color-mix(in oklab, var(--glow) 28%, transparent), transparent 65%), radial-gradient(ellipse at 70% 75%, color-mix(in oklab, var(--glow-2) 22%, transparent), transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -bottom-4 -left-3 z-0 h-16 w-16 rounded-2xl border border-white/10 sm:h-20 sm:w-20",
            style: {
              background: "color-mix(in oklab, var(--card) 45%, transparent)",
              backdropFilter: "blur(12px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-2 -top-3 z-0 h-10 w-24 rounded-xl border border-white/8 sm:h-12 sm:w-28",
            style: {
              background: "linear-gradient(135deg, color-mix(in oklab, var(--glow) 12%, transparent), color-mix(in oklab, var(--glow-2) 8%, transparent))",
              backdropFilter: "blur(10px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "relative z-10",
            animate: reduced ? void 0 : { y: [0, -10, 0] },
            transition: reduced ? void 0 : { duration: 6, repeat: Infinity, ease: "easeInOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { perspective: 900 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                ref: frameRef,
                className: "hero-profile-frame cursor-pointer",
                style: {
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformStyle: "preserve-3d"
                },
                onPointerMove: handlePointerMove,
                onPointerEnter: handlePointerEnter,
                onPointerLeave: handlePointerLeave,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-profile-frame-inner overflow-hidden rounded-[1.75rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.img,
                  {
                    src: avatar,
                    alt: "Muhammad Ishaq",
                    width: 1024,
                    height: 1024,
                    className: "aspect-[4/5] h-full w-full object-cover object-top",
                    style: { scale: springImgScale }
                  }
                ) })
              }
            ) })
          }
        ),
        BADGES.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkillBadge, { ...badge, reduced }, badge.label))
      ]
    }
  );
}
const MARQUEE = ["Full Stack Developer", "AI Product Engineer", "React · Next.js · Node"];
const STATS = [
  { value: String(PROJECTS.filter((p) => p.links?.some((l) => l.label === "Live Website")).length), label: "Live products" },
  { value: String(PROJECTS.filter((p) => p.tags.includes("AI")).length), label: "AI products" },
  { value: "2+", label: "Years building" }
];
const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
});
function ScrollIndicator() {
  const [hidden, setHidden] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex",
      animate: { opacity: hidden ? 0 : 1, y: hidden ? 12 : 0 },
      transition: { duration: 0.4 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mouse, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "h-2 w-1 rounded-full bg-current",
            animate: { y: [0, 6, 0], opacity: [1, 0.3, 1] },
            transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        )
      ]
    }
  );
}
function MobileAvatar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] },
      className: "relative mb-5 lg:hidden [@media(max-height:700px)]:mb-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-4 rounded-full opacity-80 blur-2xl",
            style: {
              background: "radial-gradient(circle, color-mix(in oklab, var(--glow) 35%, transparent), color-mix(in oklab, var(--glow-2) 20%, transparent) 60%, transparent 75%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] p-[3px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: avatar,
            alt: "Muhammad Ishaq",
            width: 1024,
            height: 1024,
            className: "h-24 w-24 rounded-full border-4 border-background object-cover object-top [@media(max-height:700px)]:h-20 [@media(max-height:700px)]:w-20 sm:h-28 sm:w-28"
          }
        ) })
      ]
    }
  );
}
function Hero() {
  const headingRef = reactExports.useRef(null);
  const mx = useMotionValue(0);
  const bgx = useMotionValue(50);
  const bgy = useMotionValue(50);
  reactExports.useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const onMove = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[100svh] items-center overflow-x-hidden px-6 pb-12 pt-24 [@media(max-height:700px)]:pt-20 sm:pt-28 lg:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto w-full max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10 xl:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center lg:items-start lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MobileAvatar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...rise(0.1),
            className: "glass mb-5 flex items-center gap-3 rounded-full py-1.5 pl-3 pr-4 [@media(max-height:700px)]:mb-4 lg:mb-7",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "status-dot h-2.5 w-2.5 shrink-0 rounded-full",
                  style: { background: "oklch(0.78 0.18 150)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground", children: "Available" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px shrink-0 bg-border" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative w-40 overflow-hidden text-left no-scrollbar sm:w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "marquee text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground", children: [...MARQUEE, ...MARQUEE].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3", children: [
                t,
                " •"
              ] }, i)) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: headingRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[3.25rem] font-bold leading-[1] tracking-tight [@media(max-height:700px)]:text-[2.75rem] sm:text-7xl xl:text-[5.5rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Muhammad Ishaq, Full Stack Developer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "block overflow-hidden pb-[0.1em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "text-stroke inline-block",
              initial: { y: "110%" },
              animate: { y: 0 },
              transition: { delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] },
              children: "Muhammad"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "block overflow-hidden pb-[0.12em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "inline-block",
              initial: { y: "110%" },
              animate: { y: 0 },
              transition: { delay: 0.35, duration: 0.8, ease: [0.33, 1, 0.68, 1] },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "text-gradient-kinetic inline-block",
                  style: {
                    "--mx": mxDeg,
                    "--bgx": bgxPct,
                    "--bgy": bgyPct
                  },
                  children: "Ishaq"
                }
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.p,
          {
            ...rise(0.7),
            className: "mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "I build fast, polished web products: AI assistants, SaaS dashboards and booking flows." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "I build fast, polished web products for startups and growing businesses: AI chat and voice assistants, SaaS dashboards, and booking and payment flows, shipped to production with Next.js, React and Node." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...rise(0.85),
            className: "mt-6 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-7 sm:w-auto sm:gap-4 lg:mt-9 lg:justify-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProximityMagnetic, { radius: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#projects",
                  "data-cursor": "View",
                  className: "trace-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-[var(--glow)]/20",
                  children: [
                    "View My Work ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProximityMagnetic, { radius: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contact",
                  "data-cursor": "Hire",
                  className: "trace-border glass inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold",
                  children: "Get in Touch"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.dl,
          {
            ...rise(1),
            className: "mt-7 grid w-full max-w-md grid-cols-3 divide-x divide-border [@media(max-height:700px)]:mt-5 lg:mt-10",
            children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 text-center first:pl-0 lg:px-5 lg:text-left lg:first:pl-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "sr-only", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-2xl font-bold text-foreground sm:text-3xl", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs", children: s.label })
            ] }, s.label))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden justify-end overflow-visible px-2 lg:flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroProfileFrame, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollIndicator, {})
  ] });
}
const LIVE_PRODUCTS = PROJECTS.filter((p) => p.links?.some((l) => l.label === "Live Website")).length;
const AI_PRODUCTS = PROJECTS.filter((p) => p.tags.includes("AI")).length;
const fade$2 = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" }
};
function BentoAbout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$2, transition: { duration: 0.6 }, className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "The story so far" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ...fade$2,
          transition: { duration: 0.6 },
          className: "glass glow-border group relative col-span-1 flex flex-col overflow-hidden rounded-3xl p-7 sm:col-span-2 lg:row-span-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold sm:text-3xl", children: "Full stack, with a focus on AI products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 mt-4 leading-relaxed text-muted-foreground", children: PROFILE.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-auto space-y-2.5 border-t border-border pt-5 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 shrink-0 text-[var(--glow)]" }),
                EXPERIENCE[0].role,
                " at ",
                EXPERIENCE[0].company
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 shrink-0 text-[var(--glow)]" }),
                EDUCATION[0].degree,
                ", CGPA 3.72"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0 text-[var(--glow)]" }),
                CONTACT.location,
                ", working remotely worldwide"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$2, transition: { duration: 0.6, delay: 0.05 }, className: "glass glow-border rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "mb-4 h-7 w-7 text-[var(--glow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold", children: LIVE_PRODUCTS }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Live products shipped" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$2, transition: { duration: 0.6, delay: 0.1 }, className: "glass glow-border rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mb-4 h-7 w-7 text-[var(--glow-2)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-bold", children: AI_PRODUCTS }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI products in production" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$2, transition: { duration: 0.6, delay: 0.15 }, className: "glass glow-border rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mb-4 h-7 w-7 text-[var(--glow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Performance first" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Fast loads, smooth motion, SEO built in." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$2, transition: { duration: 0.6, delay: 0.2 }, className: "glass glow-border rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { className: "mb-4 h-7 w-7 text-[var(--glow-2)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Remote-proven" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Shipping for teams in Thailand, the UK and Pakistan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ...fade$2,
          transition: { duration: 0.6, delay: 0.1 },
          className: "glass glow-border col-span-1 rounded-3xl p-7 sm:col-span-2 lg:col-span-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5 font-display text-xl font-semibold", children: "Tech Stack" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5", children: TECH.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.03 },
                className: "rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-sm transition-colors hover:border-[var(--glow)] hover:text-foreground",
                children: t
              },
              t
            )) })
          ]
        }
      )
    ] })
  ] });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "experience", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "Work History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "Professional Experience" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative space-y-6 border-l border-border pl-6 sm:pl-10", children: EXPERIENCE.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 24 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "glass glow-border relative rounded-3xl p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] top-8 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] text-background sm:-left-[54px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-widest text-[var(--glow)]", children: e.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-semibold", children: e.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            e.company,
            " · ",
            e.place
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: e.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--glow-2)]" }),
            p
          ] }, p)) })
        ]
      },
      e.role + i
    )) })
  ] });
}
const fade$1 = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" }
};
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "education", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$1, transition: { duration: 0.6 }, className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "Academic Background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "Education & Certifications" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: EDUCATION.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ...fade$1,
          transition: { duration: 0.5, delay: i * 0.05 },
          className: "glass glow-border rounded-3xl p-7",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "mb-4 h-7 w-7 text-[var(--glow)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: e.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: e.school }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-widest text-[var(--glow)]", children: e.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: e.description }),
            e.tags && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: e.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs", children: t }, t)) })
          ]
        },
        e.degree
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade$1, transition: { duration: 0.5, delay: 0.1 }, className: "glass glow-border rounded-3xl p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "mb-4 h-7 w-7 text-[var(--glow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5 font-display text-xl font-semibold", children: "Certifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: CERTIFICATIONS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between rounded-2xl border border-border bg-secondary/30 px-4 py-3.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: c.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.issuer })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-[var(--glow)]", children: c.year })
            ]
          },
          c.title
        )) })
      ] })
    ] })
  ] });
}
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" }
};
const GROUP_ICONS = {
  frontend: CodeXml,
  backend: Server,
  ai: Bot,
  tools: Wrench
};
const LEVEL_DOTS = { Expert: 3, Advanced: 2, Proficient: 1 };
function LevelDots({ level }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-1", "aria-hidden": true, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `h-1.5 w-4 rounded-full ${i < LEVEL_DOTS[level] ? "bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]" : "bg-secondary/60"}`
    },
    i
  )) });
}
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade, transition: { duration: 0.6 }, className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "My Expertise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "Skills & Technologies" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade, transition: { duration: 0.5 }, className: "glass glow-border space-y-5 rounded-3xl p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: "Core Strengths" }),
        PROFICIENCY.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center justify-between gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: p.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LevelDots, { level: p.level }),
              p.level
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.detail })
        ] }, p.label))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:col-span-2", children: SKILL_GROUPS.map((g, i) => {
        const Icon = GROUP_ICONS[g.icon];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...fade,
            transition: { duration: 0.5, delay: i * 0.05 },
            className: "glass glow-border rounded-3xl p-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-[var(--glow)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: g.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: g.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs transition-colors hover:border-[var(--glow)]",
                  children: s
                },
                s
              )) })
            ]
          },
          g.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fade, transition: { duration: 0.5, delay: 0.1 }, className: "glass glow-border mt-5 rounded-3xl p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-5 font-display text-xl font-semibold", children: "Languages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: LANGUAGES.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-secondary/30 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: l.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: l.level })
      ] }, l.label)) })
    ] })
  ] });
}
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const [expanded, setExpanded] = reactExports.useState(false);
  const visible = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter));
  const displayed = expanded ? visible : visible.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "Selected projects" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Production products I've built for clients and employers, from AI health assistants to SaaS and booking platforms." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex flex-wrap gap-2.5", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setFilter(f),
        className: `relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${filter === f ? "text-background" : "text-muted-foreground hover:text-foreground"}`,
        children: [
          filter === f && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              layoutId: "filter-pill",
              className: "absolute inset-0 rounded-full bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)]",
              transition: { type: "spring", stiffness: 380, damping: 30 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: f })
        ]
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "grid grid-cols-1 gap-5 md:grid-cols-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: displayed.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        layout: true,
        "data-cursor": "View",
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.4 },
        onClick: () => p.links?.[0] && window.open(p.links[0].url, "_blank"),
        className: `glass glow-border group relative overflow-hidden rounded-3xl ${p.links?.[0] ? "cursor-pointer" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1200/630] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.cover ?? (p.links?.[0]?.url ? `/api/og?url=${encodeURIComponent(p.links[0].url)}` : p.image),
                alt: p.title,
                loading: "lazy",
                onError: (e) => {
                  const target = e.target;
                  if (!target.src.endsWith(p.image)) {
                    target.src = p.image;
                  }
                },
                className: "h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--glow)]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-medium uppercase tracking-widest text-[var(--glow)]", children: p.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.description }),
            p.results && /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-5 grid grid-cols-3 gap-2", children: p.results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col-reverse rounded-2xl border border-border bg-secondary/30 px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: r.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-lg font-bold text-foreground", children: r.value })
            ] }, r.label)) }),
            p.links && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-3", children: p.links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: link.url,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: (e) => e.stopPropagation(),
                className: "relative z-20 inline-flex items-center gap-1 text-xs font-semibold text-[var(--glow)] transition-colors hover:text-[var(--glow-2)]",
                children: [
                  link.label,
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
                ]
              },
              link.url
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
          ] })
        ]
      },
      p.title
    )) }) }),
    visible.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setExpanded(!expanded),
        className: "group relative inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-[var(--glow)] hover:text-[var(--glow)] shadow-sm hover:shadow-[0_0_15px_rgba(var(--glow),0.15)]",
        children: [
          expanded ? "Show Less" : "View More",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.svg,
            {
              animate: { rotate: expanded ? 180 : 0 },
              transition: { duration: 0.3 },
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "mt-0.5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" })
            }
          )
        ]
      }
    ) })
  ] });
}
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaolzgb";
const schema = object({
  name: string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: string().trim().email("Enter a valid email address").max(160),
  message: string().trim().min(10, "Message must be at least 10 characters").max(1e3)
});
function Contact() {
  const [values, setValues] = reactExports.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = reactExports.useState({});
  const [shake, setShake] = reactExports.useState({});
  const [status, setStatus] = reactExports.useState("idle");
  const update = (field, value) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: void 0 }));
  };
  const submit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors = {};
      const shakeErrors = {};
      for (const issue of result.error.issues) {
        const f = issue.path[0];
        fieldErrors[f] = issue.message;
        shakeErrors[f] = true;
      }
      setErrors(fieldErrors);
      setShake(shakeErrors);
      setTimeout(() => setShake({}), 500);
      return;
    }
    setStatus("sending");
    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(result.data)
        });
        if (!res.ok) throw new Error("Failed to send");
      }
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4e3);
    } catch {
      setStatus("idle");
    }
  };
  const fields = [
    { name: "name", label: "Your name" },
    { name: "email", label: "Email address", type: "email" },
    { name: "message", label: "Tell me about your project", textarea: true }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mx-auto max-w-3xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mb-10 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "Let's build something" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Have a product idea, a feature your team needs, or a full-time role? Tell me about it. I usually reply within 24 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${CONTACT.email}`, className: "inline-flex items-center gap-2 transition-colors hover:text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              " ",
              CONTACT.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
                className: "inline-flex items-center gap-2 transition-colors hover:text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                  " ",
                  CONTACT.phone
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
              " ",
              CONTACT.location
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: CONTACT.github,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "GitHub",
                className: "glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-[var(--glow)]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: CONTACT.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "LinkedIn",
                className: "glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-[var(--glow)]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "glass glow-border space-y-5 rounded-3xl p-7", children: [
      fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          animate: shake[f.name] ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 },
          transition: { duration: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-medium text-muted-foreground", children: f.label }),
            f.textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: values[f.name],
                onChange: (e) => update(f.name, e.target.value),
                rows: 4,
                className: `w-full resize-none rounded-xl border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--glow)] ${errors[f.name] ? "border-destructive" : "border-border"}`
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: f.type || "text",
                value: values[f.name],
                onChange: (e) => update(f.name, e.target.value),
                className: `w-full rounded-xl border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--glow)] ${errors[f.name] ? "border-destructive" : "border-border"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors[f.name] && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                className: "mt-1.5 text-xs text-destructive",
                children: errors[f.name]
              }
            ) })
          ]
        },
        f.name
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: status !== "idle",
          className: "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-6 py-3.5 text-sm font-semibold text-background transition-opacity disabled:opacity-90",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", initial: false, children: [
            status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { className: "flex items-center gap-2", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: [
              "Send message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            ] }, "idle"),
            status === "sending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { className: "flex items-center gap-2", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: [
              "Sending ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" })
            ] }, "sending"),
            status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { className: "flex items-center gap-2", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0 }, children: [
              "Message sent!",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
            ] }, "success")
          ] })
        }
      ) })
    ] })
  ] });
}
function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "mx-auto max-w-6xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "mb-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-gradient", children: "Testimonials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl", children: "What people say" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        className: "glass glow-border flex flex-col rounded-3xl p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "mb-4 h-7 w-7 text-[var(--glow)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "flex-1 leading-relaxed text-foreground", children: [
            "“",
            t.quote,
            "”"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              t.role,
              ", ",
              t.company
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] });
}
const SUGGESTIONS = [
  "What AI products have you built?",
  "What's your tech stack?",
  "Are you available for work?",
  "Can I see your resume?"
];
function AIChat() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [launcherVisible, setLauncherVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const update = () => setLauncherVisible(window.innerWidth >= 640 || window.scrollY > 240);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const scrollRef = reactExports.useRef(null);
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" })
  });
  const loading = status === "submitted" || status === "streaming";
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);
  const submit = (text) => {
    if (!text.trim() || loading) return;
    sendMessage({ text: text.trim() });
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 transition-all duration-300 ${launcherVisible || open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            "data-cursor": "Chat",
            onClick: () => setOpen((o) => !o),
            className: "group relative flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] p-1.5 sm:py-2 sm:pl-2 sm:pr-4 text-background shadow-lg shadow-[var(--glow)]/30",
            whileHover: { scale: 1.04 },
            whileTap: { scale: 0.96 },
            "aria-label": open ? "Close chat" : "Chat with Ishaq",
            children: [
              !open && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "pointer-events-none absolute inset-0 rounded-full bg-[var(--glow)]",
                  animate: { opacity: [0.35, 0], scale: [1, 1.25] },
                  transition: { duration: 2.4, repeat: 3, repeatDelay: 1.5, ease: "easeOut" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  className: "flex h-full w-full items-center justify-center bg-background/20",
                  initial: { rotate: -90, opacity: 0 },
                  animate: { rotate: 0, opacity: 1 },
                  exit: { rotate: 90, opacity: 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                },
                "x"
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.img,
                {
                  src: avatar,
                  alt: "Muhammad Ishaq",
                  className: "h-full w-full object-cover",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 }
                },
                "avatar"
              ) }) }),
              !open && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative hidden items-center gap-1.5 pr-1 text-sm font-semibold sm:flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                "Chat with me"
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.96 },
        transition: { type: "spring", stiffness: 260, damping: 26 },
        className: "fixed bottom-20 right-6 z-[60] flex h-[32rem] max-h-[70vh] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-9 w-9 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: "Ishaq", className: "h-full w-full rounded-full object-cover ring-2 ring-[var(--glow)]/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-emerald-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Ask Ishaq" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-emerald-400", children: "AI assistant · answers about my work" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: scrollRef,
              className: "chat-scroll flex-1 space-y-3 overflow-y-auto overscroll-contain p-4",
              children: [
                messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Hi, I'm Ishaq's AI assistant. Ask me about my projects, experience or availability. For anything else, email me directly." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => submit(s),
                      className: "rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[var(--glow)] hover:text-foreground",
                      children: s
                    },
                    s
                  )) })
                ] }),
                messages.map((m) => {
                  const text = m.parts.map((p) => p.type === "text" ? p.text : "").join("");
                  const renderMessageText = (content) => {
                    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                    const parts = [];
                    let lastIndex = 0;
                    let match;
                    while ((match = linkRegex.exec(content)) !== null) {
                      if (match.index > lastIndex) {
                        parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content.slice(lastIndex, match.index) }, `text-${lastIndex}`));
                      }
                      const label = match[1];
                      const url = match[2];
                      parts.push(
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--glow)]/10 to-[var(--glow-2)]/10 border border-[var(--glow)]/30 px-3 py-1 text-xs font-semibold text-[var(--glow)] shadow-sm transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[var(--glow)] hover:to-[var(--glow-2)] hover:text-background hover:shadow-[0_0_15px_rgba(var(--glow),0.5)] mx-1 my-1",
                            children: [
                              label,
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                            ]
                          },
                          `link-${match.index}`
                        )
                      );
                      lastIndex = linkRegex.lastIndex;
                    }
                    if (lastIndex < content.length) {
                      parts.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: content.slice(lastIndex) }, `text-${lastIndex}`));
                    }
                    return parts;
                  };
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: m.role === "user" ? "flex justify-end" : "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: m.role === "user" ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground" : "max-w-[85%] text-sm leading-relaxed text-foreground whitespace-pre-wrap",
                      children: renderMessageText(text)
                    }
                  ) }, m.id);
                }),
                loading && messages[messages.length - 1]?.role !== "assistant" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 py-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    className: "h-2 w-2 rounded-full bg-muted-foreground",
                    animate: { opacity: [0.3, 1, 0.3] },
                    transition: { duration: 1, repeat: Infinity, delay: i * 0.2 }
                  },
                  i
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                submit(input);
              },
              className: "flex items-center gap-2 border-t border-border p-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Type a message…",
                    className: "flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: loading || !input.trim(),
                    className: "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background transition-opacity disabled:opacity-40",
                    "aria-label": "Send",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Index() {
  const [ready, setReady] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, { onComplete: () => setReady(true) }),
    ready && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}, ready ? "ready" : "initial"),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BentoAbout, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border py-8 text-center text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex justify-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CONTACT.github, target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CONTACT.linkedin, target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-foreground", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${CONTACT.email}`, className: "transition-colors hover:text-foreground", children: "Email" })
      ] }),
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Muhammad Ishaq · Designed & built with React, TypeScript and Tailwind CSS"
    ] }),
    ready && /* @__PURE__ */ jsxRuntimeExports.jsx(AIChat, {})
  ] });
}
export {
  Index as component
};
