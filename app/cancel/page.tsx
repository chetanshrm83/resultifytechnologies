import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-300 mb-6">
          No charges were made.
        </p>

        <Link
          href="/client/billing"
          className="px-6 py-3 border border-white/20 rounded-xl"
        >
          Back to Billing
        </Link>
      </div>
    </main>
  );
}
