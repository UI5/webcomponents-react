import { ThemeProvider } from '@ui5/webcomponents-react/ThemeProvider';
import type { ReactNode } from 'react';

export function StoryWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
