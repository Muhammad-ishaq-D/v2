import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, MessageCircle } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const SUGGESTIONS = [
  "What's your tech stack?",
  "Tell me about the Diabetes project",
  "How can I contact you?",
];

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const loading = status === "submitted" || status === "streaming";

  // Draw attention to the launcher shortly after load, until first opened.
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => setTeaser(true), 2600);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const submit = (text: string) => {
    if (!text.trim() || loading) return;
    sendMessage({ text: text.trim() });
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {teaser && !open && (
            <motion.button
              key="teaser"
              onClick={() => {
                setOpen(true);
                setTeaser(false);
              }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="glass max-w-[15rem] rounded-2xl rounded-br-md px-4 py-3 text-left shadow-lg"
            >
              <p className="text-sm font-semibold">👋 Curious about Ishaq?</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Chat with my AI twin — ask about skills, projects or hiring.
              </p>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          data-cursor="Chat"
          onClick={() => {
            setOpen((o) => !o);
            setTeaser(false);
          }}
          className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] py-2 pl-2 pr-4 text-background shadow-lg shadow-[var(--glow)]/30"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label={open ? "Close chat" : "Chat with Ishaq's AI twin"}
        >
          {!open && (
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full bg-[var(--glow)]"
              animate={{ opacity: [0.5, 0], scale: [1, 1.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-2 ring-background/40">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  className="flex h-full w-full items-center justify-center bg-background/20"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.img
                  key="avatar"
                  src={avatar}
                  alt="Ishaq AI twin"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </span>
          {!open && (
            <span className="relative flex items-center gap-1.5 pr-1 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" />
              Chat with me
            </span>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="glass fixed bottom-28 right-6 z-[60] flex h-[32rem] max-h-[70vh] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl"
          >
            <div className="flex items-center gap-3 border-b border-border p-4">
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-2 ring-[var(--glow)]/40">
                <img src={avatar} alt="Ishaq" className="h-full w-full object-cover" />
                <span className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full border-2 border-background bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-semibold">AI Twin of Ishaq</p>
                <p className="text-xs text-emerald-400">Online · ask me anything</p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="chat-scroll flex-1 space-y-3 overflow-y-auto overscroll-contain p-4"
            >
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Hi! I'm Muhammad's AI twin. Ask me anything about his skills or projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => submit(s)}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-[var(--glow)] hover:text-foreground"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                return (
                  <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                          : "max-w-[85%] text-sm leading-relaxed text-foreground"
                      }
                    >
                      {text}
                    </div>
                  </div>
                );
              })}

              {loading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-1.5 py-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-2 w-2 rounded-full bg-muted-foreground"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-background transition-opacity disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
