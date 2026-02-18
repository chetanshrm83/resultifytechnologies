"use client";

import { useState } from "react";
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

  const agents = [
    {
      icon: Megaphone,
      title: "Marketing & Sales",
      desc: "Qualify leads and convert conversations automatically 24/7.",
    },
    {
      icon: Headset,
      title: "Customer Experience",
      desc: "Deliver instant AI-powered support across channels.",
    },
    {
      icon: CreditCard,
      title: "Collections",
      desc: "Automate reminders and payment follow-ups.",
    },
    {
      icon: Bot,
      title: "Agent Assist",
      desc: "Real-time AI suggestions for human agents.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      desc: "Track revenue and automation performance.",
    },
    {
      icon: Building2,
      title: "Internal Help Desk",
      desc: "Answer SOP and employee queries instantly.",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-16 max-w-7xl mx-auto text-white">

      {/* HERO */}
      <section className="text-center mb-28">
        <h1 className="text-5xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Resultify automates marketing, sales, support, collections and analytics using AI.
        </p>
      </section>

      {/* AI AGENTS SECTION */}
      <section className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Deploy AI Agents Across Your Business
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl p-8 border border-white/10 hover:border-blue-400 transition-all duration-300 bg-white/5"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />

              <h3 className="text-xl font-semibold">{item.title}</h3>

              {/* Hover Description */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center text-center p-6 text-gray-300 text-sm">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-32">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Scale With AI?
        </h2>
        <button
          onClick={() => setOpenChat(true)}
          className="px-8 py-3 bg-blue-500 text-black rounded-xl"
        >
          Try AI Demo
        </button>
      </section>
    </main>
  );
}
