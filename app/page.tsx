"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative px-6 py-16 max-w-7xl mx-auto text-white">

      {/* ================= HERO ================= */}
      <section className="text-center mb-28">
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

      {/* ================= AI AGENTS ================= */}
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
              desc: "Qualify leads and convert conversations 24/7.",
            },
            {
              icon: Headset,
              title: "Customer Experience",
              desc: "AI-powered support on WhatsApp & web chat.",
            },
            {
              icon: CreditCard,
              title: "Collections",
              desc: "Automated reminders and renewals.",
            },
            {
              icon: Bot,
              title: "Agent Assist",
              desc: "Real-time AI suggestions for teams.",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              desc: "Track revenue impact and AI efficiency.",
            },
            {
              icon: Building2,
              title: "Internal Help Desk",
              desc: "Instant employee query resolution.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl p-8 border border-white/10 bg-white/5 hover:border-blue-400 transition-all"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-sm opacity-0 group-hover:opacity-100 transition rounded-2xl p-6 text-center">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRICING PREVIEW ================= */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Simple Transparent Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "₹2,999 / month" },
            { name: "Growth", price: "₹9,999 / month" },
            { name: "Enterprise", price: "Custom" },
          ].map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-blue-400 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <Link
                href="/pricing"
                className="block bg-blue-500 text-black py-2 rounded-lg"
              >
                View Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
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
            "The best AI automation platform we’ve used."
          ][testimonialIndex]}
        </motion.div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mb-32 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "How does Resultify AI work?",
            a: "We deploy AI agents across marketing, sales, support and analytics."
          },
          {
            q: "Is WhatsApp supported?",
            a: "Yes. WhatsApp integration is fully supported."
          },
          {
            q: "Is billing automated?",
            a: "Stripe handles subscriptions and usage billing."
          }
        ].map((faq, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl bg-white/5 mb-4"
          >
            <button
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              className="w-full p-6 text-left flex justify-between font-semibold"
            >
              {faq.q}
              <span>{openFAQ === i ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openFAQ === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-400"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <p className="text-gray-400 mb-8">
          Join businesses automating sales, support, and growth using Resultify.
        </p>

        <button
          onClick={() => setOpenChat(true)}
          className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Try AI Demo
        </button>
      </section>

      {openChat && <AIDemoPopup onClose={() => setOpenChat(false)} />}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919717188869"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

    </main>
  );
}
