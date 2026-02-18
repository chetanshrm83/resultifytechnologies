"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
export default function ClientDashboard() {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {

      const { data: usage } = await supabase
        .from("ai_usage")
        .select("tokens, cost");

      const totalTokens = usage?.reduce((a, b) => a + b.tokens, 0) || 0;
      const totalCost = usage?.reduce((a, b) => a + Number(b.cost), 0) || 0;

      setMetrics({
        tokens: totalTokens,
        cost: totalCost,
      });
    };

    fetchData();
  }, []);

  if (!metrics) return <p>Loading...</p>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-xl">
          <h3>Total AI Tokens</h3>
          <p className="text-3xl">{metrics.tokens}</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3>Total AI Cost</h3>
          <p className="text-3xl">₹{metrics.cost.toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}
