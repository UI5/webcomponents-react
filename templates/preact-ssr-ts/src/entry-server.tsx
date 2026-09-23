import { App } from './app.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { renderToString } from 'preact-render-to-string';

// Executed in Node (via `vite.ssrLoadModule` in dev, or the prebuilt server bundle in
// production). Vite resolves the `node` export condition here, so UI5's SSR DOM shim and
// the Node build of `lit-html` are used — no `HTMLElement`/`window is not defined` errors.
export function render() {
  // The `data-ui5-config` theme in index.html is only parsed in the browser, so the server
  // must set the same theme here to keep server and client markup in sync. Keep this value
  // aligned with the `theme` in index.html.
  void setTheme('sap_horizon_auto');

  const html = renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
  return { html };
}
