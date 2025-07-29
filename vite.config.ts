import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import raw from "vite-plugin-raw";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    raw({
      match: /\.(md|txt)$/,
    }),
    [react()].filter(Boolean),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
