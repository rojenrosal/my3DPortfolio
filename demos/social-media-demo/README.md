# Connectly - Social Media Demo

A working replica of a social media platform - a live feed, profiles, comments, likes, and direct messages. Interactive UI with a working composer, like toggles, and a real message thread.

All people, posts, and messages are fictional mock data.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui primitives.

## Pages

| Route                    | Description                                |
| ------------------------ | ------------------------------------------ |
| `/`                      | Home feed - composer + post list           |
| `/explore`               | Trending tags, suggested users, top posts  |
| `/profile/[username]`    | User profile with banner, bio, posts       |
| `/messages`              | Two-pane DMs with live thread composer     |

Run with `npm install && npm run dev`.

## License

MIT.
