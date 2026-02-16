import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function POST(req: Request) {
  try {
    const { priceId, userId, email } = await req.json();

    if (!priceId || !userId || !email) {
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      );
    }

    // 🔎 Check if customer already exists
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single();

    let customerId = existingProfile?.stripe_customer_id;

    // 🆕 Create customer if not exists
    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { userId },
      });

      customerId = customer.id;

      await supabase.from("profiles").upsert({
        id: userId,
        email,
        stripe_customer_id: customerId,
      });
    }

    // 💳 Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}
