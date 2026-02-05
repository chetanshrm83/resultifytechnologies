"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/";
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role !== "admin") {
        alert("Access denied");
        window.location.href = "/client";
        return;
      }

      setAllowed(true);
      setLoading(false);
    }

    checkAdmin();
  }, []);

  if (loading) return <p>Checking permissions...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Resultify internal control panel</p>

      <ul>
        <li>All Clients</li>
        <li>Automations</li>
        <li>Revenue</li>
        <li>System Logs</li>
      </ul>
    </main>
  );
}
