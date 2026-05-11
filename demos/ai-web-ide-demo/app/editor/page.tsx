"use client";

import { useState } from "react";
import {
  ChevronRight,
  File,
  FileText,
  FolderOpen,
  Play,
  Send,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { chatMessages, sampleFiles } from "@/lib/mock-data";
import type { ChatMessage } from "@/lib/types";

export default function EditorPage() {
  const [activePath, setActivePath] = useState(sampleFiles[0].path);
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [draft, setDraft] = useState("");

  const file = sampleFiles.find((f) => f.path === activePath)!;

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    const userMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      role: "user",
      content: draft.trim(),
    };
    const assistantMsg: ChatMessage = {
      id: `m-${Date.now() + 1}`,
      role: "assistant",
      tokens: 256,
      content:
        "(demo) Opened branch `ai/your-prompt`, scanned 4 files, and prepared a 3-file diff. Review in the runs panel.",
    };
    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setDraft("");
  }

  return (
    <div className="container py-6 space-y-4">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="muted">
            <Sparkles className="mr-1.5 h-3 w-3" /> Workspace
          </Badge>
          <span className="font-mono text-muted-foreground">checkout-redesign</span>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
          <span className="font-mono">{file.path}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <Play className="mr-1 h-3.5 w-3.5" /> Run
          </Button>
          <Button size="sm">Deploy preview</Button>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[200px_1fr_340px] min-h-[60vh]">
        <aside className="rounded-xl border border-border bg-card p-3 text-sm">
          <p className="px-1 py-1 text-xs uppercase tracking-wider text-muted-foreground">
            Files
          </p>
          <p className="mt-2 flex items-center gap-1 text-foreground/90 font-medium">
            <FolderOpen className="h-3.5 w-3.5 text-primary" /> checkout-redesign
          </p>
          <ul className="mt-1 space-y-0.5 pl-4">
            {sampleFiles.map((f) => {
              const active = f.path === activePath;
              const Icon = f.language === "md" ? FileText : File;
              return (
                <li key={f.path}>
                  <button
                    onClick={() => setActivePath(f.path)}
                    className={
                      "flex w-full items-center gap-1.5 rounded px-2 py-1 text-left text-xs transition " +
                      (active
                        ? "bg-primary/15 text-primary"
                        : "text-muted-foreground hover:text-foreground")
                    }
                  >
                    <Icon className="h-3 w-3 shrink-0" />
                    <span className="truncate font-mono">{f.path}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border/60 bg-muted/30 px-3 py-2 text-xs text-muted-foreground flex items-center justify-between">
            <span className="font-mono">{file.path}</span>
            <span className="font-mono uppercase tracking-wider">{file.language}</span>
          </div>
          <pre className="flex-1 overflow-auto p-4 text-[12px] leading-relaxed font-mono whitespace-pre">
            {file.content}
          </pre>
          <div className="border-t border-border/60 bg-muted/20 px-3 py-2 text-xs text-muted-foreground flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono">
              ✓ dev server running on http://localhost:3000
            </span>
          </div>
        </section>

        <aside className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border/60 bg-muted/30 px-3 py-2 flex items-center gap-2 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium">AI chat</span>
            <Badge variant="accent" className="ml-auto">claude-sonnet</Badge>
          </div>

          <div className="flex-1 overflow-auto p-3 space-y-3 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  "rounded-lg p-3 " +
                  (m.role === "user"
                    ? "bg-muted/40"
                    : "bg-primary/10 border border-primary/20")
                }
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                  {m.role}
                  {m.tokens && ` · ${m.tokens} tokens`}
                </p>
                <p className="text-foreground/90 whitespace-pre-line">
                  {m.content}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={send}
            className="border-t border-border/60 p-3 flex items-center gap-2"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask the AI to change something…"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button size="icon" type="submit" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </aside>
      </div>
    </div>
  );
}
