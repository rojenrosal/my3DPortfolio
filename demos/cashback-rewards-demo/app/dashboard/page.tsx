import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Trophy, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  memberSummary,
  monthlyDraw,
  transactions,
} from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

const statusVariant = {
  pending: "warning" as const,
  confirmed: "default" as const,
  paid: "success" as const,
};

export default function DashboardPage() {
  const totalEarned =
    memberSummary.pendingCashback +
    memberSummary.confirmedCashback +
    memberSummary.paidCashback;

  return (
    <div className="container py-12 space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="muted">Dashboard</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hello, {memberSummary.name.split(" ")[0]}
          </h1>
          <p className="text-muted-foreground">
            Member since {formatDate(memberSummary.joinedAt)} · {memberSummary.tier} tier
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/stores">
            Find more stores <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          icon={<Wallet className="h-4 w-4" />}
          label="Total earned"
          value={formatCurrency(totalEarned)}
          caption="Lifetime"
        />
        <SummaryCard
          icon={<Clock className="h-4 w-4" />}
          label="Pending"
          value={formatCurrency(memberSummary.pendingCashback)}
          caption="Tracking from retailers"
        />
        <SummaryCard
          icon={<ShieldCheck className="h-4 w-4" />}
          label="Available to withdraw"
          value={formatCurrency(memberSummary.confirmedCashback + memberSummary.paidCashback)}
          caption="Confirmed cashback"
        />
        <SummaryCard
          icon={<Trophy className="h-4 w-4" />}
          label="Draw entries"
          value={String(memberSummary.drawEntries)}
          caption={`Draws ${formatDate(monthlyDraw.drawDate)}`}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>
                Your last {transactions.length} tracked purchases.
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm">Export CSV</Button>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr className="border-b border-border/60">
                  <th className="py-3 pr-4 font-medium">Store</th>
                  <th className="py-3 pr-4 font-medium">Date</th>
                  <th className="py-3 pr-4 font-medium">Order</th>
                  <th className="py-3 pr-4 font-medium">Cashback</th>
                  <th className="py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="border-b border-border/40 last:border-0"
                  >
                    <td className="py-3 pr-4 font-medium">{tx.storeName}</td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      {formatDate(tx.date)}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground">
                      {formatCurrency(tx.orderTotal)}
                    </td>
                    <td className="py-3 pr-4 font-semibold text-primary">
                      {formatCurrency(tx.cashback)}
                    </td>
                    <td className="py-3">
                      <Badge variant={statusVariant[tx.status]}>
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="glow-emerald">
          <CardHeader>
            <Badge variant="success" className="w-fit">
              <Trophy className="mr-1.5 h-3 w-3" />
              {monthlyDraw.title}
            </Badge>
            <CardTitle className="mt-3 text-xl">{monthlyDraw.subtitle}</CardTitle>
            <CardDescription>
              Draws {formatDate(monthlyDraw.drawDate)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Prize value
              </p>
              <p className="text-3xl font-bold">
                {formatCurrency(monthlyDraw.value)}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Your entries
              </p>
              <p className="mt-1 text-2xl font-semibold text-primary">
                {monthlyDraw.entriesEarned}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Every $10 spent earns 1 entry on the Plus tier.
              </p>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/stores">Shop to earn more</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function SummaryCard({
  icon,
  label,
  value,
  caption,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center justify-between text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">{label}</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
            {icon}
          </span>
        </div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        <p className="text-xs text-muted-foreground">{caption}</p>
      </CardContent>
    </Card>
  );
}
