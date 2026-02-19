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
<section className="mb-28 relative">

  {/* Animated Glow Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />

  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-left">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        AI that builds, scales, and delivers.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 mb-8 max-w-xl"
      >
        Your partner in growth transforming complexity into streamlined success.
      </motion.p>

      <div className="flex gap-4">
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
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center md:justify-end"
    >
      <img
        src="/hero.png"
        alt="AI Automation"
        className="w-80 md:w-96 rounded-2xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-500"
        style={{
          transform: "perspective(1000px) rotateY(-6deg)",
        }}
      />
    </motion.div>

  </div>
</section>
 {/* AI AGENTS */}
      <section className="mb-32">
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
{/* ================= TESTIMONIALS ================= */}
<section className="mb-32 text-center">
  <h2 className="text-3xl md:text-5xl font-bold mb-12">
    Trusted by Modern Businesses
  </h2>

  <div className="relative max-w-3xl mx-auto overflow-hidden">
    <motion.div
      key={testimonialIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-10"
    >
      <p className="text-gray-300 text-lg mb-6">
        {
          [
            "Resultify automated 70% of our support instantly and reduced operational cost by 35%.",
            "Our WhatsApp conversions doubled within 2 months after deploying AI agents.",
            "Investor reporting and revenue tracking became effortless with Resultify.",
          ][testimonialIndex]
        }
      </p>

      <div className="text-blue-400 font-semibold">
        {
          [
            "Rahul Mehta – SaaS Founder",
            "Anjali Sharma – E-commerce CEO",
            "David Collins – Venture Partner",
          ][testimonialIndex]
        }
      </div>
    </motion.div>
  </div>
</section>

      {/* FAQ */}
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
          <div key={i} className="border border-white/10 rounded-xl bg-white/5 mb-4 p-6">
            <h3 className="font-semibold mb-2">{faq.q}</h3>
            <p className="text-gray-400">{faq.a}</p>
          </div>
        ))}
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
