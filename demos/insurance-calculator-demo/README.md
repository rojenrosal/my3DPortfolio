# Coverway - Life Insurance Quotes &amp; Premium Calculator (Demo)

A working replica of a life insurance quoting and policy management app - built in the shape of production systems I've shipped for insurance clients. Interactive premium calculator with live recalculation, scheduled payments, and a customer dashboard.

**Not a real insurer. Not financial advice.** All products, premiums, and policies are fictional mock data.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + shadcn/ui-style primitives
- **lucide-react** icons
- **Static export** - Netlify-ready, no backend

## Pages

| Route                | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `/`                  | Landing - value prop, products, how it works             |
| `/products`          | Product comparison grid                                  |
| `/products/[slug]`   | Product detail - features, payout cap, term options      |
| `/calculator`        | Interactive premium calculator (live recalculation)      |
| `/dashboard`         | Member dashboard - policies, premiums, recent payments   |

## Premium logic

`lib/mock-data.ts` exports `calculatePremium(inputs)` - a transparent rate
table by product, scaled by age, smoker status, occupation, and frequency. It's
illustrative, not actuarial.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

`netlify.toml` is pre-configured for static export. Push to GitHub → Netlify
→ Import from Git. No env vars required.

## License

MIT.
