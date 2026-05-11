import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-tight">Hireloop</p>
          <p className="mt-2 text-muted-foreground">
            A modern job board for product and engineering teams.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Demo project - not a real service.
          </p>
        </div>
        <div>
          <p className="font-medium">For candidates</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/jobs" className="hover:text-foreground">Browse jobs</Link></li>
            <li>Saved jobs</li>
            <li>Job alerts</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">For employers</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/post" className="hover:text-foreground">Post a job</Link></li>
            <li><Link href="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>About</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Hireloop. Demo build.</span>
          <span>Built with Next.js, TypeScript, Tailwind &amp; shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}
