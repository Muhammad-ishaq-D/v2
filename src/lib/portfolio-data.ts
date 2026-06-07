import country from "@/assets/projects/country.png.asset.json";
import bookstore from "@/assets/projects/book_store.png.asset.json";
import diabetes from "@/assets/projects/diabetes_pred.png.asset.json";
import fanbase from "@/assets/projects/fanbase.png.asset.json";

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Country App",
    description:
      "Detailed country profiles covering demographics, geography, and live statistics, powered by REST APIs.",
    image: country.url,
    tags: ["React", "APIs", "Tailwind"],
  },
  {
    title: "BookStore App",
    description:
      "A comprehensive public library management platform built from a thorough SRS, with rich catalog management.",
    image: bookstore.url,
    tags: ["React", "APIs", "Figma"],
  },
  {
    title: "Diabetes Prediction",
    description:
      "Final-year Software Engineering project integrating Machine Learning insights into a clean web platform.",
    image: diabetes.url,
    tags: ["React", "ML", "Tailwind"],
  },
  {
    title: "Fanbase Clone",
    description:
      "A pixel-perfect clone replicating the complete Fanbase platform UI and its key social features.",
    image: fanbase.url,
    tags: ["React", "Tailwind", "Figma"],
  },
];

export const FILTERS = ["All", "React", "APIs", "ML", "Figma"] as const;

export const TECH = [
  "React", "Next.js", "Vite", "TypeScript", "Redux", "JavaScript",
  "HTML5", "CSS3", "Tailwind", "Material UI", "Bootstrap", "Figma",
  "Git", "Firebase", "Mini Program Studio",
];

export const CONTACT = {
  phone: "+92 3489363432",
  email: "ishaq.dev@gmail.com",
  location: "Pakistan",
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
    period: "2023 — Present",
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    place: "Remote",
    points: [
      "Designing and building dynamic, accessible and highly responsive web experiences for clients worldwide.",
      "Delivering pixel-perfect interfaces from Figma using React, TypeScript and Tailwind CSS.",
      "Integrating REST APIs, state management and creative micro-interactions for a premium feel.",
      "Consistently exceeding client expectations through clean, maintainable code.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Various Projects",
    place: "Remote",
    points: [
      "Built reusable component libraries and design systems for multiple web platforms.",
      "Collaborated on e-commerce, dashboard and ML-powered web applications.",
      "Optimised performance and accessibility across responsive layouts.",
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
    school: "University",
    date: "2020 — 2024",
    description:
      "Comprehensive program covering software engineering, web technologies, data structures and project management.",
    tags: ["Web Development", "Software Engineering", "Databases", "Programming"],
  },
];

export type Certification = { title: string; issuer: string; year: string };

export const CERTIFICATIONS: Certification[] = [
  { title: "Meta Front-End Developer", issuer: "Meta", year: "2024" },
  { title: "Advanced React", issuer: "Meta", year: "2023" },
  { title: "Programming with JavaScript", issuer: "Meta", year: "2023" },
];

export const COURSES: { title: string; issuer: string }[] = [
  { title: "Introduction to Front-End Development", issuer: "Meta" },
  { title: "React Basics", issuer: "Meta" },
  { title: "Advanced React", issuer: "Meta" },
  { title: "Programming with JavaScript", issuer: "Meta" },
];

export const PROFICIENCY: { label: string; value: number }[] = [
  { label: "Frontend", value: 95 },
  { label: "React / Next.js", value: 93 },
  { label: "UI / UX", value: 90 },
  { label: "TypeScript", value: 85 },
  { label: "APIs Integration", value: 80 },
];

export type SkillGroup = { icon: string; title: string; skills: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: "💻",
    title: "Web Development",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux"],
  },
  {
    icon: "🎨",
    title: "UI & Design",
    skills: ["Figma", "Material UI", "Bootstrap", "Responsive Design", "Shadcn UI"],
  },
  {
    icon: "✨",
    title: "Animation & UI",
    skills: ["Framer Motion", "GSAP", "Lenis Scroll", "Micro-interactions"],
  },
  {
    icon: "🔧",
    title: "Tools & Backend",
    skills: ["Git", "Firebase", "Vite", "REST APIs"],
  },
];

export const LANGUAGES: { label: string; value: number }[] = [
  { label: "English", value: 80 },
  { label: "Urdu", value: 100 },
  { label: "Pashto", value: 100 },
];
