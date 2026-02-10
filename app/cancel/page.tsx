"use client";
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-md p-6 bg-white/5 border border-white/10 rounded-xl">
        <h1 className="text-3xl font-bold text-red-400 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-300 mb-6">
          No worries — you can try again anytime.
        </p>
        <Link
          href="/client/billing"
          className="inline-block px-6 py-3 border border-white/20 rounded-lg"
        >
          Back to Billing
        </Link>
      </div>
    </main>
  );
}
