import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/jobs", label: "Browse jobs" },
  { href: "/post", label: "Post a job" },
  { href: "/dashboard", label: "Employer dashboard" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Briefcase className="h-4 w-4" />
          </span>
          Hireloop
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="transition hover:text-foreground">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link href="/dashboard">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/post">Post a job</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
