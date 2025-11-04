// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: [["babel-plugin-react-compiler"]],
//       },
//     }),
//   ],
//   build: {
//     outDir: "../MichiganPythonSite/static/dist", // adjust path to Django static folder
//     emptyOutDir: true,
//     rollupOptions: {
//       // Remove input pointing to frontend/index.html
//       output: {
//         entryFileNames: "assets/[name]-[hash].js",
//         chunkFileNames: "assets/[name]-[hash].js",
//         assetFileNames: "assets/[name]-[hash].[ext]",
//       },
//     },
//   },
//   server: {
//     port: 5173,
//     strictPort: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/static/", // <-- this is key
  build: {
    outDir: path.resolve(__dirname, "../frontend_build"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
