import Link from "next/link";
import { ArrowUpRight, GitBranch, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/mock-data";
import { timeAgo } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">Workspaces</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Each project is an isolated workspace. Click in to open the editor
          and AI chat.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`}>
            <Card className="transition hover:border-primary/40">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{p.framework}</Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-base font-semibold font-mono">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" /> {p.collaborators}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitBranch className="h-3 w-3" /> {p.runs} runs
                  </span>
                  <span>{timeAgo(p.lastActivity)}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
