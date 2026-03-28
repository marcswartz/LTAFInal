import { DashboardPage } from "@/components/stitch/pages/DashboardPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell currentPath="/dashboard" title="Investor Portal">
      <DashboardPage />
    </PortalShell>
  );
}
