import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      {/* HERO SECTION */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          AI Automation for Modern Businesses
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Resultify helps businesses automate customer conversations,
          sales, support, and reporting using AI — across WhatsApp,
          websites, and internal workflows.
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
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          {
            title: "AI Chat Automation",
            desc: "Automate customer conversations on WhatsApp and your website using intelligent AI agents trained for your business.",
          },
          {
            title: "Usage & Revenue Analytics",
            desc: "Track conversations, AI usage, and revenue impact in real time with a clean, powerful dashboard.",
          },
          {
            title: "Stripe Billing & Plans",
            desc: "Built-in subscriptions, upgrades, and billing powered by Stripe — fully automated.",
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
            "Go live on WhatsApp & web",
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
                "Resultify helped us automate 70% of customer queries on WhatsApp. Our response time dropped instantly.",
            },
            {
              name: "Sarah Johnson",
              role: "Operations Head, SaaS Startup",
              quote:
                "The AI automation and analytics dashboard gives us complete visibility. Billing and scaling is effortless.",
            },
            {
              name: "Rahul Mehta",
              role: "Agency Owner",
              quote:
                "We white-labeled Resultify for our clients. It’s now a core revenue stream for our agency.",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 bg-white/5 border border-white/10"
            >
              <p className="text-gray-300 mb-4">“{t.quote}”</p>
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">{t.name}</span>
                <br />
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Automate Your Business?
        </h2>
        <p className="text-gray-400 mb-6">
          Start with Resultify today and let AI handle conversations, support,
          and growth.
        </p>

        <Link
          href="/client"
          className="inline-block px-8 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Start Free
        </Link>
      </section>
    </main>
  );
}
