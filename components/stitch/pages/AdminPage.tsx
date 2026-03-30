import { Icon } from "@/components/stitch/icons";

const portfolio = [
  {
    name: "Oakwood Mixed Use",
    capitalGoal: "$12,500,000",
    committed: 74,
    investors: 38,
    visibility: "Private",
    status: "Fundraising",
  },
  {
    name: "The Belvedere Heights",
    capitalGoal: "$9,100,000",
    committed: 91,
    investors: 52,
    visibility: "Featured",
    status: "Closing",
  },
  {
    name: "Westgate Industrial Hub",
    capitalGoal: "$6,400,000",
    committed: 57,
    investors: 21,
    visibility: "Private",
    status: "Active",
  },
  {
    name: "Harbor Bridge Debt",
    capitalGoal: "$4,800,000",
    committed: 62,
    investors: 19,
    visibility: "Hidden",
    status: "Paused",
  },
];

const activity = [
  {
    title: "New investor request",
    detail: "12 accredited investors requested access to Oakwood Mixed Use in the last 24 hours.",
    tone: "high",
  },
  {
    title: "Document refresh",
    detail: "Subscription packet and offering memo were updated for The Belvedere Heights.",
    tone: "medium",
  },
  {
    title: "Distribution review",
    detail: "Monthly distributions for Harbor Bridge Debt are queued for approval.",
    tone: "low",
  },
];

function StatusPill({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "gold" | "neutral" | "dark";
}) {
  const toneClass =
    tone === "gold"
      ? "bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]"
      : tone === "dark"
        ? "bg-[var(--color-primary)] text-white"
        : "bg-[var(--color-surface-strong)] text-[var(--color-copy-soft)]";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
  className = "",
  inverse = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <section
      className={`rounded-[1.6rem] border ${
        inverse
          ? "border-white/10 bg-[var(--color-primary)] shadow-[0_12px_40px_rgba(7,16,24,0.16)]"
          : "portal-card border-black/5"
      } ${className}`}
    >
      <div
        className={`px-6 py-5 sm:px-8 ${inverse ? "border-b border-white/10" : "border-b border-black/5"}`}
      >
        <h2
          className={`font-display text-3xl font-semibold tracking-[-0.04em] ${inverse ? "text-white" : "text-[var(--color-primary)]"}`}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className={`mt-1 text-sm ${inverse ? "text-[#bec7d3]" : "text-[var(--color-copy-soft)]"}`}>
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className="px-6 py-6 sm:px-8">{children}</div>
    </section>
  );
}

