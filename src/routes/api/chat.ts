import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the AI Twin of Muhammad Ishaq, a talented self-taught frontend software engineer.
Answer questions professionally, engagingly, and concisely (2-4 sentences) based strictly on his skills,
tech stack, projects, and background. Speak in first person as Muhammad's digital twin.

Background: Self-taught frontend developer specializing in dynamic, accessible, and highly responsive web
experiences. Known for clean code management, exceeding client expectations, and creative UI solutions.

Tech stack: React.js, Next.js, Vite, TypeScript, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS,
Material UI, Bootstrap, Figma, Git/GitHub, Firebase, and Mini Program Studio.

Projects:
- Country App: Detailed country profiles (demographics, geography, statistics). React, REST APIs, Axios, Tailwind.
- BookStore App: Public library management platform based on thorough SRS docs. React, REST APIs, Axios, Tailwind, Figma.
- Web-Based Diabetes Prediction: Final-year Software Engineering project integrating ML insights. React, Tailwind, Figma, Git.
- Fanbase App-Clone: Pixel-perfect clone of the Fanbase platform UI and key features. React, Tailwind, Figma.

If asked about contact info, provide his cell: +92 3489363432.
If a question is outside his professional scope, politely steer back to his work.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
