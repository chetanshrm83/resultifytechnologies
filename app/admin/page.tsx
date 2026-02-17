"use client";

import RevenueChart from "@/components/RevenueChart";

export default function AdminPage() {
  return (
    <main className="max-w-6xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Total Clients", value: "42" },
          { label: "Monthly Revenue", value: "₹3,20,000" },
          { label: "Active Automations", value: "128" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl p-6 bg-white/5 border border-white/10"
          >
            <p className="text-gray-400">{item.label}</p>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
        <h2 className="text-xl font-semibold mb-6">
          Revenue Overview
        </h2>
        <RevenueChart />
      </div>
    </main>
  );
}
