"use client";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-md p-6 bg-white/5 border border-white/10 rounded-xl">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          🎉 Payment Successful
        </h1>
        <p className="text-gray-300 mb-6">
          Your subscription is active. Welcome to Resultify!
        </p>
        <Link
          href="/client"
          className="inline-block px-6 py-3 bg-blue-500 text-black rounded-lg font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
