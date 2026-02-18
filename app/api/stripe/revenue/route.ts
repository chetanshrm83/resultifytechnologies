import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ revenue: 0 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const charges = await stripe.charges.list({ limit: 100 });

  const total = charges.data.reduce(
    (sum, charge) => sum + (charge.amount || 0),
    0
  );

  return NextResponse.json({ revenue: total / 100 });
}
