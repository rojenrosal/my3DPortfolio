# Hireloop - Job Board Platform (Demo)

A working replica of a modern job board for product and engineering teams - search and filter postings, view roles, post listings, and manage applicants from an employer dashboard. Every flow is clickable.

All companies, jobs, candidates, and applications are fictional mock data.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + shadcn/ui-style primitives
- **lucide-react** icons
- **Static export** - Netlify-ready, no backend

## Pages

| Route                | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `/`                  | Landing - search bar, featured jobs, candidate/employer    |
| `/jobs`              | Searchable / filterable jobs list                          |
| `/jobs/[slug]`       | Job detail - responsibilities, requirements, perks         |
| `/post`              | Post-a-job flow (plan select + form, mock checkout)        |
| `/dashboard`         | Employer dashboard - applicants table, summary stats       |

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
