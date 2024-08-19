import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  plugins: [react()],
});
