"use client";

export default function SupportPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Support</h1>

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
