

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: { label: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Courses4Me Platform",
    description:
      "A complete full-stack e-learning platform. Features a public-facing site for students, a comprehensive admin dashboard for content management, and a robust backend API.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Full Stack", "Admin Dashboard", "API"],
    links: [
      { label: "Website", url: "https://courses4me.co.uk/" },
      { label: "Admin Dashboard", url: "https://admin.courses4me.co.uk/dashboard" },
    ],
  },
  {
    title: "Ask AI Nurse",
    description:
      "An AI-powered healthcare assistant that gathers health information through natural conversation using intelligent chat and voice-based medical support.",
    image: "/projects/country.png",
    tags: ["React.js", "Material UI", "ElevenLab", "AI"],
    links: [{ label: "Live Website", url: "https://askainurse.com/" }],
  },
  {
    title: "Ask Steller — AI Assistant",
    description:
      "An AI-driven platform that helps users compare plans and get personalized guidance through intelligent assistance. Built complex landing pages and dashboards.",
    image: "/projects/country.png",
    tags: ["React.js", "Material UI", "Framer Motion", "Spline"],
    links: [{ label: "Live Website", url: "https://askstellarai.com/" }],
  },
  {
    title: "Appaura Analytics Dashboard",
    description:
      "Developed a modern financial dashboard UI with dynamic data visualization, real-time balance tracking, transaction history, and financial analytics.",
    image: "/projects/country.png",
    tags: ["React.js", "Spring Boot", "Tailwind CSS", "MongoDB"],
    links: [{ label: "Appaura Products", url: "https://appaura.net/products/" }],
  },
  {
    title: "Crown Clothing E-Commerce",
    description:
      "Developed a complete e-commerce solution with cart, checkout, and payment processing. Integrated Firebase for authentication and Firestore for real-time data storage.",
    image: "/projects/book_store.png",
    tags: ["React.js", "Redux", "Firebase", "Stripe"],
    links: [{ label: "Project Details", url: "https://zerotomastery.io/courses/learn-react/#projects" }],
  },
  {
    title: "Fanbase App Clone",
    description:
      "Built a pixel-perfect clone of the Fanbase social platform with a responsive UI. Implemented user profiles, post interactions, and real-time updates.",
    image: "/projects/fanbase.png",
    tags: ["React.js", "Tailwind CSS", "Responsive Design"],
    links: [{ label: "Live Website", url: "https://www.fanbase.app/" }],
  },
  {
    title: "Web-Based Diabetes Prediction",
    description:
      "Built a full-stack application using multiple machine learning models for accurate diabetes prediction. Designed an intuitive UI with Tailwind CSS and secure user authentication.",
    image: "/projects/diabetes_pred.png",
    tags: ["React.js", "Python", "Express.js", "MongoDB"],
  },
];

export const FILTERS = ["All", "React.js", "MongoDB", "AI", "Tailwind CSS"] as const;

export const TECH = [
  "React.js", "TypeScript", "Next.js", "Redux", "Context API",
  "Tailwind CSS", "Bootstrap", "Framer Motion", "Node.js", "Express.js",
  "Spring Boot", "REST APIs", "MongoDB", "Firebase", "MySQL", "Git",
  "GitHub", "Postman", "VS Code", "Figma", "Canva", "ElevenLabs", "Stripe", "WordPress"
];

export const CONTACT = {
  phone: "+92 348 9363432",
  email: "muhammadishaqchd622@gmail.com",
  location: "Islamabad, Pakistan",
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
    period: "Jan 2026 — Present",
    role: "Full Stack Developer (MERN)",
    company: "CODEHAVEN Solutions",
    place: "Islamabad, Pakistan (Onsite, Part-Time)",
    points: [
      "Build and maintain web applications using the MERN stack along with MySQL, writing clean, scalable front-end and back-end code.",
      "Design and integrate RESTful APIs, and collaborate with UI/UX designers to deliver responsive, intuitive, and user-friendly interfaces.",
      "Test, debug, and optimize applications for performance and security, following best practices in version control and architecture.",
    ],
  },
  {
    period: "July 2025 — Present",
    role: "Frontend Developer",
    company: "INSTLY Technologies",
    place: "Bangkok City, Thailand (Remote, Full-Time)",
    points: [
      "Working on AI assistant–based projects, focusing on building complex and visually appealing landing pages as well as dynamic dashboards.",
      "Currently building intelligent AI assistant with voice and chat capabilities.",
      "Collaborating with designers and backend developers to deliver seamless user experiences and responsive layouts.",
    ],
  },
  {
    period: "April 2025 — July 2025",
    role: "Frontend Developer Intern",
    company: "Appaura.net",
    place: "Lahore, Pakistan",
    points: [
      "Developed and maintained responsive web applications using React.js, REST APIs, Spring Boot, and MongoDB.",
      "Collaborated with designers and backend teams to ensure seamless integration and built efficient CRUD-based APIs.",
      "Optimized applications for performance and scalability under senior mentorship.",
    ],
  },
  {
    period: "Nov 2023 — Mar 2025",
    role: "Frontend Developer (Self Work)",
    company: "Freelance / Personal Projects",
    place: "Remote",
    points: [
      "Designed and built multiple projects using the MERN stack, focusing on clean code and reusable components.",
      "Enhanced performance and user experience through effective state management and responsive design techniques.",
      "Explored AI integration in web applications to keep up with modern development trends.",
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
    date: "Sep 2020 — July 2024",
    description:
      "Graduated with a CGPA of 3.72/4.00. Strong focus on software engineering principles, web development, and modern technologies.",
    tags: ["Software Engineering", "Web Development", "Databases"],
  },
];

export type Certification = { title: string; issuer: string; year: string };

export const CERTIFICATIONS: Certification[] = [
  { title: "Complete React Development Course", issuer: "Zero To Mastery Online, Udemy", year: "July 2025" },
  { title: "WordPress Course", issuer: "DevTech Institute Lahore, Pakistan", year: "Sep 2023" },
];

export const COURSES: { title: string; issuer: string }[] = [
  { title: "Complete React Development", issuer: "Udemy" },
  { title: "WordPress Development", issuer: "DevTech Institute" },
];

export const PROFICIENCY: { label: string; value: number }[] = [
  { label: "Frontend", value: 95 },
  { label: "React / Next.js", value: 92 },
  { label: "Backend / MERN", value: 85 },
  { label: "AI Integration", value: 80 },
  { label: "UI / UX / Tailwind", value: 90 },
];

export type SkillGroup = { icon: string; title: string; skills: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: "💻",
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Context API", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "🔧",
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Spring Boot", "MongoDB", "MySQL", "Firebase", "REST APIs"],
  },
  {
    icon: "🎨",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Postman", "Stripe", "ElevenLabs"],
  },
];

export const LANGUAGES: { label: string; value: number }[] = [
  { label: "English", value: 85 },
  { label: "Urdu", value: 100 },
];
