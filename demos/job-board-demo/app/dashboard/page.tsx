import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { applications, employerSummary } from "@/lib/mock-data";
import { timeAgo } from "@/lib/utils";

const statusVariant = {
  new: "default" as const,
  reviewing: "muted" as const,
  interview: "warning" as const,
  offer: "success" as const,
  rejected: "danger" as const,
};

export default function DashboardPage() {
  return (
    <div className="container py-12 space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="muted">Employer dashboard</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {employerSummary.company}
          </h1>
          <p className="text-muted-foreground">
            {employerSummary.activePostings} active listings ·{" "}
            {employerSummary.totalApplicants} applicants this month
          </p>
        </div>
        <Button asChild>
          <Link href="/post">
            New listing <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Stat
          icon={<Briefcase className="h-4 w-4" />}
          label="Active listings"
          value={String(employerSummary.activePostings)}
        />
        <Stat
          icon={<Users className="h-4 w-4" />}
          label="Applicants (30d)"
          value={String(employerSummary.totalApplicants)}
        />
        <Stat
          icon={<ClipboardCheck className="h-4 w-4" />}
          label="Interviews this week"
          value={String(employerSummary.interviewsThisWeek)}
        />
        <Stat
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Hires this quarter"
          value={String(employerSummary.hiresThisQuarter)}
        />
      </section>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Recent applicants</CardTitle>
          <Button variant="ghost" size="sm">Export CSV</Button>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr className="border-b border-border/60">
                <th className="py-3 pl-6 pr-4 font-medium">Candidate</th>
                <th className="py-3 pr-4 font-medium">Role</th>
                <th className="py-3 pr-4 font-medium">Applied</th>
                <th className="py-3 pr-6 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((a) => (
                <tr
                  key={a.id}
                  className="border-b border-border/40 last:border-0"
                >
                  <td className="py-3 pl-6 pr-4">
                    <p className="font-medium">{a.candidate}</p>
                    <p className="text-xs text-muted-foreground">{a.email}</p>
                  </td>
                  <td className="py-3 pr-4">
                    <Link
                      href={`/jobs/${a.jobSlug}`}
                      className="hover:text-primary"
                    >
                      {a.jobTitle}
                    </Link>
                    <p className="text-xs text-muted-foreground">{a.company}</p>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">
                    {timeAgo(a.appliedAt)}
                  </td>
                  <td className="py-3 pr-6">
                    <Badge variant={statusVariant[a.status]}>{a.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center justify-between text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">{label}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
            {icon}
          </span>
        </div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}
