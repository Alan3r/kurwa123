import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Set base to root for custom domain deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Bezpieczne Randki',
        short_name: 'Randki',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#a21caf',
        description: 'Twoje Bezpieczne Randki - aplikacja PWA',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '48x48 64x64 96x96 128x128 256x256 512x512',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
