"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { workouts } from "@/lib/mock-data";
import type { WorkoutCategory } from "@/lib/types";
import { formatMinutes } from "@/lib/utils";

type Filter = "All" | WorkoutCategory;

const filters: Filter[] = ["All", "Strength", "Cardio", "HIIT", "Mobility", "Recovery"];

export default function WorkoutsPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return workouts.filter((w) => {
      const matchesQ =
        !needle ||
        w.title.toLowerCase().includes(needle) ||
        w.focus.toLowerCase().includes(needle);
      const matchesF = filter === "All" || w.category === filter;
      return matchesQ && matchesF;
    });
  }, [q, filter]);

  return (
    <PhoneFrame title="Workouts" showBack>
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search workouts"
            className="h-10 w-full rounded-full border border-border bg-muted/40 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition " +
                (filter === f
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {list.map((w) => (
            <Link
              key={w.slug}
              href={`/app/workouts/${w.slug}/`}
              className="rounded-2xl border border-border bg-card p-3"
            >
              <div
                className={"h-24 rounded-xl bg-gradient-to-br " + w.accent}
                aria-hidden="true"
              />
              <p className="mt-2 text-sm font-medium leading-tight">{w.title}</p>
              <p className="text-[10px] text-muted-foreground">
                {formatMinutes(w.duration)} · {w.level}
              </p>
              <p className="mt-1 text-[10px] text-primary">{w.category}</p>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <p className="py-10 text-center text-xs text-muted-foreground">
            No workouts match.
          </p>
        )}
      </div>
    </PhoneFrame>
  );
}
