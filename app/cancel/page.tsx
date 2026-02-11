import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-8">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-300 mb-6">
          Your payment was not completed. No charges were made.
          You can try again anytime.
        </p>

        <Link
          href="/client/billing"
          className="inline-block px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
        >
          Back to Billing
        </Link>
      </div>
    </main>
  );
}
