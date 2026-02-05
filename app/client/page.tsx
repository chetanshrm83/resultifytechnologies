export default function ClientPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Client Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "AI Automations",
          "Usage Analytics",
          "Billing",
          "Support",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:border-primary transition"
          >
            <h3 className="text-lg font-medium">{item}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Manage {item.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
