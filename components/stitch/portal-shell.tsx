import Link from "next/link";
import { navItems } from "@/components/stitch/data";
import { Icon } from "@/components/stitch/icons";

type PortalShellProps = {
  children: React.ReactNode;
  currentPath: string;
  title: string;
  sectionLabel?: string;
};

export function PortalShell({
  children,
  currentPath,
  title,
  sectionLabel,
}: PortalShellProps) {
  return (
    <div className="portal-shell portal-scrollbar relative min-h-screen lg:pl-72">
      <aside className="border-b border-black/5 bg-[rgba(252,250,247,0.92)] px-6 py-6 backdrop-blur-lg lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:w-72 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
        <div className="mb-8 flex items-end justify-between lg:mb-12 lg:block">
          <div>
            <p className="font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-primary)]">
              Woodfield
            </p>
            <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-[var(--color-copy-soft)]">
              Private Ledger
            </p>
          </div>
          <div className="hidden rounded-full border border-[rgba(185,175,164,0.28)] bg-white/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-copy-soft)] lg:inline-flex">
            Phase II
          </div>
        </div>
        <nav className="grid gap-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group flex items-center gap-4 rounded-[1.25rem] px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em]",
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[0_14px_30px_rgba(17,24,39,0.08)]"
                    : "text-[var(--color-copy-soft)] hover:bg-white/70 hover:text-[var(--color-primary)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full border",
                    isActive
                      ? "border-[rgba(139,107,67,0.18)] bg-[rgba(239,216,186,0.45)] text-[var(--color-secondary)]"
                      : "border-transparent bg-[rgba(17,24,39,0.04)] text-[var(--color-copy-soft)] group-hover:border-[rgba(185,175,164,0.28)]",
                  ].join(" ")}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 lg:absolute lg:bottom-8 lg:left-8 lg:right-8">
          <button
            type="button"
            className="portal-button w-full bg-[var(--color-primary)] text-white shadow-[0_22px_40px_rgba(15,26,36,0.22)] hover:bg-[var(--color-primary-soft)]"
          >
            <Icon name="add" className="h-4 w-4" />
            New Investment
          </button>
        </div>
      </aside>
      <div className="relative z-10">
        <header className="sticky top-0 z-10 border-b border-black/5 bg-[rgba(248,245,240,0.82)] px-6 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="hidden rounded-full border border-[rgba(185,175,164,0.32)] bg-white/70 px-4 py-2 sm:inline-flex">
                <Icon
                  name="search"
                  className="mr-2 h-4 w-4 text-[var(--color-copy-soft)]"
                />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-copy-soft)]">
                  Search Ledgers
                </span>
              </div>
              <div>
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)]">
                  {title}
                </p>
                {sectionLabel ? (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-copy-soft)]">
                    {sectionLabel}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-3 self-end lg:self-auto">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(185,175,164,0.24)] bg-white/70 text-[var(--color-copy-soft)] hover:text-[var(--color-primary)]"
              >
                <Icon name="notifications" className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(185,175,164,0.24)] bg-white/70 text-[var(--color-copy-soft)] hover:text-[var(--color-warning)]"
              >
                <Icon name="logout" className="h-5 w-5" />
              </button>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                MW
              </div>
            </div>
          </div>
        </header>
        <main className="px-6 py-8 sm:px-8 lg:px-12 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
