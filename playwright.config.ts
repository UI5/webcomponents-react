import { defineConfig, devices } from '@playwright/test';

const GALLERY_PORT = 9876;
const GALLERY_URL = `http://localhost:${GALLERY_PORT}/`;

export default defineConfig({
  testDir: '.',
  testMatch: [
    'packages/main/src/components/**/test/*.spec.tsx',
    'packages/charts/src/**/test/*.spec.tsx',
    'playwright/test/**/*.spec.tsx',
  ],
  testIgnore: ['**/*.cy.tsx', '**/*.cy.ts', '**/*.stories.tsx', '**/*.mdx'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? '100%' : undefined,
  reporter: process.env.CI ? [['list'], ['github']] : 'html',
  timeout: 10_000,
  expect: { timeout: 4000 },
  webServer: {
    command: `yarn vite --config playwright/gallery/vite.config.ts --port ${GALLERY_PORT} --strictPort`,
    url: GALLERY_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  use: {
    baseURL: GALLERY_URL,
    serviceWorkers: 'block',
    reuseContext: true,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
