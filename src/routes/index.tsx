import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { BentoAbout } from "@/components/sections/BentoAbout";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { AIChat } from "@/components/AIChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Ishaq — Frontend Developer" },
      {
        name: "description",
        content:
          "Self-taught frontend developer crafting dynamic, accessible and highly responsive web experiences with React, TypeScript and Tailwind CSS.",
      },
      { property: "og:title", content: "Muhammad Ishaq — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Premium, interactive portfolio of Muhammad Ishaq — React, Next.js, TypeScript and creative UI engineering.",
      },
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
          <main>
            <Hero />
            <BentoAbout />
            <Projects />
            <Contact />
          </main>
          <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Ishaq · Built with React & Lovable AI
          </footer>
          <AIChat />
        </>
      )}
    </>
  );
}
