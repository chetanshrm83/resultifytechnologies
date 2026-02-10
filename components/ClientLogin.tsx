"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ClientLogin() {
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
    <main style={{ padding: 40 }}>
      <h1>Client Login</h1>

      {sent ? (
        <p>✅ Magic link sent. Check your email.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10, marginRight: 10 }}
          />
          <button onClick={login} disabled={loading}>
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
        </>
      )}
    </main>
  );
}
