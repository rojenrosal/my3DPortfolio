import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { RightRail } from "@/components/right-rail";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "Connectly - Social Demo",
  description:
    "Demo project: a social media platform with feed, profiles, comments, and messages.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="mx-auto flex max-w-7xl">
          <Sidebar />
          <main className="flex-1 min-w-0 border-x border-border/60">
            {children}
          </main>
          <RightRail />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
