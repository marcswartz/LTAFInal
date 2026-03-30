import Link from "next/link";
import { ArrowRightIcon, Icon } from "@/components/stitch/icons";

const pages = [
  {
    href: "/dashboard",
    label: "Investor Dashboard",
    description: "Portfolio summary, liquidity events, and active deals.",
  },
  {
    href: "/deals/oak-ridge",
    label: "Deal Detail",
    description: "Deal profile, risk structure, documents, and milestones.",
  },
  {
    href: "/reporting",
    label: "Reporting",
    description: "Distributions, updates, executive notes, and statements.",
  },
  {
    href: "/admin",
    label: "Founder Admin",
    description: "Deal engagement, investor communication, and admin controls.",
  },
];

export default function Home() {
  return (
    <main className="portal-shell flex min-h-screen items-center justify-center px-6 py-14 sm:px-10">
      <div className="portal-card portal-muted-grid relative w-full max-w-6xl overflow-hidden rounded-[2rem] p-8 sm:p-12">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(239,216,186,0.75)_0%,_rgba(239,216,186,0)_70%)]" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.95fr]">
          <section className="space-y-8">
            <div className="portal-pill bg-[rgba(139,107,67,0.12)] text-[var(--color-secondary)]">
              <Icon name="verified_user" className="h-4 w-4" />
              Stitch Rebuild
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-copy-soft)]">
                Woodfield Private Ledger
              </p>
              <h1 className="font-display text-5xl font-black tracking-[-0.04em] text-[var(--color-primary)] sm:text-7xl">
                Frontend built out from the Stitch artifacts.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-copy-soft)] sm:text-lg">
                Each screen is now routed as a real Next app surface with a shared
                shell, responsive layout, and reusable portal components.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-black/5 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                  Pages
                </p>
                <p className="font-display text-4xl font-bold text-[var(--color-primary)]">
                  4
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/5 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                  Shared Shell
                </p>
                <p className="font-display text-4xl font-bold text-[var(--color-primary)]">
                  1
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-black/5 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-copy-soft)]">
                  Theme
                </p>
                <p className="font-display text-4xl font-bold text-[var(--color-primary)]">
                  Live
                </p>
              </div>
            </div>
          </section>
          <section className="space-y-4">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex items-center justify-between rounded-[1.5rem] border border-black/5 bg-white/80 px-6 py-5 hover:border-[rgba(139,107,67,0.3)] hover:bg-white"
              >
                <div className="space-y-1">
                  <p className="font-display text-2xl font-bold tracking-[-0.03em] text-[var(--color-primary)]">
                    {page.label}
                  </p>
                  <p className="max-w-md text-sm leading-6 text-[var(--color-copy-soft)]">
                    {page.description}
                  </p>
                </div>
                <ArrowRightIcon className="h-5 w-5 shrink-0 text-[var(--color-secondary)] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
