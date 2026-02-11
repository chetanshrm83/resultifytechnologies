"use client";

export default function BillingPage() {
  async function subscribe(priceId: string) {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({ priceId }),
    });

    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <div>
      <h1 className="text-3xl mb-6">Billing</h1>

      <button
        onClick={() => subscribe("price_1Sz57SD088qJHJk9sSxyUVfr")}
        className="block mb-4 px-6 py-3 bg-blue-500 text-black rounded"
      >
        Starter – ₹4,999
      </button>

      <button
        onClick={() => subscribe("price_1Sz58DD088qJHJk97OJ0IVDC")}
        className="px-6 py-3 bg-blue-500 text-black rounded"
      >
        Growth – ₹14,999
      </button>
    </div>
  );
}
