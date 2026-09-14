import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

// Poll until scrollTop has moved and gone stable, so we assert the final selection and not the tab lock held mid-scroll.
async function waitForScrollSettled(page: Page) {
  await page.evaluate(() => ((window as unknown as { __opScroll: number[] }).__opScroll = []));
  await page.waitForFunction(
    () => {
      const op = document.querySelector('[data-component-name="ObjectPage"]');
      if (!op) {
        return false;
      }
      const hist = (window as unknown as { __opScroll: number[] }).__opScroll;
      hist.push(op.scrollTop);
      const moved = hist.some((value) => value > 0);
      const count = hist.length;
      return moved && count >= 2 && Math.abs(hist[count - 1] - hist[count - 2]) <= 1;
    },
    undefined,
    { polling: 100 },
  );
}

test.describe('ObjectPage', () => {
  test('selects last section with long header', async ({ mount, page }) => {
    await page.setViewportSize({ width: 950, height: 800 });
    await mount('ObjectPage/ObjectPageLongHeaderTestComp');

    await page.getByRole('tab', { name: 'Employment' }).click();
    await waitForScrollSettled(page);

    const geo = await page.evaluate(() => {
      const op = document.querySelector('[data-component-name="ObjectPage"]');
      const tabs = document.querySelector('[data-component-name="ObjectPageTabContainer"]');
      const opTop = op.getBoundingClientRect().top;
      const rect = (id: string) => document.getElementById(id).getBoundingClientRect();
      return {
        stickyBottom: tabs.getBoundingClientRect().bottom - opTop,
        employmentTop: rect('ObjectPageSection-employment').top - opTop,
        personalBottom: rect('ObjectPageSection-personal').bottom - opTop,
      };
    });

    // Employment scrolled to just under the sticky header, Personal scrolled above it (out of the selection zone)
    expect(Math.abs(geo.employmentTop - geo.stickyBottom)).toBeLessThanOrEqual(4);
    expect(geo.personalBottom).toBeLessThanOrEqual(geo.stickyBottom);
    await expect(page.locator('[data-section-id="employment"]')).toHaveAttribute('selected');
  });
});
