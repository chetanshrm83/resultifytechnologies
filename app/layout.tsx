import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            padding: "16px 24px",
            background: "#0f172a",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong>Resultify</strong>
          <nav style={{ display: "flex", gap: 16 }}>
            <Link href="/" style={{ color: "white" }}>Home</Link>
            <Link href="/client" style={{ color: "white" }}>Client</Link>
            <Link href="/admin" style={{ color: "white" }}>Admin</Link>
          </nav>
        </header>

        <main style={{ padding: 32 }}>{children}</main>
      </body>
    </html>
  );
}
