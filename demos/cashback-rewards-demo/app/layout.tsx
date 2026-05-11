import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "RewardLoop - Cashback & Rewards Marketplace (Demo)",
  description:
    "Demo project: a cashback and rewards marketplace built with Next.js, TypeScript, Tailwind, and shadcn/ui.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RewardLoop - Cashback & Rewards Marketplace (Demo)",
    description:
      "Demo cashback marketplace built with Next.js, TypeScript, Tailwind and shadcn/ui.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RewardLoop - Cashback & Rewards Marketplace (Demo)",
    description:
      "Demo cashback marketplace built with Next.js, TypeScript, Tailwind and shadcn/ui.",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
