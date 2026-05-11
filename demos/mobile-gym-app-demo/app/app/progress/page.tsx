import { TrendingDown, TrendingUp, Trophy, Zap } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { memberSummary, recentActivity } from "@/lib/mock-data";

const week = ["M", "T", "W", "T", "F", "S", "S"];
const minutesPerDay = [55, 0, 30, 47, 15, 52, 0];

export default function ProgressPage() {
  const max = Math.max(...minutesPerDay, 60);
  const totalKcal = recentActivity.reduce((s, a) => s + a.calories, 0);
  const totalMin = recentActivity.reduce((s, a) => s + a.minutes, 0);

  return (
    <PhoneFrame title="Progress" showBack>
      <div className="space-y-5">
        <section className="grid grid-cols-2 gap-3">
          <Tile
            icon={<Zap className="h-3 w-3" />}
            label="Weekly minutes"
            value={`${memberSummary.weeklyMinutes}`}
            trend="up"
            trendValue="+24%"
          />
          <Tile
            icon={<Trophy className="h-3 w-3" />}
            label="PRs this month"
            value={`${memberSummary.prsThisMonth}`}
            trend="up"
            trendValue="+1"
          />
          <Tile
            icon={<Zap className="h-3 w-3" />}
            label="Streak"
            value={`${memberSummary.streak} days`}
          />
          <Tile
            icon={<TrendingDown className="h-3 w-3" />}
            label="Bodyweight"
            value={`${memberSummary.bodyweightKg}kg`}
            trend="down"
            trendValue={`${memberSummary.bodyweightDelta}kg`}
          />
        </section>

        <section className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">This week</p>
            <span className="text-xs text-muted-foreground">{totalMin}m · {totalKcal} kcal</span>
          </div>
          <div className="mt-4 flex items-end justify-between gap-1.5 h-32">
            {minutesPerDay.map((m, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-primary/70"
                  style={{ height: `${(m / max) * 100}%` }}
                  aria-label={`${m} min`}
                />
                <span className="text-[10px] text-muted-foreground">{week[i]}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold">Activity log</p>
          <div className="mt-2 space-y-2">
            {recentActivity.map((a) => (
              <div
                key={a.date}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium">{a.workoutTitle}</p>
                  <p className="text-[11px] text-muted-foreground">{a.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{a.minutes}m</p>
                  <p className="text-[10px] text-muted-foreground">
                    {a.calories} kcal
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PhoneFrame>
  );
}

function Tile({
  icon,
  label,
  value,
  trend,
  trendValue,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: "up" | "down";
  trendValue?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <p className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-1.5 text-xl font-bold">{value}</p>
      {trend && (
        <p
          className={
            "mt-0.5 inline-flex items-center gap-0.5 text-[10px] " +
            (trend === "up" ? "text-emerald-300" : "text-amber-300")
          }
        >
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {trendValue}
        </p>
      )}
    </div>
  );
}
