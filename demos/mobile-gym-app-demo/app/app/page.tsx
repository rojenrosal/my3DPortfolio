import Link from "next/link";
import { ChevronRight, Flame, Play, Zap } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { memberSummary, recentActivity, todaysWorkout, workouts } from "@/lib/mock-data";
import { formatMinutes } from "@/lib/utils";

export default function AppHome() {
  const pct = Math.min(
    100,
    Math.round((memberSummary.weeklyMinutes / memberSummary.weeklyGoalMinutes) * 100)
  );

  return (
    <PhoneFrame title="Pulse">
      <div className="space-y-5">
        <section>
          <p className="text-xs text-muted-foreground">Good morning</p>
          <h1 className="text-2xl font-bold tracking-tight">
            Hey, {memberSummary.name} 👋
          </h1>
        </section>

        <section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-orange-500/25 to-rose-500/15 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-wider text-primary">
              Today
            </p>
            <span className="inline-flex items-center gap-1 text-[10px] text-amber-300">
              <Flame className="h-3 w-3" /> streak {memberSummary.streak}
            </span>
          </div>
          <p className="mt-1 text-lg font-semibold">{todaysWorkout.title}</p>
          <p className="text-xs text-muted-foreground">
            {todaysWorkout.focus} · {formatMinutes(todaysWorkout.duration)} ·{" "}
            {todaysWorkout.calories} kcal
          </p>
          <Link
            href={`/app/workouts/${todaysWorkout.slug}/`}
            className="mt-3 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
          >
            <Play className="h-3 w-3 fill-current" /> Start workout
          </Link>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Weekly goal</p>
            <span className="text-xs text-muted-foreground">
              {memberSummary.weeklyMinutes} / {memberSummary.weeklyGoalMinutes} min
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            {pct}% - {memberSummary.weeklyGoalMinutes - memberSummary.weeklyMinutes} min to go
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Recommended for you</p>
            <Link
              href="/app/workouts/"
              className="text-xs text-primary inline-flex items-center"
            >
              View all <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
            {workouts.slice(0, 5).map((w) => (
              <Link
                key={w.slug}
                href={`/app/workouts/${w.slug}/`}
                className="w-40 shrink-0 rounded-2xl border border-border bg-card p-3"
              >
                <div
                  className={
                    "h-20 rounded-xl bg-gradient-to-br " + w.accent
                  }
                  aria-hidden="true"
                />
                <p className="mt-2 text-sm font-medium leading-tight">{w.title}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {formatMinutes(w.duration)} · {w.level}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold">This week</p>
          <div className="mt-2 space-y-2">
            {recentActivity.slice(0, 4).map((a) => (
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
                  <p className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
                    <Zap className="h-2.5 w-2.5" /> {a.calories} kcal
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
