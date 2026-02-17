import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic"; // prevents build execution

// ✅ Safe environment validation
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Initialize clients lazily to avoid build-time errors
let stripe: Stripe | null = null;
let supabase: ReturnType<typeof createClient> | null = null;

function getClients() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase server environment variables");
  }

  if (!stripeSecretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  if (!stripe) {
    stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });
  }

  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseServiceKey);
  }

  return { stripe, supabase };
}

export async function POST(req: Request) {
  try {
    const { priceId, userId, email } = await req.json();

    if (!priceId || !userId || !email) {
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      );
    }

    const { stripe, supabase } = getClients();

    // 🔍 Check if user already has Stripe customer
    const { data: profile } = await supabase
      .from("profiles")
      .select("stripe_customer_id")
      .eq("id", userId)
      .single();

    let customerId: string | null = null;
    if (profile && (profile as any).stripe_customer_id) {
      customerId = (profile as any).stripe_customer_id;
    }

    // 🆕 Create customer if not exists
    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { userId },
      });

      customerId = customer.id;

      await (supabase as any).from("profiles").upsert({
        id: userId,
        email,
        stripe_customer_id: customerId,
      });
    }

    // 🛒 Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId },
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
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
