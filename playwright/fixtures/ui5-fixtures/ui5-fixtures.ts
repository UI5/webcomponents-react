import { test as base, expect } from '@playwright/experimental-ct-react';
import { UI5WCHelpers } from './UI5WCHelpers.js';

export interface UI5WCFixtures {
  ui5wc: UI5WCHelpers;
}

export const test = base.extend<UI5WCFixtures>({
  ui5wc: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new UI5WCHelpers(page));
  },
});

export { expect, UI5WCHelpers };
