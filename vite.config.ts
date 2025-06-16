import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs/promises';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/kurwa123/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Plugin: Kopiowanie index.html do 404.html po buildzie (dla GitHub Pages SPA)
    {
      name: 'copy-404',
      closeBundle: async () => {
        const distDir = path.resolve(__dirname, 'dist');
        const indexFile = path.join(distDir, 'index.html');
        const notFoundFile = path.join(distDir, '404.html');
        try {
          await fs.copyFile(indexFile, notFoundFile);
        } catch (e) {
          // ignore if file doesn't exist
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
