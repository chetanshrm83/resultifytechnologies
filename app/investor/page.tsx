"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function InvestorPage() {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("revenue_events")
        .select("amount");

      if (error) {
        console.error(error);
        return;
      }

      const total =
        data?.reduce((a: number, b: any) => a + Number(b.amount), 0) || 0;

      setTotalRevenue(total);
    };

    load();
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-10">
        Investor Dashboard
      </h1>

      <div className="rounded-2xl p-8 bg-white/5 border border-white/10">
        <p className="text-gray-400">Total Subscription Revenue</p>
        <p className="text-4xl font-bold mt-4">
          ₹{totalRevenue.toLocaleString()}
        </p>
      </div>
    </main>
  );
}
