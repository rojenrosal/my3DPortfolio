"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StoreCard } from "@/components/store-card";
import { stores, featuredCategories } from "@/lib/mock-data";
import type { StoreCategory } from "@/lib/types";

type Filter = "All" | StoreCategory;

export default function StoresPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stores.filter((s) => {
      const matchesQuery =
        !q || s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
      const matchesCategory = filter === "All" || s.category === filter;
      return matchesQuery && matchesCategory;
    });
  }, [query, filter]);

  const filters: Filter[] = ["All", ...featuredCategories.map((c) => c.name as StoreCategory)];

  return (
    <div className="container py-12 space-y-10">
      <header className="space-y-3">
        <Badge variant="muted" className="w-fit">Stores</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Browse {stores.length}+ partner stores
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Search or filter to find a brand. Click a store to view its
          cashback rate, terms, and shop link.
        </p>
      </header>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search stores or categories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={
                "rounded-full border px-3 py-1 text-xs font-medium transition " +
                (filter === f
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground")
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
          No stores matched your search.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <StoreCard key={s.slug} store={s} />
          ))}
        </div>
      )}
    </div>
  );
}
