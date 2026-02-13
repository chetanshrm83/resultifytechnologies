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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Billing</h1>

      <button
        onClick={() =>
          subscribe("price_1Sz57SD088qJHJk9sSxyUVfr")
        }
        className="px-6 py-3 bg-blue-500 text-black rounded-xl"
      >
        Subscribe Starter
      </button>
    </div>
  );
}
