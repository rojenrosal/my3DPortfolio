import Link from "next/link";
import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/stores", label: "Stores" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/checkout", label: "Checkout" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Coins className="h-4 w-4" />
          </span>
          RewardLoop
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/checkout">Join free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
