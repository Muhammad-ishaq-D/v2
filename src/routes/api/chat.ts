import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import {
  CERTIFICATIONS,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  TECH,
} from "@/lib/portfolio-data";

const projectsText = PROJECTS.map((p) => `- ${p.title} (${p.role}): ${p.description}`).join("\n");
const experienceText = EXPERIENCE.map(
  (e) => `- ${e.role} at ${e.company}, ${e.place} (${e.period}): ${e.points.join(" ")}`,
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
