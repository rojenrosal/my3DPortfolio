import type { Store, Transaction, Membership, PrizeDraw } from "./types";

export const stores: Store[] = [
  {
    slug: "harbour-threads",
    name: "Harbour Threads",
    category: "Fashion",
    cashbackRate: 8,
    description:
      "Coastal-inspired fashion label with breathable linens, knits, and seasonal capsule drops.",
    terms: [
      "Cashback applies to full-price items only.",
      "Excludes gift cards and shipping.",
      "Confirmation within 7 days.",
    ],
    featured: true,
    trending: true,
    initials: "HT",
    accent: "from-emerald-500/30 to-emerald-400/10",
  },
  {
    slug: "northwind-travel",
    name: "Northwind Travel",
    category: "Travel",
    cashbackRate: 5,
    description:
      "Hotels, flights, and curated stays across Australia, New Zealand, and Southeast Asia.",
    terms: [
      "Cashback on completed stays only.",
      "Excludes taxes and resort fees.",
      "Tracked within 72 hours of check-out.",
    ],
    featured: true,
    initials: "NT",
    accent: "from-sky-500/30 to-sky-400/10",
  },
  {
    slug: "pantry-co",
    name: "Pantry Co",
    category: "Food",
    cashbackRate: 12,
    description:
      "Weekly meal kits and chef-curated grocery bundles delivered nationwide.",
    terms: [
      "First box cashback capped at $25.",
      "Recurring orders earn 12% per delivery.",
      "Tracked within 24 hours.",
    ],
    featured: true,
    trending: true,
    initials: "PC",
    accent: "from-amber-500/30 to-amber-400/10",
  },
  {
    slug: "stonecraft-home",
    name: "Stonecraft Home",
    category: "Home",
    cashbackRate: 6,
    description:
      "Hand-finished furniture, lighting, and rugs for considered Australian homes.",
    terms: [
      "Excludes clearance items.",
      "Free delivery on orders over $200.",
      "Cashback confirms after 14-day return window.",
    ],
    featured: true,
    initials: "SH",
    accent: "from-rose-500/30 to-rose-400/10",
  },
  {
    slug: "circuit-supply",
    name: "Circuit Supply",
    category: "Tech",
    cashbackRate: 4,
    description:
      "Audio, computing, smart home, and accessories with manufacturer-backed warranties.",
    terms: [
      "Excludes Apple-branded products.",
      "Cashback caps at $150 per order.",
      "Tracked within 48 hours.",
    ],
    trending: true,
    initials: "CS",
    accent: "from-indigo-500/30 to-indigo-400/10",
  },
  {
    slug: "wellnest",
    name: "Wellnest",
    category: "Health",
    cashbackRate: 10,
    description:
      "Supplements, mindful skincare, and at-home wellness routines.",
    terms: [
      "Cashback on supplement subscriptions doubles for the first 3 months.",
      "Excludes prescription items.",
      "Tracked within 24 hours.",
    ],
    initials: "WN",
    accent: "from-teal-500/30 to-teal-400/10",
  },
  {
    slug: "tinyharbour",
    name: "Tiny Harbour",
    category: "Kids",
    cashbackRate: 7,
    description:
      "Considered kids' essentials - clothing, books, and timber toys.",
    terms: [
      "Excludes Tiny Harbour gift cards.",
      "Cashback combines with sale prices.",
      "Tracked within 72 hours.",
    ],
    initials: "TH",
    accent: "from-fuchsia-500/30 to-fuchsia-400/10",
  },
  {
    slug: "kicker-athletic",
    name: "Kicker Athletic",
    category: "Sports",
    cashbackRate: 9,
    description:
      "Performance running, training, and recovery gear from independent labels.",
    terms: [
      "Cashback applies on the first pair only per category per month.",
      "Excludes pre-orders.",
      "Tracked within 48 hours.",
    ],
    trending: true,
    initials: "KA",
    accent: "from-lime-500/30 to-lime-400/10",
  },
  {
    slug: "lumen-skincare",
    name: "Lumen Skincare",
    category: "Health",
    cashbackRate: 11,
    description:
      "Dermatologist-formulated routines with refillable packaging.",
    terms: [
      "Refill orders earn double cashback.",
      "Excludes professional treatments.",
      "Tracked within 24 hours.",
    ],
    initials: "LS",
    accent: "from-orange-500/30 to-orange-400/10",
  },
  {
    slug: "drift-bookings",
    name: "Drift Bookings",
    category: "Travel",
    cashbackRate: 6,
    description:
      "Boutique accommodation in coastal and regional Australia.",
    terms: [
      "Cashback on stays of 2+ nights.",
      "Excludes deposits.",
      "Tracked within 72 hours of check-out.",
    ],
    initials: "DB",
    accent: "from-cyan-500/30 to-cyan-400/10",
  },
  {
    slug: "atelier-paper",
    name: "Atelier Paper",
    category: "Home",
    cashbackRate: 8,
    description:
      "Stationery, art prints, and homewares from independent Australian designers.",
    terms: [
      "Excludes custom commissions.",
      "Free shipping on orders over $80.",
      "Tracked within 24 hours.",
    ],
    initials: "AP",
    accent: "from-violet-500/30 to-violet-400/10",
  },
  {
    slug: "graze-grocer",
    name: "Graze Grocer",
    category: "Food",
    cashbackRate: 5,
    description:
      "Specialty pantry, charcuterie, and producer-direct staples.",
    terms: [
      "Cashback capped at $40 per order.",
      "Subscription orders earn an extra 1%.",
      "Tracked within 24 hours.",
    ],
    initials: "GG",
    accent: "from-yellow-500/30 to-yellow-400/10",
  },
];

