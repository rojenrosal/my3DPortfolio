import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";
import type { Store } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { StoreLogo } from "@/components/store-logo";

export function StoreCard({ store }: { store: Store }) {
  return (
    <Link
      href={`/stores/${store.slug}`}
      className="group relative flex flex-col rounded-xl border border-border bg-card/80 p-5 transition hover:border-primary/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-center justify-between">
        <StoreLogo initials={store.initials} accent={store.accent} />
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
      </div>

      <div className="mt-4 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">{store.name}</h3>
          {store.trending && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300">
              <Flame className="h-3 w-3" /> trending
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{store.category}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Badge variant="success">{store.cashbackRate}% cashback</Badge>
        <span className="text-xs text-muted-foreground">View terms →</span>
      </div>
    </Link>
  );
}
