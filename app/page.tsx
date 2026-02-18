"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto relative">

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
            className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Start Free Trial
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
      <section className="grid md:grid-cols-3 gap-8 text-center mb-32">
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

      {/* AI AGENTS */}
      <section className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Megaphone,
              title: "Marketing & Sales",
              desc: "Qualify leads and convert conversations 24/7.",
            },
            {
              icon: Headset,
              title: "Customer Experience",
              desc: "Instant AI-powered support on WhatsApp & web.",
            },
            {
              icon: CreditCard,
              title: "Collections",
              desc: "Automate reminders and renewals.",
            },
            {
              icon: Bot,
              title: "Agent Assist",
              desc: "Real-time AI suggestions for teams.",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              desc: "Track revenue and AI performance.",
            },
            {
              icon: Building2,
              title: "Internal Help Desk",
              desc: "Answer employee queries instantly.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-blue-400 transition"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition rounded-2xl flex items-center justify-center p-6 text-center text-gray-300">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-10 text-center text-gray-400">
        Powered by Resultify Technologies
      </footer>

      {/* AI POPUP */}
      {openChat && (
        <div className="fixed bottom-6 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-50">
          <div className="flex justify-between mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenChat(false)}>✕</button>
          </div>

          <p className="text-sm text-gray-400">
            👋 Hi! I'm Resultify AI. (Live OpenAI integration comes next.)
          </p>
        </div>
      )}

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}
