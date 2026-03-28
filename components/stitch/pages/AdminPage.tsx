const navigation = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Deal Flow", icon: "business_center" },
  { label: "Security", icon: "verified_user" },
  { label: "Reporting", icon: "analytics" },
  { label: "Admin", icon: "admin_panel_settings", active: true },
];

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

function Icon({ name }: { name: string }) {
  const glyphs: Record<string, string> = {
    dashboard: "▣",
    business_center: "◫",
    verified_user: "⟐",
    analytics: "≋",
    admin_panel_settings: "◉",
    notifications: "◌",
    settings: "⚙",
    logout: "↗",
    upload_file: "⇪",
    add: "+",
    chevron_right: "›",
    trending_up: "↗",
    mail: "✉",
    download: "⇩",
  };

  return (
    <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center text-sm">
      {glyphs[name] ?? "•"}
    </span>
  );
}

function StatusPill({ children, tone }: { children: React.ReactNode; tone?: "gold" | "neutral" | "dark" }) {
  const toneClass =
    tone === "gold"
      ? "bg-[#fddab2] text-[#785e3e]"
      : tone === "dark"
        ? "bg-[#071018] text-white"
        : "bg-[#eeeeed] text-[#44474b]";

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${toneClass}`}>
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
      className={`rounded-[1.25rem] border ${
        inverse ? "border-white/10 bg-[#071018] shadow-[0_12px_40px_rgba(7,16,24,0.16)]" : "border-black/5 bg-white shadow-[0_12px_40px_rgba(7,16,24,0.05)]"
      } ${className}`}
    >
      <div className={`px-6 py-5 sm:px-8 ${inverse ? "border-b border-white/10" : "border-b border-black/5"}`}>
        <h2
          className={`text-xl font-semibold tracking-tight ${inverse ? "text-white" : "text-[#071018]"}`}
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h2>
        {subtitle ? <p className={`mt-1 text-sm ${inverse ? "text-[#bec7d3]" : "text-[#44474b]"}`}>{subtitle}</p> : null}
      </div>
      <div className="px-6 py-6 sm:px-8">{children}</div>
    </section>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r border-black/5 bg-[#faf9f8] lg:flex">
        <div className="px-8 py-8">
          <div className="text-2xl font-black tracking-tight text-[#071018]" style={{ fontFamily: "Georgia, serif" }}>
            Woodfield
          </div>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#75777c]">Private Ledger</p>
        </div>

        <nav className="flex-1 px-3">
          {navigation.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`mb-1 flex items-center gap-3 rounded-xl px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${
                item.active
                  ? "border-l-4 border-[#071018] bg-[#f4f3f2] text-[#071018]"
                  : "text-[#75777c] hover:bg-[#f4f3f2] hover:text-[#071018]"
              }`}
            >
              <span className="text-base">
                <Icon name={item.icon} />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="px-6 pb-8">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#071018] px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#071018]/20 transition-opacity hover:opacity-90">
            <Icon name="add" />
            New Investment
          </button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-black/5 bg-[#faf9f8]/85 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-4">
              <div className="rounded-full border border-black/5 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#75777c] lg:hidden">
                Woodfield
              </div>
              <div className="relative hidden md:block">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#75777c]">
                  <Icon name="analytics" />
                </span>
                <input
                  className="w-72 rounded-full border border-black/5 bg-white/80 py-3 pl-11 pr-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#071018] outline-none placeholder:text-[#9a9c9f]"
                  placeholder="Search investors or deals..."
                  type="text"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <button className="rounded-full border border-black/5 bg-white p-3 text-[#75777c] transition-colors hover:text-[#071018]">
                <Icon name="notifications" />
              </button>
              <button className="rounded-full border border-black/5 bg-white p-3 text-[#75777c] transition-colors hover:text-[#071018]">
                <Icon name="settings" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9e8e7] text-sm font-bold text-[#071018]">
                  MW
                </div>
                <div className="hidden sm:block">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#071018]">M. Woodfield</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#75777c]">Principal</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-12">
          <section className="mb-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <SectionCard
              title="Deal Engagement"
              subtitle="Real-time investor interest tracking across the active portfolio."
              className="overflow-hidden"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#785e3e]">Active Monitoring</p>
                  <h1 className="mt-4 text-4xl font-black leading-none tracking-tight text-[#071018] sm:text-5xl" style={{ fontFamily: "Georgia, serif" }}>
                    Founder Admin View
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#44474b] sm:text-base">
                    Manage deal visibility, monitor investor demand, and broadcast updates from a single control surface.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-[#071018] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90">
                  <Icon name="upload_file" />
                  Upload New Deal
                </button>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {activity.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-black/5 bg-[#faf9f8] p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <StatusPill tone={item.tone === "high" ? "gold" : item.tone === "medium" ? "neutral" : "dark"}>
                        {item.tone === "high" ? "Priority" : item.tone === "medium" ? "Update" : "Review"}
                      </StatusPill>
                      <span className="text-[#75777c]">
                        <Icon name="chevron_right" />
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#071018]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#44474b]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard
              title="Bulk Update"
              subtitle="Broadcast to 142 investors."
              className="bg-[#071018] text-white"
              inverse
            >
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#bec7d3]">Subject line</span>
                  <input
                    className="w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm outline-none placeholder:text-white/30"
                    placeholder="Monthly project update"
                    type="text"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.28em] text-[#bec7d3]">Message</span>
                  <textarea
                    className="min-h-40 w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm outline-none placeholder:text-white/30"
                    placeholder="Compose a detailed update for all investors..."
                    rows={7}
                  />
                </label>
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fddab2] px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[#785e3e] transition-colors hover:bg-white">
                <Icon name="mail" />
                Send Update
              </button>
            </SectionCard>
          </section>

          <section className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(7,16,24,0.05)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#75777c]">Portfolio Value</p>
              <div className="mt-4 text-4xl font-black tracking-tight text-[#071018]" style={{ fontFamily: "Georgia, serif" }}>
                $4,820,000
              </div>
              <div className="mt-6 flex items-center gap-2 text-[#2f7d32]">
                <Icon name="trending_up" />
                <span className="text-xs font-bold uppercase tracking-[0.22em]">+12.4% vs last quarter</span>
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-black/5 bg-white p-6 shadow-[0_12px_40px_rgba(7,16,24,0.05)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#75777c]">Next Distribution</p>
              <div className="mt-4 flex items-end gap-3">
                <div className="text-4xl font-black tracking-tight text-[#071018]" style={{ fontFamily: "Georgia, serif" }}>
                  Dec 01
                </div>
                <StatusPill tone="gold">Confirmed</StatusPill>
              </div>
              <div className="mt-6">
                <div className="mb-2 h-1 rounded-full bg-[#e9e8e7]">
                  <div className="h-1 w-[85%] rounded-full bg-[#785e3e]" />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#75777c]">9 days remaining</p>
              </div>
            </div>

            <div className="rounded-[1.25rem] bg-[#071018] p-6 text-white shadow-[0_12px_40px_rgba(7,16,24,0.15)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bec7d3]">Quick Access</p>
              <h3 className="mt-4 text-2xl font-black tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
                Monthly Performance Report
              </h3>
              <a
                href="#"
                className="mt-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fddab2] transition-colors hover:bg-white/10"
              >
                <span>Download PDF (2.4MB)</span>
                <Icon name="download" />
              </a>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <SectionCard
              title="Active Portfolio"
              subtitle="Track fundraising status, committed capital, and portal visibility."
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#75777c]">
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
                    className="grid gap-4 rounded-2xl border border-black/5 bg-[#faf9f8] px-4 py-4 sm:grid-cols-[1.6fr_0.8fr_0.8fr_0.7fr_0.7fr_auto] sm:items-center"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#071018]">{deal.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.22em] text-[#75777c]">Founder-controlled offering</div>
                    </div>
                    <div className="text-sm font-semibold text-[#071018]">{deal.capitalGoal}</div>
                    <div>
                      <div className="mb-2 h-2 rounded-full bg-[#e9e8e7]">
                        <div className="h-2 rounded-full bg-[#071018]" style={{ width: `${deal.committed}%` }} />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#75777c]">{deal.committed}% committed</div>
                    </div>
                    <div className="text-sm font-semibold text-[#071018]">{deal.investors}</div>
                    <div className="text-sm font-semibold text-[#071018]">{deal.visibility}</div>
                    <div className="flex items-center gap-2">
                      <StatusPill tone={deal.status === "Fundraising" ? "gold" : deal.status === "Closing" ? "dark" : "neutral"}>
                        {deal.status}
                      </StatusPill>
                      <button className="rounded-full border border-black/5 bg-white p-2 text-[#75777c] transition-colors hover:text-[#071018]">
                        <Icon name="chevron_right" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Deal Controls" subtitle="Operational shortcuts for ongoing portfolio management.">
              <div className="space-y-4">
                {[
                  "Publish new offering",
                  "Edit subscription packet",
                  "Approve distribution run",
                  "Update investor permissions",
                  "Archive closed deal",
                ].map((label, index) => (
                  <button
                    key={label}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition-colors ${
                      index === 0 ? "border-[#fddab2] bg-[#fff8ef]" : "border-black/5 bg-white hover:bg-[#faf9f8]"
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#071018]">{label}</span>
                    <span className="text-[#75777c]">
                      <Icon name="chevron_right" />
                    </span>
                  </button>
                ))}
              </div>
            </SectionCard>
          </section>
        </main>
      </div>
    </div>
  );
}
