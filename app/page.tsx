"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        AI Automation for Modern Businesses
      </h1>

      <p className="text-gray-400 mb-8">
        Automate WhatsApp, customer support & billing using AI.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href="/client"
          className="px-6 py-3 bg-blue-500 text-black rounded-xl"
        >
          Get Started
        </Link>

        <Link
          href="/client/billing"
          className="px-6 py-3 border border-white/20 rounded-xl"
        >
          View Pricing
        </Link>
      </div>
    </main>
  );
}
