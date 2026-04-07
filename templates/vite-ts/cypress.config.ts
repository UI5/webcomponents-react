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
  allowCypressEnv: false,
});
