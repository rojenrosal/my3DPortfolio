import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function ProductsPage() {
  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">Products</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Compare cover options
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Five products to combine into the right cover for you. Tap a product
          to see features, payout caps, and term options.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`}>
            <Card className="transition hover:border-primary/40">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3
                  className="mt-4 text-base font-semibold"
                  dangerouslySetInnerHTML={{ __html: p.name }}
                />
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>From {formatCurrency(p.starting)}/mo</span>
                  <span>Up to {formatCurrency(p.payoutCap)}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
