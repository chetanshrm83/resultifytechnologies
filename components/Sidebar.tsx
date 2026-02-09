import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-white/10 p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-8 text-white">
        Resultify
      </h2>

      <nav className="flex flex-col gap-4 text-sm text-gray-300">
        <Link
          href="/client"
          className="hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/client/usage"
          className="hover:text-blue-400 transition"
        >
          Usage
        </Link>

        <Link
          href="/client/billing"
          className="hover:text-blue-400 transition"
        >
          Billing
        </Link>

        <Link
          href="/client/support"
          className="hover:text-blue-400 transition"
        >
          Support
        </Link>
      </nav>
    </aside>
  );
}
