#!/usr/bin/env node
import { execSync } from "node:child_process";
import { existsSync, rmSync, mkdirSync, cpSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");
const demosDir = join(root, "demos");
const publicDemosDir = join(root, "public", "demos");

const demos = [
  "cashback-rewards-demo",
  "construction-pm-demo",
  "insurance-calculator-demo",
  "ai-web-ide-demo",
  "job-board-demo",
  "social-media-demo",
  "mobile-gym-app-demo",
];

function run(cmd, cwd, env = {}) {
  execSync(cmd, {
    cwd,
    stdio: "inherit",
    env: { ...process.env, ...env },
  });
}

mkdirSync(publicDemosDir, { recursive: true });

for (const demo of demos) {
  const demoPath = join(demosDir, demo);
  if (!existsSync(demoPath)) {
    console.warn(`Skipping ${demo} — folder not found at ${demoPath}`);
    continue;
  }

  console.log(`\n→ Building ${demo}`);
  const basePath = `/demos/${demo}`;

  if (!existsSync(join(demoPath, "node_modules"))) {
    run("npm install --no-audit --no-fund", demoPath);
  }

  run("npm run build", demoPath, {
    NEXT_PUBLIC_BASE_PATH: basePath,
  });

  const outPath = join(demoPath, "out");
  if (!existsSync(outPath)) {
    throw new Error(`Build did not produce out/ for ${demo}`);
  }

  const dest = join(publicDemosDir, demo);
  rmSync(dest, { recursive: true, force: true });
  mkdirSync(dest, { recursive: true });
  cpSync(outPath, dest, { recursive: true });
  console.log(`✓ ${demo} → public/demos/${demo}/`);
}

console.log("\n✓ All demos built into public/demos/");
