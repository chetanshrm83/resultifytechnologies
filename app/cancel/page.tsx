import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-red-400 mb-4">
        Payment Cancelled
      </h1>

      <Link
        href="/client/billing"
        className="px-6 py-3 border border-white/20 rounded-xl"
      >
        Back to Billing
      </Link>
    </div>
  );
}
