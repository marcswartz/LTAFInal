import {
  formatCount,
  formatPercent,
  portfolioDeals,
  portfolioLtv,
} from "@/components/stitch/data";
import { Icon } from "@/components/stitch/icons";

const controlSteps = [
  {
    title: "Trust intake",
    detail: "Investor capital clears to counsel-controlled accounts before any release.",
    icon: "account_balance" as const,
  },
  {
    title: "Title registration",
    detail: "Security documents are registered before milestone draws move downstream.",
    icon: "verified_user" as const,
  },
  {
    title: "Milestone release",
    detail: "Draws are matched to inspections, invoices, and approved cost-to-complete reports.",
    icon: "description" as const,
  },
];

const documentSet = [
  "Registered first mortgage or senior charge",
  "Current appraisal and collateral valuation",
  "Borrower covenant package and guarantees",
  "Draw certificate or refinance term sheet",
];

export function SecurityPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        {[
          ["Secured Positions", formatCount(portfolioDeals.length)],
          ["Portfolio LTV", formatPercent(portfolioLtv)],
          ["First-Lien Coverage", "100%"],
          ["Release Method", "Milestone"],
        ].map(([label, value]) => (
          <article
            key={label}
            className="portal-card rounded-[1.6rem] border border-black/5 p-5 sm:p-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-copy-soft)]">
              {label}
            </p>
            <p className="font-display mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
              {value}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Protection Ladder
            </p>
            <h1 className="font-display mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
              Capital stays attached to collateral.
            </h1>
          </div>

          <div className="mt-6 space-y-4">
            {controlSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.45rem] border border-black/5 bg-white/80 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                        {step.title}
                      </h2>
                      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                        {formatCount(index + 1)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-copy-soft)]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Verification Set
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              Documentation visible to investors
            </h2>
          </div>

          <div className="mt-6 space-y-3">
            {documentSet.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[1.2rem] bg-white/75 px-4 py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-secondary)]">
                  <Icon name="shield" className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium text-[var(--color-primary)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[var(--color-surface)] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
              Operating Principle
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy-soft)]">
              Return of capital is prioritized before return on capital. The
              portal view is built around position, collateral, and release
              controls instead of marketing copy.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
