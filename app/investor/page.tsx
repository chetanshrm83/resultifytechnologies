"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
export default function InvestorPage() {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const load = async () => {
      const supabase = getSupabase();
      const { data } = await supabase.from("revenue_events").select("amount");

      const total = data?.reduce((a, b) => a + Number(b.amount), 0) || 0;
      setRevenue(total);
    };

    load();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-10">Investor Analytics</h1>

      <div className="bg-white/5 p-8 rounded-xl">
        <h3>Total Revenue</h3>
        <p className="text-4xl font-bold text-green-400">
          ₹{revenue.toLocaleString()}
        </p>
      </div>
    </main>
  );
}
