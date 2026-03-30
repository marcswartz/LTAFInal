import Link from "next/link";
import {
  formatCount,
  formatCurrencyCompact,
  formatPercent,
  getLiquiditySchedule,
  getMonthlyIncomeRunRate,
  portfolioDeals,
  getPortfolioLtv,
  getTotalCommittedCapital,
  getTotalPropertyValue,
  getUpcomingLiquidityTotal,
  getWeightedTargetYield,
  getWeightedTermMonths,
} from "@/components/stitch/data";
import { ArrowRightIcon } from "@/components/stitch/icons";

export function DashboardPage() {
  const totalCommittedCapital = getTotalCommittedCapital();
  const totalPropertyValue = getTotalPropertyValue();
  const weightedTargetYield = getWeightedTargetYield();
  const portfolioLtv = getPortfolioLtv();
  const weightedTermMonths = getWeightedTermMonths();
  const monthlyIncomeRunRate = getMonthlyIncomeRunRate();
  const liquiditySchedule = getLiquiditySchedule();
  const upcomingLiquidityTotal = getUpcomingLiquidityTotal();

  const headlineMetrics = [
    {
      label: "Capital Deployed",
      value: formatCurrencyCompact(totalCommittedCapital),
    },
    {
      label: "Active Deals",
      value: formatCount(portfolioDeals.length),
    },
    {
      label: "Expected Yield",
      value: formatPercent(weightedTargetYield, 1),
    },
    {
      label: "Gross Collateral",
      value: formatCurrencyCompact(totalPropertyValue),
    },
  ];

  const portfolioMetrics = [
    {
      label: "Upcoming Liquidity",
      value: formatCurrencyCompact(upcomingLiquidityTotal),
    },
    {
      label: "Monthly Income Run Rate",
      value: formatCurrencyCompact(monthlyIncomeRunRate),
    },
    {
      label: "Portfolio LTV",
      value: formatPercent(portfolioLtv),
    },
    {
      label: "Weighted Term",
      value: `${Math.round(weightedTermMonths)} mo`,
    },
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        {headlineMetrics.map((metric) => (
          <article
            key={metric.label}
            className="portal-card rounded-[1.6rem] border border-black/5 p-5 sm:p-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-copy-soft)]">
              {metric.label}
            </p>
            <p className="font-display mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)] lg:text-5xl">
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {portfolioMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[1.45rem] border border-black/5 bg-white/70 p-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
              {metric.label}
            </p>
            <p className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-secondary)]">
              {metric.value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.55fr_0.9fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Active Portfolio
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Click any position for deal overview
            </h2>
          </div>

          <div className="mt-6 hidden grid-cols-[1.45fr_repeat(5,minmax(0,0.72fr))_24px] gap-4 px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)] lg:grid">
            <span>Property</span>
            <span>Capital</span>
            <span>Value</span>
            <span>Yield</span>
            <span>LTV</span>
            <span>Term</span>
            <span />
          </div>

          <div className="mt-4 space-y-3">
            {portfolioDeals.map((deal) => (
              <Link
                key={deal.slug}
                href={`/deals/${deal.slug}`}
                className="group block rounded-[1.5rem] border border-black/5 bg-white/75 hover:border-[rgba(139,107,67,0.28)] hover:bg-white"
              >
                <div className="grid gap-4 p-5 lg:grid-cols-[1.45fr_repeat(5,minmax(0,0.72fr))_24px] lg:items-center lg:px-4 lg:py-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                      {deal.status}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                      {deal.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-copy-soft)]">
                      {deal.location} • {deal.assetType}
                    </p>
                  </div>

                  {[
                    formatCurrencyCompact(deal.committedCapital),
                    formatCurrencyCompact(deal.propertyValue),
                    formatPercent(deal.targetYield, 1),
                    formatPercent(deal.ltv),
                    `${deal.termMonths} mo`,
                  ].map((value, index) => (
                    <div key={`${deal.slug}-${index}`}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)] lg:hidden">
                        {
                          [
                            "Capital",
                            "Value",
                            "Yield",
                            "LTV",
                            "Term",
                          ][index]
                        }
                      </p>
                      <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)] lg:text-xl">
                        {value}
                      </p>
                    </div>
                  ))}

                  <ArrowRightIcon className="h-5 w-5 self-center justify-self-end text-[var(--color-secondary)] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Portfolio Mix
            </p>
            <div className="mt-5 space-y-4">
              {portfolioDeals.map((deal) => {
                const share = (deal.committedCapital / totalCommittedCapital) * 100;

                return (
                  <div key={deal.slug}>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-primary)]">
                          {deal.name}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                          {deal.stage}
                        </p>
                      </div>
                      <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                        {Math.round(share)}%
                      </p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-[var(--color-surface-muted)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-secondary)]"
                        style={{ width: `${share}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Liquidity Schedule
            </p>
            <div className="mt-5 space-y-4">
              {liquiditySchedule.map((item) => (
                <Link
                  key={item.slug}
                  href={`/deals/${item.slug}`}
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] bg-white/70 px-4 py-4 hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                      {item.date}
                    </p>
                    <p className="text-xs text-[var(--color-copy-soft)]">{item.name}</p>
                  </div>
                  <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                    {formatCurrencyCompact(item.amount)}
                  </p>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
