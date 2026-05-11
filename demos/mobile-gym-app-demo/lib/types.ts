export type WorkoutCategory = "Strength" | "Cardio" | "HIIT" | "Mobility" | "Recovery";

export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  rest: string;
};

export type Workout = {
  slug: string;
  title: string;
  category: WorkoutCategory;
  focus: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  calories: number;
  accent: string;
  description: string;
  exercises: Exercise[];
};

export type ActivityEntry = {
  date: string;
  workoutSlug: string;
  workoutTitle: string;
  minutes: number;
  calories: number;
};
