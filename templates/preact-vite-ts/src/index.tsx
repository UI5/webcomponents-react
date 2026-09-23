import '@ui5/webcomponents-react/dist/Assets.js';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { render } from 'preact';
import { App } from './app.js';
import './index.css';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app') as HTMLElement,
);
