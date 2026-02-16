import "./globals.css";

export const metadata = {
  title: "Resultify AI",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    title: "Resultify AI",
    description: "Automate sales, support & analytics using AI",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
