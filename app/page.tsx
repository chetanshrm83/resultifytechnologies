"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="text-center py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Automate marketing, sales, support, collections and analytics
          using intelligent AI agents.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/client"
            className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Get Started
          </Link>

          <Link
            href="/client/billing"
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            View Plans
          </Link>
        </div>
      </section>

      {/* AI AGENTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Marketing & Sales",
            "Customer Experience",
            "Collections",
            "Agent Assist",
            "Analytics",
            "Internal Help Desk",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl p-8 bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-400">
        Powered by Resultify Technologies
      </footer>
    </main>
  );
}
