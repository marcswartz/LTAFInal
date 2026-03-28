const workflowSteps = [
  {
    number: "01",
    title: "Investor Contribution",
    description:
      "Capital is transferred into a dedicated trust account with release controls tied to deal documentation.",
    icon: "payments",
  },
  {
    number: "02",
    title: "Trust Account Hold",
    description:
      "Funds remain held by third-party counsel until the registered security package is complete.",
    icon: "account_balance",
  },
  {
    number: "03",
    title: "Mortgage on Title",
    description:
      "A legal charge is registered against the property title to establish senior investor priority.",
    icon: "description",
  },
  {
    number: "04",
    title: "Milestone Disbursement",
    description:
      "Capital is released only against verified development milestones and independent cost review.",
    icon: "account_tree",
  },
];

const verificationAssets = [
  {
    title: "Certificate of Investment",
    description: "Formal validation of principal, interest, and maturity terms.",
    icon: "article",
  },
  {
    title: "Registered Mortgage Charge",
    description: "Legal proof that the investor holds a lien on the underlying property.",
    icon: "gavel",
  },
  {
    title: "Independent Appraisal",
    description: "Current market valuation prepared by a certified commercial appraiser.",
    icon: "analytics",
  },
  {
    title: "Trust Ledger Statement",
    description: "A transparent record of funds received, held, and disbursed through the process.",
    icon: "receipt_long",
  },
];

function Icon({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-sm font-semibold uppercase tracking-[0.3em] text-stone-700"
    >
      {name.slice(0, 2)}
    </span>
  );
}

export function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-10 lg:px-12 lg:py-16">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
              Security &amp; Protection
            </p>
            <h1 className="font-serif text-5xl font-black tracking-tight text-[#071018] md:text-6xl">
              The Architectural Integrity of Capital.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              Security is the structure, not an add-on. The portal presents each
              investment through legal, financial, and operational controls that
              are designed to keep capital tied to tangible assets with senior
              priority.
            </p>
          </div>

          <aside className="w-full max-w-md rounded-2xl border border-stone-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
              Core Philosophy
            </p>
            <p className="text-sm leading-7 text-stone-700 italic">
              “We manage investor capital with institutional rigor, prioritizing
              return of capital before return on capital.”
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-stone-50 p-3">
                <div className="text-lg font-bold text-[#071018]">1st</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-stone-500">
                  Priority
                </div>
              </div>
              <div className="rounded-xl bg-stone-50 p-3">
                <div className="text-lg font-bold text-[#071018]">24/7</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-stone-500">
                  Visibility
                </div>
              </div>
              <div className="rounded-xl bg-stone-50 p-3">
                <div className="text-lg font-bold text-[#071018]">3-Layer</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-stone-500">
                  Control
                </div>
              </div>
            </div>
          </aside>
        </header>

        <section>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
                Security Workflow
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#071018]">
                Capital moves only through verified gates.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step) => (
              <article
                key={step.number}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071018] text-xs font-bold tracking-[0.3em] text-white">
                  {step.number}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#735a3a]">
                  Step {step.number}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold text-[#071018]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                  <span className="h-px flex-1 bg-stone-200" />
                  Protected
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
          <article className="rounded-3xl bg-[#071018] p-8 text-white shadow-lg lg:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#e2c19b]">
              Senior Position
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight md:text-5xl">
              1st Mortgage Priority Status
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
              Investors sit in a senior secured position. Claims are satisfied
              before developer equity or subordinate debt, which is the highest
              level of protection used in the portal.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Security", "First charge mortgage"],
                ["Coverage", "Senior collateralized"],
                ["Release", "Milestone controlled"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-stone-200 bg-stone-50 p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
              Verification Assets
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[#071018]">
              Full transparency, available in the portal.
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Every investment is packaged with documentation that proves the
              structure, the lien, and the valuation path.
            </p>

            <div className="mt-8 space-y-4">
              {verificationAssets.map((asset) => (
                <div
                  key={asset.title}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <Icon name={asset.icon} />
                  <div>
                    <h4 className="font-semibold text-[#071018]">{asset.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      {asset.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
              Project Summary
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[#071018]">
              Capital protection is built into the workflow.
            </h3>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Capital is held in a dedicated trust account, released only after
              legal documentation is complete, and tracked through the
              development lifecycle with independent verification points.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Current Status", "Funding Phase 1 Complete"],
                ["Document Set", "Certificate, charge, appraisal"],
                ["Fund Release", "Milestone based"],
                ["Investor Access", "Portal view and ledger trace"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-stone-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#071018]">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-stone-200 bg-stone-50 p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#735a3a]">
              Identified Risks
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[#071018]">
              Risks are acknowledged and mitigated.
            </h3>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Market softness in the luxury segment and construction delays from
              supply chain volatility are the primary risks. The structure is
              designed to offset both through conservative leverage and
              experienced sponsorship.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
                  Monitoring
                </span>
                <span className="rounded-full bg-[#fddab2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#785e3e]">
                  Active
                </span>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs font-semibold text-stone-600">
                    <span>Legal completion</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-100">
                    <div className="h-2 w-[92%] rounded-full bg-[#071018]" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs font-semibold text-stone-600">
                    <span>Fund release readiness</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-100">
                    <div className="h-2 w-[78%] rounded-full bg-[#735a3a]" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
