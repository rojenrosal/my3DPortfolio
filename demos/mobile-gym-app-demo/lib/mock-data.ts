import type { ActivityEntry, Workout } from "./types";

export const workouts: Workout[] = [
  {
    slug: "morning-mobility",
    title: "Morning Mobility",
    category: "Mobility",
    focus: "Hips & shoulders",
    duration: 15,
    level: "Beginner",
    calories: 75,
    accent: "from-sky-400/40 to-cyan-400/30",
    description:
      "A gentle 15-minute flow to wake the joints and prime you for the day.",
    exercises: [
      { name: "Cat-Cow", sets: 1, reps: "10 reps", rest: "-" },
      { name: "World's Greatest Stretch", sets: 1, reps: "5 each side", rest: "-" },
      { name: "Hip Circles", sets: 1, reps: "12 each", rest: "-" },
      { name: "T-Spine Rotation", sets: 1, reps: "10 each side", rest: "-" },
      { name: "Standing Toe Touch Flow", sets: 1, reps: "8 reps", rest: "-" },
    ],
  },
  {
    slug: "full-body-strength",
    title: "Full Body Strength",
    category: "Strength",
    focus: "Compound lifts",
    duration: 50,
    level: "Intermediate",
    calories: 410,
    accent: "from-orange-500/40 to-rose-500/30",
    description:
      "Push, pull, hinge, squat. The classic four-pattern session - efficient and effective.",
    exercises: [
      { name: "Goblet Squat", sets: 4, reps: "8", rest: "90s" },
      { name: "Romanian Deadlift", sets: 4, reps: "8", rest: "90s" },
      { name: "Dumbbell Bench Press", sets: 4, reps: "10", rest: "75s" },
      { name: "One-Arm Row", sets: 4, reps: "10 each", rest: "75s" },
      { name: "Plank", sets: 3, reps: "45s", rest: "45s" },
    ],
  },
  {
    slug: "hiit-30",
    title: "HIIT 30",
    category: "HIIT",
    focus: "Conditioning",
    duration: 30,
    level: "Advanced",
    calories: 380,
    accent: "from-amber-500/40 to-yellow-400/30",
    description:
      "30 minutes, 6 rounds, 5 movements. Heart rate up, mind sharp.",
    exercises: [
      { name: "Burpees", sets: 6, reps: "30s on / 15s off", rest: "-" },
      { name: "Air Squat", sets: 6, reps: "30s on / 15s off", rest: "-" },
      { name: "Mountain Climbers", sets: 6, reps: "30s on / 15s off", rest: "-" },
      { name: "Push-ups", sets: 6, reps: "30s on / 15s off", rest: "-" },
      { name: "Plank Shoulder Taps", sets: 6, reps: "30s on / 15s off", rest: "-" },
    ],
  },
  {
    slug: "easy-run",
    title: "Easy Run",
    category: "Cardio",
    focus: "Zone 2",
    duration: 45,
    level: "Beginner",
    calories: 420,
    accent: "from-emerald-500/40 to-lime-400/30",
    description:
      "45 conversational minutes. Aerobic base - the most underrated training stimulus.",
    exercises: [
      { name: "Walk warm-up", sets: 1, reps: "5 min", rest: "-" },
      { name: "Run @ Zone 2", sets: 1, reps: "35 min", rest: "-" },
      { name: "Cool down walk", sets: 1, reps: "5 min", rest: "-" },
    ],
  },
  {
    slug: "upper-body-pump",
    title: "Upper Body Pump",
    category: "Strength",
    focus: "Hypertrophy",
    duration: 40,
    level: "Intermediate",
    calories: 320,
    accent: "from-fuchsia-500/40 to-pink-500/30",
    description:
      "Higher rep ranges, shorter rest. Chase the pump.",
    exercises: [
      { name: "Incline DB Press", sets: 4, reps: "12", rest: "60s" },
      { name: "Cable Row", sets: 4, reps: "12", rest: "60s" },
      { name: "Lateral Raises", sets: 3, reps: "15", rest: "45s" },
      { name: "EZ Bar Curl", sets: 3, reps: "12", rest: "45s" },
      { name: "Triceps Pushdown", sets: 3, reps: "15", rest: "45s" },
    ],
  },
  {
    slug: "core-finisher",
    title: "Core Finisher",
    category: "Strength",
    focus: "Core",
    duration: 12,
    level: "Beginner",
    calories: 90,
    accent: "from-violet-500/40 to-indigo-500/30",
    description:
      "A short, sharp core circuit. Add at the end of any session.",
    exercises: [
      { name: "Hollow Hold", sets: 3, reps: "30s", rest: "30s" },
      { name: "Dead Bug", sets: 3, reps: "10 each", rest: "30s" },
      { name: "Side Plank", sets: 3, reps: "30s each", rest: "30s" },
    ],
  },
  {
    slug: "recovery-flow",
    title: "Recovery Flow",
    category: "Recovery",
    focus: "Stretch & breath",
    duration: 20,
    level: "Beginner",
    calories: 60,
    accent: "from-teal-500/40 to-cyan-500/30",
    description:
      "Static stretching with breath work. Use the day after a heavy session.",
    exercises: [
      { name: "Pigeon Pose", sets: 1, reps: "60s each side", rest: "-" },
      { name: "Couch Stretch", sets: 1, reps: "60s each side", rest: "-" },
      { name: "Child's Pose", sets: 1, reps: "60s", rest: "-" },
      { name: "Box Breathing", sets: 1, reps: "5 min", rest: "-" },
    ],
  },
];

export const recentActivity: ActivityEntry[] = [
  { date: "2026-05-11", workoutSlug: "full-body-strength", workoutTitle: "Full Body Strength", minutes: 52, calories: 426 },
  { date: "2026-05-10", workoutSlug: "easy-run", workoutTitle: "Easy Run", minutes: 47, calories: 438 },
  { date: "2026-05-09", workoutSlug: "core-finisher", workoutTitle: "Core Finisher", minutes: 14, calories: 96 },
  { date: "2026-05-08", workoutSlug: "hiit-30", workoutTitle: "HIIT 30", minutes: 30, calories: 388 },
  { date: "2026-05-07", workoutSlug: "morning-mobility", workoutTitle: "Morning Mobility", minutes: 15, calories: 72 },
  { date: "2026-05-06", workoutSlug: "upper-body-pump", workoutTitle: "Upper Body Pump", minutes: 41, calories: 312 },
];

export const memberSummary = {
  name: "Jordan",
  weeklyGoalMinutes: 240,
  weeklyMinutes: 199,
  streak: 6,
  totalWorkouts: 142,
  prsThisMonth: 3,
  bodyweightKg: 78.4,
  bodyweightDelta: -0.6,
};

export function getWorkout(slug: string) {
  return workouts.find((w) => w.slug === slug);
}

export const todaysWorkout = workouts[1];
