"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function HomePage() {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white">

      {/* ================= HEADER ================= */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Bot className="w-6 h-6 text-blue-400" />
          Resultify
        </Link>

        {/* NAV LINKS */}
        <nav className="flex gap-6 text-sm">
          <Link href="/#features" className="hover:text-blue-400 transition">
            Features
          </Link>
          <Link href="/client/billing" className="hover:text-blue-400 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link
            href="/client"
            className="px-4 py-2 bg-blue-500 text-black rounded-lg font-medium hover:bg-blue-400 transition"
          >
            Start Free
          </Link>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24 max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          AI Automation for Modern Businesses
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
          Resultify automates marketing, sales, support, collections,
          analytics and internal workflows using intelligent AI agents.
        </p>

        <div className="flex justify-center gap-6">

          <Link
            href="/client"
            className="px-8 py-3 bg-blue-500 text-black rounded-xl font-semibold hover:bg-blue-400 transition"
          >
            Start Trial
          </Link>

          <button
            onClick={() => setOpenDemo(true)}
            className="px-8 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            Try AI Demo
          </button>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-24"
      >
        {[
          {
            title: "Marketing & Sales",
            desc: "Convert leads automatically using AI.",
          },
          {
            title: "Customer Experience",
            desc: "24/7 AI support across WhatsApp & Web.",
          },
          {
            title: "Collections",
            desc: "Automated reminders & payment follow-ups.",
          },
          {
            title: "Agent Assist",
            desc: "AI suggestions for your internal teams.",
          },
          {
            title: "Analytics",
            desc: "Real-time dashboards & revenue tracking.",
          },
          {
            title: "Internal Help Desk",
            desc: "Instant SOP & employee assistance.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        Powered by Resultify Technologies
      </footer>

      {/* ================= AI DEMO POPUP ================= */}
      {openDemo && (
        <div className="fixed bottom-6 right-6 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 z-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">AI Demo</h4>
            <button onClick={() => setOpenDemo(false)}>✕</button>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            👋 Hi! I’m Resultify AI. Ask me anything.
          </p>

          <input
            placeholder="Type a message..."
            className="w-full px-3 py-2 bg-black/40 rounded-lg border border-white/10 text-sm"
          />
        </div>
      )}
      import AIDemoPopup from "@/components/AIDemoPopup";
      <AIDemoPopup />
      {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919717188869"
  target="_blank"
  rel="noopener noreferrer"
  className="group fixed bottom-6 left-6 z-50"
>
  <div className="relative">

    {/* Pulse Ring */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

    {/* Main Button */}
    <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">

      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
      >
        <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.754 5.698 2.184 8.18L.08 32l7.635-2.084A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.167a13.1 13.1 0 01-6.677-1.842l-.479-.286-4.532 1.237 1.21-4.416-.312-.512A13.058 13.058 0 012.917 16c0-7.214 5.869-13.083 13.083-13.083 7.214 0 13.083 5.869 13.083 13.083 0 7.214-5.869 13.083-13.083 13.083zm7.435-9.823c-.406-.203-2.4-1.183-2.773-1.317-.374-.135-.646-.203-.919.203s-1.055 1.317-1.294 1.588c-.24.271-.48.305-.886.102-.406-.203-1.713-.631-3.262-2.012-1.205-1.074-2.019-2.4-2.256-2.806-.24-.406-.025-.625.178-.827.183-.182.406-.48.609-.72.203-.24.271-.406.406-.677.135-.271.068-.508-.034-.711-.102-.203-.919-2.216-1.26-3.034-.332-.799-.669-.691-.919-.703l-.784-.014c-.271 0-.711.102-1.084.508-.374.406-1.429 1.397-1.429 3.406 0 2.009 1.463 3.951 1.666 4.222.203.271 2.88 4.4 6.976 6.169.974.42 1.734.67 2.327.857.978.31 1.87.266 2.575.161.785-.117 2.4-.98 2.74-1.929.339-.949.339-1.763.237-1.929-.101-.166-.372-.271-.778-.474z"/>
      </svg>
    </div>

    {/* Tooltip */}
    <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      Chat on WhatsApp
    </span>

  </div>
</a>

    </main>
  );
}
