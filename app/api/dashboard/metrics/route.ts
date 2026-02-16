import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { userId } = await req.json();

  const { data, error } = await supabase
    .from("ai_usage")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const totals = {
    messages: data.reduce((a, b) => a + b.messages, 0),
    tokens: data.reduce((a, b) => a + b.tokens_used, 0),
    revenue: data.reduce((a, b) => a + Number(b.revenue_generated), 0),
  };

  return NextResponse.json(totals);
}
