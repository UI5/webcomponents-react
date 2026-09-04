import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
// `@preact/preset-vite` automatically aliases `react`/`react-dom` to `preact/compat`,
// which is what lets the React-based `@ui5/webcomponents-react` run on top of Preact.
export default defineConfig({
  plugins: [preact()],
});
