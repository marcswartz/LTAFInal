export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" as const },
  { href: "/security", label: "Security", icon: "verified_user" as const },
  { href: "/reporting", label: "Reporting", icon: "analytics" as const },
];

type DealMilestone = {
  amount: number;
  date: string;
  detail: string;
  label: string;
  status: "complete" | "current" | "upcoming";
};

type DealDocument = {
  meta: string;
  title: string;
};

type CapitalStackItem = {
  amount: number;
  detail: string;
  label: string;
};

export type DealRecord = {
  assetType: string;
  capitalStack: CapitalStackItem[];
  committedCapital: number;
  documents: DealDocument[];
  exit: string;
  highlights: string[];
  location: string;
  ltv: number;
  maturity: string;
  milestones: DealMilestone[];
  name: string;
  nextLiquidityAmount: number;
  nextLiquidityDate: string;
  overview: string;
  propertyValue: number;
  reference: string;
  securityType: string;
  slug: string;
  sponsor: string;
  squareFeet: number;
  stage: string;
  status: string;
  targetYield: number;
  termMonths: number;
  units: number;
};

export const portfolioDeals: DealRecord[] = [
  {
    slug: "oxford-st-development",
    name: "Oxford St. Development",
    location: "Toronto, ON",
    assetType: "Townhome Development",
    securityType: "1st Mortgage Construction",
    status: "Funded",
    reference: "WF-2026-041",
    committedCapital: 1_450_000,
    propertyValue: 2_280_000,
    targetYield: 8.1,
    ltv: 64,
    termMonths: 18,
    units: 6,
    squareFeet: 11_400,
    nextLiquidityAmount: 58_000,
    nextLiquidityDate: "Jul 15, 2026",
    maturity: "Jan 2027",
    stage: "Framing and envelope",
    sponsor: "Oxford Street Developments Inc.",
    exit: "Unit sales",
    overview:
      "Senior construction paper secured against a six-unit infill townhome project with funded interest reserve and milestone-controlled draws.",
    highlights: [
      "Sales program is 67% reserved with deposits already collected.",
      "Draws are released only after quantity surveyor sign-off.",
      "Sponsor equity remains subordinate to investor capital through exit.",
    ],
    capitalStack: [
      {
        label: "Senior debt",
        amount: 1_450_000,
        detail: "Investor capital in first position.",
      },
      {
        label: "Sponsor equity",
        amount: 620_000,
        detail: "Cash equity already injected into the site.",
      },
      {
        label: "Contingency reserve",
        amount: 210_000,
        detail: "Dedicated cost overrun buffer.",
      },
    ],
    milestones: [
      {
        date: "Apr 2026",
        label: "Land advance funded",
        amount: 400_000,
        detail: "Site acquisition, legal close, and permit carry costs.",
        status: "complete",
      },
      {
        date: "Jun 2026",
        label: "Structure draw",
        amount: 350_000,
        detail: "Foundation, formwork, and initial framing package.",
        status: "current",
      },
      {
        date: "Sep 2026",
        label: "Envelope draw",
        amount: 300_000,
        detail: "Roofing, windows, and exterior weatherproofing.",
        status: "upcoming",
      },
      {
        date: "Jan 2027",
        label: "Completion and exit",
        amount: 400_000,
        detail: "Final release tied to closing proceeds and mortgage discharge.",
        status: "upcoming",
      },
    ],
    documents: [
      {
        title: "Appraisal report",
        meta: "PDF • 14.2 MB • Updated Apr 28, 2026",
      },
      {
        title: "Quantity surveyor certificate",
        meta: "PDF • 4.9 MB • Draw 02 approved",
      },
      {
        title: "Registered first mortgage",
        meta: "PDF • 2.1 MB • First priority confirmed",
      },
    ],
  },
  {
    slug: "harbor-bridge-debt",
    name: "Harbor Bridge Debt",
    location: "Burlington, ON",
    assetType: "Bridge Loan",
    securityType: "Senior secured bridge",
    status: "Live",
    reference: "WF-2026-057",
    committedCapital: 1_180_000,
    propertyValue: 1_935_000,
    targetYield: 8.3,
    ltv: 61,
    termMonths: 12,
    units: 1,
    squareFeet: 18_600,
    nextLiquidityAmount: 42_000,
    nextLiquidityDate: "Aug 01, 2026",
    maturity: "Nov 2026",
    stage: "Lease-up and refinance",
    sponsor: "Harbor Bridge Capital Corp.",
    exit: "CMHC refinance",
    overview:
      "Short-duration bridge position used to stabilize a light industrial asset ahead of permanent financing, supported by improving tenancy and a funded carry reserve.",
    highlights: [
      "Occupancy is up to 82% after two new tenant commitments.",
      "Debt service is covered by in-place rent plus reserve support.",
      "Refinance package is already in underwriting with the takeout lender.",
    ],
    capitalStack: [
      {
        label: "Senior bridge debt",
        amount: 1_180_000,
        detail: "First-position investor note with monthly reporting.",
      },
      {
        label: "Sponsor equity",
        amount: 560_000,
        detail: "Borrower cash invested below the senior loan.",
      },
      {
        label: "Stabilization reserve",
        amount: 195_000,
        detail: "Leasing and operating reserve held in trust.",
      },
    ],
    milestones: [
      {
        date: "Feb 2026",
        label: "Acquisition close",
        amount: 520_000,
        detail: "Loan funded at purchase with reserve holdback.",
        status: "complete",
      },
      {
        date: "May 2026",
        label: "Tenant improvement release",
        amount: 260_000,
        detail: "Buildout package for signed tenants.",
        status: "current",
      },
      {
        date: "Aug 2026",
        label: "Lease-up reserve release",
        amount: 150_000,
        detail: "Final leasing commissions and operating bridge.",
        status: "upcoming",
      },
      {
        date: "Nov 2026",
        label: "Refinance payoff",
        amount: 250_000,
        detail: "Principal return through permanent loan takeout.",
        status: "upcoming",
      },
    ],
    documents: [
      {
        title: "Rent roll",
        meta: "PDF • 1.7 MB • Updated Jun 30, 2026",
      },
      {
        title: "Environmental phase I",
        meta: "PDF • 6.3 MB • Cleared",
      },
      {
        title: "Refinance term sheet",
        meta: "PDF • 3.4 MB • Indicative offer received",
      },
    ],
  },
  {
    slug: "parkview-residences",
    name: "Parkview Residences",
    location: "Mississauga, ON",
    assetType: "Mid-rise condo conversion",
    securityType: "Senior secured note",
    status: "Monitoring",
    reference: "WF-2026-068",
    committedCapital: 1_570_000,
    propertyValue: 2_520_000,
    targetYield: 8.5,
    ltv: 62,
    termMonths: 18,
    units: 14,
    squareFeet: 23_400,
    nextLiquidityAmount: 46_000,
    nextLiquidityDate: "Sep 15, 2026",
    maturity: "Mar 2027",
    stage: "Interior turnover",
    sponsor: "Parkview Asset Group",
    exit: "Unit disposition and bulk sale",
    overview:
      "Senior secured capital supporting the conversion of a partially completed apartment block into stratified residential inventory with phased sales already underway.",
    highlights: [
      "Rezoning and condo plan approval are both finalized.",
      "Interior turnover is running inside the original contingency budget.",
      "Three presale contracts are signed, reducing exit timing risk.",
    ],
    capitalStack: [
      {
        label: "Senior secured note",
        amount: 1_570_000,
        detail: "Investor principal with quarterly reporting covenants.",
      },
      {
        label: "Sponsor equity",
        amount: 690_000,
        detail: "Cash equity plus deferred fee subordination.",
      },
      {
        label: "Sales reserve",
        amount: 260_000,
        detail: "Completion and closing cost reserve.",
      },
    ],
    milestones: [
      {
        date: "Mar 2026",
        label: "Conversion close",
        amount: 540_000,
        detail: "Acquisition, legal setup, and initial remediation work.",
        status: "complete",
      },
      {
        date: "Jul 2026",
        label: "Interior turnover",
        amount: 430_000,
        detail: "Suite completion and common area upgrades.",
        status: "current",
      },
      {
        date: "Nov 2026",
        label: "Sales release",
        amount: 280_000,
        detail: "Closing cost reserve tied to contracted presales.",
        status: "upcoming",
      },
      {
        date: "Mar 2027",
        label: "Asset exit",
        amount: 320_000,
        detail: "Principal return through unit closings and residual sale.",
        status: "upcoming",
      },
    ],
    documents: [
      {
        title: "Condo conversion approval",
        meta: "PDF • 5.2 MB • Final approval issued",
      },
      {
        title: "Presale tracker",
        meta: "PDF • 1.3 MB • 3 contracts executed",
      },
      {
        title: "Progress inspection",
        meta: "PDF • 2.8 MB • Updated Jul 09, 2026",
      },
    ],
  },
];

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const integerFormatter = new Intl.NumberFormat("en-US");

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function formatCurrencyCompact(value: number) {
  return compactCurrencyFormatter.format(value).replace(/\.0(?=[A-Z])/, "");
}

