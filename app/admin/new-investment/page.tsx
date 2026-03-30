import { NewInvestmentPage } from "@/components/stitch/pages/NewInvestmentPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell
      currentPath="/admin"
      title="New Investment"
      sectionLabel="Origination"
    >
      <NewInvestmentPage />
    </PortalShell>
  );
}
