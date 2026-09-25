import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { BentoAbout } from "@/components/sections/BentoAbout";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { AIChat } from "@/components/AIChat";
import { CONTACT } from "@/lib/portfolio-data";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://m-ishaq-portfolio-v3.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ishaq — Full Stack Developer" },
      {
        name: "description",
        content:
          "Muhammad Ishaq is a Full Stack Developer in Islamabad who builds AI-powered web products (chat and voice assistants, SaaS dashboards, booking platforms) with React, Next.js, TypeScript and Node.js.",
      },
      { property: "og:title", content: "Muhammad Ishaq — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer building AI-powered web products for healthcare, insurance and retail. See live projects, experience and contact details.",
      },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      {ready && (
        <>
          <SmoothScroll />
          <CustomCursor />
          <Nav />
        </>
      )}
      {/* Main content is always server-rendered so search engines and link previews see it.
          The hero remounts once the preloader finishes so its entrance animation still plays. */}
      <main>
        <Hero key={ready ? "ready" : "initial"} />
        <BentoAbout />
        <Projects />
        <Testimonials />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="mb-3 flex justify-center gap-5">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
        © {new Date().getFullYear()} Muhammad Ishaq · Designed & built with React, TypeScript and Tailwind CSS
      </footer>
      {ready && <AIChat />}
    </>
  );
}
