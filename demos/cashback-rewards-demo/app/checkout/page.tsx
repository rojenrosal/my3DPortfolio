"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { memberships } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutPage() {
  const [selected, setSelected] = useState(
    memberships.find((m) => m.highlight)?.name ?? memberships[0].name
  );
  const [submitted, setSubmitted] = useState(false);

  const tier = useMemo(
    () => memberships.find((m) => m.name === selected)!,
    [selected]
  );

  const due = tier.price;
  const yearlyEstimate = tier.price === 0 ? 0 : tier.period === "month" ? tier.price * 12 : tier.price;

  if (submitted) {
    return (
      <div className="container py-16">
        <Card className="mx-auto max-w-xl glow-emerald">
          <CardContent className="p-10 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Check className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              You&apos;re in! Welcome to RewardLoop.
            </h2>
            <p className="text-muted-foreground">
              This is a demo - no payment was processed. In production this
              would create your account, charge your card via Stripe, and seed
              your draw entries.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <Button asChild>
                <Link href="/dashboard">Go to dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/stores">Browse stores</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-12 grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-8">
        <header className="space-y-2">
          <Badge variant="muted">Join RewardLoop</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pick a plan
          </h1>
          <p className="text-muted-foreground">
            Members on the Plus tier earn an average of $312 cashback in their
            first year.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {memberships.map((m) => {
            const active = selected === m.name;
            return (
              <button
                key={m.name}
                onClick={() => setSelected(m.name)}
                className={
                  "flex flex-col rounded-xl border bg-card p-5 text-left transition " +
                  (active
                    ? "border-primary/60 ring-1 ring-primary/40"
                    : "border-border hover:border-primary/30")
                }
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{m.name}</span>
                  {m.highlight && <Badge variant="success">Popular</Badge>}
                </div>
                <div className="mt-3">
                  <span className="text-3xl font-bold">
                    {m.price === 0 ? "Free" : formatCurrency(m.price)}
                  </span>
                  {m.price !== 0 && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      /{m.period}
                    </span>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {m.perks.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account details</CardTitle>
            <CardDescription>
              Demo form - no data is submitted or stored.
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
              <Field label="First name" name="firstName" placeholder="Jordan" required />
              <Field label="Last name" name="lastName" placeholder="Pereira" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="sm:col-span-2"
              />
              {tier.price > 0 && (
                <>
                  <Field
                    label="Card number"
                    name="card"
                    placeholder="4242 4242 4242 4242"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    required
                    className="sm:col-span-2"
                  />
                  <Field label="Expiry" name="exp" placeholder="MM/YY" required />
                  <Field label="CVC" name="cvc" placeholder="123" required />
                </>
              )}
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full">
                  {tier.price === 0
                    ? "Create my account"
                    : `Confirm and pay ${formatCurrency(tier.price)}`}
                </Button>
              </div>
              <p className="sm:col-span-2 text-xs text-muted-foreground">
                <ShieldCheck className="mr-1 inline h-3 w-3 text-primary" />
                Demo only. In production this submits to a server action that
                creates a Stripe checkout session.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      <aside className="space-y-4">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
            <CardDescription>{tier.name} membership</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Row label="Plan" value={tier.name} />
            <Row
              label="Billed"
              value={
                tier.price === 0
                  ? "Free forever"
                  : tier.period === "one-off"
                  ? "Once"
                  : `Every ${tier.period}`
              }
            />
            <Row
              label="Due today"
              value={tier.price === 0 ? "$0.00" : formatCurrency(tier.price)}
              emphasis
            />
            {tier.period === "month" && tier.price > 0 && (
              <p className="text-xs text-muted-foreground">
                ≈ {formatCurrency(yearlyEstimate)}/year. Cancel anytime.
              </p>
            )}

            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="flex items-center gap-1.5 text-xs font-medium text-primary">
                <Trophy className="h-3.5 w-3.5" /> Estimated first-year cashback
              </p>
              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(estimateCashback(tier.name))}
              </p>
              <p className="text-xs text-muted-foreground">
                Based on average member spend.
              </p>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function estimateCashback(tier: string) {
  if (tier === "Starter") return 84;
  if (tier === "Plus") return 312;
  return 470;
}

function Row({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={
          emphasis ? "text-lg font-semibold" : "text-sm font-medium"
        }
      >
        {value}
      </span>
    </div>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

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
