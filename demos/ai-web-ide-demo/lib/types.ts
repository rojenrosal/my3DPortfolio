export type Language = "ts" | "tsx" | "py" | "go" | "rs" | "md" | "json" | "css";

export type WorkspaceFile = {
  path: string;
  language: Language;
  content: string;
};

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  tokens?: number;
};

export type ProjectRun = {
  id: string;
  status: "running" | "success" | "failed";
  branch: string;
  prompt: string;
  startedAt: string;
  duration?: string;
  diffLines: number;
};

export type IdeProject = {
  id: string;
  name: string;
  description: string;
  framework: "Next.js" | "Astro" | "SvelteKit" | "Remix" | "Vite";
  visibility: "private" | "team" | "public";
  collaborators: number;
  lastActivity: string;
  runs: number;
};
