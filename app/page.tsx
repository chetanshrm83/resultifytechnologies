export default function Home() {
  return (
    <section className="max-w-6xl mx-auto text-center mt-20">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        AI Automation for Modern Businesses
      </h1>

      <p className="mt-6 text-lg text-gray-400">
        Resultify helps businesses automate sales, support, and operations
        using intelligent AI systems.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <a
          href="/client"
          className="px-6 py-3 rounded-xl bg-primary text-black font-medium hover:opacity-90"
        >
          Client Login
        </a>

        <a
          href="/admin"
          className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10"
        >
          Admin Login
        </a>
      </div>
    </section>
  );
}
