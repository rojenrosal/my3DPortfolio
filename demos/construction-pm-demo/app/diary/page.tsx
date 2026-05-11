import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  CloudSun,
  HardHat,
  Truck,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { diaryEntries } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const flagIcons: Record<string, React.ReactNode> = {
  productive: <CheckCircle2 className="h-3 w-3" />,
  delay: <AlertTriangle className="h-3 w-3" />,
  maintenance: <Wrench className="h-3 w-3" />,
  "heat policy": <CloudSun className="h-3 w-3" />,
  possession: <Truck className="h-3 w-3" />,
};

export default function DiaryPage() {
  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">
          <HardHat className="mr-1.5 h-3 w-3" /> Site diary
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Daily site diary
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          One entry per project per shift - captured from field, rolled into
          performance reporting.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {diaryEntries.map((d) => (
          <Card key={d.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>{d.shift}</Badge>
                <span className="text-xs text-muted-foreground">
                  {formatDate(d.date)}
                </span>
              </div>
              <CardTitle className="mt-2">
                <Link
                  href={`/projects/${d.projectId}`}
                  className="hover:text-primary"
                >
                  {d.projectName}
                </Link>
              </CardTitle>
              <CardDescription>by {d.author}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{d.summary}</p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <Cell label="Crew" value={String(d.crewOnSite)} />
                <Cell label="Plant" value={String(d.plantOnSite)} />
                <Cell label="Hours" value={`${d.hoursWorked}h`} />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-muted-foreground inline-flex items-center gap-1">
                  <CloudSun className="h-3 w-3" /> {d.weather}
                </span>
                <div className="flex flex-wrap gap-1">
                  {d.flags.map((f) => (
                    <Badge
                      key={f}
                      variant={
                        f === "delay"
                          ? "danger"
                          : f === "productive"
                          ? "success"
                          : "outline"
                      }
                      className="inline-flex items-center gap-1"
                    >
                      {flagIcons[f] ?? null}
                      {f}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
