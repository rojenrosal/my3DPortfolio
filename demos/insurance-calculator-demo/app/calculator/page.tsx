"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculatePremium, products } from "@/lib/mock-data";
import type { Frequency, ProductSlug, QuoteInputs } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

const occupations: { value: QuoteInputs["occupation"]; label: string }[] = [
  { value: "office", label: "Office / professional" },
  { value: "manual", label: "Manual / trade" },
  { value: "high-risk", label: "High risk" },
];

const frequencies: { value: Frequency; label: string }[] = [
  { value: "weekly", label: "Weekly" },
  { value: "fortnightly", label: "Fortnightly" },
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<QuoteInputs>({
    product: "life-cover",
    age: 34,
    gender: "male",
    smoker: false,
    sumInsured: 500000,
    occupation: "office",
    frequency: "monthly",
  });

  const quote = useMemo(() => calculatePremium(inputs), [inputs]);
  const product = products.find((p) => p.slug === inputs.product)!;

  function update<K extends keyof QuoteInputs>(key: K, value: QuoteInputs[K]) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="container py-12 grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-8">
        <header className="space-y-3">
          <Badge variant="muted" className="w-fit">
            <Calculator className="mr-1.5 h-3 w-3" /> Premium calculator
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Build your quote
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Adjust the controls - your premium updates instantly. No personal
            details required.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Product</CardTitle>
            <CardDescription>What kind of cover?</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {products.map((p) => (
              <button
                key={p.slug}
                onClick={() => update("product", p.slug as ProductSlug)}
                className={
                  "flex items-start gap-3 rounded-xl border p-4 text-left transition " +
                  (inputs.product === p.slug
                    ? "border-primary/60 bg-primary/10"
                    : "border-border hover:border-primary/30")
                }
              >
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: p.name }}
                  />
                  <p className="text-xs text-muted-foreground">{p.tagline}</p>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About you</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Slider
              label="Age"
              suffix=""
              min={18}
              max={70}
              step={1}
              value={inputs.age}
              onChange={(v) => update("age", v)}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <Pill
                label="Non-smoker"
                active={!inputs.smoker}
                onClick={() => update("smoker", false)}
              />
              <Pill
                label="Smoker"
                active={inputs.smoker}
                onClick={() => update("smoker", true)}
              />
            </div>
            <Field label="Occupation">
              <div className="grid gap-2 sm:grid-cols-3">
                {occupations.map((o) => (
                  <Pill
                    key={o.value}
                    label={o.label}
                    active={inputs.occupation === o.value}
                    onClick={() => update("occupation", o.value)}
                  />
                ))}
              </div>
            </Field>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cover amount</CardTitle>
            <CardDescription>
              {inputs.product === "income-protection"
                ? "Monthly benefit"
                : "Lump sum"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Slider
              label={
                inputs.product === "income-protection"
                  ? "Monthly benefit"
                  : "Sum insured"
              }
              suffix=""
              min={inputs.product === "income-protection" ? 1000 : 50000}
              max={inputs.product === "income-protection" ? 25000 : product.payoutCap}
              step={inputs.product === "income-protection" ? 500 : 50000}
              value={inputs.sumInsured}
              onChange={(v) => update("sumInsured", v)}
              formatValue={(v) => formatCurrency(v)}
            />
            <Field label="Payment frequency">
              <div className="grid gap-2 sm:grid-cols-4">
                {frequencies.map((f) => (
                  <Pill
                    key={f.value}
                    label={f.label}
                    active={inputs.frequency === f.value}
                    onClick={() => update("frequency", f.value)}
                  />
                ))}
              </div>
            </Field>
          </CardContent>
        </Card>
      </div>

      <aside>
        <Card className="sticky top-20 glow-primary">
          <CardHeader>
            <Badge variant="default" className="w-fit">Your quote</Badge>
            <CardTitle
              className="mt-3 text-2xl"
              dangerouslySetInnerHTML={{ __html: product.name }}
            />
            <CardDescription>{formatCurrency(inputs.sumInsured)} cover</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
              <p className="text-xs uppercase tracking-wider text-primary">
                {inputs.frequency} premium
              </p>
              <p className="mt-1 text-4xl font-bold">
                {formatCurrency(quote.perPeriod)}
              </p>
              <p className="text-xs text-muted-foreground">
                ≈ {formatCurrency(quote.annual)} / year
              </p>
            </div>
            <Summary label="Age" value={`${inputs.age}, ${inputs.smoker ? "smoker" : "non-smoker"}`} />
            <Summary label="Occupation" value={
              occupations.find((o) => o.value === inputs.occupation)?.label ?? ""
            } />
            <Summary label="Cover" value={formatCurrency(inputs.sumInsured)} />
            <Button className="w-full" size="lg" asChild>
              <Link href="/dashboard">
                Apply now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              <ShieldCheck className="mr-1 inline h-3 w-3 text-primary" />
              Estimate only. Final premium subject to underwriting.
            </p>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-lg border px-3 py-2 text-sm font-medium transition " +
        (active
          ? "border-primary/60 bg-primary/15 text-primary"
          : "border-border text-muted-foreground hover:text-foreground")
      }
    >
      {label}
    </button>
  );
}

type SliderProps = {
  label: string;
  suffix?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  formatValue?: (v: number) => string;
};

function Slider({ label, min, max, step, value, onChange, formatValue }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">
          {formatValue ? formatValue(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[hsl(var(--primary))]"
      />
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
