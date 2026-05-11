import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Link2 } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/post-card";
import { getUser, postsByUser, users } from "@/lib/mock-data";
import { formatCount } from "@/lib/utils";

export function generateStaticParams() {
  return users.map((u) => ({ username: u.username }));
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = getUser(params.username);
  if (!user) notFound();
  const userPosts = postsByUser(user.username);

  return (
    <div>
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur">
        <Link
          href="/"
          className="rounded-full p-1.5 hover:bg-muted/40"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-lg font-semibold">{user.name}</h1>
          <p className="text-xs text-muted-foreground">
            {user.posts} posts
          </p>
        </div>
      </header>

      <div
        className="aspect-[3/1] bg-gradient-to-br border-b border-border/60"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(var(--primary) / 0.35), hsl(var(--accent) / 0.35))",
        }}
        aria-hidden="true"
      />

      <section className="-mt-12 px-5">
        <div className="flex items-end justify-between gap-3">
          <Avatar
            initials={user.initials}
            accent={user.accent}
            size="xl"
            className="ring-4 ring-background"
          />
          <Button variant="outline">Follow</Button>
        </div>
        <div className="mt-3 space-y-2">
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
          <p className="text-sm">{user.bio}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Link2 className="h-3 w-3" /> connectly.demo/{user.username}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3 w-3" /> Joined Mar 2024
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>
              <strong>{formatCount(user.following)}</strong>{" "}
              <span className="text-muted-foreground">Following</span>
            </span>
            <span>
              <strong>{formatCount(user.followers)}</strong>{" "}
              <span className="text-muted-foreground">Followers</span>
            </span>
          </div>
        </div>
      </section>

      <nav className="mt-6 border-b border-border/60 flex">
        {["Posts", "Replies", "Media", "Likes"].map((t, i) => (
          <button
            key={t}
            className={
              "flex-1 px-3 py-3 text-sm font-medium transition " +
              (i === 0
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {t}
          </button>
        ))}
      </nav>

      <section>
        {userPosts.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted-foreground">
            No posts yet.
          </div>
        ) : (
          userPosts.map((p) => <PostCard key={p.id} post={p} />)
        )}
      </section>
    </div>
  );
}
