import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Resultify Technologies",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">

        {/* NAVBAR */}
        <header className="flex justify-between items-center px-8 py-5 border-b border-white/10">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Resultify Logo"
              width={36}
              height={36}
              priority
            />
            <span className="text-xl font-semibold tracking-wide">
              Resultify
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav className="flex items-center gap-8 text-sm">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/client" className="hover:text-blue-400 transition">
              Client
            </Link>
            <Link href="/client/billing" className="hover:text-blue-400 transition">
              Billing
            </Link>
          </nav>
        </header>

        {children}
        <Analytics />

        {/* FOOTER */}
        <footer className="mt-32 py-8 border-t border-white/10 text-center text-gray-400 text-sm">
          Powered by <span className="text-white font-semibold">Resultify Technologies</span>
        </footer>

      </body>
    </html>
  );
}
