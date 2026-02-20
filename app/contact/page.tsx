"use client";

export const dynamic = "force-dynamic";

import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      {/* KEEP YOUR EXISTING CONTENT BELOW */}

    </main>
  );
}

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
