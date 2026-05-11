import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-tight">RewardLoop</p>
          <p className="mt-2 text-muted-foreground">
            Earn cashback on everyday purchases and unlock monthly prize draws.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Demo project - not a real service.
          </p>
        </div>

        <div>
          <p className="font-medium">Explore</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><Link href="/stores" className="hover:text-foreground">Browse stores</Link></li>
            <li><Link href="/dashboard" className="hover:text-foreground">Member dashboard</Link></li>
            <li><Link href="/checkout" className="hover:text-foreground">Membership</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Company</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>About</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <p className="font-medium">Support</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>Help centre</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex flex-col gap-2 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} RewardLoop. Demo build.</span>
          <span>Built with Next.js, TypeScript, Tailwind &amp; shadcn/ui.</span>
        </div>
      </div>
    </footer>
  );
}
