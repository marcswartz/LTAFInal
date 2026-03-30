import Image from "next/image";
import { ArrowRightIcon, Icon } from "@/components/stitch/icons";

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
    tone: "text-[var(--color-secondary)]",
  },
  {
    date: "Oct 30, 2024",
    title: "Harbor Bridge Debt",
    amount: "$84,500",
    tone: "text-[var(--color-primary)]",
  },
];

const metrics = [
  { label: "Capital Deployed", value: "$4.2M", accent: "text-[var(--color-primary)]" },
  { label: "Active Deals", value: "4", accent: "text-[var(--color-secondary)]" },
  { label: "Expected Yield", value: "11.5%", accent: "text-[var(--color-primary)]" },
];

export function DashboardPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
            Portfolio Overview
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-black tracking-[-0.05em] text-[var(--color-primary)] sm:text-7xl">
            $4.2M
          </h1>
        </div>

        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <div className="grid w-full gap-4 sm:grid-cols-3 lg:max-w-xl">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="portal-card rounded-[1.5rem] border border-black/5 p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                  {metric.label}
                </p>
                <p
                  className={`font-display mt-3 text-4xl font-black tracking-[-0.04em] ${metric.accent}`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="portal-card rounded-[1.75rem] border-l-4 border-[var(--color-secondary)] p-6 lg:col-span-12">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Upcoming Liquidity
              </p>
              <p className="mt-2 text-sm text-[var(--color-copy-soft)]">
                Scheduled capital returns
              </p>
            </div>
            <Icon name="event_upcoming" className="h-5 w-5 text-[var(--color-secondary)]" />
          </div>
          <div className="space-y-5">
            {activity.map((item) => (
              <div key={item.title} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[var(--color-primary)]">{item.date}</p>
                  <p className="text-xs text-[var(--color-copy-soft)]">{item.title}</p>
                </div>
                <p className={`text-sm font-semibold ${item.tone}`}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-end justify-between border-b border-black/10 pb-4">
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Active Portfolio
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)] transition-colors hover:text-[var(--color-primary)]">
              View all archive
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {portfolioDeals.map((deal) => (
              <article
                key={deal.name}
                className="portal-card group overflow-hidden rounded-[1.75rem] border border-black/5 transition-shadow hover:shadow-[0_30px_55px_rgba(15,26,36,0.12)]"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative h-56 lg:w-1/3">
                    <Image
                      alt={deal.name}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      src={deal.image}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[var(--color-secondary-soft)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                            {deal.tag}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                            {deal.type}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                          {deal.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                          Investment
                        </p>
                        <p className="font-display mt-2 text-xl font-bold text-[var(--color-primary)]">
                          {deal.investment}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-end justify-between gap-6">
                      <div className="flex gap-10">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                            Target LTV
                          </p>
                          <p className="mt-2 text-sm font-bold text-[var(--color-primary)]">
                            {deal.ltv}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                            Maturity
                          </p>
                          <p className="mt-2 text-sm font-bold text-[var(--color-primary)]">
                            {deal.maturity}
                          </p>
                        </div>
                      </div>
                      <button className="border-b border-[var(--color-primary)]/15 pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:col-span-4">
          <div className="portal-card rounded-[1.75rem] p-6 ring-1 ring-black/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Risk Signal
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Delivery cadence remains on track
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy-soft)]">
              The latest site inspection confirms the schedule buffer is holding, with
              no material variance against the updated construction draw plan.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[var(--color-surface-muted)] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
              Quick Actions
            </p>
            <div className="mt-5 space-y-3">
              {["Export statement", "Download underwriting memo", "Contact advisor"].map(
                (action) => (
                  <button
                    key={action}
                    className="flex w-full items-center justify-between rounded-[1.1rem] border border-black/5 bg-white px-4 py-4 text-left text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    <span>{action}</span>
                    <ArrowRightIcon className="h-4 w-4 text-[var(--color-copy-soft)]" />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
