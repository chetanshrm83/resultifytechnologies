"use client";

import { useState } from "react";
// import { supabase } from "../../lib/supabaseClient";

export default function ClientPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const login = async () => {
  alert("Supabase temporarily disabled for test");
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
          <button onClick={login}>Send Magic Link</button>
        </>
      )}
    </main>
  );
}
