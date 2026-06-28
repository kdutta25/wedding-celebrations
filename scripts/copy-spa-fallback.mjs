import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const index = join(dist, "index.html");
const fallback = join(dist, "404.html");

if (!existsSync(index)) {
  console.warn("dist/index.html not found — skipping SPA fallback copy.");
  process.exit(0);
}

cpSync(index, fallback);
console.log("Copied dist/index.html → dist/404.html for client-side routing.");
