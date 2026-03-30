const distributionRows = [
  {
    date: "Nov 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "8.2%",
    amount: "$32,500.00",
  },
  {
    date: "Oct 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "8.1%",
    amount: "$32,100.00",
  },
  {
    date: "Sep 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "8.3%",
    amount: "$32,850.00",
  },
  {
    date: "Aug 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "7.9%",
    amount: "$31,200.00",
  },
  {
    date: "Jul 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "8.0%",
    amount: "$31,800.00",
  },
  {
    date: "Jun 01, 2023",
    description: "Monthly Dividend - Equity Portfolio",
    yield: "8.2%",
    amount: "$32,450.00",
  },
];

const milestoneCards = [
  { label: "Structure", value: "88%" },
  { label: "Interior", value: "42%" },
  { label: "Permitting", value: "95%" },
];

const priorUpdates = [
  {
    date: "Oct 20, 2023",
    title: "Foundation Pour & Utility Grid Integration",
  },
  {
    date: "Sep 15, 2023",
    title: "Capital Allocation & Vendor Contract Finalization",
  },
];

const yieldBars = [
  { label: "Jun", height: "60%" },
  { label: "Jul", height: "75%" },
  { label: "Aug", height: "68%" },
  { label: "Sep", height: "82%" },
  { label: "Oct", height: "85%" },
  { label: "Nov", height: "90%", active: true },
];

