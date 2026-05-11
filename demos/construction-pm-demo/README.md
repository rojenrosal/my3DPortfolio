# Sitestack - Construction Planning Platform (Demo)

A working replica of a construction project management platform - modelled after the kind of system I've built for civil and major-buildings teams. Focused on live lookahead planning, daily site diaries, and resource tracking, with every flow wired up so you can click through the real shape of the product.

All projects, crews, and clients are fictional mock data.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + shadcn/ui-style primitives
- **lucide-react** icons
- **Static export** (`output: "export"`) - Netlify-ready, no backend

## Pages

| Route                | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `/`                  | Landing - value prop, portfolio snapshot, live projects    |
| `/projects`          | Searchable, status-filtered list                           |
| `/projects/[id]`     | Project detail - programme, this-week tasks, resources     |
| `/lookahead`         | 3-week lookahead board grouped by Week 1 / 2 / 3           |
| `/diary`             | Daily site diary entries with shift, crew, plant, flags    |

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

`netlify.toml` is pre-configured for static export. Push to GitHub → Netlify → Import from Git. No env vars required. Security headers + immutable static caching ship by default.

## Notes

- All project / client / crew names are fictional.
- This demo is intentionally backend-free.
- A production build would typically use Postgres + Prisma + real-time sync for multiplayer plan edits.

## License

MIT.
