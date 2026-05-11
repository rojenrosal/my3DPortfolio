export type User = {
  username: string;
  name: string;
  bio: string;
  initials: string;
  accent: string;
  followers: number;
  following: number;
  posts: number;
};

export type Post = {
  id: string;
  username: string;
  content: string;
  imageAccent?: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  liked?: boolean;
};

export type Comment = {
  id: string;
  postId: string;
  username: string;
  content: string;
  createdAt: string;
  likes: number;
};

export type Conversation = {
  id: string;
  username: string;
  lastMessage: string;
  lastAt: string;
  unread: number;
};
