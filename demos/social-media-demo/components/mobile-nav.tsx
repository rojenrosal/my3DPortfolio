import Link from "next/link";
import { Compass, Home, Mail, User } from "lucide-react";

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/profile/jordan.p", label: "Profile", icon: User },
];

export function MobileNav() {
  return (
    <nav className="sticky bottom-0 z-40 flex items-center justify-around border-t border-border/60 bg-background/90 px-2 py-2 backdrop-blur lg:hidden">
      {nav.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-0.5 rounded-md px-3 py-1.5 text-[11px] text-muted-foreground transition hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
