import '@ui5/webcomponents-react/dist/Assets.js';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/require-await
beforeMount(async ({ App }) => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
