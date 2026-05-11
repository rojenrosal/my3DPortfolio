import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductBySlug, products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="container py-12 space-y-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>

      <header className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <h1
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            dangerouslySetInnerHTML={{ __html: product.name }}
          />
          <p className="text-muted-foreground max-w-xl">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.termOptions.map((t) => (
              <Badge key={t} variant="outline">{t}</Badge>
            ))}
          </div>
        </div>

        <Card className="glow-primary">
          <CardHeader>
            <CardTitle>From</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-5xl font-bold">{formatCurrency(product.starting)}</p>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Up to {formatCurrency(product.payoutCap)} cover. Final premium
              depends on age, occupation, and lifestyle.
            </p>
            <Button className="w-full" size="lg" asChild>
              <Link href={`/calculator?product=${product.slug}`}>
                Get an instant quote
              </Link>
            </Button>
          </CardContent>
        </Card>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>What&apos;s included</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {product.features.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span dangerouslySetInnerHTML={{ __html: f }} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
