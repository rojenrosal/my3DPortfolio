"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { projects } from "@/lib/mock-data";
import type { ProjectStatus } from "@/lib/types";

const statusVariant: Record<ProjectStatus, "default" | "success" | "warning" | "muted"> = {
  planning: "muted",
  "in-progress": "default",
  "on-hold": "warning",
  complete: "success",
};

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "all">("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQ =
        !needle ||
        p.name.toLowerCase().includes(needle) ||
        p.client.toLowerCase().includes(needle) ||
        p.location.toLowerCase().includes(needle);
      const matchesS = statusFilter === "all" || p.status === statusFilter;
      return matchesQ && matchesS;
    });
  }, [q, statusFilter]);

  const statuses: (ProjectStatus | "all")[] = [
    "all",
    "planning",
    "in-progress",
    "on-hold",
    "complete",
  ];

  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">Portfolio</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          {projects.length} programmes across civil, rail, buildings, energy,
          water, and tunnelling.
        </p>
      </header>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by project, client or location"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={
                "rounded-full border px-3 py-1 text-xs font-medium transition " +
                (statusFilter === s
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground")
              }
            >
              {s === "all" ? "All" : s.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`}>
            <Card className="transition hover:border-primary/40">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <Badge variant={statusVariant[p.status]}>
                    {p.status.replace("-", " ")}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.client}</p>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {p.location}
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{p.progress}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.discipline}</span>
                  <span>{p.crew} crew</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
