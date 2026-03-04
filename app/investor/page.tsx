"use client";

export const dynamic = "force-dynamic";

import React from "react";

export default function InvestorPage() {
  const revenue = 320000;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-12">Investor Dashboard</h1>

      <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
        <p className="text-gray-400">Total Stripe Revenue</p>
        <p className="text-5xl font-bold mt-4 text-green-400">
          ₹{revenue.toLocaleString()}
        </p>
      </div>
    </main>
  );
}
