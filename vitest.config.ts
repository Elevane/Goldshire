import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./app/test/setup.ts",
    include: ["app/**/*.test.{ts,tsx}"],
    exclude: ['end-to-end/**'],
    coverage: {
      provider: 'v8'
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
})
