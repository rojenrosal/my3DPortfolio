# Codeweave - AI-Native Web IDE (Demo)

A working replica of a browser-based AI-native IDE - modelled after the modern AI developer tools I've worked on. File tree, editor pane, terminal, and an AI chat that responds to prompts, all running in one tab.

All projects, files, AI runs, and chat messages are fictional mock data.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + shadcn/ui-style primitives
- **lucide-react** icons
- **Static export** - Netlify-ready, no backend

## Pages

| Route                | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `/`                  | Landing - value prop, faux IDE preview, feature grid       |
| `/editor`            | Mock IDE - file tree, editor pane, AI chat sidebar         |
| `/projects`          | Workspace list                                             |
| `/projects/[id]`     | Project detail - recent AI runs with status, diff metadata |
| `/pricing`           | Plans                                                      |

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
