"use client";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-6">
        Contact Sales
      </h1>

      <p className="text-gray-400 mb-10">
        Want a custom plan, white-label access, or enterprise support?
        Talk to our team.
      </p>

      <div className="space-y-4">
        <input
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded bg-slate-800 border border-white/10"
        />
        <input
          placeholder="Work Email"
          className="w-full px-4 py-3 rounded bg-slate-800 border border-white/10"
        />
        <textarea
          placeholder="Tell us about your business"
          rows={4}
          className="w-full px-4 py-3 rounded bg-slate-800 border border-white/10"
        />

        <button className="px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition">
          Submit
        </button>
      </div>
    </main>
  );
}
