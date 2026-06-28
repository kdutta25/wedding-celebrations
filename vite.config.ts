import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (
    env.VITE_SITE_URL ?? "https://kdutta25.github.io/wedding-celebrations"
  ).replace(/\/$/, "");
  const base =
    env.VITE_BASE_PATH ??
    (mode === "production" ? "/wedding-celebrations/" : "/");

  return {
    base,
    plugins: [
      react(),
      {
        name: "inject-site-meta",
        transformIndexHtml(html) {
          const ogImage = `${siteUrl}/og-preview.jpg`;
          return html
            .replaceAll("__SITE_URL__", siteUrl)
            .replaceAll("__OG_IMAGE__", ogImage);
        },
      },
    ],
  };
});
