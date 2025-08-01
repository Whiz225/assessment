import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/assessment/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  server: {
    open: true,
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
