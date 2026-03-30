import Link from "next/link";
import {
  type DealRecord,
  formatCount,
  formatCurrency,
  formatPercent,
  formatSquareFeet,
} from "@/components/stitch/data";
import { ArrowRightIcon } from "@/components/stitch/icons";

type DealDetailPageProps = {
  deal: DealRecord;
};

const statusTone: Record<DealRecord["status"], string> = {
  Funded: "bg-[var(--color-secondary-soft)] text-[var(--color-secondary)]",
  Live: "bg-[rgba(15,26,36,0.08)] text-[var(--color-primary)]",
  Monitoring: "bg-[rgba(163,75,43,0.12)] text-[var(--color-warning)]",
};

export function DealDetailPage({ deal }: DealDetailPageProps) {
  const summaryMetrics = [
    { label: "Committed Capital", value: formatCurrency(deal.committedCapital) },
    { label: "Property Value", value: formatCurrency(deal.propertyValue) },
    { label: "Target Yield", value: formatPercent(deal.targetYield, 1) },
    { label: "Portfolio LTV", value: formatPercent(deal.ltv) },
    { label: "Term", value: `${deal.termMonths} Months` },
    { label: "Units", value: formatCount(deal.units) },
  ];

  return (
    <div className="space-y-8">
      <section className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
        <Link
          href="/dashboard"
          className="-ml-1 inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)] transition-colors hover:bg-white/60 hover:text-[var(--color-primary)]"
        >
          <span>Portfolio Dashboard</span>
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
        </Link>

        <div className="mt-6 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] ${statusTone[deal.status]}`}
              >
                {deal.status}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                {deal.reference}
              </span>
            </div>

            <h1 className="font-display mt-5 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              {deal.name}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-copy-soft)] sm:text-lg">
              {deal.overview}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Location", deal.location],
                ["Security", deal.securityType],
                ["Current Stage", deal.stage],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.35rem] bg-[var(--color-surface)] p-5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                    {label}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--color-primary)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {summaryMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[1.45rem] border border-black/5 bg-white/80 p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                  {metric.label}
                </p>
                <p className="font-display mt-4 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Property Snapshot
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Deal overview without the deal-flow tab
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Building Area", formatSquareFeet(deal.squareFeet)],
              ["Sponsor", deal.sponsor],
              ["Exit Strategy", deal.exit],
              ["Maturity", deal.maturity],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.35rem] bg-[var(--color-surface)] p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                  {label}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--color-primary)]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[var(--color-surface)] p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
              Underwriting Notes
            </p>
            <div className="mt-5 space-y-3">
              {deal.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                  <p className="text-sm leading-7 text-[var(--color-copy-soft)]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Capital Stack
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Collateral and subordination
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {deal.capitalStack.map((item) => {
              const stackShare = (item.amount / deal.propertyValue) * 100;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.45rem] border border-black/5 bg-white/80 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-copy-soft)]">
                        {item.detail}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                        {formatCurrency(item.amount)}
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                        {formatPercent(stackShare)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Milestone Schedule
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Draw timing and payoff path
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {deal.milestones.map((milestone) => (
              <div
                key={`${milestone.date}-${milestone.label}`}
                className="rounded-[1.45rem] border border-black/5 bg-white/80 p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                      {milestone.date}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                      {milestone.label}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-copy-soft)]">
                      {milestone.detail}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                      {formatCurrency(milestone.amount)}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                      {milestone.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Liquidity
            </p>
            <div className="mt-5 rounded-[1.45rem] bg-[var(--color-surface)] p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                Next Scheduled Return
              </p>
              <p className="font-display mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
                {formatCurrency(deal.nextLiquidityAmount)}
              </p>
              <p className="mt-2 text-sm text-[var(--color-copy-soft)]">
                {deal.nextLiquidityDate}
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Target Yield", formatPercent(deal.targetYield, 1)],
                ["Maturity", deal.maturity],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.2rem] border border-black/5 bg-white/80 p-4"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Due Diligence
            </p>
            <div className="mt-5 space-y-3">
              {deal.documents.map((document) => (
                <div
                  key={document.title}
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] bg-white/75 px-4 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                      {document.title}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                      {document.meta}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-[var(--color-copy-soft)]" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
