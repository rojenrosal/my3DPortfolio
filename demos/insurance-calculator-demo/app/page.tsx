import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

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
              Life insurance, calculated{" "}
              <span className="text-primary">in seconds.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Get a personalised premium in under a minute, compare cover
              options, and manage your policies and payments in one place.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/calculator">
                  Calculate my premium <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">View products</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
              <Stat label="Customers" value="120k+" />
              <Stat label="Claims paid" value="$640M" />
              <Stat label="From" value="$6.40/wk" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <Card className="glow-primary">
              <CardHeader>
                <Badge variant="default" className="w-fit">
                  <Calculator className="mr-1.5 h-3 w-3" /> Quick estimate
                </Badge>
                <CardTitle className="mt-3 text-2xl">
                  $500,000 Life Cover
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Row label="Age" value="34, non-smoker" />
                <Row label="Occupation" value="Office" />
                <Row label="Frequency" value="Monthly" />
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-primary">
                    Estimated monthly premium
                  </p>
                  <p className="mt-1 text-3xl font-bold">$32.40</p>
                  <p className="text-xs text-muted-foreground">
                    Subject to underwriting and chosen options.
                  </p>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/calculator">Build your quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Cover that fits your life
          </h2>
          <p className="mt-2 text-muted-foreground">
            Standalone or combined. Switch your details on the quote form and
            see your premium update instantly.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.slug}>
              <CardContent className="p-5 space-y-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3
                  className="text-base font-semibold"
                  dangerouslySetInnerHTML={{ __html: p.name }}
                />
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    From {formatCurrency(p.starting)}/mo
                  </span>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How Coverway works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Step icon={<Calculator className="h-5 w-5" />} title="1 · Quote" body="Three questions and you have a premium. Adjust cover until it fits your budget." />
            <Step icon={<ClipboardList className="h-5 w-5" />} title="2 · Apply" body="Underwriting questions take 10 minutes. Most policies are issued same day." />
            <Step icon={<HeartHandshake className="h-5 w-5" />} title="3 · Claim" body="If you ever need to claim, a dedicated claims manager guides you through end to end." />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                See your number in 60 seconds
              </h3>
              <p className="mt-1 text-muted-foreground">
                No personal details required to get an estimate.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" asChild>
                <Link href="/calculator">Start the quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">Compare products</Link>
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Step({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
