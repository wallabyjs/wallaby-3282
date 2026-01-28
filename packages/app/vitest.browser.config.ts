import { defineConfig } from "vitest/config"
import path from "path"
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    globals: true,
    include: [
      'src/components/**/*.{test,spec}.tsx',
    ],
    exclude: [
      'src/hooks/**/*.{test,spec}.tsx',
      'src/utils/**/*.{test,spec}.tsx',
    ],
    name: 'browser',
    setupFiles: ['./src/test-setup.ts'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
      ],
    },
  },
  resolve: {
    alias: {
      "db/mock": path.resolve(__dirname, "./src/db/mock.ts"),
    },
  },
})
