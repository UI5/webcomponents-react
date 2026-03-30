export default {
  extensions: {
    ts: 'module',
  },
  files: ['src/**/*.test.ts'],
  watchMode: {
    ignoreChanges: ['dist/**', 'node_modules/**'],
  },
  nodeArguments: ['--import=tsx'],
  workerThreads: false,
};
