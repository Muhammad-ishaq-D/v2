export type Project = {
  title: string;
  role: string;
  description: string;
  image: string;
  /** Custom cover image; when set it is used instead of the linked site's preview image. */
  cover?: string;
  tags: string[];
  /** Headline numbers shown on the card. Only use real, verifiable figures. */
  results?: { value: string; label: string }[];
  links?: { label: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Expat Medicare",
    role: "Built at INSTLY Technologies",
    description:
      "International health insurance comparison platform for expats, in English, French and Spanish. It compares 1,000+ plans from 30+ insurers and gives personalised quotes in real time. I built Mira, an AI adviser that streams answers from the Claude API, and the analytics dashboard the team uses to track live traffic and ad performance.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "AI", "Full Stack"],
    results: [
      { value: "1,000+", label: "Plans compared" },
      { value: "30+", label: "Insurers" },
      { value: "3", label: "Languages" },
    ],
    links: [{ label: "Live Website", url: "https://expatmedicare.com/" }],
  },
  {
    title: "Cira — AI Healthcare Assistant",
    role: "Built at INSTLY Technologies",
    description:
      "AI health platform that connects patients with real doctors for consultations, prescription refills and specialist referrals. I built the streaming Claude chat, the ElevenLabs voice assistant and camera-based vital-sign scanning with Shen.AI, plus an SEO-optimised marketing site in 5 languages.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "AI", "Full Stack"],
    results: [
      { value: "3", label: "AI integrations" },
      { value: "5", label: "Languages" },
    ],
    links: [{ label: "Live Website", url: "https://askainurse.com/" }],
  },
  {
    title: "Stellar OS",
    role: "Built at INSTLY Technologies",
    description:
      "Operations platform that insurers, brokers and internal teams use to manage 1,000+ plans, pricing zones, group quotes, renewals and leads. I built the data-heavy dashboard screens and the marketing experience, including interactive 3D Spline scenes and Framer Motion transitions.",
    image: "/projects/country.png",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Full Stack"],
    results: [{ value: "1,000+", label: "Plans managed" }],
    links: [{ label: "Live Website", url: "https://stellaros.ai/" }],
  },
  {
    title: "Courses4Me",
    role: "Full Stack Developer",
    description:
      "UK booking platform for SIA security licence courses across multiple locations. I built both the customer site and the admin side: a multi-step Stripe checkout, JWT and OAuth login, a careers board, a personal booking dashboard, and an admin panel with analytics and a rich-text editor.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Node.js", "MySQL", "Full Stack"],
    links: [{ label: "Live Website", url: "https://courses4me.co.uk/" }],
  },
  {
    title: "Karyana Shop",
    role: "Full Stack Developer · SaaS Product",
    description:
      "Subscription-based POS and inventory system for Pakistani grocery stores. One account can run several branches with separate staff roles. It supports barcode scanning, offline sales, udhaar (credit) tracking, profit and loss reports and PDF receipts, with English and Urdu interfaces and light and dark themes.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Node.js", "MySQL", "Full Stack"],
    links: [{ label: "Live Website", url: "https://karyana.shop/" }],
  },
  {
    title: "Very Patient",
    role: "Frontend Developer",
    description:
      "Rebuilt the company website in Next.js, turning the brand's design into a fast, fully responsive site that follows its visual identity closely.",
    image: "/projects/country.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Frontend"],
    links: [{ label: "Live Website", url: "https://verypatient.com/" }],
  },
  {
    title: "Appaura Analytics Dashboard",
    role: "Built at Appaura",
    cover: "/projects/appaura-analytics.svg",
    description:
      "Financial analytics dashboard with live balance tracking, transaction history and interactive charts. It runs on Springboot REST APIs and MongoDB.",
    image: "/projects/country.png",
    tags: ["React.js", "Supabase", "Tailwind CSS", "MongoDB"],
    links: [{ label: "Appaura Products", url: "https://appaura.net/products/" }],
  },
  {
    title: "Web-Based Diabetes Prediction",
    role: "Academic Project",
    description:
      "Full-stack web app that predicts diabetes risk using several machine-learning models built in Python, with a Node.js and MongoDB backend, secure login and a clean Tailwind interface.",
    image: "/projects/diabetes-prediction.svg",
    tags: ["React.js", "Python", "Node.js", "MongoDB"],
  },
  {
    title: "Crown Clothing E-Commerce",
    role: "Learning Project · Zero To Mastery",
    description:
      "E-commerce store with a product catalogue, cart and checkout. Built with Redux for state management, Firebase for login and Firestore for real-time data.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Redux", "Firebase"],
    links: [{ label: "Project Details", url: "https://zerotomastery.io/courses/learn-react/#projects" }],
  },
  {
    title: "Fanbase UI Recreation",
    role: "Learning Project",
    description:
      "Close, responsive recreation of the Fanbase social app's interface, built to practise component design, profile and post screens, and live-updating feeds.",
    image: "/projects/fanbase.png",
    tags: ["React.js", "Tailwind CSS"],
    links: [{ label: "Live Website", url: "https://www.fanbase.app/" }],
  },
];

export const FILTERS = ["All", "AI", "Next.js", "React.js", "Full Stack", "TypeScript"] as const;

