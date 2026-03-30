"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/stitch/icons";

export function HeaderActions() {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

  function handleLogout() {
    router.push("/dashboard");
  }

  return (
    <div className="relative flex items-center gap-3">
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowNotifications((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(185,175,164,0.24)] bg-white/70 text-[var(--color-copy-soft)] hover:text-[var(--color-primary)]"
          aria-label="Notifications"
        >
          <Icon name="notifications" className="h-5 w-5" />
        </button>
        {showNotifications && (
          <div className="absolute right-0 top-14 z-50 w-72 rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-[0_24px_60px_rgba(16,24,40,0.12)]">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-copy-soft)]">
              Notifications
            </p>
            <div className="space-y-3">
              {[
                { title: "Distribution confirmed", sub: "Dec 01 payment scheduled" },
                { title: "Phase II update posted", sub: "Nov 15 site report available" },
              ].map((n) => (
                <div
                  key={n.title}
                  className="rounded-[1.1rem] bg-[var(--color-surface)] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-[var(--color-primary)]">{n.title}</p>
                  <p className="mt-1 text-[10px] text-[var(--color-copy-soft)]">{n.sub}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowNotifications(false)}
              className="mt-4 w-full rounded-full border border-black/5 bg-[var(--color-surface)] py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-copy-soft)] hover:text-[var(--color-primary)]"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(185,175,164,0.24)] bg-white/70 text-[var(--color-copy-soft)] hover:text-[var(--color-warning)]"
        aria-label="Log out"
      >
        <Icon name="logout" className="h-5 w-5" />
      </button>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
        MD
      </div>
    </div>
  );
}
