import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-white/10 p-6">
      <h2 className="text-xl font-bold mb-8">Resultify</h2>

      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/client">Dashboard</Link>
        <Link href="/client/usage">Usage</Link>
        <Link href="/client/billing">Billing</Link>
        <Link href="/client/support">Support</Link>
      </nav>
    </aside>
  );
}
