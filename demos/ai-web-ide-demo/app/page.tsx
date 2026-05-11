import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  GitBranch,
  Layers,
  MessagesSquare,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="container relative z-10 grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="space-y-8">
            <Badge variant="muted" className="w-fit">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Demo · Next.js + TypeScript + Tailwind
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build apps in a browser tab -{" "}
              <span className="text-gradient">with an AI pair on call.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Codeweave is an AI-native IDE. Editor, file tree, terminal, AI
              chat, and isolated branch runs - all in one workspace.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/editor">
                  Open the editor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">See projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-md">
              <Stat label="Live workspaces" value="12k+" />
              <Stat label="AI runs / day" value="1.2M" />
              <Stat label="Avg ship time" value="-58%" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <Card className="glow-primary overflow-hidden">
              <div className="border-b border-border/60 bg-muted/30 px-3 py-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-2 font-mono">codeweave/checkout-redesign</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] divide-x divide-border/60 text-xs">
                <div className="p-3 font-mono space-y-1 text-muted-foreground">
                  <p className="text-foreground">app/</p>
                  <p className="pl-3">page.tsx</p>
                  <p className="pl-3">layout.tsx</p>
                  <p className="text-foreground pt-2">components/</p>
                  <p className="pl-3">cart.tsx</p>
                  <p className="pl-3">checkout.tsx</p>
                  <p className="text-foreground pt-2">lib/</p>
                  <p className="pl-3">cart-store.ts</p>
                </div>
                <div className="p-3 font-mono text-[12px] leading-relaxed">
                  <p className="text-muted-foreground">{"// app/page.tsx"}</p>
                  <p>
                    <span className="text-primary">import</span> Cart{" "}
                    <span className="text-primary">from</span>{" "}
                    <span className="text-emerald-300">&quot;@/components/cart&quot;</span>;
                  </p>
                  <p>
                    <span className="text-primary">export default function</span>{" "}
                    <span className="text-accent">HomePage</span>() {"{"}
                  </p>
                  <p className="pl-3">
                    <span className="text-primary">return</span> &lt;Cart /&gt;;
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
              <div className="border-t border-border/60 bg-muted/30 p-3 text-xs">
                <p className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Codeweave AI
                </p>
                <p className="mt-1 text-muted-foreground">
                  Add a promo-code input below the cart total. Persist the applied code.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Everything in one workspace
          </h2>
          <p className="mt-2 text-muted-foreground">
            No setup. No context switching. Pick a template, prompt, ship.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Feature icon={<Layers className="h-5 w-5" />} title="Real file tree" body="Browse and edit real source files. Not just chat, not just snippets." />
          <Feature icon={<Terminal className="h-5 w-5" />} title="Built-in terminal" body="Run scripts, install packages, restart dev servers - without leaving the tab." />
          <Feature icon={<MessagesSquare className="h-5 w-5" />} title="AI pair, in context" body="Chat sees your files, your recent diffs, and your terminal output." />
          <Feature icon={<GitBranch className="h-5 w-5" />} title="Branch-isolated runs" body="Each AI run lives on its own branch. Review the diff before merging." />
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20">
        <div className="container py-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Prompts that ship code
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Each prompt opens a branch, runs in an isolated container,
              produces a real diff, and tells you what changed. Approve and
              merge - or roll back in one click.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <Tick>Diff-first review, not blind apply</Tick>
              <Tick>Multi-file edits with dependency awareness</Tick>
              <Tick>Replay any prompt on a fresh branch</Tick>
            </div>
            <Button className="mt-8" asChild>
              <Link href="/editor">
                Open the editor <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-5 font-mono text-[12px] space-y-2">
              <p className="text-primary">→ ai/promo-code · run-241</p>
              <p className="text-emerald-300">+ app/components/promo-code.tsx</p>
              <p className="text-emerald-300">+ lib/promo-store.ts</p>
              <p className="text-amber-300">~ lib/cart-store.ts</p>
              <p className="text-amber-300">~ app/page.tsx</p>
              <p className="text-muted-foreground pt-2">
                4 files changed, 84 lines · 1m 12s
              </p>
              <div className="pt-3 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">tests pass</span>
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-primary">ready to merge</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <Card className="bg-primary/10 border-primary/30">
          <CardContent className="flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
                <Cpu className="h-6 w-6 text-primary" /> Spin up a workspace
              </h3>
              <p className="mt-1 text-muted-foreground">
                10 seconds from prompt to running app.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" asChild>
                <Link href="/editor">Try the editor</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-2 text-muted-foreground">
      <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
      <span>{children}</span>
    </p>
  );
}
