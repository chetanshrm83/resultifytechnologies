"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard/metrics", {
      method: "POST",
      body: JSON.stringify({ userId: "demo" }),
    })
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  if (!metrics) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-white/5 rounded-xl">
        <h2 className="text-3xl font-bold">{metrics.messages}</h2>
        <p>Messages</p>
      </div>

      <div className="p-6 bg-white/5 rounded-xl">
        <h2 className="text-3xl font-bold">{metrics.tokens}</h2>
        <p>Tokens Used</p>
      </div>

      <div className="p-6 bg-white/5 rounded-xl">
        <h2 className="text-3xl font-bold">₹{metrics.revenue}</h2>
        <p>Revenue</p>
      </div>
    </div>
  );
}
