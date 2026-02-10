import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const ClientLogin = dynamic(
  () => import("../../components/ClientLogin"),
  { ssr: false }
);

export default function ClientPage() {
  return <ClientLogin />;
}
