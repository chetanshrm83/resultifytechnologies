"use client";

export const dynamic = "force-dynamic";

import React from "react";

export default function SupportPage() {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Support Center</h1>

      {/* KEEP YOUR EXISTING CONTENT BELOW */}

    </main>
  );
}
     <div className="rounded-2xl p-6 bg-white/5 border border-white/10 space-y-4">
        <p className="text-gray-400">
          Need help? Reach out to us:
        </p>

        <ul className="text-sm text-gray-300 space-y-2">
          <li>📧 Email: support@resultify.io</li>
          <li>💬 WhatsApp: +91-XXXXXXXXXX</li>
          <li>⏱ SLA: 24 business hours</li>
        </ul>
      </div>
    </div>
  );
}
