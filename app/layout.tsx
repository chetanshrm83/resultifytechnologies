import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <header className="flex justify-between px-8 py-4 border-b border-white/10">
          <h1 className="font-semibold">Resultify</h1>
          <nav className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/client">Client</Link>
            <Link href="/client/billing">Billing</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
