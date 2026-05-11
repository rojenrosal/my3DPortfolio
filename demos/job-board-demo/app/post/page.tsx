"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Single role",
    price: 299,
    perks: [
      "30-day listing",
      "Standard placement",
      "Applicant tracking",
      "Free replacement if unfilled",
    ],
  },
  {
    name: "Boost",
    price: 599,
    highlight: true,
    perks: [
      "30-day listing, featured for 7 days",
      "Front-page placement",
      "Email blast to relevant candidates",
      "Applicant tracking + scorecards",
    ],
  },
  {
    name: "5-pack",
    price: 1199,
    perks: [
      "5 roles, use any time within 12 months",
      "Applicant tracking",
      "Volume reporting",
      "Dedicated account manager",
    ],
  },
];

export default function PostJobPage() {
  const [plan, setPlan] = useState("Boost");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="container py-16">
        <Card className="mx-auto max-w-xl glow-primary">
          <CardContent className="p-10 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Check className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Your role is live (demo).
            </h2>
            <p className="text-muted-foreground">
              No payment was processed. In production this would create the
              listing, charge via Stripe, and notify your team.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <Button asChild>
                <Link href="/dashboard">Open employer dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/jobs">Browse listings</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-12 grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <header className="space-y-2">
          <Badge variant="muted" className="w-fit">
            <Sparkles className="mr-1.5 h-3 w-3" /> Post a job
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Reach 80k+ vetted candidates
          </h1>
          <p className="text-muted-foreground">
            Demo form - no listing is created.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Pick a plan</CardTitle>
            <CardDescription>30-day listings. Cancel anytime.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            {plans.map((p) => {
              const active = plan === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => setPlan(p.name)}
                  className={
                    "flex flex-col rounded-xl border bg-card p-5 text-left transition " +
                    (active
                      ? "border-primary/60 ring-1 ring-primary/40"
                      : "border-border hover:border-primary/30")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{p.name}</span>
                    {p.highlight && <Badge>Popular</Badge>}
                  </div>
                  <p className="mt-3 text-3xl font-bold">${p.price}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Role details</CardTitle>
            <CardDescription>
              Fields are validated client-side. No data is submitted.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <Field
                label="Role title"
                name="title"
                placeholder="e.g. Senior Full Stack Engineer"
                required
                className="sm:col-span-2"
              />
              <Field label="Company" name="company" placeholder="Your company" required />
              <Field label="Location" name="location" placeholder="Sydney, NSW" required />
              <Select
                label="Workstyle"
                name="workstyle"
                options={["Remote", "Hybrid", "On-site"]}
              />
              <Select
                label="Employment type"
                name="employment"
                options={["Full-time", "Part-time", "Contract", "Internship"]}
              />
              <Field
                label="Salary min (AUD)"
                name="salaryMin"
                placeholder="120000"
                type="number"
                required
              />
              <Field
                label="Salary max (AUD)"
                name="salaryMax"
                placeholder="160000"
                type="number"
                required
              />
              <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm">
                <span className="text-muted-foreground">Description</span>
                <textarea
                  rows={6}
                  required
                  placeholder="What's the role about? What does success look like?"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full">
                  Publish for ${plans.find((p) => p.name === plan)?.price}
                </Button>
              </div>
              <p className="sm:col-span-2 text-xs text-muted-foreground">
                <ShieldCheck className="mr-1 inline h-3 w-3 text-primary" />
                Demo. In production this submits to a server action that
                creates the listing and a Stripe checkout session.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <aside>
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Why Hireloop</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <Bullet>Front-page placement on launch day</Bullet>
            <Bullet>Email blast to category subscribers</Bullet>
            <Bullet>Applicant tracking with scorecards</Bullet>
            <Bullet>Reach passive candidates in the weekly digest</Bullet>
            <div className="pt-2">
              <p className="text-xs text-foreground/80">
                Average time-to-hire on Hireloop: <strong>14 days.</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

function Field({ label, className, ...props }: FieldProps) {
  return (
    <label className={"flex flex-col gap-1.5 text-sm " + (className ?? "")}>
      <span className="text-muted-foreground">{label}</span>
      <input
        {...props}
        className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <select
        name={name}
        className="h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-2">
      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </p>
  );
}
