import { defineConfig } from "vitest/config"
import path from "path"
import { playwright } from '@vitest/browser-playwright'
// import react from '@vitejs/plugin-react'

export default defineConfig({
  // plugins: [react()],
  test: {
    projects: [
      {
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
      },
      {
        test: {
          globals: true,
          // an example of file based convention,
          // you don't have to follow it
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
      },
    ]
  },
  resolve: {
    alias: {
      "db/mock": path.resolve(__dirname, "./src/db/mock.ts"),
    },
  },
})