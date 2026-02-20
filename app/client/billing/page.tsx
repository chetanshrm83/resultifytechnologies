"use client";

export const dynamic = "force-dynamic";

import React from "react";

export default function BillingPage() {
  return (
    <main className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Billing & Plans</h1>

      {/* KEEP YOUR EXISTING CONTENT BELOW */}

    </main>
  );
}
export default function BillingPage() {
  return (
    <main className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-10">
        Billing & Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "₹4,999" },
          { name: "Growth", price: "₹14,999" },
          { name: "Enterprise", price: "Custom" },
        ].map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl p-6 bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-2xl my-4">{plan.price}</p>

            <button className="w-full py-2 bg-blue-500 text-black rounded-xl hover:bg-blue-400">
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
