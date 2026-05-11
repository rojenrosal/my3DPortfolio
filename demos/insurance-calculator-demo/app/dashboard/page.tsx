import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CreditCard,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memberSummary, policies, recentPayments } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="container py-12 space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="muted">Member dashboard</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hello, {memberSummary.name.split(" ")[0]}
          </h1>
          <p className="text-muted-foreground">
            Customer since {formatDate(memberSummary.customerSince)}
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/calculator">
            Get another quote <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          icon={<ShieldCheck className="h-4 w-4" />}
          label="Active policies"
          value={String(memberSummary.policiesCount)}
        />
        <SummaryCard
          icon={<Wallet className="h-4 w-4" />}
          label="Total cover"
          value={formatCurrency(memberSummary.totalSumInsured)}
        />
        <SummaryCard
          icon={<CalendarClock className="h-4 w-4" />}
          label="Next debit"
          value={formatDate(policies[0].nextPaymentDate)}
        />
        <SummaryCard
          icon={<CreditCard className="h-4 w-4" />}
          label="Monthly outgoing"
          value={formatCurrency(memberSummary.monthlyOutgoing)}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle>Your policies</CardTitle>
            </div>
            <Button variant="ghost" size="sm">Add cover</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {policies.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/60 bg-muted/30 p-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{p.productName}</p>
                    <Badge
                      variant={
                        p.status === "active"
                          ? "success"
                          : p.status === "pending"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {p.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatCurrency(p.sumInsured)} cover · next debit{" "}
                    {formatDate(p.nextPaymentDate)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    {formatCurrency(p.premium)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {p.frequency}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent payments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentPayments.map((pay) => (
              <div
                key={pay.id}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">{formatCurrency(pay.amount)}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(pay.date)} · {pay.method}
                  </p>
                </div>
                <Badge
                  variant={
                    pay.status === "Paid"
                      ? "success"
                      : pay.status === "Pending"
                      ? "warning"
                      : "danger"
                  }
                >
                  {pay.status}
                </Badge>
              </div>
            ))}
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
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
      </CardContent>
    </Card>
  );
}
