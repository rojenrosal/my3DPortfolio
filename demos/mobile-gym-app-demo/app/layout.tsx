import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse - Mobile Gym App (Demo)",
  description:
    "Demo project: a mobile-first gym and workout app presented inside a phone frame.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
