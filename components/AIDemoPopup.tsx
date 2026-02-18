"use client";

import { useState } from "react";

export default function AIDemoPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { role: "assistant", content: "👋 Hi! I'm Resultify AI. How can I help your business today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        AI Demo
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-20 right-6 w-96 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">Resultify AI</h4>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 mb-3 max-h-64">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-blue-500/20 text-right"
                    : "bg-white/10"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm">Thinking...</div>
            )}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 rounded-lg text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
