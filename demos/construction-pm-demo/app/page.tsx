import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ClipboardCheck,
  HardHat,
  LineChart,
  MapPin,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioSummary, projects } from "@/lib/mock-data";

const highlights = [
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Lookahead planning",
    body: "Three-week visual plan that stays in sync with master schedule. Engineers update, planners review, managers see the slip immediately.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Daily site diary",
    body: "Capture crews, weather, plant, and progress against the plan - every shift, every site. Auto-rolls into reporting.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Multiplayer by default",
    body: "Engineers, planners, subcontractors and PMs work on the same live plan. Comments, mentions, and conflict resolution built in.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Plant &amp; resource view",
    body: "See utilisation, idle plant, and clashes across the portfolio. Move resources between projects with one drag.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="container relative z-10 grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="space-y-8">
            <Badge variant="muted" className="w-fit">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Demo · Next.js + TypeScript + Tailwind
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Plan the next three weeks of site work{" "}
              <span className="text-primary">in one live view.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Sitestack replaces siloed spreadsheets with a multiplayer plan that
              connects engineers, planners, and field crews - from lookahead
              through daily diary.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/projects">
                  Open the demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/lookahead">View lookahead</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
              <Stat label="Active projects" value={String(portfolioSummary.activeProjects)} />
              <Stat label="Crew today" value={String(portfolioSummary.crewToday)} />
              <Stat label="On track" value={`${portfolioSummary.onTrackPct}%`} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <Card className="glow-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>
                    <LineChart className="mr-1.5 h-3 w-3" />
                    Portfolio snapshot
                  </Badge>
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
                <CardTitle className="mt-4 text-2xl">This week across all sites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Snap label="Crew on site" value={String(portfolioSummary.crewToday)} />
                <Snap label="Open issues" value={String(portfolioSummary.openIssues)} accent="warning" />
                <Snap label="On track" value={`${portfolioSummary.onTrackPct}%`} accent="success" />
                <div className="pt-2 grid grid-cols-3 text-center text-xs text-muted-foreground">
                  <div>
                    <p className="text-base font-semibold text-foreground">12</p>
                    Planned today
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">7</p>
                    In progress
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">2</p>
                    Delayed
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            One live plan, every team
          </h2>
          <p className="mt-2 text-muted-foreground">
            The handoffs between planning, engineering, and the field cause most
            project drift. Sitestack closes the loop.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Card key={h.title}>
              <CardContent className="p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                  {h.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                <p
                  className="mt-1 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: h.body }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Live projects
              </h2>
              <p className="mt-1 text-muted-foreground">
                A sample of programmes currently planned in Sitestack.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <Card key={p.id}>
                <CardContent className="p-5">
                  <Badge variant="outline" className="text-xs">{p.discipline}</Badge>
                  <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
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
                    <span>{p.crew} crew</span>
                    <Link
                      href={`/projects/${p.id}`}
                      className="font-medium text-foreground hover:text-primary"
                    >
                      Open →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
                <HardHat className="h-6 w-6 text-primary" />
                See it on your project
              </h3>
              <p className="mt-1 text-muted-foreground">
                15-minute walkthrough on your real scope and crews.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" asChild>
                <Link href="/projects">Open the demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/lookahead">View lookahead</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Snap({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: "success" | "warning";
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={
          "text-lg font-semibold " +
          (accent === "success"
            ? "text-emerald-300"
            : accent === "warning"
            ? "text-amber-300"
            : "")
        }
      >
        {value}
      </span>
    </div>
  );
}
