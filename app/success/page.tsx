import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Payment Successful
      </h1>

      <Link
        href="/client"
        className="px-6 py-3 border border-white/20 rounded-xl"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
