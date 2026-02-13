"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ClientPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + "/client",
      },
    });

    if (!error) setSent(true);
    else alert(error.message);
  };

  return (
    <div className="max-w-xl mx-auto text-center py-20">
      <h1 className="text-3xl font-bold mb-6">Client Login</h1>

      {sent ? (
        <p className="text-green-400">Magic link sent. Check email.</p>
      ) : (
        <div className="flex gap-3 justify-center">
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
    </div>
  );
}
