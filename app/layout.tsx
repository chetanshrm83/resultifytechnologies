import "./globals.css";

export const metadata = {
  title: "Resultify Technologies",
  description: "AI Automation for Modern Businesses",
  openGraph: {
    title: "Resultify Technologies",
    description: "AI Automation for Modern Businesses",
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
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
