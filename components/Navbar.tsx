"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Resultify" className="w-8 h-8" />
          <span className="font-semibold text-lg">
            Resultify
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/client"
          className="px-4 py-2 bg-blue-500 text-black rounded-lg font-semibold hover:bg-blue-400 transition"
        >
          Start Free
        </Link>

      </div>
    </header>
  );
}
