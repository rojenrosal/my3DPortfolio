"use client";

import { useState } from "react";
import { Image as ImageIcon, Smile, Sparkles } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { me, posts } from "@/lib/mock-data";

export default function FeedPage() {
  const [draft, setDraft] = useState("");

  return (
    <div>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur">
        <h1 className="text-lg font-semibold">Home</h1>
        <Sparkles className="h-4 w-4 text-primary" />
      </header>

      <section className="border-b border-border/60 px-5 py-4">
        <div className="flex gap-3">
          <Avatar initials={me.initials} accent={me.accent} />
          <div className="flex-1">
            <textarea
              rows={2}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none rounded-md bg-transparent text-base placeholder:text-muted-foreground focus:outline-none"
              maxLength={280}
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <button
                  className="rounded-full p-1.5 hover:bg-muted/40"
                  aria-label="Add image"
                >
                  <ImageIcon className="h-4 w-4" />
                </button>
                <button
                  className="rounded-full p-1.5 hover:bg-muted/40"
                  aria-label="Add emoji"
                >
                  <Smile className="h-4 w-4" />
                </button>
                <span className="text-[11px]">{draft.length}/280</span>
              </div>
              <Button size="sm" disabled={!draft.trim()}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </section>
    </div>
  );
}