export function formatCount(value: number, minimumIntegerDigits = 2) {
  return new Intl.NumberFormat("en-US", {
    minimumIntegerDigits,
    useGrouping: false,
  }).format(value);
}

export function formatPercent(value: number, digits = 0) {
  const formatter =
    digits > 0
      ? decimalFormatter
      : new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

  return `${formatter.format(value)}%`;
}

export function formatSquareFeet(value: number) {
  return `${integerFormatter.format(value)} SF`;
}

export function getDealBySlug(slug: string) {
  return portfolioDeals.find((deal) => deal.slug === slug);
}

export const totalCommittedCapital = portfolioDeals.reduce(
  (total, deal) => total + deal.committedCapital,
  0,
);

export const totalPropertyValue = portfolioDeals.reduce(
  (total, deal) => total + deal.propertyValue,
  0,
);

export const weightedTargetYield =
  portfolioDeals.reduce(
    (total, deal) => total + deal.committedCapital * deal.targetYield,
    0,
  ) / totalCommittedCapital;

export const portfolioLtv = (totalCommittedCapital / totalPropertyValue) * 100;

export const weightedTermMonths =
  portfolioDeals.reduce(
    (total, deal) => total + deal.committedCapital * deal.termMonths,
    0,
  ) / totalCommittedCapital;

export const monthlyIncomeRunRate =
  (totalCommittedCapital * weightedTargetYield) / 100 / 12;

export const liquiditySchedule = portfolioDeals
  .map((deal) => ({
    amount: deal.nextLiquidityAmount,
    date: deal.nextLiquidityDate,
    name: deal.name,
    slug: deal.slug,
  }))
  .sort((left, right) => {
    return (
      new Date(left.date).getTime() - new Date(right.date).getTime()
    );
  });

export const upcomingLiquidityTotal = liquiditySchedule.reduce(
  (total, item) => total + item.amount,
  0,
);
