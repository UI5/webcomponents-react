import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/main-fixtures.js';
import {
  SplitterMoveResetTestComp,
  SplitterMultipleElementsTestComp,
  SplitterEmptyTestComp,
  SplitterControlledTestComp,
} from './SplitterLayoutTestComponents.js';

/**
 * Move first separator 10 times via ArrowUp/ArrowLeft (RTL aware)
 */
async function moveSpacer(page: Page, dir: string, vertical: boolean) {
  const separator = page.locator('[role="separator"]').first();
  await separator.click();
  await page.waitForTimeout(50);

  const rtlSafeLeft = `Arrow${dir === 'rtl' && !vertical ? 'Right' : 'Left'}`;
  const rtlSafeUp = `Arrow${dir === 'rtl' && !vertical ? 'Down' : 'Up'}`;

  for (let i = 0; i < 5; i++) {
    await page.keyboard.press(rtlSafeLeft);
    await page.waitForTimeout(50);
    await page.keyboard.press(rtlSafeUp);
    await page.waitForTimeout(50);
  }
}

test.describe('SplitterLayout', () => {
  for (const dir of ['ltr', 'rtl']) {
    for (const vertical of [false, true]) {
      test(`Splitter Move & Reset - ${dir} - vertical: ${vertical}`, async ({ mount, page }) => {
        await page.setViewportSize({ width: 2000, height: 2000 });
        await mount(<SplitterMoveResetTestComp vertical={vertical} dir={dir} />);

        const se1 = page.getByTestId('se1');
        const se2 = page.getByTestId('se2');

        await expect(se1).toHaveCSS('flex', '0 1 calc(70% - 16px)');
        await expect(se2).toHaveCSS('flex', '0 1 30%');

        await moveSpacer(page, dir, vertical);
        await expect(se1).toHaveCSS('flex', '0 0 1184px');
        await expect(se2).toHaveCSS('flex', '0 0 800px');

        await page.getByText('Trigger dep').click({ force: true });
        await expect(se1).toHaveCSS('flex', '0 1 calc(70% - 16px)');
        await expect(se2).toHaveCSS('flex', '0 1 30%');

        await moveSpacer(page, dir, vertical);
        await expect(se1).toHaveCSS('flex', '0 0 1184px');
        await expect(se2).toHaveCSS('flex', '0 0 800px');

        await page.getByText('Add child').click({ force: true });
        await expect(se1).toHaveCSS('flex', '0 1 calc(70% - 16px)');
        await expect(se2).toHaveCSS('flex', '0 1 calc(25% - 16px)');
        const se3 = page.getByTestId('se3');
        await expect(se3).toHaveCSS('flex', '0 1 5%');

        // resetOnSizeChange
        await moveSpacer(page, dir, vertical);
        await page.setViewportSize({ width: 1000, height: 1000 });
        await expect(se1).toHaveCSS('flex', '0 1 calc(70% - 16px)');
        await expect(se2).toHaveCSS('flex', '0 1 calc(25% - 16px)');
        await expect(se3).toHaveCSS('flex', '0 1 5%');
      });
    }
  }

  for (const vertical of [false, true]) {
    test(`SplitterLayout w/ multiple SplitterElements - vertical: ${vertical}`, async ({ mount, page }) => {
      let clickCount = 0;
      await mount(
        <SplitterMultipleElementsTestComp
          vertical={vertical}
          onBtnClick={() => {
            clickCount++;
          }}
        />,
      );

      await page.getByTestId('btn').click();
      expect(clickCount).toBe(1);

      // only one separator (resizable=false for #2)
      const separators = page.locator('[role="separator"]');
      await separators.click();
      await expect(separators).toHaveCount(1);
      await expect(separators).toHaveCSS('border', '2px solid rgb(0, 50, 165)');

      await expect(page.getByTestId('sl')).toHaveCSS('width', '800px');
      await expect(page.getByTestId('sl')).toHaveCSS('height', '800px');

      const se2 = page.getByTestId('se2');
      await expect(se2).toHaveCSS('flex', '0 1 400px');
      await expect(se2).toHaveCSS(vertical ? 'min-height' : 'min-width', '300px');

      // Non-resizable element
      const se3 = page.getByTestId('se3');
      await expect(se3).toHaveCSS('flex', '0 0 200px');
      await expect(se3).toHaveCSS(vertical ? 'min-height' : 'min-width', '0px');
    });
  }

  test('empty content', async ({ mount, page }) => {
    await mount(<SplitterEmptyTestComp />);
    const sl = page.getByTestId('sl');
    await expect(sl).toBeAttached();
    await expect(sl).not.toBeVisible();
  });

  for (const vertical of [true, false]) {
    test(`controlled width (${vertical ? 'vertical' : 'horizontal'})`, async ({ mount, page }) => {
      await mount(<SplitterControlledTestComp vertical={vertical} />);

      await expect(page.getByTestId('resize-count')).toHaveText('0');
      await expect(page.getByTestId('0')).toHaveText('200px');
      await expect(page.getByTestId('1')).toHaveText('200');
      await expect(page.getByTestId('2')).toHaveText('auto');
      await expect(page.getByTestId('3')).toHaveText('200px');

      const sep0 = page.locator('[role="separator"]').nth(0);
      const box0 = await sep0.boundingBox();
      const startX0 = box0.x + box0.width / 2;
      const startY0 = box0.y + box0.height / 2;

      // move mouse to first separator, drag left/up by 100px, release
      await page.mouse.move(startX0, startY0);
      await page.mouse.down();
      await page.waitForTimeout(100);
      if (vertical) {
        await page.mouse.move(startX0, startY0 - 100);
      } else {
        await page.mouse.move(startX0 - 100, startY0);
      }
      await page.mouse.up();

      await expect(page.getByTestId('resize-count')).toHaveText('1');

      await expect(page.getByTestId('0')).toHaveText('100px');
      await expect(page.getByTestId('1')).toHaveText('300');
      await expect(page.getByTestId('2')).toHaveText('auto');
      await expect(page.getByTestId('3')).toHaveText('200px');

      // move mouse to first separator, drag right/down by 100px (across bounding box), release
      const box0b = await sep0.boundingBox();
      const startX0b = box0b.x + box0b.width / 2;
      const startY0b = box0b.y + box0b.height / 2;

      await page.mouse.move(startX0b, startY0b);
      await page.mouse.down();
      await page.waitForTimeout(100);
      if (vertical) {
        await page.mouse.move(startX0b, startY0b + 300);
      } else {
        await page.mouse.move(startX0b + 300, startY0b);
      }
      await page.mouse.up();

      await expect(page.getByTestId('resize-count')).toHaveText('2');

      await expect(page.getByTestId('0')).toHaveText('384px');
      await expect(page.getByTestId('1')).toHaveText('16');
      await expect(page.getByTestId('2')).toHaveText('auto');
      await expect(page.getByTestId('3')).toHaveText('200px');

      // keyboard resize on third separator
      const sep2 = page.locator('[role="separator"]').nth(2);
      await sep2.click();
      await page.keyboard.press('ArrowDown');
      await expect(page.getByTestId('resize-count')).toHaveText('3');
      await page.keyboard.press('ArrowDown');
      await expect(page.getByTestId('resize-count')).toHaveText('4');
      await page.keyboard.press('ArrowDown');

      await expect(page.getByTestId('resize-count')).toHaveText('5');

      await expect(page.getByTestId('0')).toHaveText('384px');
      await expect(page.getByTestId('1')).toHaveText('16');
      await expect(page.getByTestId('2')).toHaveText('360px');
      await expect(page.getByTestId('3')).toHaveText('140px');
    });
  }
});
