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
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  component: {
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
  },

  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  allowCypressEnv: false,
});
