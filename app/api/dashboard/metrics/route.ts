import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    messages: 1240,
    tokens: 45800,
    revenue: 320000,
  });
}
