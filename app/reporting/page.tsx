import { ReportingPage } from "@/components/stitch/pages/ReportingPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell
      currentPath="/reporting"
      title="Investor Portal"
      sectionLabel="Quarterly Performance"
    >
      <ReportingPage />
    </PortalShell>
  );
}
