// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: "./postcss.config.js",
//   },
//   publicDir: "public",
//   root: ".",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./",
  publicDir: "public",
  base: "/assessment/",
  server: {
    open: true,
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
