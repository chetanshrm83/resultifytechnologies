import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: 32 }}>AI Automation for Business</h1>
      <p style={{ maxWidth: 600 }}>
        Resultify helps businesses automate customer support, sales,
        and operations using AI.
      </p>

      <div style={{ marginTop: 24 }}>
        <Link href="/client">
          <button style={{ padding: "10px 16px", marginRight: 12 }}>
            Client Login
          </button>
        </Link>

        <Link href="/admin">
          <button style={{ padding: "10px 16px" }}>
            Admin Login
          </button>
        </Link>
      </div>
    </section>
  );
}
