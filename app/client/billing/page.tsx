"use client";

export default function BillingPage() {
  const subscribe = async (priceId: string) => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      desc: "Basic AI automation",
      priceId: "price_1Sz57SD088qJHJk9sSxyUVfr",
    },
    {
      name: "Growth",
      price: "₹14,999",
      desc: "WhatsApp + analytics",
      priceId: "price_1Sz58DD088qJHJk97OJ0IVDC",
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "White-label + SLA",
      priceId: null,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-semibold mb-8">Billing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-medium">{plan.name}</h3>
            <p className="text-3xl my-4">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.desc}</p>

            {plan.priceId ? (
              <button
                onClick={() => subscribe(plan.priceId)}
                className="w-full py-2 rounded-xl bg-blue-500 text-black font-medium hover:bg-blue-400"
              >
                Upgrade
              </button>
            ) : (
              <button className="w-full py-2 rounded-xl border border-white/20">
                Contact Sales
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
