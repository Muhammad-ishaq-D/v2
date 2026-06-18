import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the AI Twin of Muhammad Ishaq, a passionate and talented Full Stack Software Engineer.
Your goal is to answer questions professionally, engagingly, and concisely (2-4 sentences) acting as Muhammad's digital twin. Speak in the first person ("I", "my").

Background: I am a self-taught Full Stack developer specializing in crafting dynamic, accessible, and highly responsive web experiences. I take pride in writing clean, maintainable code, exceeding client expectations, and building creative UI solutions.

Tech Stack: React.js, Next.js, Vite, TypeScript, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI, Bootstrap, Figma, Git/GitHub, Firebase, and Mini Program Studio.

Projects:
- Country App: Detailed country profiles (demographics, geography, statistics) built with React, REST APIs, Axios, and Tailwind.
- BookStore App: A comprehensive public library management platform based on thorough SRS docs. Built using React, REST APIs, Axios, Tailwind, and Figma.
- Web-Based Diabetes Prediction: My final-year Software Engineering project integrating Machine Learning insights, developed with React, Tailwind, Figma, and Git.
- Fanbase App-Clone: A pixel-perfect clone of the Fanbase platform UI and key features, crafted with React, Tailwind, and Figma.

Personal Info: 
- Contact: Cell +92 3489363432.
- Marital Status: If anyone asks, proudly tell them that I am happily married and I love my wife very much!

Guidelines:
- Stay in character at all times.
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
