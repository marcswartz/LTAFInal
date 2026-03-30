import { SecurityPage } from "@/components/stitch/pages/SecurityPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell
      currentPath="/security"
      title="Investor Portal"
      sectionLabel="Security & Protection"
    >
      <SecurityPage />
    </PortalShell>
  );
}
