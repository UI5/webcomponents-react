import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  testDir: '.',
  testMatch: [
    '**/packages/main/src/components/**/test/*.spec.tsx',
    '**/packages/charts/src/**/test/*.spec.tsx',
    '**/playwright/test/**/*.spec.tsx',
  ],
  testIgnore: ['**/*.cy.tsx', '**/*.cy.ts', '**/*.stories.tsx', '**/*.mdx'],
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? '100%' : undefined,
  // https://github.com/microsoft/playwright/issues/14511#issuecomment-1552589959
  reporter: process.env.CI
    ? [
        ['list'],
        ['github'],
        [
          'monocart-reporter',
          {
            name: 'Playwright Coverage Report',
            outputFile: 'temp/playwright-coverage/report.html',
            coverage: {
              sourceFilter: (sourcePath: string) => {
                const included =
                  sourcePath.includes('packages/main/src/components/SelectDialog') ||
                  sourcePath.includes('packages/main/src/components/Splitter') ||
                  (sourcePath.includes('packages/charts/src/') &&
                    !sourcePath.includes('packages/charts/src/resources/') &&
                    !sourcePath.includes('packages/charts/src/test-utils/') &&
                    !sourcePath.includes('packages/charts/src/interfaces/') &&
                    !sourcePath.includes('packages/charts/src/enums/'));
                return (
                  included &&
                  !sourcePath.includes('node_modules') &&
                  !sourcePath.includes('/dist/') &&
                  !sourcePath.includes('/test/') &&
                  !sourcePath.endsWith('.stories.tsx') &&
                  !sourcePath.endsWith('.module.css.ts') &&
                  !/packages\/[^/]+\/src\/index\.ts$/.test(sourcePath)
                );
              },
              reports: ['lcovonly'],
              outputDir: 'temp/playwright-coverage',
            },
          },
        ],
      ]
    : 'html',
  timeout: 10_000,
  expect: { timeout: 4000 },
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
