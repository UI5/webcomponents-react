import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  testDir: '.',
  testMatch: ['**/packages/main/src/components/**/test/*.spec.tsx', '**/playwright/test/*.spec.tsx'],
  testIgnore: ['**/*.cy.tsx', '**/*.cy.ts', '**/*.stories.tsx', '**/*.mdx'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctViteConfig: {
      plugins: [
        react(),
        tsconfigPaths({
          projects: [fileURLToPath(new URL('tsconfig.base.json', import.meta.url))],
        }),
      ],
      optimizeDeps: {
        esbuildOptions: {
          target: 'esnext',
        },
        exclude: ['**/*.cy.tsx', '**/*.cy.ts', '**/*.stories.tsx'],
      },
      build: {
        target: 'esnext',
        rollupOptions: {
          external: [/\.cy\.tsx$/, /\.cy\.ts$/, /\.stories\.tsx$/],
        },
      },
    },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
