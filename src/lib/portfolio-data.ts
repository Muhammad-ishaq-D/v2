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
};
