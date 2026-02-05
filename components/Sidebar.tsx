import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white/5 border-r border-white/10 p-6 hidden md:block">
      <nav className="space-y-4 text-sm">
        <Link href="/client" className="block hover:text-primary">
          Dashboard
        </Link>
        <Link href="/client/usage" className="block hover:text-primary">
          Usage
        </Link>
        <Link href="/client/billing" className="block hover:text-primary">
          Billing
        </Link>
        <Link href="/client/support" className="block hover:text-primary">
          Support
        </Link>
        <Link href="/client/billing">Billing</Link>
      </nav>
    </aside>
  );
}
