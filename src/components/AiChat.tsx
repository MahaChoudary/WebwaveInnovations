import { Bot, Loader2, Mic, Send, Volume2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "ai";
  text: string;
};

const API_ENDPOINT = "https://ai-assistant-production-ba5a.up.railway.app/chat";


const AIChat: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const introMessage = "Hi! I'm Mira , Maheen's Ai-Assistant. Ask me anything about her background, skills, projects, or if you'd like to schedule a meeting with her!";

  // Keep the chat pinned to the latest exchange for a polished experience.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, loading]);

  const askAI = async () => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    const userEntry: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      role: "user",
      text: trimmedQuestion,
    };

    setHistory((prev) => [...prev, userEntry]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmedQuestion }),
      });

      if (!res.ok) {
        throw new Error("Unable to reach AI assistant");
      }

      const data: { answer?: string } = await res.json();
      setHistory((prev) => [
        ...prev,
        {
          id: `${userEntry.id}-ai`,
          role: "ai",
          text: data.answer?.trim() || "I couldn't find an answer. Mind rephrasing that?",
        },
      ]);
    } catch {
      setHistory((prev) => [
        ...prev,
        {
          id: `${userEntry.id}-error`,
          role: "ai",
          text: "I ran into a connection hiccup. Try asking again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      askAI();
    }
  };

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-50 flex flex-col items-end gap-4 sm:right-10">
      {isOpen && (
        <div className="pointer-events-auto w-[320px] sm:w-[360px]">
          <div className="flex h-[400px] flex-col rounded-[28px] border border-cyan-200/20 bg-[#05101a]/95 p-6 text-white shadow-[0_40px_120px_rgba(6,70,87,0.55)] backdrop-blur-2xl">
            <header className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 text-slate-900">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">Chat with Maheen's AI</p>
                  <p className="text-xs text-cyan-200">Available 24/7 for quick answers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Toggle sound"
                  className="rounded-full border border-cyan-100/20 p-2 text-cyan-100 transition hover:bg-white/10"
                  type="button"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
                <button
                  aria-label="Close AI chat"
                  className="rounded-full border border-cyan-100/20 p-2 text-cyan-100 transition hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-hide" aria-live="polite">
              <div className="flex justify-start">
                <div className="flex gap-2 rounded-3xl bg-[#0a1b28] px-4 py-3 text-sm text-cyan-50 shadow-inner">
                  <Bot className="mt-1 h-4 w-4 text-cyan-300" />
                  <span>{introMessage}</span>
                </div>
              </div>

              {history.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      message.role === "user"
                        ? "bg-white text-slate-900 shadow-md"
                        : "border border-cyan-100/10 bg-white/5 text-cyan-50"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {history.length === 0 && !loading && (
                <div className="rounded-2xl border border-dashed border-cyan-100/15 bg-white/5 p-3 text-xs text-cyan-100">
                  Try “What technologies power your AI projects?” or “Highlight a recent case study.”
                </div>
              )}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-cyan-100/15 bg-white/5 px-4 py-3 text-sm text-cyan-100">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Thinking through your question…
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <footer className="mt-3 space-y-2 border-t border-cyan-100/10 pt-3">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <textarea
                    className="min-h-[64px] w-full resize-none rounded-2xl border border-cyan-100/20 bg-[#04121f] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-200 focus:outline-none"
                    onChange={(event) => setQuestion(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type or speak your question..."
                    value={question}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5 opacity-10" />
                </div>
                <button
                  aria-label="Voice input"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-100/15 bg-white/5 text-white transition hover:bg-white/10"
                  type="button"
                >
                  <Mic className="h-4 w-4" />
                </button>
                <button
                  aria-label="Send question to AI assistant"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-cyan-300 via-teal-400 to-emerald-400 text-white shadow-[0_12px_30px_rgba(34,211,238,0.4)] transition hover:brightness-110 hover:shadow-[0_18px_40px_rgba(34,211,238,0.45)] disabled:opacity-60"
                  disabled={loading}
                  onClick={askAI}
                  type="button"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-[10px] text-cyan-200/70">Shift + Enter for a new line · Enter to send</p>
            </footer>
          </div>
        </div>
      )}

      <div className="pointer-events-auto flex items-center gap-3">
        <div className="hidden flex-col text-right text-[10px] font-semibold uppercase tracking-[0.5em] text-cyan-100 sm:flex" />
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Hide AI assistant" : "Open AI assistant"}
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_45px_rgba(6,146,167,0.25)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          onClick={togglePanel}
          type="button"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 opacity-60 blur-xl transition group-hover:opacity-80" aria-hidden />
          {isOpen ? <X className="h-5 w-5 text-cyan-600" /> : <Bot className="h-5 w-5 text-cyan-600" />}
          <span>{isOpen ? "Hide" : "Ask Mira"}</span>
        </button>
      </div>
    </div>
  );
};

export default AIChat;
