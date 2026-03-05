import type { TestInfo } from '@playwright/test';
import { addCoverageReport } from 'monocart-reporter';
import { test as base, expect, UI5WCInternalHelpers } from './ui5-fixtures-internal';

export interface UI5WCComponentTestFixtures {
  autoTestFixture: string;
  ui5wc: UI5WCInternalHelpers;
}

export const test = base.extend<UI5WCComponentTestFixtures>({
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
    await use(new UI5WCInternalHelpers(page));
  },
});

export { expect };
