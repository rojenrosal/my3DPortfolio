import { Bell, Heart, LogOut, Settings, Trophy, Zap } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { memberSummary } from "@/lib/mock-data";

const settings = [
  { icon: Bell, label: "Notifications" },
  { icon: Heart, label: "Health permissions" },
  { icon: Settings, label: "App settings" },
  { icon: LogOut, label: "Sign out" },
];

export default function ProfilePage() {
  return (
    <PhoneFrame title="Profile" showBack>
      <div className="space-y-5">
        <section className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/40 to-rose-500/30 text-lg font-bold">
            JP
          </div>
          <div>
            <p className="text-base font-semibold">{memberSummary.name} Pereira</p>
            <p className="text-xs text-muted-foreground">Member since Aug 2024</p>
            <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
              <Zap className="h-2.5 w-2.5" /> Pulse Pro
            </p>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-2 text-center">
          <Tile label="Workouts" value={`${memberSummary.totalWorkouts}`} />
          <Tile label="Streak" value={`${memberSummary.streak}d`} />
          <Tile label="PRs / mo" value={`${memberSummary.prsThisMonth}`} />
        </section>

        <section className="rounded-2xl border border-border bg-card p-4">
          <p className="inline-flex items-center gap-1 text-xs font-semibold">
            <Trophy className="h-3.5 w-3.5 text-amber-300" /> Achievements
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {["🏋️", "🔥", "💪", "🎯", "🏃", "⚡", "🧘", "🥇"].map((emo, i) => (
              <div
                key={i}
                className={
                  "flex aspect-square items-center justify-center rounded-xl border border-border bg-muted/30 text-2xl " +
                  (i > 4 ? "opacity-30" : "")
                }
              >
                {emo}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card">
          {settings.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={s.label}
                className={
                  "flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-muted/20 " +
                  (i < settings.length - 1 ? "border-b border-border/40" : "")
                }
              >
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="flex-1">{s.label}</span>
                <span className="text-muted-foreground">›</span>
              </button>
            );
          })}
        </section>
      </div>
    </PhoneFrame>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-2.5">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}
