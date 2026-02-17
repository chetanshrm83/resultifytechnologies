"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Megaphone,
  Headset,
  CreditCard,
  Bot,
  BarChart3,
  Building2,
} from "lucide-react";

export default function HomePage() {
  const [openChat, setOpenChat] = useState(false);

  const agents = [
    {
      icon: Megaphone,
      title: "Marketing & Sales",
      desc: "Qualify leads, answer queries, and convert conversations 24/7 using AI automation.",
    },
    {
      icon: Headset,
      title: "Customer Experience",
      desc: "Deliver instant AI-powered support across WhatsApp and website chat.",
    },
    {
      icon: CreditCard,
      title: "Collections",
      desc: "Automate renewals, reminders, and payment follow-ups intelligently.",
    },
    {
      icon: Bot,
      title: "Agent Assist",
      desc: "Provide real-time AI suggestions and summaries for support teams.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Track revenue impact, performance, and AI efficiency in real time.",
    },
    {
      icon: Building2,
      title: "Internal Help Desk",
      desc: "Answer employee queries and SOP documentation instantly.",
    },
  ];

  return (
    <main className="text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          AI Automation for Modern Businesses
        </motion.h1>

        <p className="text-gray-400 max-w-2xl mb-8">
          Automate marketing, sales, support, collections and analytics —
          powered by intelligent AI agents.
        </p>

        <div className="flex gap-6">
          <Link
            href="/client"
            className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Start Free
          </Link>

          <button
            onClick={() => setOpenChat(true)}
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Try AI Demo
          </button>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          { label: "Conversations Automated", value: 124000 },
          { label: "Revenue Generated", value: 3200000, prefix: "₹" },
          { label: "Businesses Using Resultify", value: 420 },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl p-8 bg-white/5 border border-white/10"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {item.prefix || ""}
              <CountUp end={item.value} duration={2} separator="," />
            </h3>
            <p className="text-gray-400 mt-3">{item.label}</p>
          </div>
        ))}
      </section>

      {/* AI AGENTS SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-8 border border-white/10 
                         bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10
                         hover:border-blue-400 hover:scale-105 transition-all duration-500
                         cursor-pointer overflow-hidden"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-125" />

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <div className="absolute inset-0 flex items-center justify-center 
                              bg-black/90 text-gray-300 text-sm opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 
                              rounded-2xl p-6 text-center">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <p className="text-gray-400 mb-8">
          Join businesses automating sales, support, and growth using Resultify.
        </p>

        <Link
          href="/client"
          className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Get Started
        </Link>
      </section>

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

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        WhatsApp
      </a>
    </main>
  );
}
