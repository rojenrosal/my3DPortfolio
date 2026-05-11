import Link from "next/link";
import {
  ArrowRight,
  Coins,
  Gift,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StoreCard } from "@/components/store-card";
import {
  featuredStores,
  featuredCategories,
  memberships,
  monthlyDraw,
  trendingStores,
} from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

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
              Earn cashback on every order.{" "}
              <span className="text-primary">Then win something big.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              RewardLoop pays you to shop with 1,000+ brands you already love -
              and every purchase enters you into our monthly mega draw.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/checkout">
                  Start earning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/stores">Browse stores</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
              <Stat label="Active members" value="42k+" />
              <Stat label="Partner stores" value="1,000+" />
              <Stat label="Paid out" value="$8.4M" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <Card className="glow-emerald">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="success">
                    <Trophy className="mr-1.5 h-3 w-3" />
                    Live draw
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Draws {formatDate(monthlyDraw.drawDate)}
                  </span>
                </div>
                <CardTitle className="mt-4 text-2xl">{monthlyDraw.title}</CardTitle>
                <CardDescription>{monthlyDraw.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Prize value
                  </p>
                  <p className="text-4xl font-bold">
                    {formatCurrency(monthlyDraw.value)}
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Your entries this month
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-primary">
                    {monthlyDraw.entriesEarned}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                  <div>
                    <p className="text-base font-semibold text-foreground">1×</p>
                    Starter
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">3×</p>
                    Plus
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">5×</p>
                    Lifetime
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured stores
            </h2>
            <p className="mt-1 text-muted-foreground">
              Higher cashback rates this month - confirmed within 72 hours.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/stores">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How RewardLoop works
          </h2>
          <p className="mt-1 max-w-2xl text-muted-foreground">
            Four steps. No receipts, no chasing payouts - cashback lands
            directly in your wallet.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Step
              icon={<Wallet className="h-5 w-5" />}
              step="01"
              title="Create your account"
              body="Pick a plan that fits how often you shop. Start free, upgrade anytime."
            />
            <Step
              icon={<Search className="h-5 w-5" />}
              step="02"
              title="Find your store"
              body="Browse 1,000+ partners across fashion, travel, home, tech and more."
            />
            <Step
              icon={<Coins className="h-5 w-5" />}
              step="03"
              title="Shop as normal"
              body="Click through, complete your order - we track cashback automatically."
            />
            <Step
              icon={<Gift className="h-5 w-5" />}
              step="04"
              title="Earn cash + entries"
              body="Cashback hits your wallet. Every order also enters the monthly draw."
            />
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Trending this week
            </h2>
            <p className="mt-1 text-muted-foreground">
              Stores members are returning to most often right now.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trendingStores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Explore by category
            </h2>
            <p className="mt-1 text-muted-foreground">
              Find the right partners by what you actually shop for.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/stores?category=${cat.name}`}
              className="group flex items-center justify-between rounded-lg border border-border bg-card/60 px-4 py-3 text-sm transition hover:border-primary/40 hover:bg-card"
            >
              <span className="font-medium">{cat.name}</span>
              <span className="text-muted-foreground group-hover:text-foreground">
                {cat.count} stores →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Pick a plan
          </h2>
          <p className="mt-1 text-muted-foreground">
            Cancel anytime. Lifetime members never pay again.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {memberships.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlight
                  ? "border-primary/60 shadow-[0_0_40px_-20px_hsl(var(--primary)/0.7)]"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.highlight && <Badge variant="success">Most popular</Badge>}
                </div>
                <div className="pt-2">
                  <span className="text-4xl font-bold">
                    {tier.price === 0 ? "Free" : formatCurrency(tier.price)}
                  </span>
                  {tier.price !== 0 && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      /{tier.period}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {tier.perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-2 text-sm">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{perk}</span>
                  </div>
                ))}
                <Button
                  className="mt-4 w-full"
                  variant={tier.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link href="/checkout">
                    {tier.price === 0 ? "Start free" : "Get started"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Ready to start your loop?
              </h3>
              <p className="mt-1 text-muted-foreground">
                Join in under 60 seconds. Your first cashback can land today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" asChild>
                <Link href="/checkout">Join free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/stores">Browse stores</Link>
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

function Step({
  icon,
  step,
  title,
  body,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
            {icon}
          </span>
          <span className="text-xs font-mono text-muted-foreground">{step}</span>
        </div>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
