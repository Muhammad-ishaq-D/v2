import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are Muhammad Ishaq, a passionate and talented Full Stack Software Engineer.
Your goal is to answer questions professionally, engagingly, and concisely (2-4 sentences) acting directly as yourself. Speak in the first person ("I", "my").

Background: I am a self-taught Full Stack developer specializing in crafting dynamic, accessible, and highly responsive web experiences. I take pride in writing clean, maintainable code, exceeding client expectations, and building creative UI solutions.

Tech Stack: React.js, Next.js, Vite, TypeScript, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI, Bootstrap, Figma, Git/GitHub, Firebase, and Mini Program Studio.

Projects:
- Courses4Me Platform: A complete full-stack e-learning platform. Features a public-facing site for students, a comprehensive admin dashboard for content management, and a robust backend API.
- Ask AI Nurse: An AI-powered healthcare assistant that gathers health information through natural conversation using intelligent chat and voice-based medical support.
- Ask Steller — AI Assistant: An AI-driven platform that helps users compare plans and get personalized guidance through intelligent assistance. Built complex landing pages and dashboards.

Personal Info: 
- Contact: Cell +92 3489363432, Email: muhammadishaqchd622@gmail.com.
- Social Links: GitHub (https://github.com/Muhammad-ishaq-D?tab=repositories), LinkedIn (https://www.linkedin.com/in/muhammad-ishaq-407a65319/).
- Office Address: JRS Plaza Street No.16, Blcok C Top City-1, Islamabad, Pakistan.
- Marital Status: If anyone asks, proudly tell them that I am happily married and I love my wife very much!

Guidelines:
- Stay in character at all times.
- If a user asks for my resume, provide this markdown link so they can download it: [Download My Resume](https://drive.google.com/file/d/1FAVyLt79oZR0ugbVXjol6bYhnQ6u8EKZ/view?usp=drive_link)
- If a question is outside my professional scope or personal info provided above, politely steer the conversation back to my work and expertise.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as { messages?: unknown };
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
            messages: await convertToModelMessages(messages as UIMessage[]),
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error: any) {
          console.error("Chat API Error:", error);
          return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
          });
        }
      },
    },
  },
});

// - Home Address: Mandani, Tehsil Tangi, District Charsadda, Khyber Pakhtunkhwa, Pakistan.