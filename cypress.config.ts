import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

//todo: remove once officially supported by Cypress: https://github.com/cypress-io/cypress/issues/33078
const stripLegacyCypressOptimizeDepsPlugin = () => ({
  name: 'cypress-vite8-compat',
  config(config) {
    if (config?.optimizeDeps?.esbuildOptions) {
      delete config.optimizeDeps.esbuildOptions;
    }
  },
});

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: [
        'cypress/**',
        '**/src/interfaces/*',
        '**/src/enums/*',
        '**/*.stories.tsx',
        '**/*.test.{ts,tsx}',
        '**/node_modules/**',
        '**/dist/**',
        'packages/*/src/index.ts',
        'packages/main/src/components/AnalyticalTable/types/*',
        'packages/main/src/webComponents/**',
        'packages/charts/src/resources/**',
      ],
    },
  },
  component: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        // passing `viteConfig` as an object makes Cypress set `configFile: false` internally
        configFile: 'vite.config.ts',
        // plugins from both configs are merged by Vite's `mergeConfig`
        plugins: [stripLegacyCypressOptimizeDepsPlugin()],
      },
    },
    experimentalRunAllSpecs: true,
    excludeSpecPattern: ['**/e2e/**', ...(process.env.CI ? ['**/SelectDialog/**'] : [])],
  },
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  screenshotOnRunFailure: false,
  scrollBehavior: false,
  allowCypressEnv: false,
});
