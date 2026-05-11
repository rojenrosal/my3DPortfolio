import Link from "next/link";
import { AlertTriangle, Calendar, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks, projects } from "@/lib/mock-data";
import { shortDate } from "@/lib/utils";
import type { TaskStatus } from "@/lib/types";

const columns = [
  { key: "week-1", label: "Week 1 - In play" },
  { key: "week-2", label: "Week 2 - Locked in" },
  { key: "week-3", label: "Week 3 - Planned" },
] as const;

function bucketFor(start: string): (typeof columns)[number]["key"] {
  const day = new Date(start).getDate();
  if (day <= 13) return "week-1";
  if (day <= 19) return "week-2";
  return "week-3";
}

const statusVariant: Record<TaskStatus, "muted" | "default" | "success" | "danger"> = {
  planned: "muted",
  "in-progress": "default",
  complete: "success",
  delayed: "danger",
};

export default function LookaheadPage() {
  const grouped = columns.map((c) => ({
    ...c,
    items: tasks.filter((t) => bucketFor(t.start) === c.key),
  }));

  const lookup = new Map(projects.map((p) => [p.id, p.name]));

  return (
    <div className="container py-12 space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="muted" className="w-fit">
            <Calendar className="mr-1.5 h-3 w-3" /> 3-week lookahead
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lookahead board
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Drag a task to re-sequence, or update status inline. Conflicts and
            delays surface in real time.
          </p>
        </div>
        <Button>
          <Plus className="mr-1 h-4 w-4" /> Add task
        </Button>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {grouped.map((col) => (
          <div key={col.key}>
            <div className="flex items-center justify-between pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {col.label}
              </h2>
              <Badge variant="outline">{col.items.length}</Badge>
            </div>
            <div className="space-y-3">
              {col.items.length === 0 && (
                <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
                  No tasks
                </div>
              )}
              {col.items.map((t) => (
                <Card key={t.id} className="hover:border-primary/40 transition">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={statusVariant[t.status]}>
                        {t.status.replace("-", " ")}
                      </Badge>
                      {t.blocked && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300">
                          <AlertTriangle className="h-3 w-3" /> blocked
                        </span>
                      )}
                    </div>
                    <CardTitle className="mt-2 text-base">{t.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs text-muted-foreground">
                    <Link
                      href={`/projects/${t.projectId}`}
                      className="block font-medium text-foreground hover:text-primary"
                    >
                      {lookup.get(t.projectId)}
                    </Link>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span>{t.zone}</span>
                      <span>{t.owner}</span>
                    </div>
                    <div>
                      {shortDate(t.start)}
                      {t.start !== t.end ? ` → ${shortDate(t.end)}` : ""} · {t.crew}
                    </div>
                    {t.notes && (
                      <div className="rounded-md bg-muted/50 px-2 py-1 text-foreground/80">
                        {t.notes}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
