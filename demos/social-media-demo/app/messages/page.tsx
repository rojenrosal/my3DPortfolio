"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { conversations, getUser } from "@/lib/mock-data";
import { timeAgo } from "@/lib/utils";

const seed = [
  { from: "me", body: "Hey - coffee tomorrow?" },
  { from: "them", body: "Yeah, 7am at the usual?" },
  { from: "me", body: "Perfect. Bring the new figma." },
  { from: "them", body: "Coffee at 7 tomorrow before standup?" },
];

export default function MessagesPage() {
  const [active, setActive] = useState(conversations[0].id);
  const [draft, setDraft] = useState("");
  const [thread, setThread] = useState(seed);

  const conv = conversations.find((c) => c.id === active)!;
  const partner = getUser(conv.username);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    setThread((t) => [...t, { from: "me", body: draft.trim() }]);
    setDraft("");
  }

  return (
    <div className="flex h-[calc(100vh-56px)] lg:h-screen">
      <aside className="w-72 shrink-0 border-r border-border/60">
        <header className="px-5 py-3 border-b border-border/60">
          <h1 className="text-lg font-semibold">Messages</h1>
        </header>
        <ul>
          {conversations.map((c) => {
            const u = getUser(c.username);
            if (!u) return null;
            return (
              <li key={c.id}>
                <button
                  onClick={() => setActive(c.id)}
                  className={
                    "flex w-full items-start gap-3 border-b border-border/40 px-4 py-3 text-left transition " +
                    (active === c.id
                      ? "bg-muted/40"
                      : "hover:bg-muted/30")
                  }
                >
                  <Avatar initials={u.initials} accent={u.accent} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{u.name}</p>
                      <span className="text-[11px] text-muted-foreground">
                        {timeAgo(c.lastAt)}
                      </span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {c.lastMessage}
                    </p>
                  </div>
                  {c.unread > 0 && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      {c.unread}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <section className="flex flex-1 flex-col min-w-0">
        <header className="flex items-center gap-3 border-b border-border/60 px-5 py-3">
          {partner && (
            <>
              <Avatar initials={partner.initials} accent={partner.accent} size="sm" />
              <div>
                <p className="text-sm font-medium">{partner.name}</p>
                <p className="text-xs text-muted-foreground">@{partner.username}</p>
              </div>
            </>
          )}
        </header>

        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {thread.map((m, i) => (
            <div
              key={i}
              className={
                "max-w-[80%] rounded-2xl px-3 py-2 text-sm " +
                (m.from === "me"
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted/60")
              }
            >
              {m.body}
            </div>
          ))}
        </div>

        <form
          onSubmit={send}
          className="flex items-center gap-2 border-t border-border/60 p-3"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button size="icon" type="submit" aria-label="Send">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </section>
    </div>
  );
}
