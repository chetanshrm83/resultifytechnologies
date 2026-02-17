import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resultify",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    images: "/og.png",
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

        {/* HEADER */}
        <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Resultify Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">Resultify</span>
          </Link>

          <nav className="flex gap-8 text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/client" className="hover:text-white transition">
              Client
            </Link>
            <Link href="/client/billing" className="hover:text-white transition">
              Billing
            </Link>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}
