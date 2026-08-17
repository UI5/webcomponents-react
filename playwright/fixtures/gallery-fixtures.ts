import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { test as base, expect } from '@playwright/test';
import { UI5WCInternalHelpers } from './ui5-fixtures-internal.js';

// Gallery-model fixtures: `ui5wc` helpers + an auto `coverage` fixture that dumps Istanbul's `window.__coverage__` (present when served with `PW_COVERAGE=true`) for nyc.
const COVERAGE = process.env.PW_COVERAGE === 'true';
const NYC_OUTPUT_DIR = path.resolve(process.cwd(), 'temp/.nyc_output_playwright');

type IstanbulCoverage = Record<string, unknown>;

export interface UI5WCGalleryFixtures {
  coverage: void;
  ui5wc: UI5WCInternalHelpers;
}

export const test = base.extend<UI5WCGalleryFixtures>({
  coverage: [
    async ({ page }, use, testInfo) => {
      await use();

      if (!COVERAGE) {
        return;
      }

      const data = await page
        .evaluate<IstanbulCoverage | undefined>(
          () => (globalThis as unknown as { __coverage__?: IstanbulCoverage }).__coverage__,
        )
        .catch(() => undefined);

      if (data && Object.keys(data).length > 0) {
        await mkdir(NYC_OUTPUT_DIR, { recursive: true });
        const safeId = testInfo.testId.replace(/[^a-z0-9_-]/gi, '_');
        await writeFile(path.join(NYC_OUTPUT_DIR, `${safeId}.json`), JSON.stringify(data), 'utf8');
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
