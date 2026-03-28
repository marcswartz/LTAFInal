const navItems = [
  { label: "Dashboard", icon: "▣", active: true },
  { label: "Deal Flow", icon: "◆" },
  { label: "Security", icon: "◉" },
  { label: "Reporting", icon: "▤" },
  { label: "Admin", icon: "◫" },
];

const portfolioDeals = [
  {
    name: "Oxford St. Development",
    tag: "Funded",
    type: "Mezzanine Debt",
    investment: "$1,200,000",
    ltv: "65%",
    maturity: "18 Months",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Harbor Bridge Debt",
    tag: "Live",
    type: "Bridge Loan",
    investment: "$840,000",
    ltv: "58%",
    maturity: "12 Months",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Parkview Residences",
    tag: "Monitoring",
    type: "Senior Secured",
    investment: "$2,160,000",
    ltv: "61%",
    maturity: "24 Months",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
];

const activity = [
  {
    date: "Sept 15, 2024",
    title: "Oxford St. Development",
    amount: "$125,000",
    tone: "text-[#735a3a]",
  },
  {
    date: "Oct 30, 2024",
    title: "Harbor Bridge Debt",
    amount: "$84,500",
    tone: "text-[#071018]",
  },
];

const metrics = [
  { label: "Capital Deployed", value: "$4.2M", accent: "text-[#071018]" },
  { label: "Active Deals", value: "03", accent: "text-[#735a3a]" },
  { label: "Expected Yield", value: "11.5%", accent: "text-[#071018]" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-black/5 bg-[#faf9f8] lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-6 py-8 lg:px-8">
            <div className="mb-10">
              <p className="font-serif text-3xl font-black tracking-tight text-[#071018]">
                Woodfield
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#838c97]">
                Private Ledger
              </p>
            </div>

            <nav className="flex-1 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={[
                    "flex items-center gap-4 rounded-none px-4 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors",
                    item.active
                      ? "border-l-4 border-[#071018] bg-[#f4f3f2] text-[#071018]"
                      : "text-[#75777c] hover:bg-[#f4f3f2] hover:text-[#071018]",
                  ].join(" ")}
                >
                  <span className="w-6 text-center text-base text-[#735a3a]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <button className="mt-8 inline-flex items-center justify-center gap-2 bg-[linear-gradient(135deg,#071018_0%,#1c252e_100%)] px-5 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-90">
              <span className="text-sm">+</span>
              New Investment
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-20 border-b border-black/5 bg-[#faf9f8]/85 backdrop-blur-xl">
            <div className="flex min-h-20 items-center justify-between gap-4 px-6 py-4 lg:px-12">
              <div className="flex items-center gap-4">
                <p className="font-serif text-lg font-black tracking-tight text-[#071018]">
                  Investor Portal
                </p>
                <div className="hidden h-4 w-px bg-black/10 sm:block" />
                <div className="hidden items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#75777c] sm:flex">
                  <span className="text-[#735a3a]">●</span>
                  Live portfolio
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-5">
                <label className="hidden items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-[#75777c] md:flex md:min-w-[19rem]">
                  <span className="text-[#838c97]">⌕</span>
                  <input
                    className="w-full bg-transparent outline-none placeholder:text-[#b5b5b5]"
                    placeholder="Search ledgers..."
                  />
                </label>
                <button className="rounded-full border border-black/10 bg-white/70 p-3 text-[#75777c] transition-colors hover:text-[#071018]">
                  !
                </button>
                <button className="rounded-full border border-black/10 bg-white/70 p-3 text-[#75777c] transition-colors hover:text-[#071018]">
                  ⚙
                </button>
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#e9e8e7] text-xs font-bold text-[#071018]">
                  MW
                </div>
              </div>
            </div>
          </header>

          <main className="px-6 py-8 lg:px-12 lg:py-12">
            <section className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#735a3a]">
                  Portfolio Overview
                </p>
                <h1 className="max-w-3xl font-serif text-5xl font-black tracking-tight text-[#071018] sm:text-6xl">
                  $4.2M
                  <span className="block text-2xl font-normal tracking-tight text-[#b5b5b5] sm:text-3xl">
                    Capital deployed across the live book
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
                <div className="grid w-full gap-4 sm:grid-cols-3 lg:max-w-xl">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-none border border-black/5 bg-white/70 p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                        {metric.label}
                      </p>
                      <p
                        className={`mt-3 font-serif text-3xl font-black tracking-tight ${metric.accent}`}
                      >
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4 rounded-none border-l-2 border-[#735a3a] bg-[#f4f3f2] p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#735a3a]">
                      Upcoming Liquidity
                    </p>
                    <p className="mt-2 text-sm text-[#75777c]">
                      Scheduled capital returns
                    </p>
                  </div>
                  <span className="text-[#735a3a]">⌁</span>
                </div>
                <div className="space-y-5">
                  {activity.map((item) => (
                    <div key={item.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#071018]">{item.date}</p>
                        <p className="text-xs text-[#75777c]">{item.title}</p>
                      </div>
                      <p className={`text-sm font-semibold ${item.tone}`}>{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 rounded-none bg-[linear-gradient(135deg,#071018_0%,#1c252e_100%)] p-6 text-white sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#ba1a1a]" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#fddab2]">
                    Material Change Alert
                  </p>
                </div>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="max-w-2xl font-serif text-3xl font-bold tracking-tight text-white">
                      Parkview Residences: Rezoning approved
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                      The municipal council has granted full approval for Phase II expansion.
                      Projected IRR has been adjusted upward by 45bps and the underwriting
                      memo has been reissued.
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#fddab2] transition-colors hover:text-white">
                    Review update <span>→</span>
                  </button>
                </div>
              </div>
            </section>

            <section className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-end justify-between border-b border-black/10 pb-4">
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-[#071018]">
                    Active Portfolio
                  </h2>
                  <button className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c] transition-colors hover:text-[#071018]">
                    View all archive
                  </button>
                </div>

                <div className="mt-6 space-y-5">
                  {portfolioDeals.map((deal) => (
                    <article
                      key={deal.name}
                      className="group overflow-hidden rounded-none border border-black/5 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
                    >
                      <div className="flex flex-col lg:flex-row">
                        <div className="h-52 lg:w-1/3">
                          <div
                            role="img"
                            aria-label={deal.name}
                            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${deal.image})` }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-6 p-6 lg:p-8">
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-[#fddab2] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#785e3e]">
                                  {deal.tag}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                                  {deal.type}
                                </span>
                              </div>
                              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#071018]">
                                {deal.name}
                              </h3>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                                Investment
                              </p>
                              <p className="mt-2 font-serif text-xl font-bold text-[#071018]">
                                {deal.investment}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-end justify-between gap-6">
                            <div className="flex gap-10">
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                                  Target LTV
                                </p>
                                <p className="mt-2 text-sm font-bold text-[#071018]">
                                  {deal.ltv}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                                  Maturity
                                </p>
                                <p className="mt-2 text-sm font-bold text-[#071018]">
                                  {deal.maturity}
                                </p>
                              </div>
                            </div>
                            <button className="border-b border-[#071018]/15 pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#071018] transition-colors hover:border-[#071018]">
                              Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-none bg-[#faf9f8] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#735a3a]">
                    Risk Signal
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-[#071018]">
                    Delivery cadence remains on track
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#44474b]">
                    The latest site inspection confirms the schedule buffer is holding, with
                    no material variance against the updated construction draw plan.
                  </p>
                </div>

                <div className="rounded-none bg-[#f4f3f2] p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#75777c]">
                    Quick Actions
                  </p>
                  <div className="mt-5 space-y-3">
                    {["Export statement", "Download underwriting memo", "Contact advisor"].map(
                      (action) => (
                        <button
                          key={action}
                          className="flex w-full items-center justify-between border border-black/5 bg-white px-4 py-4 text-left text-sm font-medium text-[#071018] transition-colors hover:bg-[#faf9f8]"
                        >
                          <span>{action}</span>
                          <span className="text-[#75777c]">→</span>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
