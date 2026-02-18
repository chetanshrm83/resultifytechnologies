import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Resultify Technologies",
  description: "AI Automation for Modern Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white min-h-screen">

        {/* GLOBAL NAVBAR */}
        <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <img src="/logo.png" className="w-8" alt="logo" />
              Resultify
            </Link>

            <div className="flex gap-6 text-sm">
              <Link href="/client">Client</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/investor">Investor</Link>
              <Link href="/faq">FAQ</Link>
            </div>

          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 text-center py-6 text-sm text-gray-400 mt-20">
          © {new Date().getFullYear()} Powered by Resultify Technologies
        </footer>

      </body>
    </html>
  );
}
