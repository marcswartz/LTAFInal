import { DealDetailPage } from "@/components/stitch/pages/DealDetailPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell
      currentPath="/deals/oak-ridge"
      title="Oak Ridge Residential"
      sectionLabel="Deal Flow"
    >
      <DealDetailPage />
    </PortalShell>
  );
}
