"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabaseClient";

export default function HomePage() {
  const router = useRouter();

  // 🔐 Redirect logged-in users to dashboard
  useEffect(() => {
    const checkAuth = async () => {
      const supabase = getSupabase();
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace("/client");
    };
    checkAuth();
  }, [router]);

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Automation for Modern Businesses
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Resultify helps businesses automate conversations, sales, support,
          billing, and reporting using AI — across WhatsApp, websites, and
          internal workflows.
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

      {/* BRAND STRIP */}
      <section className="mb-24 text-center">
        <p className="text-sm text-gray-400 mb-6">
          Trusted by growing teams & agencies
        </p>

        <div className="flex flex-wrap justify-center gap-6 opacity-80">
          {["E-Commerce", "SaaS", "Agencies", "Education", "Healthcare"].map(
            (brand) => (
              <div
                key={brand}
                className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-sm"
              >
                {brand}
              </div>
            )
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "AI Chat Automation",
            desc: "Automate WhatsApp and website conversations with AI agents trained for your business.",
          },
          {
            title: "Usage & Revenue Analytics",
            desc: "Track AI usage, conversations, and revenue impact in real time.",
          },
          {
            title: "Stripe Billing",
            desc: "Subscriptions, upgrades, invoices, and payments fully automated.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-blue-400 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How Resultify Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Connect your business",
            "Configure AI automations",
            "Go live on WhatsApp & Web",
            "Track results & scale",
          ].map((step, i) => (
            <div
              key={step}
              className="rounded-xl p-6 bg-white/5 border border-white/10"
            >
              <div className="text-blue-400 font-bold text-2xl mb-3">
                {i + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Trusted by Growing Businesses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit Verma",
              role: "Founder, E-commerce Brand",
              quote:
                "Resultify automated 70% of our WhatsApp queries. Our response time dropped instantly.",
            },
            {
              name: "Sarah Johnson",
              role: "Operations Head, SaaS Startup",
              quote:
                "The analytics and billing automation saved us hours every week.",
            },
            {
              name: "Rahul Mehta",
              role: "Agency Owner",
              quote:
                "White-labeling Resultify became a new revenue stream for us.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 bg-white/5 border border-white/10"
            >
              <p className="text-gray-300 mb-4">“{t.quote}”</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold">{t.name}</span>
                <br />
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-24 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Do I need technical knowledge?",
              a: "No. Resultify is built for non-technical teams.",
            },
            {
              q: "Does it support WhatsApp automation?",
              a: "Yes. WhatsApp, website chat, and workflows are supported.",
            },
            {
              q: "Is billing automated?",
              a: "Yes. Stripe handles subscriptions and payments.",
            },
            {
              q: "Can agencies white-label Resultify?",
              a: "Yes. Available on Enterprise plans.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl p-5 bg-white/5 border border-white/10"
            >
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Automate Your Business?
        </h2>
        <p className="text-gray-400 mb-8">
          Start with Resultify today and let AI handle conversations, billing,
          and growth.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/client"
            className="px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
          >
            Start Free
          </Link>

          <Link
            href="/client/billing"
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
