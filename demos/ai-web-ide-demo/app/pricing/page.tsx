import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingTiers } from "@/lib/mock-data";

export default function PricingPage() {
  return (
    <div className="container py-12 space-y-12">
      <header className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="muted" className="w-fit mx-auto">
          <Sparkles className="mr-1.5 h-3 w-3" /> Pricing
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Build for free. Pay when you ship.
        </h1>
        <p className="text-muted-foreground">
          Every plan includes branch-isolated runs, real file edits, and one-click rollback.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {pricingTiers.map((t) => (
          <Card
            key={t.name}
            className={
              t.highlight
                ? "border-primary/60 shadow-[0_0_40px_-20px_hsl(var(--primary)/0.7)]"
                : ""
            }
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t.name}</CardTitle>
                {t.highlight && <Badge>Most popular</Badge>}
              </div>
              <div className="pt-2">
                <span className="text-4xl font-bold">
                  {t.price === 0 ? "Free" : `$${t.price}`}
                </span>
                {t.price !== 0 && (
                  <span className="ml-1 text-sm text-muted-foreground">/{t.period}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {t.perks.map((p) => (
                <div key={p} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{p}</span>
                </div>
              ))}
              <Button
                className="mt-4 w-full"
                variant={t.highlight ? "default" : "outline"}
                asChild
              >
                <Link href="/editor">
                  {t.price === 0 ? "Start free" : "Get started"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
