import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Resultify Technologies",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    title: "Resultify Technologies",
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

        <main>{children}</main>

        <footer className="border-t border-white/10 mt-24 bg-black/40 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">

    {/* Column 1 – Company */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Company</h4>
      <ul className="space-y-2 text-gray-400">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/press">Press</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </div>

    {/* Column 2 – Legal */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Legal</h4>
      <ul className="space-y-2 text-gray-400">
        <li><Link href="/terms">Terms</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li><Link href="/refund">Refund</Link></li>
        <li><Link href="/cancellation">Cancellation</Link></li>
        <li><Link href="/cookie-policy">Cookie Policy</Link></li>
      </ul>
    </div>

    {/* Column 3 – Support */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Support</h4>
      <ul className="space-y-2 text-gray-400">
        <li><Link href="/help-center">Help Center</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>
          <button className="text-left" onClick={() => window.scrollTo(0, 0)}>
            Live Chat
          </button>
        </li>
        <li><Link href="/faq">FAQ</Link></li>
      </ul>
    </div>

    {/* Column 4 – Resources */}
    <div>
      <h4 className="font-semibold mb-4 text-white">Resources</h4>
      <ul className="space-y-2 text-gray-400">
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/case-studies">Case Studies</Link></li>
        <li><Link href="/api-docs">API Docs</Link></li>
        <li><Link href="/status">Status Page</Link></li>
        <li><Link href="/newsletter">Newsletter</Link></li>
      </ul>
    </div>

  </div>

  <div className="border-t border-white/10 py-6 text-center text-gray-500 text-xs">
    © {new Date().getFullYear()} Powered by Resultify Technologies
  </div>
</footer>
      </body>
    </html>
  );
}
