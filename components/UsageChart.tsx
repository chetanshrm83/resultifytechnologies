"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", usage: 120 },
  { day: "Tue", usage: 200 },
  { day: "Wed", usage: 150 },
  { day: "Thu", usage: 300 },
  { day: "Fri", usage: 250 },
];

export default function UsageChart() {
  return (
    <div className="h-64 bg-white/5 rounded-2xl p-4 border border-white/10">
      <h3 className="mb-4">Weekly Usage</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="usage" stroke="#0ea5e9" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
