import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-tight">Codeweave</p>
          <p className="mt-2 text-muted-foreground">
            An AI-native IDE in your browser. Build, run, and ship from a single tab.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Demo project - not a real service.
          </p>
        </div>
        <div>
          <p className="font-medium">Product</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/editor" className="hover:text-foreground">Editor</Link></li>
            <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Resources</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Docs</li>
            <li>Changelog</li>
            <li>Templates</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>About</li>
            <li>Careers</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Codeweave. Demo build.</span>
          <span>Built with Next.js, TypeScript, Tailwind &amp; shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}
