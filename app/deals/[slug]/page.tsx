import { redirect } from "next/navigation";
import {
  DealDetailPage,
} from "@/components/stitch/pages/DealDetailPage";
import { PortalShell } from "@/components/stitch/portal-shell";
import { getDealBySlug } from "@/components/stitch/data";

type DealPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: DealPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    redirect("/dashboard");
  }

  return (
    <PortalShell
      currentPath="/dashboard"
      title={deal.name}
      sectionLabel="Deal Overview"
    >
      <DealDetailPage deal={deal} />
    </PortalShell>
  );
}
