"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { formatCount, timeAgo } from "@/lib/utils";
import { getUser } from "@/lib/mock-data";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  const author = getUser(post.username);
  const [liked, setLiked] = useState(!!post.liked);
  const [likes, setLikes] = useState(post.likes);

  if (!author) return null;

  function toggleLike(e: React.MouseEvent) {
    e.preventDefault();
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
  }

  return (
    <article className="border-b border-border/60 px-5 py-4 transition hover:bg-muted/20">
      <div className="flex gap-3">
        <Link href={`/profile/${author.username}`}>
          <Avatar initials={author.initials} accent={author.accent} />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-sm">
            <Link
              href={`/profile/${author.username}`}
              className="font-semibold hover:underline truncate"
            >
              {author.name}
            </Link>
            <span className="text-muted-foreground">@{author.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{timeAgo(post.createdAt)}</span>
          </div>

          <p className="mt-1 text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>

          {post.imageAccent && (
            <div
              className={
                "mt-3 aspect-video rounded-xl border border-border/60 bg-gradient-to-br " +
                post.imageAccent
              }
              aria-hidden="true"
            />
          )}

          <div className="mt-3 flex items-center gap-6 text-xs text-muted-foreground">
            <button className="inline-flex items-center gap-1.5 hover:text-foreground transition">
              <MessageCircle className="h-4 w-4" /> {formatCount(post.comments)}
            </button>
            <button className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition">
              <Repeat2 className="h-4 w-4" /> {formatCount(post.reposts)}
            </button>
            <button
              onClick={toggleLike}
              className={
                "inline-flex items-center gap-1.5 transition " +
                (liked ? "text-rose-400" : "hover:text-rose-400")
              }
            >
              <Heart className={"h-4 w-4 " + (liked ? "fill-current" : "")} />
              {formatCount(likes)}
            </button>
            <button className="inline-flex items-center gap-1.5 hover:text-foreground transition">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
