"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Summary = {
  total: number;
  new: number;
  read: number;
  replied: number;
  closed: number;
};

const cards = [
  { key: "total", label: "Total Enquiries" },
  { key: "new", label: "New" },
  { key: "read", label: "Read" },
  { key: "replied", label: "Replied" },
  { key: "closed", label: "Closed" },
] as const;

export default function AdminPage() {
  const router = useRouter();

  const [summary, setSummary] = useState<Summary>({
    total: 0,
    new: 0,
    read: 0,
    replied: 0,
    closed: 0,
  });

  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    fetch("/api/admin/enquiries/summary", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setSummary(data);
        }
      })
      .catch((error) => {
        console.error("DASHBOARD SUMMARY ERROR:", error);
      });
  }, []);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              ALEEMAK ADMIN
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
              Dashboard
            </h1>

            <p className="mt-2 text-muted-foreground">
              Business enquiries at a glance.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted disabled:opacity-60"
          >
            {loggingOut ? "Logging out..." : "Logout"}
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.key}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-sm text-muted-foreground">
                {card.label}
              </p>

              <p className="mt-3 font-display text-3xl font-bold text-foreground">
                {summary[card.key]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/admin/enquiries"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            View Customer Enquiries →
          </Link>
        </div>

      </div>
    </main>
  );
}