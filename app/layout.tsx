import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resultify AI",
  description: "AI Automation for Modern Businesses",
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
        <header className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Resultify Logo"
                width={36}
                height={36}
                priority
              />
              <span className="text-xl font-semibold">Resultify</span>
            </Link>

            {/* NAV LINKS */}
            <nav className="flex gap-8 text-sm">
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
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}
