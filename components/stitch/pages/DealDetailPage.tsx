import Image from "next/image";

const timeline = [
  {
    date: "March 2024",
    title: "Loan Origination and Site Acquisition",
    description:
      "Full due diligence completed. 1st charge registered. Appraisal confirmed at $2.1M as-is value.",
    tone: "bg-emerald-500",
  },
  {
    date: "May 2024",
    title: "Site Preparation and Excavation",
    description:
      "Current phase. Heavy machinery deployed. Soil testing and clearing finalized for foundation pouring.",
    tone: "bg-amber-500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAI7_vLFzECXS2k8hl8n4bExmmD8KJv7-UKRYPRwvLGmOr91dCo-UseqHnPyjvmBaZDyOvilNhA-ALJ1-2MntaMpGQ9qcJWERzuaVZPMGHeR-HstN3aH0_EQreJUvlTedVQs7t_p-n7z07-yiXSEf2m3cykK0VyD9PUHz8OqDjrLUp2C_VgQ4WhsgwuQNnEF6r6UKdU_LMgG5QWVSSgaFvVM7HgwvTwMobkKjxnzVbzP5mnRnp9ABTpabGvBb5qRQ58Bj5oTmxk_84",
  },
  {
    date: "September 2024",
    title: "Lock-up and Envelope",
    description:
      "Projected milestone for framing completion and roofing. Triggers second-tier inspection for interest payment review.",
    tone: "bg-slate-400",
  },
  {
    date: "March 2025",
    title: "Project Exit and Repayment",
    description:
      "Anticipated sale of all 6 units. Mortgage discharge upon successful conveyance.",
    tone: "bg-slate-400",
  },
];

const documents = [
  {
    title: "Appraisal Report",
    meta: "PDF • 14.2 MB • Updated May 02",
    icon: "A",
  },
  {
    title: "Topographic Survey",
    meta: "PDF • 8.1 MB • Registered 2023",
    icon: "S",
  },
  {
    title: "Title Search Results",
    meta: "PDF • 2.4 MB • Verified Clean",
    icon: "T",
  },
];