export function ReportingPage() {
  return (
    <main className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-10 lg:px-12">
        <section className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#735a3a]">
              Quarterly Performance &amp; Updates
            </p>
            <h1 className="font-serif text-4xl font-black tracking-tighter text-[#071018] md:text-5xl">
              Investment Reporting
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#44474b] md:text-base">
              Real-time transparency for Woodfield Development partners. Review
              distribution history, project milestones, and executive insights in
              one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="portal-button-sm border border-[#c4c6cb]/40 bg-white text-[#071018] transition-colors hover:bg-[#f4f3f2]"
            >
              Export Statement
            </button>
            <button
              type="button"
              className="portal-button-sm bg-[#071018] text-white shadow-[0_12px_28px_rgba(7,16,24,0.18)] transition-opacity hover:opacity-90"
            >
              Contact Advisor
            </button>
          </div>
        </section>

        <section className="mb-16 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border-l-2 border-[#735a3a] bg-white p-8 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
              Portfolio Value
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight text-[#071018]">
              $4,820,000.00
            </h2>
            <div className="mt-8 flex items-center gap-2 text-[#146c2e]">
              <span className="text-sm font-bold">+</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                +12.4% vs Last Quarter
              </span>
            </div>
          </article>

          <article className="rounded-2xl border-l-2 border-[#1c252e] bg-white p-8 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
              Next Distribution
            </p>
            <div className="mt-4 flex items-baseline gap-4">
              <h2 className="font-serif text-4xl font-black tracking-tight text-[#071018]">
                Dec 01
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#735a3a]">
                Confirmed
              </span>
            </div>
            <div className="mt-8">
              <div className="mb-2 h-1.5 w-full rounded-full bg-[#e3e2e1]">
                <div className="h-full w-[85%] rounded-full bg-[#735a3a]" />
              </div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#838c97]">
                9 Days Remaining
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl bg-[#071018] p-8 text-white shadow-sm">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bec7d3]">
                Quick Access
              </p>
              <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight">
                Monthly Performance Report
              </h2>
            </div>
            <a
              href="#distribution-history"
              className="portal-button-sm mt-8 w-full border border-white/20 bg-white/5 text-[#e2c19b] transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <span>Download PDF (2.4MB)</span>
            </a>
          </article>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center justify-between">
              <h2
                id="distribution-history"
                className="font-serif text-2xl font-bold tracking-tight text-[#071018]"
              >
                Distribution History
              </h2>
              <div
                className="flex rounded-full border border-[#c4c6cb]/25 bg-[#f4f3f2] p-1"
                role="group"
                aria-label="View mode"
              >
                <button
                  type="button"
                  className="rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#071018] shadow-sm"
                >
                  Table
                </button>
                <button
                  type="button"
                  className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]"
                >
                  Chart
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#c4c6cb]/20">
                    <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Date
                    </th>
                    <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Description
                    </th>
                    <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Yield
                    </th>
                    <th className="px-8 py-6 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c6cb]/10">
                  {distributionRows.map((row) => (
                    <tr
                      key={`${row.date}-${row.amount}`}
                      className="transition-colors hover:bg-[#e3e2e1]/40"
                    >
                      <td className="px-8 py-5 text-xs font-bold text-[#071018]">
                        {row.date}
                      </td>
                      <td className="px-8 py-5 text-xs text-[#44474b]">
                        {row.description}
                      </td>
                      <td className="px-8 py-5 text-xs font-medium text-[#565f6a]">
                        {row.yield}
                      </td>
                      <td className="px-8 py-5 text-right text-xs font-bold text-[#071018]">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-2xl border border-[#c4c6cb]/20 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-xl font-bold tracking-tight text-[#071018]">
                Yield Performance
              </h2>
              <div className="mt-10 flex flex-1 flex-col justify-end">
                <div className="mb-6 flex items-end gap-3">
                  {yieldBars.map((bar) => (
                    <div key={bar.label} className="group relative flex-1">
                      <div
                        className={`w-full rounded-t-full transition-colors ${
                          bar.active ? "bg-[#735a3a]" : "bg-[#e3e2e1] hover:bg-[#735a3a]"
                        }`}
                        style={{ height: bar.height, minHeight: "64px" }}
                      />
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#071018] opacity-0 transition-opacity group-hover:opacity-100">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#c4c6cb]/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Current Yield
                    </span>
                    <span className="text-xs font-bold text-[#071018]">
                      8.24% p.a.
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#c4c6cb]/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Capital At Risk
                    </span>
                    <span className="text-xs font-bold text-[#071018]">$12.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                      Loan To Value
                    </span>
                    <span className="text-xs font-bold text-[#071018]">64%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-80 bg-[linear-gradient(135deg,#d1e4fb_0%,#f4f3f2_45%,#e3e2e1_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(7,16,24,0.14),transparent_38%),linear-gradient(180deg,transparent,rgba(7,16,24,0.1))]" />
                <div className="absolute left-6 top-6 rounded-full bg-[#071018] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-md">
                  Site Update: Nov 15
                </div>
              </div>
              <div className="p-10">
                <h3 className="mb-4 font-serif text-2xl font-bold tracking-tight text-[#071018]">
                  Phase II Vertical Progress: The Heights at Meridian
                </h3>
                <p className="mb-8 leading-7 text-[#44474b]">
                  Structural framing for buildings A and B is complete. Electrical and
                  plumbing rough-ins are 45% complete, and alternative HVAC sourcing
                  has resolved the supply chain delays identified last month.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {milestoneCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-2xl bg-[#f4f3f2] p-4 text-center transition-colors hover:bg-[#e3e2e1]"
                    >
                      <span className="block font-serif text-2xl font-bold text-[#071018]">
                        {card.value}
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                        {card.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-10 lg:col-span-5">
            <div className="relative rounded-[1.5rem] border border-[#735a3a]/10 bg-[#fddab2]/30 p-10">
              <span className="absolute right-6 top-6 text-5xl text-[#735a3a]/20">
                &quot;
              </span>
              <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#735a3a]">
                Founder&apos;s Note
              </h3>
              <p className="mb-8 font-serif text-lg italic leading-relaxed text-[#071018]">
                &quot;The resilience of the local sub-market remains our strongest tailwind.
                Our fixed-debt strategy and localized demand continue to drive value
                exactly as projected.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3e2e1] text-[10px] font-bold uppercase tracking-[0.18em] text-[#071018]">
                  MW
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#071018]">
                    Marcus Woodfield
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#838c97]">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#838c97]">
                Previous Project Updates
              </h3>
              {priorUpdates.map((update) => (
                <a
                  key={update.date}
                  href="#"
                  className="group flex items-center gap-5 border-b border-[#c4c6cb]/10 pb-5 transition-transform hover:translate-x-2"
                >
                  <div className="h-20 w-20 shrink-0 rounded-2xl bg-[#e3e2e1]" />
                  <div>
                    <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.2em] text-[#735a3a]">
                      {update.date}
                    </p>
                    <h4 className="text-sm font-bold text-[#071018] transition-colors group-hover:text-[#735a3a]">
                      {update.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-t border-[#c4c6cb]/20 pt-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="max-w-xs">
              <h2 className="mb-4 font-serif text-2xl font-black tracking-tight text-[#071018]">
                Woodfield
              </h2>
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] text-[#838c97]">
                Securing generational wealth through institutional-grade real estate
                developments.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#071018]">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      Annual Tax Form 1099
                    </a>
                  </li>
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      Offering Memorandum
                    </a>
                  </li>
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      Subscription Agreement
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#071018]">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      General Inquiries
                    </a>
                  </li>
                  <li>
                    <a className="text-[10px] uppercase tracking-[0.18em] text-[#838c97] transition-colors hover:text-[#071018]" href="#">
                      Trust Department
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#071018]">
                  Office
                </h3>
                <p className="text-[10px] uppercase leading-loose tracking-[0.18em] text-[#838c97]">
                  One Vanderbilt Avenue,
                  <br />
                  Floor 54, New York, NY 10017
                  <br />
                  T: +1 212 555 0198
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-[#e3e2e1] py-8 text-[8px] font-bold uppercase tracking-[0.3em] text-[#c4c6cb] sm:flex-row sm:items-center sm:justify-between">
            <p>(c) 2024 Woodfield Developments LLC. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="transition-colors hover:text-[#071018]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#071018]">
                Terms of Service
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
