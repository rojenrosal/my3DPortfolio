import Link from "next/link";
import { ArrowRight, Apple, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_70%),hsl(var(--background))]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs">
              <Sparkles className="h-3 w-3 text-primary" />
              Demo · React Native-style web preview
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Train smarter on your{" "}
              <span className="text-primary">phone.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Pulse is a programmed workout app - daily sessions, progressive
              overload, and a calm log of every rep. This demo shows the iOS
              and Android UI as a web preview.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/app/">
                  Open the app demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/app/workouts/">Browse workouts</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <Apple className="h-3.5 w-3.5" /> iOS 17+
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <Smartphone className="h-3.5 w-3.5" /> Android 11+
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="mx-auto max-w-[300px] rounded-[2.5rem] border border-border bg-card p-3 shadow-[0_30px_90px_-30px_hsl(var(--primary)/0.5)]">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background h-[520px] p-4">
                <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background" />
                <div className="mt-10 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Today
                    </p>
                    <p className="text-xl font-semibold">Full Body Strength</p>
                  </div>
                  <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-orange-500/30 to-rose-500/20 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-primary">
                      52 min · 5 exercises
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Goblet Squat · 4×8
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Romanian Deadlift · 4×8
                    </p>
                    <p className="text-xs text-muted-foreground">
                      DB Bench · 4×10
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl border border-border bg-muted/30 p-2">
                      <p className="text-lg font-bold">6</p>
                      <p className="text-[10px] text-muted-foreground">streak</p>
                    </div>
                    <div className="rounded-xl border border-border bg-muted/30 p-2">
                      <p className="text-lg font-bold">199</p>
                      <p className="text-[10px] text-muted-foreground">wk min</p>
                    </div>
                    <div className="rounded-xl border border-border bg-muted/30 p-2">
                      <p className="text-lg font-bold">142</p>
                      <p className="text-[10px] text-muted-foreground">total</p>
                    </div>
                  </div>
                  <button className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground">
                    Start workout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
