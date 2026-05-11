import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-tight">Coverway</p>
          <p className="mt-2 text-muted-foreground">
            Life insurance quotes and policy management in one place.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Demo project - not a real insurer. Not financial advice.
          </p>
        </div>
        <div>
          <p className="font-medium">Products</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/products/life-cover" className="hover:text-foreground">Life cover</Link></li>
            <li><Link href="/products/tpd" className="hover:text-foreground">TPD</Link></li>
            <li><Link href="/products/income-protection" className="hover:text-foreground">Income protection</Link></li>
            <li><Link href="/products/trauma" className="hover:text-foreground">Trauma</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Help</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Claims</li>
            <li>Make a payment</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Legal</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>PDS</li>
            <li>FSG</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Coverway. Demo build.</span>
          <span>Built with Next.js, TypeScript, Tailwind &amp; shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}
