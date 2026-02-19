"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Megaphone,
  Headset,
  CreditCard,
  Bot,
  BarChart3,
  Building2,
} from "lucide-react";
import AIDemoPopup from "@/components/AIDemoPopup";

export default function HomePage() {
  const [openChat, setOpenChat] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative px-6 py-20 max-w-7xl mx-auto text-white">

      {/* HERO */}
      <section className="text-center mb-28 relative">

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />

        <motion.img
          src="/logo.png"
          alt="Resultify Logo"
          className="mx-auto mb-6 w-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          AI Automation for Modern Businesses
        </motion.h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Resultify automates marketing, sales, support, collections and analytics using AI.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/client"
            className="px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Start Free Trial
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* AI AGENTS */}
      <section id="agents" className="mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Megaphone, title: "Marketing & Sales", desc: "Qualify leads 24/7." },
            { icon: Headset, title: "Customer Experience", desc: "AI WhatsApp support." },
            { icon: CreditCard, title: "Collections", desc: "Automated renewals." },
            { icon: Bot, title: "Agent Assist", desc: "AI suggestions for teams." },
            { icon: BarChart3, title: "Analytics", desc: "Revenue tracking." },
            { icon: Building2, title: "Internal Help Desk", desc: "Employee automation." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl p-8 border border-white/10 bg-white/5 hover:border-blue-400 transition"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-sm opacity-0 group-hover:opacity-100 transition rounded-2xl p-6 text-center">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Simple Transparent Pricing
        </h2>

        <div className="flex justify-center mb-12 gap-6">
          <button onClick={() => setYearly(false)} className={!yearly ? "font-bold" : "text-gray-400"}>
            Monthly
          </button>
          <button onClick={() => setYearly(true)} className={yearly ? "font-bold" : "text-gray-400"}>
            Yearly (Save 20%)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: yearly ? "₹28,800 / year" : "₹2,999 / month" },
            { name: "Growth", price: yearly ? "₹95,000 / year" : "₹9,999 / month" },
            { name: "Enterprise", price: "Custom" },
          ].map((plan) => (
            <div key={plan.name} className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <Link href="/pricing" className="block bg-blue-500 text-black py-2 rounded-lg">
                View Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Businesses Say
        </h2>

        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg"
        >
          {[
            "Resultify automated 70% of our support instantly.",
            "Our WhatsApp sales doubled in 2 months.",
            "Best AI automation platform."
          ][testimonialIndex]}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <button
          onClick={() => setOpenChat(true)}
          className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Try AI Demo
        </button>
      </section>

      {openChat && <AIDemoPopup onClose={() => setOpenChat(false)} />}

      {/* WhatsApp */}
      <a
        href="https://wa.me/919717188869"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </main>
  );
}
