"use client";

import Link from "next/link";
import { useState } from "react";
import {
  formatCurrency,
  formatPercent,
} from "@/components/stitch/data";
import { addInvestmentAction } from "@/app/actions";
import { ArrowRightIcon, Icon } from "@/components/stitch/icons";

type InvestmentDraft = {
  assetType: string;
  location: string;
  name: string;
  propertyValue: string;
  sponsor: string;
  targetRaise: string;
  targetYield: string;
  termMonths: string;
};

type CreatedDraft = {
  createdLabel: string;
  impliedLtv: number;
  slug: string;
} & InvestmentDraft;

const initialDraft: InvestmentDraft = {
  name: "King Street West Lofts",
  sponsor: "Northline Urban Partners",
  location: "Toronto, ON",
  assetType: "Adaptive Reuse",
  targetYield: "8.4",
  targetRaise: "1650000",
  propertyValue: "2550000",
  termMonths: "15",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function NewInvestmentPage() {
  const [draft, setDraft] = useState<InvestmentDraft>(initialDraft);
  const [createdDraft, setCreatedDraft] = useState<CreatedDraft | null>(null);

  const targetRaise = Number(draft.targetRaise) || 0;
  const propertyValue = Number(draft.propertyValue) || 0;
  const targetYield = Number(draft.targetYield) || 0;
  const termMonths = Number(draft.termMonths) || 0;
  const impliedLtv = propertyValue > 0 ? (targetRaise / propertyValue) * 100 : 0;

  function updateDraft<K extends keyof InvestmentDraft>(
    key: K,
    value: InvestmentDraft[K],
  ) {
    setDraft((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const slug = slugify(draft.name);

    setCreatedDraft({
      ...draft,
      impliedLtv,
      slug,
      createdLabel: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });

    await addInvestmentAction({
      slug,
      name: draft.name,
      location: draft.location,
      assetType: draft.assetType,
      securityType: "Senior secured note",
      status: "Live",
      reference: `WF-2026-${Math.floor(Math.random() * 900) + 100}`,
      committedCapital: targetRaise,
      propertyValue: propertyValue,
      targetYield: targetYield,
      ltv: impliedLtv,
      termMonths: termMonths,
      units: 0,
      squareFeet: 0,
      nextLiquidityAmount: 0,
      nextLiquidityDate: "TBD",
      maturity: "TBD",
      stage: "Drafting",
      sponsor: draft.sponsor,
      exit: "TBD",
      overview: "Draft offering.",
      highlights: [],
      capitalStack: [],
      milestones: [],
      documents: [],
    });
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        {[
          ["Target Raise", formatCurrency(targetRaise)],
          ["Property Value", formatCurrency(propertyValue)],
          ["Target Yield", formatPercent(targetYield, 1)],
          ["Implied LTV", formatPercent(impliedLtv)],
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
        <form
          onSubmit={handleSubmit}
          className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8"
        >
          <div className="border-b border-black/5 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              New Investment Intake
            </p>
            <h1 className="font-display mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--color-primary)]">
              Create a draft offering.
            </h1>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              ["Investment Name", "name", "text"],
              ["Sponsor", "sponsor", "text"],
              ["Location", "location", "text"],
              ["Asset Type", "assetType", "text"],
              ["Target Yield", "targetYield", "number"],
              ["Term Months", "termMonths", "number"],
              ["Target Raise", "targetRaise", "number"],
              ["Property Value", "propertyValue", "number"],
            ].map(([label, key, type]) => (
              <label key={key} className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
                  {label}
                </span>
                <input
                  className="w-full rounded-[1rem] border border-black/5 bg-white px-4 py-4 text-sm text-[var(--color-primary)] outline-none ring-0 placeholder:text-[var(--color-copy-soft)]"
                  type={type}
                  value={draft[key as keyof InvestmentDraft]}
                  onChange={(event) =>
                    updateDraft(
                      key as keyof InvestmentDraft,
                      event.target.value as InvestmentDraft[keyof InvestmentDraft],
                    )
                  }
                />
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="portal-button bg-[var(--color-primary)] text-white shadow-[0_16px_34px_rgba(15,26,36,0.18)] hover:bg-[var(--color-primary-soft)]"
            >
              <Icon name="add" className="h-4 w-4 shrink-0" />
              Create Draft
            </button>
            <Link
              href="/admin"
              className="portal-button inline-flex shrink-0 whitespace-nowrap border border-[rgba(185,175,164,0.4)] bg-white text-[var(--color-primary)] no-underline shadow-sm hover:bg-[var(--color-surface)]"
            >
              Back to Admin
            </Link>
          </div>
        </form>

        <div className="space-y-6">
          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Live Preview
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
              {draft.name || "Unnamed investment"}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-copy-soft)]">
              {draft.location} • {draft.assetType}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Sponsor", draft.sponsor],
                ["Target Yield", formatPercent(targetYield, 1)],
                ["Target Raise", formatCurrency(targetRaise)],
                ["Implied LTV", formatPercent(impliedLtv)],
                ["Property Value", formatCurrency(propertyValue)],
                ["Term", `${termMonths} Months`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[1.25rem] bg-[var(--color-surface)] p-4"
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

          <article className="portal-card rounded-[1.8rem] border border-black/5 p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Draft Status
            </p>

            {createdDraft ? (
              <div className="mt-5 rounded-[1.45rem] bg-[var(--color-surface)] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                  Draft Created
                </p>
                <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                  {createdDraft.name}
                </h3>
                <div className="mt-4 space-y-2 text-sm text-[var(--color-copy-soft)]">
                  <p>Slug: `{createdDraft.slug}`</p>
                  <p>Created: {createdDraft.createdLabel}</p>
                  <p>Pricing: {formatPercent(Number(createdDraft.targetYield), 1)}</p>
                  <p>Implied LTV: {formatPercent(createdDraft.impliedLtv)}</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href="/admin"
                    className="portal-button-sm inline-flex shrink-0 whitespace-nowrap border border-[rgba(185,175,164,0.4)] bg-white text-[var(--color-primary)] no-underline shadow-sm hover:bg-[var(--color-surface)]"
                  >
                    Return to Admin
                  </Link>
                  <Link
                    href="/dashboard"
                    className="portal-button-sm inline-flex shrink-0 whitespace-nowrap bg-[var(--color-primary)] text-white no-underline hover:bg-[var(--color-primary-soft)]"
                  >
                    View Dashboard
                    <ArrowRightIcon className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-[1.45rem] bg-[var(--color-surface)] p-5">
                <p className="text-sm leading-7 text-[var(--color-copy-soft)]">
                  Submit the intake form to generate a local draft summary for the
                  new investment.
                </p>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}
