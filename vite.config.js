import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  logLevel: "info",
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  root: "src",
  build: {
    minify: true,
    outDir: "../dist",
  },
  plugins: [tsconfigPaths()],
});
