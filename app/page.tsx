"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function HomePage() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Bot className="w-6 h-6 text-blue-400" />
          Resultify
        </Link>

        {/* NAV LINKS */}
        <nav className="flex gap-6 text-sm">
          <Link href="/#features" className="hover:text-blue-400 transition">
            Features
          </Link>
          <Link href="/client/billing" className="hover:text-blue-400 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link
            href="/client"
            className="px-4 py-2 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400 transition"
          >
            Start Free
          </Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24 max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          AI Automation for Modern Businesses
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Resultify automates marketing, sales, support, collections,
          analytics and internal workflows using intelligent AI agents.
        </p>

        <div className="flex justify-center gap-6">

          <Link
            href="/client"
            className="px-8 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition"
          >
            Start Trial
          </Link>

          <button
            onClick={() => setOpenDemo(true)}
            className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            Try AI Demo
          </button>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-24"
      >
        {[
          {
            title: "Marketing & Sales",
            desc: "Convert leads automatically using AI.",
          },
          {
            title: "Customer Experience",
            desc: "24/7 AI support across WhatsApp & Web.",
          },
          {
            title: "Collections",
            desc: "Automated reminders & payment follow-ups.",
          },
          {
            title: "Agent Assist",
            desc: "AI suggestions for your internal teams.",
          },
          {
            title: "Analytics",
            desc: "Real-time dashboards & revenue tracking.",
          },
          {
            title: "Internal Help Desk",
            desc: "Instant SOP & employee assistance.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        Powered by Resultify Technologies
      </footer>

      {/* ================= AI DEMO POPUP ================= */}
      {openDemo && (
        <div className="fixed bottom-6 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenDemo(false)}>✕</button>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            👋 Hi! I’m Resultify AI. Ask me anything.
          </p>

          <input
            placeholder="Type a message..."
            className="w-full px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm"
          />
        </div>
      )}
      import AIDemoPopup from "@/components/AIDemoPopup";
      <AIDemoPopup />
      <a
  href="https://wa.me/919717188869"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
>
  <span className="text-2xl">💬</span>
</a>
    </main>
  );
}
