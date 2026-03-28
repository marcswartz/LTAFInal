import { AdminPage } from "@/components/stitch/pages/AdminPage";
import { PortalShell } from "@/components/stitch/portal-shell";

export default function Page() {
  return (
    <PortalShell
      currentPath="/admin"
      title="Investor Portal"
      sectionLabel="Executive Dashboard"
    >
      <AdminPage />
    </PortalShell>
  );
}
