"use client";

import { useState } from "react";

export default function HomePage() {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Resultify AI. Ask me how we automate marketing, sales or support.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ AI failed. Try again." },
      ]);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen px-6 py-16 max-w-7xl mx-auto text-white">
      
      {/* HERO SECTION */}
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          Resultify automates marketing, sales, support, collections and analytics using AI.
        </p>
      </section>

      {/* Floating AI Button */}
      <button
        onClick={() => setOpenChat(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-black px-5 py-3 rounded-full shadow-xl z-40"
      >
        AI Demo
      </button>

      {/* AI POPUP */}
      {openChat && (
        <div className="fixed bottom-20 right-6 w-96 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Resultify AI Demo</h4>
            <button onClick={() => setOpenChat(false)}>✕</button>
          </div>

          <div className="h-64 overflow-y-auto space-y-3 mb-4 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  msg.role === "assistant"
                    ? "bg-white/10 text-gray-300"
                    : "bg-blue-500 text-black ml-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-400">Thinking...</div>}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about automation..."
              className="flex-1 px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-black rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
