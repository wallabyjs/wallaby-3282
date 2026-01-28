import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    projects: [
      './vitest.unit.config.ts',
      './vitest.browser.config.ts',
    ]
  },
  resolve: {
    alias: {
      "db/mock": path.resolve(__dirname, "./src/db/mock.ts"),
    },
  },
})