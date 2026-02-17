"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, Headset, CreditCard, Bot, BarChart3, Building2 } from "lucide-react";

export default function HomePage() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto text-white relative">

      {/* HERO */}
      <section className="text-center mb-28">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Resultify automates marketing, sales, support, collections and analytics using AI.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/client"
            className="px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Get Started
          </Link>

          <button
            onClick={() => setOpenChat(true)}
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Try AI Demo
          </button>
        </div>
      </section>

      {/* AI AGENTS */}
      <section className="mb-28">
        <h2 className="text-4xl font-bold text-center mb-6">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { icon: Megaphone, title: "Marketing & Sales" },
            { icon: Headset, title: "Customer Experience" },
            { icon: CreditCard, title: "Collections" },
            { icon: Bot, title: "Agent Assist" },
            { icon: BarChart3, title: "Analytics" },
            { icon: Building2, title: "Internal Help Desk" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-blue-400 transition"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <Link
          href="/client/billing"
          className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold"
        >
          View Pricing
        </Link>
      </section>

      {/* AI DEMO POPUP */}
      {openChat && (
        <div className="fixed bottom-6 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenChat(false)}>✕</button>
          </div>
          <p className="text-sm text-gray-400">
            👋 Hi! I'm Resultify AI.
          </p>
        </div>
      )}
    </main>
  );
}
