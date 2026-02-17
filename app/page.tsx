"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <main className="relative px-6 py-20 max-w-7xl mx-auto">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            AI Automation for
            <span className="text-blue-400 block mt-2">
              Modern Businesses
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-6 text-lg">
            Automate marketing, sales, support, collections and analytics using AI agents.
          </p>

          <div className="flex gap-6 mt-8">
            <Link
              href="/client"
              className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpenDemo(true)}
              className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Try AI Demo
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/hero.png"
            alt="AI Automation"
            width={800}
            height={500}
            className="rounded-2xl shadow-2xl"
            priority
          />
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="grid md:grid-cols-3 gap-8 mt-32 text-center">
        {[
          { value: "124K+", label: "Conversations Automated" },
          { value: "₹3.2Cr+", label: "Revenue Generated" },
          { value: "420+", label: "Businesses Using Resultify" },
        ].map((item) => (
          <div
            key={item.label}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {item.value}
            </h3>
            <p className="text-gray-400 mt-3">{item.label}</p>
          </div>
        ))}
      </section>

      {/* INVESTOR SECTION */}
      <section className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Investor Ready AI Infrastructure
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recurring revenue via Stripe subscriptions. AI-powered automation.
          SaaS-ready architecture. Built for scale.
        </p>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        💬
      </a>

      {/* AI DEMO POPUP */}
      {openDemo && (
        <div className="fixed bottom-8 right-8 bg-slate-900 border border-white/10 p-6 rounded-2xl w-80 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenDemo(false)}>✕</button>
          </div>

          <p className="text-sm text-gray-400 mb-3">
            👋 Hi! I'm Resultify AI. How can I help your business today?
          </p>

          <input
            placeholder="Type a message..."
            className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm"
          />
        </div>
      )}
    </main>
  );
}
