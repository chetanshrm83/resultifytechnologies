import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resultify | AI Automation Platform",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    title: "Resultify AI",
    description: "AI Automation for Modern Businesses",
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
      <body className="bg-slate-950 text-white">

        {/* NAVBAR */}
        <header className="border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Resultify Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Resultify</span>
            </Link>

            <nav className="flex gap-6 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/client" className="hover:text-white transition">Client</Link>
              <Link href="/client/billing" className="hover:text-white transition">Billing</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 py-8 text-center text-sm text-gray-500">
          Powered by Resultify Technologies © {new Date().getFullYear()}
        </footer>

      </body>
    </html>
  );
}
