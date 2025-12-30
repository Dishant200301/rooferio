import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

// Helper to extract slugs using regex to avoid import issues with TS/Assets
const extractSlugs = (filePath: string, pattern: RegExp) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, "utf-8");
    const matches = [...content.matchAll(pattern)];
    return matches.map((m) => m[1]);
  } catch (e) {
    console.warn(`Failed to extract slugs from ${filePath}`, e);
    return [];
  }
};

// Extract dynamic routes
const blogSlugs = extractSlugs(
  path.resolve(__dirname, "./src/data/blogs.ts"),
  /slug:\s*"([^"]+)"/g
);
const projectSlugs = extractSlugs(
  path.resolve(__dirname, "./src/data/projectDetails.ts"),
  /slug:\s*"([^"]+)"/g
);
const serviceHrefs = extractSlugs(
  path.resolve(__dirname, "./src/data/services.ts"),
  /href:\s*"([^"]+)"/g
);

// Define all public routes for Prerendering and Sitemap
const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/blogs",
  "/contact",
  ...blogSlugs.map((slug) => `/blogs/${slug}`),
  ...projectSlugs.map((slug) => `/projects/${slug}`),
  ...serviceHrefs, // Already includes full paths like /services/roof-installation
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname: "https://roofaria.com",
      dynamicRoutes: routes,
      generateRobotsTxt: false,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
