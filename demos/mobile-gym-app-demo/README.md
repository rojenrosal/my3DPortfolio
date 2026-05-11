# Pulse - Mobile Gym App (Demo)

A demo replica of a mobile gym & workout tracking app, presented inside a phone-frame mockup on the web. **Not a real service.** All workouts, members, and activity are fictional.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui-style primitives.

## Routes

| Route                          | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `/`                            | Marketing landing with mini phone preview   |
| `/app/`                        | App home - today's workout, weekly goal     |
| `/app/workouts/`               | Searchable / filterable workout list        |
| `/app/workouts/[slug]/`        | Workout detail - exercises, sets, reps      |
| `/app/progress/`               | Charts, streak, activity log                |
| `/app/profile/`                | Profile, achievements, settings             |

The `/app/*` routes render inside a phone-frame component for the mobile-app preview effect.

Run with `npm install && npm run dev`.

## License

MIT.
