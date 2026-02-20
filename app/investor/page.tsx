"use client";

export const dynamic = "force-dynamic";

import React from "react";

export default function InvestorPage() {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Investor Dashboard</h1>

      {/* KEEP YOUR EXISTING CONTENT BELOW */}

    </main>
  );
}
    <main className="max-w-6xl mx-auto p-16 text-white">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-12"
      >
        Investor Dashboard
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white/5 p-10 rounded-2xl border border-white/10"
      >
        <p className="text-gray-400">Total Stripe Revenue</p>
        <p className="text-5xl font-bold mt-4 text-green-400">
          ₹{revenue.toLocaleString()}
        </p>
      </motion.div>

    </main>
  );
}
