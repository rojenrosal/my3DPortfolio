"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/job-card";
import { jobs, categories } from "@/lib/mock-data";
import type { Workstyle } from "@/lib/types";

type WorkstyleFilter = Workstyle | "All";

export default function JobsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number] | "All">("All");
  const [workstyle, setWorkstyle] = useState<WorkstyleFilter>("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchesQ =
        !needle ||
        j.title.toLowerCase().includes(needle) ||
        j.company.toLowerCase().includes(needle) ||
        j.location.toLowerCase().includes(needle);
      const matchesCat = category === "All" || j.category === category;
      const matchesWs = workstyle === "All" || j.workstyle === workstyle;
      return matchesQ && matchesCat && matchesWs;
    });
  }, [q, category, workstyle]);

  const workstyles: WorkstyleFilter[] = ["All", "Remote", "Hybrid", "On-site"];

  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">Jobs</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Browse {jobs.length} live roles
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Search by role, company, or location. Filter by category and workstyle.
        </p>
      </header>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search jobs"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Pill
              label="All categories"
              active={category === "All"}
              onClick={() => setCategory("All")}
            />
            {categories.map((c) => (
              <Pill
                key={c}
                label={c}
                active={category === c}
                onClick={() => setCategory(c)}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {workstyles.map((w) => (
              <Pill
                key={w}
                label={w}
                active={workstyle === w}
                onClick={() => setWorkstyle(w)}
              />
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No jobs matched your filters.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((j) => (
            <JobCard key={j.slug} job={j} />
          ))}
        </div>
      )}
    </div>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 text-xs font-medium transition " +
        (active
          ? "border-primary/60 bg-primary/15 text-primary"
          : "border-border text-muted-foreground hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}