export const TECH = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Tailwind CSS",
  "Framer Motion", "Node.js", "Express.js", "Supabase", "REST APIs", "MongoDB",
  "MySQL", "Firebase", "Claude API", "ElevenLabs", "MCP", "Stripe", "Git & GitHub",
  "Postman", "Figma", "WordPress",
];

export const CONTACT = {
  phone: "+92 348 9363432",
  email: "muhammadishaqchd622@gmail.com",
  location: "Islamabad, Pakistan",
  github: "https://github.com/Muhammad-ishaq-D",
  linkedin: "https://www.linkedin.com/in/muhammad-ishaq-407a65319/",
  resume: "https://drive.google.com/file/d/1LBspAf-UNPJON5VF1r8oHtDnSxnf5_6_/view?usp=sharing",
};

export const PROFILE = {
  name: "Muhammad Ishaq",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer building AI-powered web products",
  summary:
    "I build AI-powered web products for healthcare, insurance and retail. My work covers streaming AI chat and voice assistants, booking and payment flows, and the dashboards teams use every day. I care most about fast, polished interfaces and code that other developers can easily work on.",
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  place: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    period: "Jul 2025 — Present",
    role: "Frontend Developer",
    company: "INSTLY Technologies",
    place: "Bangkok, Thailand · Remote, Full-Time",
    points: [
      "Build AI products for healthcare and insurance clients, including Cira, Expat Medicare and Stellar OS.",
      "Built Claude-powered chat assistants that stream answers in real time, and an ElevenLabs voice assistant for patient conversations.",
      "Turn complex designs into responsive landing pages and data-heavy dashboards, working closely with designers and backend engineers.",
      "Received INSTLY's Certificate of Excellence (February 2026).",
    ],
  },
  {
    period: "Jan 2026 — Present",
    role: "Full Stack Developer (MERN)",
    company: "CODEHAVEN Solutions",
    place: "Islamabad, Pakistan · Onsite, Part-Time",
    points: [
      "Build client web applications from start to finish with MongoDB, Express, React, Node.js and MySQL.",
      "Design and connect REST APIs, and turn UI/UX designs into responsive, accessible interfaces.",
      "Test, debug and tune applications for speed and security, following team code-review and Git workflows.",
    ],
  },
  {
    period: "Apr 2025 — Jul 2025",
    role: "Frontend Developer Intern",
    company: "Appaura",
    place: "Lahore, Pakistan",
    points: [
      "Built the Appaura analytics dashboard in React, connected to Supabase REST APIs and MongoDB.",
      "Built CRUD features across the frontend and backend together with the design and backend teams.",
      "Improved rendering speed and component structure with guidance from senior engineers.",
    ],
  },
  {
    period: "Nov 2023 — Mar 2025",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    place: "Remote",
    points: [
      "Built and shipped a range of MERN-stack projects, with a focus on reusable components, state management and responsive design.",
      "Built my first AI-integrated features, which led to my current work on AI products.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  date: string;
  description: string;
  tags?: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    degree: "BS Software Engineering",
    school: "Islamia College University, Peshawar",
    date: "Sep 2020 — Jul 2024",
    description:
      "Graduated with a CGPA of 3.72/4.00. The degree focused on software engineering principles, databases and web development.",
    tags: ["CGPA 3.72 / 4.00", "Software Engineering", "Web Development", "Databases"],
  },
];

export type Certification = { title: string; issuer: string; year: string };

export const CERTIFICATIONS: Certification[] = [
  { title: "Complete Web Developer", issuer: "Zero To Mastery · Udemy", year: "Jul 2025" },
  { title: "Meta Front-End Developer Professional Certificate", issuer: "Meta · Coursera", year: "Aug 2023" },
  { title: "WordPress Development", issuer: "DevTech Institute, Lahore", year: "Sep 2023" },
];

export type SkillLevel = "Expert" | "Advanced" | "Proficient";

export const PROFICIENCY: { label: string; level: SkillLevel; detail: string }[] = [
  { label: "React & Next.js", level: "Expert", detail: "I use them every day, in production" },
  { label: "TypeScript & Tailwind CSS", level: "Expert", detail: "The default for every project I build" },
  { label: "AI Integration", level: "Advanced", detail: "Streaming LLM chat, voice assistants" },
  { label: "Node.js & REST APIs", level: "Advanced", detail: "Authentication, payments, admin panels" },
  { label: "Databases", level: "Proficient", detail: "MongoDB, MySQL, Firebase" },
];

export type SkillGroup = { icon: "frontend" | "backend" | "ai" | "tools"; title: string; skills: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: "frontend",
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Context API", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "backend",
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "Supabase", "REST APIs", "MongoDB", "MySQL", "Firebase"],
  },
  {
    icon: "ai",
    title: "AI & Integrations",
    skills: ["Claude API", "Streaming Chat", "ElevenLabs Voice", "Shen.AI", "MCP (Model Context Protocol)", "Stripe", "OAuth / JWT"],
  },
  {
    icon: "tools",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "WordPress"],
  },
];

export const LANGUAGES: { label: string; level: string }[] = [
  { label: "English", level: "Professional working proficiency" },
  { label: "Urdu", level: "Native" },
];

export type Testimonial = { quote: string; name: string; role: string; company: string };

/** Real quotes only, with the person's permission. The section stays hidden while this is empty. */
export const TESTIMONIALS: Testimonial[] = [];
