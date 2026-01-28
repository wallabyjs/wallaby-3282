import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    include: [
      'src/hooks/**/*.{test,spec}.tsx',
      'src/utils/**/*.{test,spec}.tsx',
    ],
    exclude: [
      'src/components/**/*.{test,spec}.tsx',
    ],
    name: 'unit',
    environment: 'node',
    globals: true,
  },
  resolve: {
    alias: {
      "db/mock": path.resolve(__dirname, "./src/db/mock.ts"),
    },
  },
})
