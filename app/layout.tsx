import "./globals.css";

export const metadata = {
  title: "Resultify – AI Automation Platform",
  description: "AI automation for modern businesses",
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
