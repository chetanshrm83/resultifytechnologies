"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ClientPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/";
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Client Dashboard</h1>
      <p>Logged in as {user.email}</p>

      <ul>
        <li>AI Automations</li>
        <li>Usage Analytics</li>
        <li>Billing</li>
        <li>Support</li>
      </ul>

      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
    </main>
  );
}
