import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTagger from "vite-tagger";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      allowedHosts: true,
    },
    plugins: [
      react(),
      viteTagger({ prefixName: "wb" }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});