import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Flame, Play, Zap } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";
import { getWorkout, workouts } from "@/lib/mock-data";
import { formatMinutes } from "@/lib/utils";

export function generateStaticParams() {
  return workouts.map((w) => ({ slug: w.slug }));
}

export default function WorkoutDetailPage({ params }: { params: { slug: string } }) {
  const workout = getWorkout(params.slug);
  if (!workout) notFound();

  return (
    <PhoneFrame title={workout.title} showBack>
      <div className="space-y-5">
        <div
          className={"h-40 rounded-2xl bg-gradient-to-br " + workout.accent}
          aria-hidden="true"
        />

        <section>
          <p className="text-xs text-primary font-medium">{workout.category}</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            {workout.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{workout.focus}</p>
        </section>

        <section className="grid grid-cols-3 gap-2">
          <Stat icon={<Clock className="h-3 w-3" />} label="Duration" value={formatMinutes(workout.duration)} />
          <Stat icon={<Flame className="h-3 w-3" />} label="Calories" value={`${workout.calories}`} />
          <Stat icon={<Zap className="h-3 w-3" />} label="Level" value={workout.level} />
        </section>

        <section>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {workout.description}
          </p>
        </section>

        <section>
          <p className="text-sm font-semibold">Exercises</p>
          <div className="mt-2 space-y-2">
            {workout.exercises.map((ex, i) => (
              <div
                key={ex.name}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-tight">{ex.name}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {ex.sets > 1 ? `${ex.sets} sets · ` : ""}
                    {ex.reps}
                    {ex.rest !== "-" ? ` · rest ${ex.rest}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/app/"
          className="flex items-center justify-center gap-1.5 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground"
        >
          <Play className="h-4 w-4 fill-current" /> Start workout
        </Link>
      </div>
    </PhoneFrame>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-2.5 text-center">
      <p className="inline-flex items-center justify-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
