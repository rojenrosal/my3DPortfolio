import Link from "next/link";
import { Search } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { suggestedUsers, trending } from "@/lib/mock-data";
import { formatCount } from "@/lib/utils";

export function RightRail() {
  return (
    <aside className="sticky top-0 hidden h-screen w-80 shrink-0 flex-col gap-4 overflow-y-auto border-l border-border/60 px-4 py-5 xl:flex">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search Connectly" className="pl-10" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Trending</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {trending.map((t) => (
            <div key={t.tag} className="flex items-center justify-between">
              <span className="font-medium text-foreground/90">{t.tag}</span>
              <span className="text-xs text-muted-foreground">
                {formatCount(t.posts)} posts
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Who to follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestedUsers.map((u) => (
            <div key={u.username} className="flex items-center justify-between gap-3">
              <Link
                href={`/profile/${u.username}`}
                className="flex items-center gap-2 min-w-0"
              >
                <Avatar initials={u.initials} accent={u.accent} size="sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{u.name}</p>
                  <p className="truncate text-xs text-muted-foreground">@{u.username}</p>
                </div>
              </Link>
              <Button size="sm" variant="outline">Follow</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </aside>
  );
}
