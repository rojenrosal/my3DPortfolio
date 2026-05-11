import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink, Flame, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StoreLogo } from "@/components/store-logo";
import { StoreCard } from "@/components/store-card";
import { getStoreBySlug, stores } from "@/lib/mock-data";

export function generateStaticParams() {
  return stores.map((s) => ({ slug: s.slug }));
}

export default function StoreDetailPage({ params }: { params: { slug: string } }) {
  const store = getStoreBySlug(params.slug);
  if (!store) notFound();

  const related = stores
    .filter((s) => s.category === store.category && s.slug !== store.slug)
    .slice(0, 4);

  return (
    <div className="container py-12 space-y-12">
      <Link
        href="/stores"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to stores
      </Link>

      <header className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <StoreLogo initials={store.initials} accent={store.accent} size="lg" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {store.category}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {store.name}
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-muted-foreground">{store.description}</p>
          <div className="flex flex-wrap gap-2">
            {store.featured && (
              <Badge>
                <Sparkles className="mr-1.5 h-3 w-3" /> Featured
              </Badge>
            )}
            {store.trending && (
              <Badge variant="warning">
                <Flame className="mr-1.5 h-3 w-3" /> Trending
              </Badge>
            )}
          </div>
        </div>

        <Card className="glow-emerald">
          <CardHeader>
            <CardTitle>Cashback offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <p className="text-5xl font-bold">{store.cashbackRate}%</p>
              <p className="text-sm text-muted-foreground">on tracked purchases</p>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">
                Shop at {store.name}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Always activate cashback from RewardLoop before checkout.
            </p>
          </CardContent>
        </Card>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Cashback terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {store.terms.map((t) => (
            <div key={t} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{t}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">
            More from {store.category}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s) => (
              <StoreCard key={s.slug} store={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
