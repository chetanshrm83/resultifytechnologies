import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-slate-900 p-6">
      <h2 className="text-xl font-bold mb-8">Resultify</h2>

      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/client" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/client/billing" className="hover:text-blue-400">
          Billing
        </Link>
        <Link href="/client/support" className="hover:text-blue-400">
          Support
        </Link>
      </nav>
    </aside>
  );
}
