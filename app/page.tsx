import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            AI Automation for Modern Businesses
          </h1>

          <p className="text-gray-400 mb-8">
            Automate Sales • Support • Customer Chats using AI Agents.
          </p>

          <div className="flex gap-6">
            <Link
              href="/client"
              className="px-6 py-3 bg-blue-500 rounded-xl text-black font-semibold"
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
        </div>

        <div>
          <Image
            src="/hero.png"
            alt="AI Automation"
            width={700}
            height={500}
            className="rounded-2xl"
            priority
          />
        </div>

      </section>
    </main>
  );
}
