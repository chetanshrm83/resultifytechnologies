import "./globals.css";

export const metadata = {
  title: "Resultify – AI Automation Platform",
  description:
    "Automate sales, support, and customer conversations using AI.",
  openGraph: {
    title: "Resultify AI",
    description: "AI automation for modern businesses",
    url: "https://resultifytechnologies.com",
    siteName: "Resultify",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
