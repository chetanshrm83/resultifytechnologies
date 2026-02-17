"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-32">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold leading-tight"
          >
            AI Automation for <br />
            <span className="text-blue-400">Modern Businesses</span>
          </motion.h1>

          <p className="text-gray-400 mt-6">
            Automate marketing, sales, support, collections,
            analytics and internal workflows using AI agents.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/client"
              className="px-6 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition"
            >
              Start Free
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
            >
              Talk to Sales
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/hero.png"
            alt="AI Automation"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </motion.div>
      </section>

      {/* AI AGENTS SECTION */}
      <section className="mb-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            "Marketing & Sales",
            "Customer Experience",
            "Collections",
            "Agent Assist",
            "Analytics",
            "Internal Help Desk",
          ].map((title) => (
            <div
              key={title}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400 transition"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>

        <Link
          href="/client"
          className="px-8 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition"
        >
          Get Started Now
        </Link>
      </section>

    </main>
  );
}
