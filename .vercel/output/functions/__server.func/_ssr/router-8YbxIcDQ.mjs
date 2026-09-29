import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createGoogleGenerativeAI } from "../_libs/ai-sdk__google.mjs";
import { s as streamText, c as convertToModelMessages } from "../_libs/ai.mjs";
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
import "../_libs/ai-sdk__provider-utils.mjs";
import "../_libs/ai-sdk__provider.mjs";
import "../_libs/eventsource-parser.mjs";
import "../_libs/zod.mjs";
import "../_libs/ai-sdk__gateway.mjs";
import "../_libs/@vercel/oidc.mjs";
import "path";
import "fs";
import "os";
import "../_libs/opentelemetry__api.mjs";
const appCss = "/assets/styles-DN6Dhruc.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Muhammad Ishaq — Full Stack Developer" },
      {
        name: "description",
        content: "Portfolio of Muhammad Ishaq, a Full Stack Developer building AI-powered web products with React, Next.js and Node.js."
      },
      { name: "author", content: "Muhammad Ishaq" },
      { property: "og:title", content: "Muhammad Ishaq — Full Stack Developer" },
      {
        property: "og:description",
        content: "Full Stack Developer building AI-powered web products with React, Next.js and Node.js."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$3 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter = () => import("./index-AWaQwjig.mjs");
const SITE_URL = "https://m-ishaq-portfolio-v3.vercel.app";
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Muhammad Ishaq — Full Stack Developer"
    }, {
      name: "description",
      content: "Muhammad Ishaq is a Full Stack Developer in Islamabad who builds AI-powered web products (chat and voice assistants, SaaS dashboards, booking platforms) with React, Next.js, TypeScript and Node.js."
    }, {
      property: "og:title",
      content: "Muhammad Ishaq — Full Stack Developer"
    }, {
      property: "og:description",
      content: "Full Stack Developer building AI-powered web products for healthcare, insurance and retail. See live projects, experience and contact details."
    }, {
      property: "og:image",
      content: `${SITE_URL}/og-image.png`
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: `${SITE_URL}/og-image.png`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const Route$1 = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url).searchParams.get("url");
        if (!url) return new Response("Missing url", { status: 400 });
        try {
          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
          });
          const html = await res.text();
          const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);
          if (ogMatch && ogMatch[1]) {
            let imgUrl = ogMatch[1].replace(/&amp;/g, "&");
            if (imgUrl.startsWith("/")) {
              const u = new URL(url);
              imgUrl = `${u.protocol}//${u.host}${imgUrl}`;
            }
            return Response.redirect(imgUrl, 302);
          }
          return Response.redirect(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`, 302);
        } catch (e) {
          return Response.redirect(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`, 302);
        }
      }
    }
  }
});
const PROJECTS = [
  {
    title: "Expat Medicare",
    role: "Built at INSTLY Technologies",
    description: "International health insurance comparison platform for expats, in English, French and Spanish. It compares 1,000+ plans from 30+ insurers and gives personalised quotes in real time. I built Mira, an AI adviser that streams answers from the Claude API, and the analytics dashboard the team uses to track live traffic and ad performance.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "AI", "Full Stack"],
    results: [
      { value: "1,000+", label: "Plans compared" },
      { value: "30+", label: "Insurers" },
      { value: "3", label: "Languages" }
    ],
    links: [{ label: "Live Website", url: "https://expatmedicare.com/" }]
  },
  {
    title: "Cira — AI Healthcare Assistant",
    role: "Built at INSTLY Technologies",
    description: "AI health platform that connects patients with real doctors for consultations, prescription refills and specialist referrals. I built the streaming Claude chat, the ElevenLabs voice assistant and camera-based vital-sign scanning with Shen.AI, plus an SEO-optimised marketing site in 5 languages.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "AI", "Full Stack"],
    results: [
      { value: "3", label: "AI integrations" },
      { value: "5", label: "Languages" }
    ],
    links: [{ label: "Live Website", url: "https://askainurse.com/" }]
  },
  {
    title: "Stellar OS",
    role: "Built at INSTLY Technologies",
    description: "Operations platform that insurers, brokers and internal teams use to manage 1,000+ plans, pricing zones, group quotes, renewals and leads. I built the data-heavy dashboard screens and the marketing experience, including interactive 3D Spline scenes and Framer Motion transitions.",
    image: "/projects/country.png",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Full Stack"],
    results: [{ value: "1,000+", label: "Plans managed" }],
    links: [{ label: "Live Website", url: "https://stellaros.ai/" }]
  },
  {
    title: "Courses4Me",
    role: "Full Stack Developer",
    description: "UK booking platform for SIA security licence courses across multiple locations. I built both the customer site and the admin side: a multi-step Stripe checkout, JWT and OAuth login, a careers board, a personal booking dashboard, and an admin panel with analytics and a rich-text editor.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Node.js", "MySQL", "Full Stack"],
    links: [{ label: "Live Website", url: "https://courses4me.co.uk/" }]
  },
  {
    title: "Karyana Shop",
    role: "Full Stack Developer · SaaS Product",
    description: "Subscription-based POS and inventory system for Pakistani grocery stores. One account can run several branches with separate staff roles. It supports barcode scanning, offline sales, udhaar (credit) tracking, profit and loss reports and PDF receipts, with English and Urdu interfaces and light and dark themes.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Node.js", "MySQL", "Full Stack"],
    links: [{ label: "Live Website", url: "https://karyana.shop/" }]
  },
  {
    title: "Very Patient",
    role: "Frontend Developer",
    description: "Rebuilt the company website in Next.js, turning the brand's design into a fast, fully responsive site that follows its visual identity closely.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend"],
    links: [{ label: "Live Website", url: "https://verypatient.com/" }]
  },
  {
    title: "Appaura Analytics Dashboard",
    role: "Built at Appaura",
    cover: "/projects/appaura-analytics.svg",
    description: "Financial analytics dashboard with live balance tracking, transaction history and interactive charts. It runs on Springboot REST APIs and MongoDB.",
    image: "/projects/country.png",
    tags: ["React.js", "Supabase", "Tailwind CSS", "MongoDB"],
    links: [{ label: "Appaura Products", url: "https://appaura.net/products/" }]
  },
  {
    title: "Web-Based Diabetes Prediction",
    role: "Academic Project",
    description: "Full-stack web app that predicts diabetes risk using several machine-learning models built in Python, with a Node.js and MongoDB backend, secure login and a clean Tailwind interface.",
    image: "/projects/diabetes-prediction.svg",
    tags: ["React.js", "Python", "Node.js", "MongoDB"]
  },
  {
    title: "Crown Clothing E-Commerce",
    role: "Learning Project · Zero To Mastery",
    description: "E-commerce store with a product catalogue, cart and checkout. Built with Redux for state management, Firebase for login and Firestore for real-time data.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Redux", "Firebase"],
    links: [{ label: "Project Details", url: "https://zerotomastery.io/courses/learn-react/#projects" }]
  },
  {
    title: "Fanbase UI Recreation",
    role: "Learning Project",
    description: "Close, responsive recreation of the Fanbase social app's interface, built to practise component design, profile and post screens, and live-updating feeds.",
    image: "/projects/fanbase.png",
    tags: ["React.js", "Tailwind CSS"],
    links: [{ label: "Live Website", url: "https://www.fanbase.app/" }]
  }
];
const FILTERS = ["All", "AI", "Next.js", "React.js", "Full Stack", "TypeScript"];
const TECH = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "Supabase",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Claude API",
  "ElevenLabs",
  "MCP",
  "Stripe",
  "Git & GitHub",
  "Postman",
  "Figma",
  "WordPress"
];
const CONTACT = {
  phone: "+92 348 9363432",
  email: "muhammadishaqchd622@gmail.com",
  location: "Islamabad, Pakistan",
  github: "https://github.com/Muhammad-ishaq-D",
  linkedin: "https://www.linkedin.com/in/muhammad-ishaq-407a65319/",
  resume: "https://drive.google.com/file/d/1LBspAf-UNPJON5VF1r8oHtDnSxnf5_6_/view?usp=sharing"
};
const PROFILE = {
  name: "Muhammad Ishaq",
  title: "Full Stack Developer",
  summary: "I build AI-powered web products for healthcare, insurance and retail. My work covers streaming AI chat and voice assistants, booking and payment flows, and the dashboards teams use every day. I care most about fast, polished interfaces and code that other developers can easily work on."
};
const EXPERIENCE = [
  {
    period: "Jul 2025 — Present",
    role: "Frontend Developer",
    company: "INSTLY Technologies",
    place: "Bangkok, Thailand · Remote, Full-Time",
    points: [
      "Build AI products for healthcare and insurance clients, including Cira, Expat Medicare and Stellar OS.",
      "Built Claude-powered chat assistants that stream answers in real time, and an ElevenLabs voice assistant for patient conversations.",
      "Turn complex designs into responsive landing pages and data-heavy dashboards, working closely with designers and backend engineers.",
      "Received INSTLY's Certificate of Excellence (February 2026)."
    ]
  },
  {
    period: "Jan 2026 — Present",
    role: "Full Stack Developer (MERN)",
    company: "CODEHAVEN Solutions",
    place: "Islamabad, Pakistan · Onsite, Part-Time",
    points: [
      "Build client web applications from start to finish with MongoDB, Express, React, Node.js and MySQL.",
      "Design and connect REST APIs, and turn UI/UX designs into responsive, accessible interfaces.",
      "Test, debug and tune applications for speed and security, following team code-review and Git workflows."
    ]
  },
  {
    period: "Apr 2025 — Jul 2025",
    role: "Frontend Developer Intern",
    company: "Appaura",
    place: "Lahore, Pakistan",
    points: [
      "Built the Appaura analytics dashboard in React, connected to Supabase REST APIs and MongoDB.",
      "Built CRUD features across the frontend and backend together with the design and backend teams.",
      "Improved rendering speed and component structure with guidance from senior engineers."
    ]
  },
  {
    period: "Nov 2023 — Mar 2025",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    place: "Remote",
    points: [
      "Built and shipped a range of MERN-stack projects, with a focus on reusable components, state management and responsive design.",
      "Built my first AI-integrated features, which led to my current work on AI products."
    ]
  }
];
const EDUCATION = [
  {
    degree: "BS Software Engineering",
    school: "Islamia College University, Peshawar",
    date: "Sep 2020 — Jul 2024",
    description: "Graduated with a CGPA of 3.72/4.00. The degree focused on software engineering principles, databases and web development.",
    tags: ["CGPA 3.72 / 4.00", "Software Engineering", "Web Development", "Databases"]
  }
];
const CERTIFICATIONS = [
  { title: "Complete Web Developer", issuer: "Zero To Mastery · Udemy", year: "Jul 2025" },
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta · Coursera", year: "Aug 2023" },
  { title: "WordPress Development", issuer: "DevTech Institute, Lahore", year: "Sep 2023" }
];
const PROFICIENCY = [
  { label: "React & Next.js", level: "Expert", detail: "I use them every day, in production" },
  { label: "TypeScript & Tailwind CSS", level: "Expert", detail: "The default for every project I build" },
  { label: "AI Integration", level: "Advanced", detail: "Streaming LLM chat, voice assistants" },
  { label: "Node.js & REST APIs", level: "Advanced", detail: "Authentication, payments, admin panels" },
  { label: "Databases", level: "Proficient", detail: "MongoDB, MySQL, Firebase" }
];
const SKILL_GROUPS = [
  {
    icon: "frontend",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Context API", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: "backend",
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "Supabase", "REST APIs", "MongoDB", "MySQL", "Firebase"]
  },
  {
    icon: "ai",
    title: "AI & Integrations",
    skills: ["Claude API", "Streaming Chat", "ElevenLabs Voice", "Shen.AI", "MCP (Model Context Protocol)", "Stripe", "OAuth / JWT"]
  },
  {
    icon: "tools",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "WordPress"]
  }
];
const LANGUAGES = [
  { label: "English", level: "Professional working proficiency" },
  { label: "Urdu", level: "Native" }
];
const TESTIMONIALS = [];
const projectsText = PROJECTS.map((p) => `- ${p.title} (${p.role}): ${p.description}`).join("\n");
const experienceText = EXPERIENCE.map(
  (e) => `- ${e.role} at ${e.company}, ${e.place} (${e.period}): ${e.points.join(" ")}`
).join("\n");
const educationText = EDUCATION.map((e) => `- ${e.degree}, ${e.school} (${e.date}). ${e.description}`).join("\n");
const certificationsText = CERTIFICATIONS.map((c) => `- ${c.title}, ${c.issuer} (${c.year})`).join("\n");
const SYSTEM_PROMPT = `You are the AI version of ${PROFILE.name}, a ${PROFILE.title} based in ${CONTACT.location}. You answer visitors' questions on my portfolio website in the first person ("I", "my").

Tone: friendly, confident and professional. Keep answers to 2-4 sentences unless the visitor asks for more detail. Don't use filler or exaggerate.

About me: ${PROFILE.summary}

Tech stack: ${TECH.join(", ")}.

Experience:
${experienceText}

Projects:
${projectsText}

Education:
${educationText}

Certifications:
${certificationsText}

Contact: email ${CONTACT.email}, phone ${CONTACT.phone}, GitHub ${CONTACT.github}, LinkedIn ${CONTACT.linkedin}. I'm open to freelance projects and full-time remote roles.

Guidelines:
- Only state facts given above. If you don't know something, say so and suggest the visitor email me.
- If asked for my resume, share this markdown link: [Download My Resume](${CONTACT.resume})
- If someone wants to hire me or start a project, encourage them to use the contact form or email me.
- Don't share personal details beyond what's listed above (such as family, home address, age or religion). Politely bring the conversation back to my work.
- If asked, be honest that you are an AI assistant representing me, not me in person.`;
const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = await request.json();
          if (!Array.isArray(messages)) {
            return new Response("Messages are required", { status: 400 });
          }
          const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
          if (!key) {
            return new Response("Missing GOOGLE_GENERATIVE_AI_API_KEY", { status: 500 });
          }
          const google = createGoogleGenerativeAI({ apiKey: key });
          const result = streamText({
            model: google("gemini-2.5-flash"),
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages)
          });
          return result.toUIMessageStreamResponse({
            originalMessages: messages
          });
        } catch (error) {
          console.error("Chat API Error:", error);
          return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }
      }
    }
  }
});
const SitemapDotxmlRoute = Route$3.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const ApiOgRoute = Route$1.update({
  id: "/api/og",
  path: "/api/og",
  getParentRoute: () => Route$4
});
const ApiChatRoute = Route.update({
  id: "/api/chat",
  path: "/api/chat",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute,
  ApiChatRoute,
  ApiOgRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CONTACT as C,
  EXPERIENCE as E,
  FILTERS as F,
  LANGUAGES as L,
  PROJECTS as P,
  SKILL_GROUPS as S,
  TECH as T,
  PROFILE as a,
  EDUCATION as b,
  CERTIFICATIONS as c,
  PROFICIENCY as d,
  TESTIMONIALS as e,
  router as r
};
