import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  GitBranch,
  Loader2,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectById, projects, recentRuns } from "@/lib/mock-data";
import { timeAgo } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

const statusIcon = {
  success: <CheckCircle2 className="h-4 w-4 text-emerald-300" />,
  failed: <XCircle className="h-4 w-4 text-red-300" />,
  running: <Loader2 className="h-4 w-4 animate-spin text-amber-300" />,
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  if (!project) notFound();

  return (
    <div className="container py-12 space-y-10">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-3">
          <Badge variant="outline">{project.framework}</Badge>
          <h1 className="text-3xl font-mono tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground max-w-2xl">{project.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {project.collaborators} collaborators
            </span>
            <span className="inline-flex items-center gap-1">
              <GitBranch className="h-3.5 w-3.5" /> {project.runs} runs total
            </span>
            <span>{project.visibility}</span>
          </div>
        </div>
        <Button asChild>
          <Link href="/editor">Open editor</Link>
        </Button>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader>
            <CardTitle>Recent AI runs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentRuns.map((r) => (
              <div
                key={r.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-border/60 bg-muted/30 p-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    {statusIcon[r.status]}
                    <span className="font-mono">{r.branch}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {r.prompt}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {timeAgo(r.startedAt)} · {r.duration} · {r.diffLines} lines changed
                  </p>
                </div>
                <Button size="sm" variant="outline">View diff</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Row label="Framework" value={project.framework} />
            <Row label="Visibility" value={project.visibility} />
            <Row label="Collaborators" value={String(project.collaborators)} />
            <Row label="Runs" value={String(project.runs)} />
            <Row label="Last active" value={timeAgo(project.lastActivity)} />
            <Button className="w-full mt-3" asChild>
              <Link href="/editor">Open editor</Link>
            </Button>
          </CardContent>
        </Card>
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
