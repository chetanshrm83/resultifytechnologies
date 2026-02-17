"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Megaphone, Headset, CreditCard, Bot, BarChart3, Building2 } from "lucide-react";

export default function HomePage() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <main className="relative text-white bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Resultify" width={40} height={40} />
          <span className="text-xl font-bold">Resultify</span>
        </Link>

        <div className="flex gap-8 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/client">Client</Link>
          <Link href="/client/billing">Billing</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-28 text-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          AI Automation for
          <span className="text-blue-400"> Modern Businesses</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Automate marketing, sales, support, collections, and analytics using
          intelligent AI agents built for scale.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <Link
            href="/client"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-400 rounded-xl font-semibold text-black transition"
          >
            Start Free Trial
          </Link>

          <button
            onClick={() => setOpenChat(true)}
            className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            Try AI Demo
          </button>
        </div>
      </section>

      {/* METRICS */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-32 text-center">
        {[
          { label: "Conversations Automated", value: "124K+" },
          { label: "Revenue Generated", value: "₹32M+" },
          { label: "Businesses Using Resultify", value: "420+" },
        ].map((item) => (
          <div key={item.label} className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-4xl font-bold text-blue-400">{item.value}</h3>
            <p className="text-gray-400 mt-3">{item.label}</p>
          </div>
        ))}
      </section>

      {/* AI AGENTS */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center mb-14">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400 transition-all"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTOR DASHBOARD PREVIEW */}
      <section className="text-center mb-32 px-6">
        <h2 className="text-4xl font-bold mb-8">Investor-Grade Dashboard</h2>
        <div className="max-w-5xl mx-auto rounded-3xl p-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
          <p className="text-gray-400 mb-6">
            Real-time revenue tracking, AI usage, subscription analytics, and customer insights.
          </p>
          <div className="h-40 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center">
            Live SaaS Analytics View
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-6">Ready to Scale With AI?</h2>
        <p className="text-gray-400 mb-8">
          Join businesses automating sales, support, and growth.
        </p>

        <Link
          href="/client"
          className="px-10 py-4 bg-blue-500 hover:bg-blue-400 rounded-xl font-semibold text-black transition"
        >
          Start Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Powered by Resultify Technologies
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

      {/* AI DEMO POPUP */}
      {openChat && (
        <div className="fixed bottom-6 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenChat(false)}>✕</button>
          </div>
          <div className="text-sm text-gray-400 mb-3">
            👋 Hi! I'm Resultify AI. How can I help your business today?
          </div>
          <input
            placeholder="Type a message..."
            className="w-full px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm"
          />
        </div>
      )}
    </main>
  );
}
