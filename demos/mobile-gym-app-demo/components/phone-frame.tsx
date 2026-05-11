import Link from "next/link";
import { ArrowLeft, Dumbbell, Home, LineChart, User } from "lucide-react";

const nav = [
  { href: "/app/", label: "Home", icon: Home },
  { href: "/app/workouts/", label: "Workouts", icon: Dumbbell },
  { href: "/app/progress/", label: "Progress", icon: LineChart },
  { href: "/app/profile/", label: "Profile", icon: User },
];

export function PhoneFrame({
  children,
  title,
  showBack,
}: {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_70%),hsl(var(--background))] p-4 sm:p-8">
      <div className="w-full max-w-[420px]">
        <div className="relative rounded-[2.75rem] border border-border bg-card p-3 shadow-[0_30px_90px_-30px_hsl(var(--primary)/0.5)]">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-background h-[720px]">
            <div className="absolute left-1/2 top-3 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-background" />

            <header className="sticky top-0 z-10 flex items-center gap-2 border-b border-border/40 bg-background/85 px-4 pb-2 pt-9 backdrop-blur">
              {showBack && (
                <Link
                  href="/app/"
                  className="-ml-1 rounded-full p-1 hover:bg-muted/40"
                  aria-label="Back"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              )}
              <p className="text-sm font-semibold">{title ?? "Pulse"}</p>
              <span className="ml-auto text-[10px] font-medium text-muted-foreground">
                9:41
              </span>
            </header>

            <div className="h-[calc(720px-3.5rem-4.25rem)] overflow-y-auto px-4 pb-6 pt-3">
              {children}
            </div>

            <nav className="absolute inset-x-3 bottom-3 z-10">
              <div className="flex items-center justify-around rounded-full border border-border/60 bg-card/85 px-2 py-2 backdrop-blur shadow-lg">
                {nav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex flex-col items-center gap-0.5 rounded-full px-3 py-1 text-[10px] text-muted-foreground transition hover:text-primary"
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Pulse · iOS &amp; Android · demo build
        </p>
      </div>
    </div>
  );
}
