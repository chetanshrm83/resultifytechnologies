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
    <main className="px-6 py-16 max-w-7xl mx-auto text-white relative">

      {/* HERO */}
      <section className="text-center mb-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Resultify automates marketing, sales, support, collections and
          analytics using AI.
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

      {/* AI AGENTS SECTION */}
      <section className="mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Deploy AI Agents Across Your Business
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-14">
          Resultify AI agents automate marketing, sales, support, collections,
          analytics, and internal operations.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Megaphone,
              title: "Marketing & Sales",
              desc: "Qualify leads, answer queries, and convert conversations 24/7.",
            },
            {
              icon: Headset,
              title: "Customer Experience",
              desc: "Deliver instant AI-powered support on WhatsApp & web chat.",
            },
            {
              icon: CreditCard,
              title: "Collections",
              desc: "Automate reminders, renewals, and payment follow-ups.",
            },
            {
              icon: Bot,
              title: "Agent Assist",
              desc: "Provide real-time AI suggestions and summaries for teams.",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              desc: "Track revenue impact, performance, and AI efficiency.",
            },
            {
              icon: Building2,
              title: "Internal Help Desk",
              desc: "Answer employee queries and SOPs instantly.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-8 border border-white/10
                         hover:border-blue-400 transition-all duration-300
                         bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <div className="absolute inset-0 flex items-center justify-center 
                              bg-black/80 text-gray-300 text-sm opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 
                              rounded-2xl p-6 text-center">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Trusted by Growing Businesses
        </h2>

        <div className="flex overflow-x-auto gap-6 pb-6">
          {[
            "Resultify automated 70% of our support instantly.",
            "Our WhatsApp sales doubled within 2 months.",
            "White-labeling Resultify became our new revenue stream.",
          ].map((quote, i) => (
            <div
              key={i}
              className="min-w-[300px] rounded-2xl p-6 bg-white/5 border border-white/10"
            >
              <p className="text-gray-300">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <p className="text-gray-400 mb-8">
          Join businesses automating sales, support, and growth using Resultify.
        </p>

        <div className="flex justify-center gap-6">
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
            Talk to Sales
          </button>
        </div>
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
    </main>
  );
}
