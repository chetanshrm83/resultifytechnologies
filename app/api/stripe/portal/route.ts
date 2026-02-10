export async function POST() {
  const portal = await stripe.billingPortal.sessions.create({
    customer: "cus_xxx",
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/client`,
  });

  return Response.json({ url: portal.url });
}
