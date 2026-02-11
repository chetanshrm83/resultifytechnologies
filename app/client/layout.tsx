"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabaseClient";
const supabase = getSupabase();
import Sidebar from "@/components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace("/");
      else setLoading(false);
    });
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
