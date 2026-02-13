import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 border-r border-white/10 p-6">
      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/client">Dashboard</Link>
        <Link href="/client/billing">Billing</Link>
      </nav>
    </aside>
  );
}