export function DealDetailPage() {
  return (
    <main className="min-h-screen bg-[#faf9f8] text-[#1a1c1c]">
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <section className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end">
          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#fddab2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#785e3e]">
                Active Offering
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#75777c]">
                Ref: WF-2024-082
              </span>
            </div>
            <h1
              className="max-w-4xl text-4xl font-black leading-none tracking-tight text-[#071018] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Oak Ridge Residential
              <br />
              Development
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#75777c]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#735a3a]" />
                Toronto, ON
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#071018]" />
                1st Mortgage Construction
              </div>
            </div>
          </div>
          <aside className="w-full rounded-lg border border-[#e3e2e1] bg-white p-6 shadow-sm sm:p-8 lg:max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#75777c]">
              Target Return
            </p>
            <div
              className="mt-3 text-4xl font-black tracking-tight text-[#735a3a] sm:text-5xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              11.00%
              <span className="ml-2 text-sm font-medium text-[#44474b]">
                p.a.
              </span>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between border-b border-[#e3e2e1] pb-2">
                <span className="text-xs font-medium text-[#44474b]">
                  Loan Amount
                </span>
                <span className="text-sm font-bold text-[#071018]">
                  $1,250,000
                </span>
              </div>
              <div className="flex justify-between border-b border-[#e3e2e1] pb-2">
                <span className="text-xs font-medium text-[#44474b]">LTV Ratio</span>
                <span className="text-sm font-bold text-[#071018]">65%</span>
              </div>
              <div className="flex justify-between border-b border-[#e3e2e1] pb-2">
                <span className="text-xs font-medium text-[#44474b]">Term</span>
                <span className="text-sm font-bold text-[#071018]">12 Months</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="mb-14 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl bg-[#f4f3f2] p-8 sm:p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h2
                className="text-2xl font-bold tracking-tight text-[#071018] sm:text-3xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Investment Summary
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#44474b] sm:text-lg">
                A 12-month construction bridge loan secured by a 1st mortgage on
                a 6-unit luxury townhome project. The borrower is an experienced
                local developer with a 20+ year history. Funds will be deployed
                for immediate site preparation and foundation work to maintain
                the project&apos;s aggressive delivery schedule.
              </p>
              <div className="mt-8 flex flex-wrap gap-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#75777c]">
                    Use of Funds
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#071018]">
                    Site Prep and Foundations
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#75777c]">
                    Exit Strategy
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#071018]">
                    Sale of Completed Units
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -bottom-10 text-[240px] leading-none text-[#071018] opacity-[0.05]">
              ▣
            </div>
          </div>

          <div className="rounded-xl border border-[#e3e2e1] bg-[#eeeeed] p-8">
            <h2
              className="text-2xl font-bold tracking-tight text-[#071018]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Security and Risk
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#735a3a]">
                  Primary Security
                </p>
                <ul className="mt-3 space-y-2 text-sm font-medium text-[#1a1c1c]">
                  <li>1st Charge Mortgage</li>
                  <li>Personal Guarantees</li>
                  <li>Corporate Covenant</li>
                </ul>
              </div>
              <div className="border-t border-[#c4c6cb]/60 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ba1a1a]">
                  Identified Risks
                </p>
                <p className="mt-3 text-xs leading-6 text-[#44474b]">
                  Market softening in the luxury segment and potential
                  construction delays due to supply chain volatility. Mitigated
                  by developer experience and conservative LTV.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight text-[#071018]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Project Timeline
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#44474b]">
              Strict adherence to milestone-based funding ensures capital
              preservation throughout the development cycle.
            </p>
            <div className="mt-6 rounded-lg border border-[#e3e2e1] bg-white p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf9f8] shadow-sm">
                  <span className="text-sm font-black text-[#735a3a]">01</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#75777c]">
                    Current Status
                  </p>
                  <p className="text-sm font-bold text-[#071018]">
                    Funding Phase 1 Complete
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-[#c4c6cb]/50" />
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <article key={item.date} className="relative pl-16">
                  <div
                    className={`absolute left-[13px] top-1 h-3 w-3 rounded-full border-4 border-[#faf9f8] ${item.tone}`}
                  />
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#735a3a]">
                    {item.date}
                  </p>
                  <h3
                    className={[
                      "mt-2 text-xl font-bold tracking-tight",
                      index < 2 ? "text-[#071018]" : "text-[#44474b]",
                    ].join(" ")}
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#44474b]">
                    {item.description}
                  </p>
                  {item.image ? (
                    <div className="mt-4">
                      <Image
                        alt="Construction site progress"
                        className="h-20 w-32 rounded shadow-sm object-cover grayscale transition-all hover:grayscale-0"
                        width={128}
                        height={80}
                        src={item.image}
                      />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#c4c6cb]/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight text-[#071018]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Due Diligence
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#44474b]">
                Verified documentation for professional review
              </p>
            </div>
            <button className="inline-flex items-center gap-2 border border-[#071018] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#071018] transition-colors hover:bg-[#071018] hover:text-white">
              Download All Archive
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex items-center border border-[#e3e2e1] bg-white p-6 transition-colors hover:border-[#735a3a]"
              >
                <div className="mr-5 flex h-12 w-12 items-center justify-center bg-[#eeeeed] text-sm font-black text-[#071018] transition-colors hover:bg-[#fddab2]">
                  {doc.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-tight text-[#071018]">
                    {doc.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#75777c]">
                    {doc.meta}
                  </p>
                </div>
                <span className="text-[#75777c]">›</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-[#c4c6cb]/60 pb-12 pt-8 text-[10px] uppercase tracking-[0.18em] text-[#75777c]">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 font-bold text-[#44474b]">Investment Disclosure</p>
              <p className="leading-6">
                Information presented in this portal is for verified investors
                of Woodfield Developments only. Past performance does not
                guarantee future results. Real estate investments involve risk
                including the potential loss of principal. Woodfield
                Developments is not an investment advisor and does not provide
                financial or legal advice. Investors should consult with their
                own professional team before committing capital.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-[#44474b]">Confidentiality</p>
              <p>
                Restricted Document: WF-082-OR
                <br />
                Access Logged: ID_8293-XP
                <br />
                © 2024 Woodfield Private Ledger
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