export const featuredStores = stores.filter((s) => s.featured);
export const trendingStores = stores.filter((s) => s.trending);

export const transactions: Transaction[] = [
  {
    id: "tx-101",
    storeSlug: "harbour-threads",
    storeName: "Harbour Threads",
    orderTotal: 184.5,
    cashback: 14.76,
    status: "confirmed",
    date: "2026-05-04",
  },
  {
    id: "tx-100",
    storeSlug: "pantry-co",
    storeName: "Pantry Co",
    orderTotal: 95.0,
    cashback: 11.4,
    status: "paid",
    date: "2026-04-28",
  },
  {
    id: "tx-099",
    storeSlug: "circuit-supply",
    storeName: "Circuit Supply",
    orderTotal: 412.0,
    cashback: 16.48,
    status: "pending",
    date: "2026-05-09",
  },
  {
    id: "tx-098",
    storeSlug: "northwind-travel",
    storeName: "Northwind Travel",
    orderTotal: 1240.0,
    cashback: 62.0,
    status: "pending",
    date: "2026-05-02",
  },
  {
    id: "tx-097",
    storeSlug: "wellnest",
    storeName: "Wellnest",
    orderTotal: 78.0,
    cashback: 7.8,
    status: "paid",
    date: "2026-04-21",
  },
  {
    id: "tx-096",
    storeSlug: "kicker-athletic",
    storeName: "Kicker Athletic",
    orderTotal: 219.95,
    cashback: 19.8,
    status: "paid",
    date: "2026-04-14",
  },
  {
    id: "tx-095",
    storeSlug: "stonecraft-home",
    storeName: "Stonecraft Home",
    orderTotal: 540.0,
    cashback: 32.4,
    status: "confirmed",
    date: "2026-04-09",
  },
];

export const memberships: Membership[] = [
  {
    name: "Starter",
    price: 0,
    period: "month",
    perks: [
      "Up to 4% cashback on selected stores",
      "Standard prize draw entries",
      "Email member offers",
    ],
  },
  {
    name: "Plus",
    price: 9.95,
    period: "month",
    highlight: true,
    perks: [
      "Full cashback rates on 1,000+ stores",
      "3x entries into monthly draws",
      "Members-only flash sales",
      "Priority cashback confirmation",
    ],
  },
  {
    name: "Lifetime",
    price: 199,
    period: "one-off",
    perks: [
      "All Plus perks, forever",
      "5x entries into monthly draws",
      "Quarterly milestone bonus",
      "Concierge cashback support",
    ],
  },
];

export const monthlyDraw: PrizeDraw = {
  title: "Monthly Mega Draw",
  subtitle: "Touring caravan + $20,000 fit-out fund",
  value: 95000,
  drawDate: "2026-05-31",
  entriesEarned: 28,
};

export const memberSummary = {
  name: "Jordan Pereira",
  tier: "Plus",
  joinedAt: "2025-11-02",
  pendingCashback: 78.48,
  confirmedCashback: 47.16,
  paidCashback: 39.0,
  drawEntries: 28,
  storesShopped: 7,
};

export const featuredCategories = [
  { name: "Fashion", count: 142 },
  { name: "Travel", count: 86 },
  { name: "Home", count: 119 },
  { name: "Tech", count: 73 },
  { name: "Food", count: 64 },
  { name: "Health", count: 91 },
  { name: "Kids", count: 48 },
  { name: "Sports", count: 55 },
];

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find((s) => s.slug === slug);
}