export function AdminPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <SectionCard
          title="Deal Engagement"
          subtitle="Real-time investor interest tracking across the active portfolio."
          className="overflow-hidden"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Active Monitoring
              </p>
              <h1 className="font-display mt-4 text-5xl font-black leading-none tracking-[-0.05em] text-[var(--color-primary)]">
                Founder Admin View
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-copy-soft)] sm:text-base">
                Manage deal visibility, monitor investor demand, and broadcast updates
                from a single control surface.
              </p>
            </div>
            <button
              type="button"
              className="portal-button bg-[var(--color-primary)] text-white transition-opacity hover:opacity-90"
            >
              <Icon name="upload_file" className="h-4 w-4" />
              Upload New Deal
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {activity.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-black/5 bg-[var(--color-surface)] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <StatusPill
                    tone={
                      item.tone === "high"
                        ? "gold"
                        : item.tone === "medium"
                          ? "neutral"
                          : "dark"
                    }
                  >
                    {item.tone === "high"
                      ? "Priority"
                      : item.tone === "medium"
                        ? "Update"
                        : "Review"}
                  </StatusPill>
                  <Icon name="chevron_right" className="h-4 w-4 text-[var(--color-copy-soft)]" />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-copy-soft)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Bulk Update"
          subtitle="Broadcast to 142 investors."
          className="text-white"
          inverse
        >
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#bec7d3]">
                Subject line
              </span>
              <input
                className="w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm outline-none placeholder:text-white/30"
                placeholder="Monthly project update"
                type="text"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#bec7d3]">
                Message
              </span>
              <textarea
                className="min-h-40 w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm outline-none placeholder:text-white/30"
                placeholder="Compose a detailed update for all investors..."
                rows={7}
              />
            </label>
          </div>
          <button
            type="button"
            className="portal-button mt-6 w-full bg-[var(--color-secondary-soft)] text-[var(--color-secondary)] transition-colors hover:bg-white"
          >
            <Icon name="mail" className="h-4 w-4" />
            Send Update
          </button>
        </SectionCard>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="portal-card rounded-[1.6rem] p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-copy-soft)]">
            Portfolio Value
          </p>
          <div className="font-display mt-4 text-5xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
            $4,820,000
          </div>
          <div className="mt-6 flex items-center gap-2 text-[var(--color-positive)]">
            <Icon name="trending_up" className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">
              +12.4% vs last quarter
            </span>
          </div>
        </div>

        <div className="portal-card rounded-[1.6rem] p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-copy-soft)]">
            Next Distribution
          </p>
          <div className="mt-4 flex items-end gap-3">
            <div className="font-display text-5xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
              Dec 01
            </div>
            <StatusPill tone="gold">Confirmed</StatusPill>
          </div>
          <div className="mt-6">
            <div className="mb-2 h-1 rounded-full bg-[var(--color-surface-strong)]">
              <div className="h-1 w-[85%] rounded-full bg-[var(--color-secondary)]" />
            </div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
              9 days remaining
            </p>
          </div>
        </div>

        <div className="portal-card-dark rounded-[1.6rem] p-6 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bec7d3]">
            Quick Access
          </p>
          <h3 className="font-display mt-4 text-3xl font-black tracking-[-0.05em]">
            Monthly Performance Report
          </h3>
          <a
            href="#"
            className="mt-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-secondary-soft)] transition-colors hover:bg-white/10"
          >
            <span>Download PDF (2.4MB)</span>
            <Icon name="download" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <SectionCard
          title="Active Portfolio"
          subtitle="Track fundraising status, committed capital, and portal visibility."
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-copy-soft)]">
              <span>Deal Name</span>
              <span className="hidden sm:inline">Capital Goal</span>
              <span className="hidden md:inline">Committed</span>
              <span className="hidden md:inline">Investors</span>
              <span className="hidden lg:inline">Visibility</span>
              <span>Status</span>
            </div>
            {portfolio.map((deal) => (
              <div
                key={deal.name}
                className="grid gap-4 rounded-[1.4rem] border border-black/5 bg-[var(--color-surface)] px-4 py-4 sm:grid-cols-[1.6fr_0.8fr_0.8fr_0.7fr_0.7fr_auto] sm:items-center"
              >
                <div>
                  <div className="text-sm font-bold text-[var(--color-primary)]">{deal.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                    Founder-controlled offering
                  </div>
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary)]">
                  {deal.capitalGoal}
                </div>
                <div>
                  <div className="mb-2 h-2 rounded-full bg-[var(--color-surface-strong)]">
                    <div
                      className="h-2 rounded-full bg-[var(--color-primary)]"
                      style={{ width: `${deal.committed}%` }}
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-copy-soft)]">
                    {deal.committed}% committed
                  </div>
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary)]">
                  {deal.investors}
                </div>
                <div className="text-sm font-semibold text-[var(--color-primary)]">
                  {deal.visibility}
                </div>
                <div className="flex items-center gap-2">
                  <StatusPill
                    tone={
                      deal.status === "Fundraising"
                        ? "gold"
                        : deal.status === "Closing"
                          ? "dark"
                          : "neutral"
                    }
                  >
                    {deal.status}
                  </StatusPill>
                  <button
                    type="button"
                    className="rounded-full border border-black/5 bg-white p-2 text-[var(--color-copy-soft)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    <Icon name="chevron_right" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Deal Controls"
          subtitle="Operational shortcuts for ongoing portfolio management."
        >
          <div className="space-y-4">
            {[
              "Publish new offering",
              "Edit subscription packet",
              "Approve distribution run",
              "Update investor permissions",
              "Archive closed deal",
            ].map((label, index) => (
              <button
                type="button"
                key={label}
                className={`flex w-full items-center justify-between rounded-full border px-4 py-4 text-left transition-colors ${
                  index === 0
                    ? "border-[var(--color-secondary-soft)] bg-[#fff8ef]"
                    : "border-black/5 bg-white hover:bg-[var(--color-surface)]"
                }`}
              >
                <span className="text-sm font-semibold text-[var(--color-primary)]">
                  {label}
                </span>
                <Icon name="chevron_right" className="h-4 w-4 text-[var(--color-copy-soft)]" />
              </button>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
