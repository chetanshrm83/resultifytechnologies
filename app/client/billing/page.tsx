"use client";

export default function BillingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Billing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Starter", price: "₹4,999", desc: "Basic AI automation" },
          { name: "Growth", price: "₹14,999", desc: "WhatsApp + analytics" },
          { name: "Enterprise", price: "Custom", desc: "White-label + SLA" },
        ].map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-medium">{plan.name}</h3>
            <p className="text-3xl my-4">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.desc}</p>

            <button className="w-full py-2 rounded-xl bg-blue-500 text-black font-medium hover:bg-blue-400 transition">
              Upgrade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
