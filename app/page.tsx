"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  Headset,
  CreditCard,
  Bot,
  BarChart3,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto text-white">

      {/* HERO */}
      <section className="text-center mb-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Resultify helps businesses automate customer conversations, sales,
          support, collections, analytics, and internal workflows using AI.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/client"
            className="px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Get Started
          </Link>

          <Link
            href="/client/billing"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>
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

        <div className="grid md:grid-cols-3 gap-8">
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
              desc: "Real-time AI suggestions and summaries for teams.",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-blue-400 hover:-translate-y-2 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compare Plans
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4">Features</th>
                <th className="p-4">Starter</th>
                <th className="p-4">Growth</th>
                <th className="p-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["AI Chat Automation", "✓", "✓", "✓"],
                ["WhatsApp Integration", "-", "✓", "✓"],
                ["Advanced Analytics", "-", "✓", "✓"],
                ["White-label", "-", "-", "✓"],
                ["Dedicated SLA", "-", "-", "✓"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  {row.map((cell, idx) => (
                    <td key={idx} className="p-4 text-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ENTERPRISE CTA */}
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

          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Talk to Sales
          </Link>
        </div>
      </section>

    </main>
  );
}
