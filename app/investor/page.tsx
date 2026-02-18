"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InvestorPage() {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetch("/api/stripe/revenue")
      .then(res => res.json())
      .then(data => setRevenue(data.revenue || 0));
  }, []);

  return (
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
