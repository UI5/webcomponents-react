import '@ui5/webcomponents-react/dist/Assets.js';
import { App } from './app.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { hydrate } from 'preact';
import './index.css';

hydrate(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app') as HTMLElement,
);
