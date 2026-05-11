import type { Comment, Conversation, Post, User } from "./types";

export const me: User = {
  username: "jordan.p",
  name: "Jordan Pereira",
  bio: "Building things on the web. Coffee at 6am.",
  initials: "JP",
  accent: "from-rose-500/30 to-rose-400/10",
  followers: 1284,
  following: 412,
  posts: 96,
};

export const users: User[] = [
  me,
  {
    username: "anya.o",
    name: "Anya Olsen",
    bio: "Designer, runner, dog mum.",
    initials: "AO",
    accent: "from-violet-500/30 to-violet-400/10",
    followers: 5612,
    following: 218,
    posts: 312,
  },
  {
    username: "mateo.d",
    name: "Mateo Diaz",
    bio: "Type nerd. Sometimes I cook.",
    initials: "MD",
    accent: "from-amber-500/30 to-amber-400/10",
    followers: 842,
    following: 391,
    posts: 71,
  },
  {
    username: "ren.k",
    name: "Ren Kobayashi",
    bio: "Photos from the road.",
    initials: "RK",
    accent: "from-emerald-500/30 to-emerald-400/10",
    followers: 18920,
    following: 124,
    posts: 488,
  },
  {
    username: "hana.o",
    name: "Hana Oduya",
    bio: "Climbing, music, occasional code.",
    initials: "HO",
    accent: "from-cyan-500/30 to-cyan-400/10",
    followers: 2031,
    following: 274,
    posts: 132,
  },
  {
    username: "priya.s",
    name: "Priya Singh",
    bio: "PM at a healthcare startup. Trying to sleep.",
    initials: "PS",
    accent: "from-pink-500/30 to-pink-400/10",
    followers: 612,
    following: 487,
    posts: 24,
  },
];

export const posts: Post[] = [
  {
    id: "p-201",
    username: "anya.o",
    content:
      "First long run in the new shoes. Hill repeats are evil. Coffee earned.",
    imageAccent: "from-violet-500/40 to-fuchsia-500/30",
    createdAt: "2026-05-12T06:18:00Z",
    likes: 142,
    comments: 12,
    reposts: 4,
  },
  {
    id: "p-200",
    username: "ren.k",
    content:
      "Sunrise on the headland. No filter, just patience. The 4:30am wake-up paid off.",
    imageAccent: "from-amber-500/40 to-rose-500/30",
    createdAt: "2026-05-12T05:42:00Z",
    likes: 1820,
    comments: 64,
    reposts: 41,
  },
  {
    id: "p-199",
    username: "mateo.d",
    content:
      "Trying a new typeface for the redesign. Tighter tracking on the display weight makes a surprising difference.",
    createdAt: "2026-05-11T22:08:00Z",
    likes: 88,
    comments: 19,
    reposts: 2,
  },
  {
    id: "p-198",
    username: "hana.o",
    content:
      "Sent a 6a outside today. Three months of indoor training and the rock still humbles me.",
    imageAccent: "from-cyan-500/40 to-sky-500/30",
    createdAt: "2026-05-11T18:14:00Z",
    likes: 312,
    comments: 28,
    reposts: 7,
    liked: true,
  },
  {
    id: "p-197",
    username: "priya.s",
    content:
      "Two-stand-up days are the worst kind of days. Sending hugs to all PMs out there.",
    createdAt: "2026-05-11T10:02:00Z",
    likes: 41,
    comments: 8,
    reposts: 1,
  },
  {
    id: "p-196",
    username: "jordan.p",
    content:
      "Spent the morning rewriting our cart store with zustand. 200 lines of redux gone, behaviour identical. Worth it.",
    createdAt: "2026-05-11T09:30:00Z",
    likes: 76,
    comments: 14,
    reposts: 3,
  },
  {
    id: "p-195",
    username: "anya.o",
    content:
      "Friendly reminder that no design system survives first contact with a marketing landing page.",
    createdAt: "2026-05-10T20:11:00Z",
    likes: 522,
    comments: 47,
    reposts: 28,
  },
];

export const comments: Comment[] = [
  { id: "c-1", postId: "p-198", username: "mateo.d", content: "Massive! 6a outside is a different beast.", createdAt: "2026-05-11T18:32:00Z", likes: 8 },
  { id: "c-2", postId: "p-198", username: "ren.k", content: "Where was this?", createdAt: "2026-05-11T19:01:00Z", likes: 2 },
  { id: "c-3", postId: "p-198", username: "anya.o", content: "Proud of you 👏", createdAt: "2026-05-11T19:14:00Z", likes: 11 },
  { id: "c-4", postId: "p-198", username: "jordan.p", content: "Time to start training for 6b ?", createdAt: "2026-05-11T20:02:00Z", likes: 3 },
];

export const conversations: Conversation[] = [
  { id: "conv-1", username: "anya.o", lastMessage: "Coffee at 7 tomorrow before standup?", lastAt: "2026-05-12T05:55:00Z", unread: 2 },
  { id: "conv-2", username: "mateo.d", lastMessage: "Did you see the new figma update?", lastAt: "2026-05-11T22:14:00Z", unread: 0 },
  { id: "conv-3", username: "hana.o", lastMessage: "Pulling out of climbing tonight - knee tweak", lastAt: "2026-05-11T17:40:00Z", unread: 0 },
  { id: "conv-4", username: "priya.s", lastMessage: "Sharing that PRD now", lastAt: "2026-05-10T11:05:00Z", unread: 1 },
];

export const suggestedUsers = users.filter((u) => u.username !== me.username).slice(0, 4);

export const trending = [
  { tag: "#smallweb", posts: 12400 },
  { tag: "#sundayrun", posts: 8120 },
  { tag: "#designsystems", posts: 6320 },
  { tag: "#sourdough", posts: 4290 },
  { tag: "#frontend", posts: 3942 },
];

export function getUser(username: string) {
  return users.find((u) => u.username === username);
}

export function postsByUser(username: string) {
  return posts.filter((p) => p.username === username);
}

export function commentsForPost(postId: string) {
  return comments.filter((c) => c.postId === postId);
}
