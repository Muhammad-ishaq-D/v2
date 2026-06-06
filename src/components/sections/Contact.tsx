import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Phone, Send } from "lucide-react";
import { z } from "zod";
import { CONTACT } from "@/lib/portfolio-data";
import { Magnetic } from "@/components/Magnetic";

// To go live: create a free form at https://formspree.io and paste the endpoint here.
const FORMSPREE_ENDPOINT = "";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "success";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [shake, setShake] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<Field, string>> = {};
      const shakeErrors: Partial<Record<Field, boolean>> = {};
      for (const issue of result.error.issues) {
        const f = issue.path[0] as Field;
        fieldErrors[f] = issue.message;
        shakeErrors[f] = true;
      }
      setErrors(fieldErrors);
      setShake(shakeErrors);
      setTimeout(() => setShake({}), 500);
      return;
    }

    setStatus("sending");
    try {
      if (FORMSPREE_ENDPOINT) {
        await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(result.data),
        });
      } else {
        await new Promise((r) => setTimeout(r, 1200));
      }
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
    }
  };

  const fields: { name: Field; label: string; type?: string; textarea?: boolean }[] = [
    { name: "name", label: "Your name" },
    { name: "email", label: "Email address", type: "email" },
    { name: "message", label: "Tell me about your project", textarea: true },
  ];

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gradient">Contact</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Let's build something</h2>
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4" /> {CONTACT.phone}
        </a>
      </motion.div>

      <form onSubmit={submit} className="glass glow-border space-y-5 rounded-3xl p-7">
        {fields.map((f) => (
          <motion.div
            key={f.name}
            animate={shake[f.name] ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <label className="mb-2 block text-sm font-medium text-muted-foreground">{f.label}</label>
            {f.textarea ? (
              <textarea
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                rows={4}
                className={`w-full resize-none rounded-xl border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--glow)] ${
                  errors[f.name] ? "border-destructive" : "border-border"
                }`}
              />
            ) : (
              <input
                type={f.type || "text"}
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                className={`w-full rounded-xl border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--glow)] ${
                  errors[f.name] ? "border-destructive" : "border-border"
                }`}
              />
            )}
            <AnimatePresence>
              {errors[f.name] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-1.5 text-xs text-destructive"
                >
                  {errors[f.name]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        <Magnetic className="w-full">
          <button
            type="submit"
            disabled={status !== "idle"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] px-6 py-3.5 text-sm font-semibold text-background transition-opacity disabled:opacity-90"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "idle" && (
                <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Send message <Send className="h-4 w-4" />
                </motion.span>
              )}
              {status === "sending" && (
                <motion.span key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  Sending <Loader2 className="h-4 w-4 animate-spin" />
                </motion.span>
              )}
              {status === "success" && (
                <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                  Message sent! <Check className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </Magnetic>
      </form>
    </section>
  );
}
