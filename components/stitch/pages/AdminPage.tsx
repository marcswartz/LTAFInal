import Link from "next/link";
import {
  formatCount,
  formatCurrencyCompact,
  formatPercent,
  portfolioDeals,
  getTotalCommittedCapital,
  getWeightedTargetYield,
} from "@/components/stitch/data";
import { ArrowRightIcon, Icon } from "@/components/stitch/icons";

export function AdminPage() {
  const adminMetrics = [
    {
      label: "Live Pipeline",
      value: formatCount(portfolioDeals.length),
    },
    {
      label: "Capital Managed",
      value: formatCurrencyCompact(getTotalCommittedCapital()),
    },
    {
      label: "Weighted Yield",
      value: formatPercent(getWeightedTargetYield(), 1),
    },
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            Origination Desk
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
            Launch and monitor new investments from one control surface.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-copy-soft)]">
            Use the intake workflow to stage a new opportunity, then track its
            raise, pricing, and pipeline position beside the live book.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/admin/new-investment"
              className="portal-button bg-[var(--color-primary)] text-white shadow-[0_16px_34px_rgba(15,26,36,0.18)] hover:bg-[var(--color-primary-soft)]"
            >
              <Icon name="add" className="h-4 w-4" />
              New Investment
            </Link>
            <Link
              href="/dashboard"
              className="portal-button-sm border border-[rgba(185,175,164,0.4)] bg-white text-[var(--color-primary)] shadow-sm hover:bg-[var(--color-surface)]"
            >
              View Dashboard
            </Link>
          </div>
        </article>

        <div className="grid gap-4">
          {adminMetrics.map((metric) => (
            <article
              key={metric.label}
              className="portal-card rounded-[1.5rem] border border-black/5 p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                {metric.label}
              </p>
              <p className="font-display mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
                {metric.value}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4 border-b border-black/5 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                Active Pipeline
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                Current investment book
              </h2>
            </div>
            <Link
              href="/admin/new-investment"
              className="portal-button-sm border border-[rgba(185,175,164,0.4)] bg-white text-[var(--color-primary)] shadow-sm hover:bg-[var(--color-surface)]"
            >
              Add Deal
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {portfolioDeals.map((deal) => (
              <article
                key={deal.slug}
                className="rounded-[1.45rem] border border-black/5 bg-white/80 p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                      {deal.status}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                      {deal.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-copy-soft)]">
                      {deal.location} • {deal.assetType}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 lg:min-w-[360px]">
                    {[
                      ["Capital", formatCurrencyCompact(deal.committedCapital)],
                      ["Yield", formatPercent(deal.targetYield, 1)],
                      ["Term", `${deal.termMonths} mo`],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                          {label}
                        </p>
                        <p className="font-display mt-2 text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            Workflow
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
            Intake to live dashboard
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "Enter sponsor, asset, and pricing terms.",
              "Review implied leverage and target yield before launch.",
              "Publish the draft into the portal book once approved.",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-[1.25rem] bg-white/80 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                    {formatCount(index + 1)}
                  </span>
                </div>
                <p className="text-sm leading-7 text-[var(--color-copy-soft)]">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/admin/new-investment"
            className="portal-button mt-6 w-full bg-[var(--color-primary)] text-white shadow-[0_16px_34px_rgba(15,26,36,0.18)] hover:bg-[var(--color-primary-soft)]"
          >
            Start Intake
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </article>
      </section>
    </div>
  );
}
