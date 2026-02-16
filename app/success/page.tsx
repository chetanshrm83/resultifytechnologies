import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Payment Successful
        </h1>

        <p className="text-gray-300 mb-6">
          Your subscription is active.
        </p>

        <Link
          href="/client"
          className="px-6 py-3 bg-blue-500 text-black rounded-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
