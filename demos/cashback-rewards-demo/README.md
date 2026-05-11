# RewardLoop - Cashback & Rewards Marketplace (Demo)

A working replica of a cashback and rewards marketplace - built in the shape of production platforms I've led, focused on showing how the system *functions* (browsing stores, member dashboards, plan selection, checkout) rather than how it's branded.

All brands, stores, members, and transactions are fictional mock data. Click anywhere - every flow is wired up.

## Tech stack

- **Next.js 14** (App Router) with **TypeScript**
- **Tailwind CSS** + **shadcn/ui**-style primitives
- **lucide-react** icons
- **Static export** (`output: "export"`) - deployable to any static host (Netlify, Vercel, Cloudflare Pages, S3+CloudFront, GitHub Pages)
- Mock data - no backend required

## Pages

| Route             | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| `/`               | Landing - hero, monthly draw, featured stores, how it works, plans |
| `/stores`         | Searchable, category-filtered list of partner stores              |
| `/stores/[slug]`  | Store detail - cashback rate, terms, related stores               |
| `/dashboard`      | Member dashboard - balance summary, recent activity table, draw   |
| `/checkout`       | Membership selection + demo checkout form                         |

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

This produces a fully static site in the `out/` directory.

## Deploy to Netlify

The repo includes `netlify.toml` configured for static export.

1. Push to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick this repo.
3. Build command and publish dir are already set by `netlify.toml`:
   - Build command: `npm run build`
   - Publish dir: `out`
4. Deploy. No environment variables required.

The `netlify.toml` also ships baseline security headers (CSP, HSTS, frame protection, referrer policy, permissions policy) and immutable caching for static assets.

## Project structure

```
app/
  layout.tsx           Root layout (Navbar + Footer)
  page.tsx             Landing page
  stores/
    page.tsx           Browse + filter
    [slug]/page.tsx    Store detail (generateStaticParams)
  dashboard/page.tsx   Member dashboard
  checkout/page.tsx    Checkout flow
  globals.css
components/
  ui/                  Button, Card, Badge, Input
  navbar.tsx
  footer.tsx
  store-card.tsx
  store-logo.tsx
lib/
  mock-data.ts         Stores, transactions, memberships, prize draw
  types.ts
  utils.ts             cn, formatCurrency, formatDate
```

## Notes

- All brand names (Harbour Threads, Northwind Travel, Pantry Co, etc.) are fictional and exist only as demo content.
- The checkout form does **not** submit anywhere - it only flips a local state to render a success card.
- "Member" data on the dashboard is hard-coded in `lib/mock-data.ts`. In production this would come from your auth + database.
- This demo is intentionally backend-free so it deploys to any static host. A production build would typically use Supabase or similar for auth, merchant tables, transactions, and cashback tracking.

## License

MIT - feel free to use this as a learning reference.
