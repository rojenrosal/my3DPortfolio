import Link from "next/link";
import { Avatar } from "@/components/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { posts, suggestedUsers, trending } from "@/lib/mock-data";
import { formatCount } from "@/lib/utils";

export default function ExplorePage() {
  return (
    <div>
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 px-5 py-3 backdrop-blur">
        <h1 className="text-lg font-semibold">Explore</h1>
      </header>

      <section className="px-5 py-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trending
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {trending.map((t) => (
            <Card key={t.tag}>
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-semibold">{t.tag}</span>
                <span className="text-xs text-muted-foreground">
                  {formatCount(t.posts)} posts
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 px-5 py-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          People you might know
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {suggestedUsers.map((u) => (
            <Link key={u.username} href={`/profile/${u.username}`}>
              <Card className="transition hover:border-primary/40">
                <CardContent className="flex items-center gap-3 p-4">
                  <Avatar initials={u.initials} accent={u.accent} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{u.name}</p>
                    <p className="truncate text-xs text-muted-foreground">@{u.username}</p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {u.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 px-5 py-6 space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Top posts this week
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {posts
            .slice()
            .sort((a, b) => b.likes - a.likes)
            .slice(0, 4)
            .map((p) => (
              <Card key={p.id}>
                <CardContent className="p-4 space-y-2 text-sm">
                  <p className="text-muted-foreground text-xs">@{p.username}</p>
                  <p className="line-clamp-3">{p.content}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatCount(p.likes)} likes · {formatCount(p.comments)} comments
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
