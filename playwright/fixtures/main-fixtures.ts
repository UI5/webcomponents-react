/**
 * Test fixture for component tests with V8 coverage collection.
 * Use this for testing actual UI5 Web Components React components.
 */
import type { TestInfo } from '@playwright/test';
import { addCoverageReport } from 'monocart-reporter';
import { test as ctBase, expect } from './ui5-fixtures-internal';
import { UI5WCHelpers } from './ui5-fixtures';

export interface UI5WCComponentTestFixtures {
  autoTestFixture: string;
  ui5wc: UI5WCHelpers;
}

export const test = ctBase.extend<UI5WCComponentTestFixtures>({
  autoTestFixture: [
    async ({ page }, use: (arg: string) => Promise<void>, testInfo: TestInfo) => {
      const isChromium = testInfo.project.name === 'chromium';

      if (isChromium) {
        await page.coverage.startJSCoverage({ resetOnNavigation: false });
      }

      await use('autoTestFixture');

      if (isChromium) {
        const jsCoverage = await page.coverage.stopJSCoverage();
        await addCoverageReport(jsCoverage, testInfo);
      }
    },
    { scope: 'test', auto: true },
  ],
  ui5wc: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new UI5WCHelpers(page));
  },
});

export { expect };
