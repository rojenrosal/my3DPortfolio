import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-tight">Sitestack</p>
          <p className="mt-2 text-muted-foreground">
            Live planning for civil, rail, and major buildings teams.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Demo project - not a real service.
          </p>
        </div>
        <div>
          <p className="font-medium">Product</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link href="/lookahead" className="hover:text-foreground">Lookahead</Link></li>
            <li><Link href="/diary" className="hover:text-foreground">Site diary</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Solutions</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Civil infrastructure</li>
            <li>Rail &amp; metro</li>
            <li>Major buildings</li>
            <li>Energy</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>About</li>
            <li>Customers</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Sitestack. Demo build.</span>
          <span>Built with Next.js, TypeScript, Tailwind &amp; shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}
