"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Sidebar from "../../components/Sidebar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.replace("/");
      else setLoading(false);
    });
  }, [router]);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
