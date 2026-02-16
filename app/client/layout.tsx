"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {children}
    </div>
  );
}
