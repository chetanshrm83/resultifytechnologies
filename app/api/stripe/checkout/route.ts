import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { priceId, userId, email } = await req.json();

    if (!priceId || !userId) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // ✅ Create Stripe customer
    const customer = await stripe.customers.create({
      email,
      metadata: { userId },
    });

    // Save customer ID in Supabase
    await supabase
      .from("profiles")
      .upsert({
        id: userId,
        email,
        stripe_customer_id: customer.id,
      });

    // ✅ Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customer.id,
      line_items: [{ price: priceId, quantity: 1 }],

      metadata: { userId },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Stripe error" }, { status: 500 });
  }
  return NextResponse.json({ url: session.url });
}
