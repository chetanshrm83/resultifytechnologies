"use client";

import RevenueChart from "../../components/RevenueChart";

export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">
        Admin Control Panel
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <h3 className="text-lg font-medium">Total Clients</h3>
          <p className="text-3xl mt-4">42</p>
        </div>

        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <h3 className="text-lg font-medium">Monthly Revenue</h3>
          <p className="text-3xl mt-4">₹3,20,000</p>
        </div>

        <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
          <h3 className="text-lg font-medium">Active Automations</h3>
          <p className="text-3xl mt-4">128</p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl p-6 bg-white/5 border border-white/10">
        <h2 className="text-xl font-semibold mb-4">
          Revenue Overview
        </h2>
        <RevenueChart />
      </div>
    </div>
  );
}
