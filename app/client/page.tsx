"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
const supabase = getSupabase();
export default function ClientLogin() {
  const supabase = getSupabase();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function login() {
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/client`,
      },
    });
    setSent(true);
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Client Login</h1>

      {sent ? (
        <p>✅ Magic link sent</p>
      ) : (
        <>
          <input
            className="px-4 py-2 bg-slate-800 border border-white/10 mr-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <button
            onClick={login}
            className="px-4 py-2 bg-blue-500 text-black rounded"
          >
            Send Link
          </button>
        </>
      )}
    </div>
  );
}
