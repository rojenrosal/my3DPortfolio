import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/job-card";
import { jobs, categories } from "@/lib/mock-data";

export default function HomePage() {
  const featured = jobs.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="container relative z-10 py-20 lg:py-28 space-y-10">
          <div className="max-w-3xl space-y-6">
            <Badge variant="muted" className="w-fit">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Demo · Next.js + TypeScript + Tailwind
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better jobs for{" "}
              <span className="text-primary">product &amp; engineering</span> teams.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              No recruiter spam, no clickbait listings. Curated roles from
              companies actually hiring - with salary ranges up front.
            </p>
          </div>

          <Card>
            <CardContent className="flex flex-col gap-3 p-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search roles, companies, locations" className="pl-9 h-12 border-0 bg-transparent text-base" />
              </div>
              <Button size="lg" asChild>
                <Link href="/jobs">
                  Find jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c}
                href={`/jobs?category=${c}`}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              >
                {c}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 pt-2 max-w-md">
            <Stat label="Live roles" value={String(jobs.length)} />
            <Stat label="Hiring teams" value="220+" />
            <Stat label="Avg time-to-hire" value="14d" />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured roles
            </h2>
            <p className="mt-1 text-muted-foreground">
              Hand-picked openings from teams hiring this week.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/jobs">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((j) => (
            <JobCard key={j.slug} job={j} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-16 grid gap-10 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8 space-y-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold tracking-tight">For candidates</h3>
              <p className="text-muted-foreground">
                Salary ranges up front. One-click apply. No black holes - every
                application gets a response.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <Tick>Salary always shown</Tick>
                <Tick>Apply in 60 seconds</Tick>
                <Tick>Smart alerts that don&apos;t spam</Tick>
              </ul>
              <Button asChild>
                <Link href="/jobs">Browse jobs</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 space-y-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold tracking-tight">For employers</h3>
              <p className="text-muted-foreground">
                Reach 80k+ vetted candidates. Boost or feature listings.
                Lightweight ATS included.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <Tick>$299 per role, 30-day listing</Tick>
                <Tick>Built-in applicant tracking</Tick>
                <Tick>Replace listing free if unfilled</Tick>
              </ul>
              <Button asChild>
                <Link href="/post">Post a job</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Find the next thing
              </h3>
              <p className="mt-1 text-muted-foreground">
                Or post a role and reach quality candidates in days.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" asChild>
                <Link href="/jobs">Browse jobs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/post">Post a job</Link>
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

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  );
}
