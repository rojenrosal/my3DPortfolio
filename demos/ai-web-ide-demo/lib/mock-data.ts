import type { ChatMessage, IdeProject, ProjectRun, WorkspaceFile } from "./types";

export const projects: IdeProject[] = [
  {
    id: "checkout-redesign",
    name: "checkout-redesign",
    description: "Redesigning the cart and checkout flow with shadcn/ui.",
    framework: "Next.js",
    visibility: "team",
    collaborators: 4,
    lastActivity: "2026-05-11T09:18:00Z",
    runs: 38,
  },
  {
    id: "kitchen-mvp",
    name: "kitchen-mvp",
    description: "Internal tool for kitchen ops - order routing + KDS.",
    framework: "Next.js",
    visibility: "private",
    collaborators: 2,
    lastActivity: "2026-05-10T22:04:00Z",
    runs: 71,
  },
  {
    id: "marketing-site",
    name: "marketing-site",
    description: "New marketing site with content collections.",
    framework: "Astro",
    visibility: "public",
    collaborators: 6,
    lastActivity: "2026-05-09T15:42:00Z",
    runs: 22,
  },
  {
    id: "billing-rules-engine",
    name: "billing-rules-engine",
    description: "Pricing rules DSL + evaluator. WIP.",
    framework: "Remix",
    visibility: "private",
    collaborators: 1,
    lastActivity: "2026-05-08T07:10:00Z",
    runs: 12,
  },
];

export const sampleFiles: WorkspaceFile[] = [
  {
    path: "app/page.tsx",
    language: "tsx",
    content: `import { Button } from "@/components/ui/button";
import { Cart } from "@/components/cart";

export default function HomePage() {
  return (
    <main className="container py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Your cart</h1>
      <Cart />
      <Button>Continue to checkout</Button>
    </main>
  );
}`,
  },
  {
    path: "components/cart.tsx",
    language: "tsx",
    content: `"use client";

import { useCart } from "@/lib/cart-store";

export function Cart() {
  const items = useCart((s) => s.items);
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <li key={item.id} className="py-3 flex justify-between">
          <span>{item.name}</span>
          <span>{item.qty} × \${item.price}</span>
        </li>
      ))}
    </ul>
  );
}`,
  },
  {
    path: "lib/cart-store.ts",
    language: "ts",
    content: `import { create } from "zustand";

type Item = { id: string; name: string; qty: number; price: number };

type CartState = {
  items: Item[];
  add: (i: Item) => void;
  remove: (id: string) => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  add: (i) => set((s) => ({ items: [...s.items, i] })),
  remove: (id) => set((s) => ({ items: s.items.filter((x) => x.id !== id) })),
}));`,
  },
  {
    path: "package.json",
    language: "json",
    content: `{
  "name": "checkout-redesign",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "next": "^14.2.5",
    "react": "^18.3.1",
    "zustand": "^4.5.4"
  }
}`,
  },
  {
    path: "README.md",
    language: "md",
    content: `# checkout-redesign

Cart and checkout flow refresh - shadcn/ui + zustand state, Stripe Checkout backend.`,
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "m-1",
    role: "user",
    content: "Add a promo-code input below the cart total. Persist the applied code in the store.",
  },
  {
    id: "m-2",
    role: "assistant",
    tokens: 412,
    content:
      "Done. I added a `PromoCode` component below the totals, wired it to `useCart` via a new `applyPromo(code)` action, and persisted the active code in localStorage. Failed lookups show inline next to the input.",
  },
  {
    id: "m-3",
    role: "user",
    content: "Now make the totals row sticky on mobile.",
  },
  {
    id: "m-4",
    role: "assistant",
    tokens: 188,
    content:
      "Made the totals row sticky to the viewport bottom on screens narrower than `md` using `sticky bottom-0` with a backdrop blur, and added bottom padding to the cart list so the last item isn't clipped.",
  },
];

export const recentRuns: ProjectRun[] = [
  {
    id: "run-241",
    status: "success",
    branch: "ai/promo-code",
    prompt: "Add promo code input + apply action.",
    startedAt: "2026-05-11T09:15:00Z",
    duration: "1m 12s",
    diffLines: 84,
  },
  {
    id: "run-240",
    status: "success",
    branch: "ai/sticky-totals",
    prompt: "Sticky totals row on mobile.",
    startedAt: "2026-05-11T09:22:00Z",
    duration: "38s",
    diffLines: 22,
  },
  {
    id: "run-239",
    status: "failed",
    branch: "ai/refactor-checkout",
    prompt: "Refactor checkout into server actions.",
    startedAt: "2026-05-10T22:04:00Z",
    duration: "2m 51s",
    diffLines: 312,
  },
  {
    id: "run-238",
    status: "success",
    branch: "ai/test-coverage",
    prompt: "Add unit tests for the cart store.",
    startedAt: "2026-05-10T17:32:00Z",
    duration: "1m 04s",
    diffLines: 156,
  },
];

export const pricingTiers = [
  {
    name: "Hobby",
    price: 0,
    period: "month",
    perks: [
      "Up to 3 private projects",
      "50 AI runs / month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: 25,
    period: "month",
    highlight: true,
    perks: [
      "Unlimited projects",
      "1,500 AI runs / month",
      "Branch isolated runs",
      "Email support",
    ],
  },
  {
    name: "Team",
    price: 75,
    period: "month",
    perks: [
      "Everything in Pro",
      "Shared workspaces",
      "5,000 AI runs / month",
      "SSO + audit log",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
