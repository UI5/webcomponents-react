import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';
import { generateMonorepoAliases } from './config/vite-monorepo-aliases.js';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    define: {
      'process.env.STORYBOOK_ENV': `'${process.env.STORYBOOK_ENV}'`,
    },
    resolve: {
      alias: [
        { find: '@sb', replacement: fileURLToPath(new URL('./.storybook', import.meta.url)) },
        ...generateMonorepoAliases(fileURLToPath(new URL('./packages', import.meta.url))),
        { find: '@/', replacement: fileURLToPath(new URL('./', import.meta.url)) },
      ],
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
    build: {
      target: 'esnext',
    },
    plugins: [
      react(),
      process.env.CYPRESS === 'true' &&
        IstanbulPlugin({
          cypress: true,
        }),
      tsconfigPaths({
        projects: [fileURLToPath(new URL('tsconfig.base.json', import.meta.url))],
      }),
    ].filter(Boolean),
  };
});
