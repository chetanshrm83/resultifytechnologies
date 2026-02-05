import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <header className="flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/resultify-logo.png"
              alt="Resultify"
              width={42}
              height={42}
            />
            <span className="text-xl font-semibold text-white">
              Resultify
            </span>
          </div>

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/client" className="hover:text-primary">Client</Link>
            <Link href="/admin" className="hover:text-primary">Admin</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
