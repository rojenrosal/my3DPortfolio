import Link from "next/link";
import { Bell, Compass, Hash, Home, Mail, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/profile/jordan.p", label: "Profile", icon: User },
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col gap-1 border-r border-border/60 px-3 py-5 lg:flex">
      <Link href="/" className="flex items-center gap-2 px-3 pb-4 font-semibold tracking-tight">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Sparkles className="h-4 w-4" />
        </span>
        Connectly
      </Link>

      {nav.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium text-foreground/90 transition hover:bg-muted/40"
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}

      <Button className="mt-3">Post</Button>

      <div className="mt-auto rounded-2xl border border-border/60 bg-muted/20 p-3 text-xs text-muted-foreground">
        <p className="flex items-center gap-1 text-foreground/80 font-medium">
          <Bell className="h-3 w-3" /> What's new
        </p>
        <p className="mt-1">Replies now nest two levels by default. Try it on any post.</p>
      </div>
    </aside>
  );
}
