"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Resultify" className="w-8 h-8" />
          <span className="font-semibold tracking-wide">
            Resultify
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#agents" className="hover:text-white transition">
            AI Agents
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
          <Link href="/client" className="hover:text-white transition">
            Dashboard
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/client"
          className="hidden md:block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
        >
          Start Free Trial
        </Link>
      </div>
    </motion.header>
  );
}
