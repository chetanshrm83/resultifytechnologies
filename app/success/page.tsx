import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-8">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-300 mb-6">
          Your subscription is now active. You can start using Resultify
          immediately.
        </p>

        <Link
          href="/client"
          className="inline-block px-6 py-3 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
