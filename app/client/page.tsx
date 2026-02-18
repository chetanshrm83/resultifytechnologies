"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ClientDashboard() {
  const [metrics, setMetrics] = useState<any>({
    usage: 0,
    conversations: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch AI usage count
        const { data: usageData, error: usageError } = await supabase
          .from("ai_usage")
          .select("*");

        if (usageError) {
          console.error("Usage fetch error:", usageError);
        }

        // Fetch conversations count
        const { data: convoData, error: convoError } = await supabase
          .from("conversations")
          .select("*");

        if (convoError) {
          console.error("Conversation fetch error:", convoError);
        }

        setMetrics({
          usage: usageData?.length || 0,
          conversations: convoData?.length || 0,
        });

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">
        Client Dashboard
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading metrics...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <p className="text-gray-400">AI Requests Used</p>
            <p className="text-3xl font-bold mt-2">
              {metrics.usage}
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <p className="text-gray-400">Total Conversations</p>
            <p className="text-3xl font-bold mt-2">
              {metrics.conversations}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
