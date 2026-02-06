import RevenueChart from "../../components/RevenueChart";
export default function AdminPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Admin Control Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "All Clients",
          "Revenue",
          "Automations",
          "System Logs",
          "Plans",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-accent transition"
          >
            <h3 className="text-lg font-medium">{item}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Manage {item.toLowerCase()}
              <nav className="h-screen w-64 bg-slate-950 border-r border-white/10">
              if (role !== "admin") redirect("/client");

            </p>
          </div>
        ))}
      </div>
    </div>
    <RevenueChart />
  );
}
