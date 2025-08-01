// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ["framer-motion"],
//   },
//   resolve: {
//     alias: {
//       "framer-motion": "framer-motion/dist/framer-motion",
//     },
//   },
// });

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
