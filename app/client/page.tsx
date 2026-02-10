"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { getSupabase } from "../../lib/supabaseClient";

export default function ClientPage() {
  const supabase = getSupabase();

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email) return alert("Please enter an email");

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo:
          "https://resultifytechnologies-lhud.vercel.app/client",
      },
    });

    setLoading(false);

    if (error) alert(error.message);
    else setSent(true);
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-semibold mb-6">Client Login</h1>

      {sent ? (
        <p className="text-green-400">
          ✅ Magic link sent. Check your email.
        </p>
      ) : (
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded bg-slate-800 border border-white/10"
          />
          <button
            onClick={login}
            disabled={loading}
            className="px-4 py-2 rounded bg-blue-500 text-black font-medium hover:bg-blue-400"
          >
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
        </div>
      )}
    </main>
  );
}
