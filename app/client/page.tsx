"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ClientPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const login = async () => {
    if (!email) return alert("Enter email");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/client`,
      },
    });

    if (error) alert(error.message);
    else setSent(true);
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-semibold mb-6">Client Login</h1>

      {sent ? (
        <p className="text-green-400">Magic link sent. Check email.</p>
      ) : (
        <div className="flex gap-3">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-white/10 rounded"
          />
          <button
            onClick={login}
            className="px-4 py-2 bg-blue-500 text-black rounded"
          >
            Send Link
          </button>
        </div>
      )}
    </main>
  );
}
