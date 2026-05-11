import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  Check,
  Clock,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanyLogo } from "@/components/company-logo";
import { getJobBySlug, jobs } from "@/lib/mock-data";
import { formatSalary, timeAgo } from "@/lib/utils";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = getJobBySlug(params.slug);
  if (!job) notFound();

  const related = jobs
    .filter((j) => j.category === job.category && j.slug !== job.slug)
    .slice(0, 3);

  return (
    <div className="container py-12 space-y-12">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to jobs
      </Link>

      <header className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <CompanyLogo
              initials={job.companyInitials}
              accent={job.companyAccent}
              size="lg"
            />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {job.company}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {job.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5" /> {job.employment}
            </span>
            <Badge variant="default">{job.workstyle}</Badge>
            <Badge variant="outline">{job.seniority}</Badge>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {timeAgo(job.postedAt)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {job.applicants} applicants
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl">{job.description}</p>
        </div>

        <Card className="glow-primary">
          <CardHeader>
            <Badge variant="default" className="w-fit">
              <Sparkles className="mr-1.5 h-3 w-3" /> Salary
            </Badge>
            <CardTitle className="mt-3">
              {formatSalary(job.salaryMin, job.salaryMax)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Row label="Type" value={job.employment} />
            <Row label="Workstyle" value={job.workstyle} />
            <Row label="Level" value={job.seniority} />
            <Button className="w-full" size="lg">Apply now</Button>
            <Button className="w-full" variant="outline">Save</Button>
          </CardContent>
        </Card>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {job.responsibilities.map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{r}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What we&apos;re looking for</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {job.requirements.map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{r}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" /> Perks &amp; benefits
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {job.perks.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{p}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            More in {job.category}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((j) => (
              <Link
                key={j.slug}
                href={`/jobs/${j.slug}`}
                className="rounded-xl border border-border bg-card/80 p-4 transition hover:border-primary/40"
              >
                <p className="font-semibold">{j.title}</p>
                <p className="text-sm text-muted-foreground">{j.company}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {j.location} · {formatSalary(j.salaryMin, j.salaryMax)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
