import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
// `@preact/preset-vite` aliases `react`/`react-dom` to `preact/compat`, which lets the
// React-based `@ui5/webcomponents-react` run on Preact. During the SSR build/render, Vite
// resolves the `node` export condition, so `@ui5/webcomponents-base`'s SSR DOM shim and
// the Node build of `lit-html` are used instead of their browser variants.
//
// `ssr.noExternal` bundles the dependencies into the server build so the `preact/compat`
// alias is applied to them. Without this, externalized packages would be resolved by Node
// at runtime against the real `react`, whose hooks crash under `preact-render-to-string`.
export default defineConfig({
  plugins: [preact()],
  ssr: {
    noExternal: true,
  },
});
