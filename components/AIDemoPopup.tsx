"use client";

import { useState } from "react";

export default function AIDemoPopup({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!message) return;

    const res = await fetch("/api/ai-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply || "No response");
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6">
      <div className="flex justify-between mb-4">
        <h4 className="font-semibold">Resultify AI</h4>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="text-sm text-gray-400 mb-3">
        👋 Ask me how AI can grow your business.
      </div>

      {response && (
        <div className="bg-black/40 p-3 rounded mb-3 text-sm">
          {response}
        </div>
      )}

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-full px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm mb-3"
      />

      <button
        onClick={sendMessage}
        className="w-full bg-blue-500 py-2 rounded-lg text-black font-semibold hover:bg-blue-400"
      >
        Send
      </button>
    </div>
  );
}
