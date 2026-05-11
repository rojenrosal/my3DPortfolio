import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, Users, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getProjectById,
  projects,
  resources,
  tasksForProject,
} from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import type { TaskStatus } from "@/lib/types";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

const statusVariant: Record<TaskStatus, "muted" | "default" | "success" | "danger"> = {
  planned: "muted",
  "in-progress": "default",
  complete: "success",
  delayed: "danger",
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) notFound();
  const tasks = tasksForProject(project.id);

  return (
    <div className="container py-12 space-y-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <header className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <Badge variant="outline">{project.discipline}</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="text-muted-foreground">{project.client}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {project.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(project.startDate)} → {formatDate(project.endDate)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {project.crew} crew
            </span>
          </div>
        </div>

        <Card className="glow-primary">
          <CardHeader>
            <CardTitle>Programme</CardTitle>
            <CardDescription>Snapshot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Row label="Contract value" value={`$${(project.contractValue / 1_000_000).toFixed(0)}M`} />
            <Row label="Status" value={project.status.replace("-", " ")} />
            <Row label="Progress" value={`${project.progress}%`} />
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">This week</h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <th className="py-3 px-5 font-medium">Task</th>
                    <th className="py-3 pr-4 font-medium">Zone</th>
                    <th className="py-3 pr-4 font-medium">Owner</th>
                    <th className="py-3 pr-4 font-medium">Window</th>
                    <th className="py-3 px-5 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((t) => (
                    <tr
                      key={t.id}
                      className="border-b border-border/40 last:border-0"
                    >
                      <td className="py-3 px-5">
                        <div className="font-medium">{t.title}</div>
                        {t.notes && (
                          <div className="text-xs text-muted-foreground">
                            {t.notes}
                          </div>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {t.zone}
                      </td>
                      <td className="py-3 pr-4">{t.owner}</td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {formatDate(t.start)}
                        {t.start !== t.end ? ` → ${formatDate(t.end)}` : ""}
                      </td>
                      <td className="py-3 px-5">
                        <Badge variant={statusVariant[t.status]}>
                          {t.status.replace("-", " ")}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                  {tasks.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-muted-foreground">
                        No tasks scheduled this week.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
          <Wrench className="h-4 w-4 text-primary" /> Resources
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((r) => (
            <Card key={r.id}>
              <CardContent className="p-5 space-y-3">
                <Badge variant="outline" className="capitalize">{r.type}</Badge>
                <p className="font-medium">{r.name}</p>
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground capitalize">
                      {r.status}
                    </span>
                    <span className="font-medium">{r.utilisation}%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={
                        "h-full " +
                        (r.utilisation > 85
                          ? "bg-amber-400"
                          : r.utilisation === 0
                          ? "bg-muted-foreground/30"
                          : "bg-primary")
                      }
                      style={{ width: `${Math.max(r.utilisation, 4)}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}
