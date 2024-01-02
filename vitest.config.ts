
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
		dir: './src',
    coverage: {
      exclude: ['**/node_modules/**', '**/.next/**', '**/*.d.ts', '*.config.js', '*.config.ts', "**/env.mjs", "**/config/*.ts", "**/index.ts"],
      reporter: ['lcov', 'text'],
    },
  },
})