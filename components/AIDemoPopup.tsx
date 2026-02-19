"use client";

import { useState } from "react";

export default function AIDemoPopup({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setLoading(true);

    try {
      const res = await fetch("/api/ai-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch {
      setResponse("AI temporarily unavailable.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="bg-[#111] p-6 rounded-2xl w-full max-w-md border border-white/10">

        <h2 className="text-xl font-bold mb-4">AI Demo</h2>

        <textarea
          className="w-full p-3 rounded-lg bg-black border border-white/10 mb-4"
          placeholder="Ask something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="w-full bg-blue-500 py-2 rounded-lg text-black font-semibold mb-4"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        {response && (
          <div className="text-gray-300 text-sm mb-4">
            {response}
          </div>
        )}

        <button
          onClick={onClose}
          className="text-gray-400 text-sm hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
