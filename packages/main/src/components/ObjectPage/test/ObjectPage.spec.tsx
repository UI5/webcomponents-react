import type { Page } from '@playwright/test';
import { expect, test } from '../../../../../../playwright/fixtures/gallery-fixtures.js';

// Programmatic scrolling can run before the initial ResizeObserver measurements, especially in WebKit.
async function waitForHeaderLayout(page: Page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

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

  test('fitContent: switching tabs while the header is collapsed leaves no gap above the content', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount('ObjectPage/ObjectPageFitContentTabSwitchTestComp');

    // height of the top spacer that pads the content down to make room for a re-expandable collapsed header
    const topSpacerHeight = () =>
      page.evaluate(() => {
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        return spacer ? Math.round(spacer.getBoundingClientRect().height) : -1;
      });

    // collapse the header via the toggle button
    await page.locator('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    await expect(page.getByText('Header content')).toBeHidden();

    // switching to another fitContent section must not reintroduce the top spacer (the gap)
    await page.getByRole('tab', { name: 'Fit 2' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBe(0);

    // a non-fitContent section keeps the spacer so scrolling up can re-expand the collapsed header
    await page.getByRole('tab', { name: 'Normal' }).click();
    await expect.poll(topSpacerHeight).toBeGreaterThan(0);
  });

  test('non-fitContent: collapsed header + switch to a short section leaves no dead spacer above it', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount('ObjectPage/ObjectPageShortSectionTabSwitchTestComp');

    // height of the top spacer that pads the content down to make room for a re-expandable collapsed header
    const topSpacerHeight = () =>
      page.evaluate(() => {
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        return spacer ? Math.round(spacer.getBoundingClientRect().height) : -1;
      });

    // how far the top spacer is scrolled out of view (>= its height means no gap is visible above the content)
    const spacerScrolledOutBy = () =>
      page.evaluate(() => {
        const op = document.querySelector('[data-component-name="ObjectPage"]');
        const spacer = document.querySelector('[data-component-name="ObjectPageContent"]')
          ?.firstElementChild as HTMLElement | null;
        if (!op || !spacer) {
          return -1;
        }
        return Math.round(op.scrollTop) - Math.round(spacer.getBoundingClientRect().height);
      });

    // collapse the header via the toggle button
    await page.locator('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    await expect(page.getByText('Header content')).toBeHidden();

    // a section too short to scroll must not keep the top spacer (it would be un-scrollable dead space)
    await page.getByRole('tab', { name: 'Short' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBe(0);

    // a tall section keeps the spacer (so scroll-up can re-expand the header) but lands scrolled past it, leaving no gap
    await page.getByRole('tab', { name: 'Tall' }).click();
    await expect(page.getByText('Header content')).toBeHidden();
    await expect.poll(topSpacerHeight).toBeGreaterThan(0);
    await expect.poll(spacerScrolledOutBy).toBeGreaterThanOrEqual(0);

    // scrolling back up re-expands the collapsed header
    // Wait for the existing 500ms navigation guard before simulating the next user scroll.
    await page.waitForTimeout(550);
    await page.locator('[data-component-name="ObjectPage"]').evaluate((op) => op.scrollTo({ top: 0 }));
    await expect(page.getByText('Header content')).toBeVisible();

    // switching back to the short section drops the spacer again
    await page.getByRole('tab', { name: 'Short' }).click();
    await expect.poll(topSpacerHeight).toBe(0);
  });

  test('IconTabBar: a dead-band section keeps the header expanded instead of twitching on scroll', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount('ObjectPage/ObjectPageHeaderTwitchTestComp');

    await expect(page.getByText('Priority: Very High')).toBeVisible();

    // A twitch shows up as the scroll position repeatedly dropping back toward the top.
    const { maxScroll, resets, finalTop } = await page.evaluate(
      () =>
        new Promise<{ maxScroll: number; resets: number; finalTop: number }>((resolve) => {
          const el = document.querySelector('[data-component-name="ObjectPage"]');
          const maxScroll = el.scrollHeight - el.clientHeight;
          let resets = 0;
          let prev = 0;
          let frames = 0;
          const tick = () => {
            el.scrollTop = el.scrollTop + 40;
            const top = el.scrollTop;
            if (top < prev - 10) {
              resets++;
            }
            prev = top;
            frames++;
            if (frames >= 60) {
              resolve({ maxScroll: Math.round(maxScroll), resets, finalTop: Math.round(el.scrollTop) });
              return;
            }
            requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
    );

    expect(maxScroll).toBeGreaterThan(0); // section must actually be scrollable
    expect(resets).toBe(0); // no collapse/expand twitch
    expect(finalTop).toBeGreaterThan(0); // scroll holds at the bottom
    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await expect(page.getByText('Bottom content')).toBeInViewport();
  });

  test('IconTabBar: a wrapping title collapses without losing scroll range or twitching', async ({ mount, page }) => {
    // Narrow + tall viewport so the expanded title wraps but the snapped title stays on one line (differing topHeaderHeight).
    await page.setViewportSize({ width: 820, height: 1000 });
    await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp');

    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await waitForHeaderLayout(page);

    const { maxScroll, resets, finalTop } = await page.evaluate(
      () =>
        new Promise<{ maxScroll: number; resets: number; finalTop: number }>((resolve) => {
          const el = document.querySelector('[data-component-name="ObjectPage"]');
          const maxScroll = el.scrollHeight - el.clientHeight;
          let resets = 0;
          let prev = 0;
          let frames = 0;
          const tick = () => {
            el.scrollTop = el.scrollTop + 20;
            const top = el.scrollTop;
            if (top < prev - 10) {
              resets++;
            }
            prev = top;
            frames++;
            if (frames >= 80) {
              resolve({ maxScroll: Math.round(maxScroll), resets, finalTop: Math.round(el.scrollTop) });
              return;
            }
            requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
    );

    expect(maxScroll).toBeGreaterThan(0); // section must actually be scrollable
    expect(resets).toBe(0); // no collapse/expand twitch
    expect(finalTop).toBeGreaterThan(0); // scroll holds at the bottom
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await expect(page.getByText('Bottom content')).toBeInViewport();
    expect(
      await page.locator('[data-component-name="ObjectPage"]').evaluate((op) => op.scrollHeight - op.clientHeight),
    ).toBe(maxScroll);
  });

  for (const variant of ['wrapping', 'expandedContent', 'tallSnapped', 'growingSnapped'] as const) {
    for (const step of [2, 200]) {
      test(`IconTabBar: ${variant} keeps a stable collapse with scroll steps of ${step}px`, async ({ mount, page }) => {
        await page.setViewportSize({ width: 820, height: 1000 });
        await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', {
          variant,
          contentHeightOffset: variant === 'tallSnapped' ? 260 : 140,
        });
        await expect(page.getByText('Priority: Very High')).toBeVisible();
        const result = await page.evaluate(async (step) => {
          await document.fonts.ready;
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          const op = document.querySelector<HTMLElement>('[data-component-name="ObjectPage"]');
          const title = op.querySelector('[data-component-name="ObjectPageTitle"]');
          op.style.scrollBehavior = 'auto';
          const initialRange = op.scrollHeight - op.clientHeight;
          let minimumRange = initialRange;
          let previousTop = 0;
          let resets = 0;
          let previousExpanded = 'true';
          let transitions = 0;
          for (let frame = 0; frame < 180; frame++) {
            await new Promise(requestAnimationFrame);
            op.scrollTop += step;
            if (op.scrollTop < previousTop - 1) {
              resets++;
            }
            previousTop = op.scrollTop;
            minimumRange = Math.min(minimumRange, op.scrollHeight - op.clientHeight);
            const expanded = title.getAttribute('data-header-content-visible');
            if (expanded !== previousExpanded) {
              transitions++;
              previousExpanded = expanded;
            }
          }
          return {
            initialRange,
            minimumRange,
            resets,
            transitions,
            top: op.scrollTop,
            max: op.scrollHeight - op.clientHeight,
          };
        }, step);
        expect(result.initialRange).toBeGreaterThan(0);
        expect(result.minimumRange).toBeGreaterThanOrEqual(result.initialRange);
        expect(result.resets).toBe(0);
        expect(result.transitions).toBe(1);
        expect(result.top).toBeCloseTo(result.max, 0);
        await expect(page.getByText('Priority: Very High')).toBeHidden();
        await expect(page.getByText('Bottom content')).toBeInViewport();

        await page
          .locator('[data-component-name="ObjectPage"]')
          .evaluate((op) => op.scrollTo({ top: 0, behavior: 'instant' }));
        await expect(page.getByText('Priority: Very High')).toBeVisible();
      });
    }
  }

  test('IconTabBar: a later resize of the real snapped title preserves the collapsed scroll range', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 820, height: 1000 });
    await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', {
      variant: 'tallSnapped',
      contentHeightOffset: 260,
    });
    const op = page.locator('[data-component-name="ObjectPage"]');
    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await waitForHeaderLayout(page);
    await op.evaluate((element) => element.scrollTo({ top: element.scrollHeight, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    const before = await op.evaluate((element) => ({
      top: element.scrollTop,
      range: element.scrollHeight - element.clientHeight,
    }));
    await page.getByText('Snapped title', { exact: true }).evaluate((element) => {
      element.style.height = '120px';
    });
    await expect
      .poll(() =>
        op.evaluate((element) => ({ top: element.scrollTop, range: element.scrollHeight - element.clientHeight })),
      )
      .toEqual(before);
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await expect(page.getByText('Bottom content')).toBeInViewport();
  });

  for (const startAtBottom of [false, true]) {
    test(`IconTabBar: a shrinking snapped title preserves an upward scroll from ${startAtBottom ? 'the bottom' : 'within the scroll range'}`, async ({
      mount,
      page,
    }) => {
      await page.setViewportSize({ width: 820, height: 1000 });
      await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', {
        variant: 'tallSnapped',
        contentHeightOffset: 260,
      });
      const op = page.locator('[data-component-name="ObjectPage"]');
      await expect(page.getByText('Priority: Very High')).toBeVisible();
      await waitForHeaderLayout(page);
      await op.evaluate(
        (element, startAtBottom) =>
          element.scrollTo({ top: startAtBottom ? element.scrollHeight : 150, behavior: 'instant' }),
        startAtBottom,
      );
      await expect(page.getByText('Priority: Very High')).toBeHidden();
      await waitForHeaderLayout(page);
      const previousTop = await op.evaluate((element) => element.scrollTop);

      // Resize and scroll before either event is delivered, so the geometry correction sees both changes.
      const reducedRange = await page.getByText('Snapped title', { exact: true }).evaluate((element) => {
        const objectPage = element.closest<HTMLElement>('[data-component-name="ObjectPage"]');
        element.style.height = '180px';
        objectPage.scrollTo({ top: 100, behavior: 'instant' });
        return objectPage.scrollHeight - objectPage.clientHeight;
      });
      expect(reducedRange).toBeGreaterThan(100);
      if (startAtBottom) {
        expect(previousTop).toBeGreaterThan(reducedRange);
      } else {
        expect(previousTop).toBeLessThan(reducedRange);
      }
      await expect(page.getByText('Priority: Very High')).toBeVisible();
      await expect.poll(() => op.evaluate((element) => element.scrollTop)).toBe(100);
    });
  }

  test('IconTabBar: a tall section does not reserve extra space when its title shrinks', async ({ mount, page }) => {
    await page.setViewportSize({ width: 820, height: 1000 });
    await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', {
      variant: 'tallSnapped',
      contentHeightOffset: 0,
    });
    const op = page.locator('[data-component-name="ObjectPage"]');
    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await waitForHeaderLayout(page);
    const measure = () =>
      op.evaluate((element) => ({
        title: element.querySelector('[data-component-name="ObjectPageTopHeader"]').getBoundingClientRect().height,
        range: element.scrollHeight - element.clientHeight,
        bottomSpacer: element
          .querySelector('[data-component-name="ObjectPageContent"]')
          .lastElementChild.getBoundingClientRect().height,
        overflowAnchor: element.style.overflowAnchor,
      }));
    const before = await measure();
    await op.evaluate((element) => element.scrollTo({ top: element.scrollHeight, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await expect.poll(async () => (await measure()).title).toBeLessThan(before.title);
    const after = await measure();
    expect(after.bottomSpacer).toBe(0);
    expect(after.overflowAnchor).toBe('');
    expect(before.range - after.range).toBeCloseTo(before.title - after.title, 0);
    await expect(page.getByText('Bottom content')).toBeInViewport();
    await op.evaluate((element) => element.scrollTo({ top: 0, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeVisible();
  });

  test('IconTabBar: growing the section releases the title reserve', async ({ mount, page }) => {
    await page.setViewportSize({ width: 820, height: 1000 });
    await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', {
      variant: 'tallSnapped',
      contentHeightOffset: 260,
    });
    const op = page.locator('[data-component-name="ObjectPage"]');
    const bottomSpacer = () =>
      page
        .locator('[data-component-name="ObjectPageContent"]')
        .evaluate((element) => element.lastElementChild.getBoundingClientRect().height);
    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await waitForHeaderLayout(page);
    await op.evaluate((element) => element.scrollTo({ top: element.scrollHeight, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await expect.poll(bottomSpacer).toBeGreaterThan(0);
    await page.getByText('Bottom content').evaluate((element) => {
      element.parentElement.style.height = '1500px';
    });
    await expect.poll(bottomSpacer).toBe(0);
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await op.evaluate((element) => element.scrollTo({ top: 0, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeVisible();
  });

  test('IconTabBar: an automatic collapse releases its geometry when switching to a short tab', async ({
    mount,
    page,
  }) => {
    await page.setViewportSize({ width: 820, height: 1000 });
    await mount('ObjectPage/ObjectPageHeaderTwitchWrappingTitleTestComp', { includeShortSection: true });
    const op = page.locator('[data-component-name="ObjectPage"]');
    await expect(page.getByText('Priority: Very High')).toBeVisible();
    await waitForHeaderLayout(page);
    await op.evaluate((element) => element.scrollTo({ top: element.scrollHeight, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await page.getByRole('tab', { name: 'Short', exact: true }).click();
    await expect(page.getByText('Short content')).toBeInViewport();
    await expect.poll(() => op.evaluate((element) => element.scrollHeight - element.clientHeight)).toBe(0);
    await expect
      .poll(() =>
        page.evaluate(() => {
          const section = document.querySelector('[data-component-name="ObjectPageSection"]');
          const tabs = document.querySelector('[data-component-name="ObjectPageTabContainer"]');
          return Math.abs(section.getBoundingClientRect().top - tabs.getBoundingClientRect().bottom);
        }),
      )
      .toBeLessThanOrEqual(4);
    await page.getByRole('tab', { name: 'Details', exact: true }).click();
    await expect(page.getByText('Priority: Very High')).toBeHidden();
    await expect.poll(() => op.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
    // Tab navigation deliberately ignores scroll toggles for 500ms; exercise a subsequent user scroll.
    await page.waitForTimeout(550);
    await op.evaluate((element) => element.scrollTo({ top: 0, behavior: 'instant' }));
    await expect(page.getByText('Priority: Very High')).toBeVisible();
  });

  test('IconTabBar: title refs and form controls remain attached to one visible instance', async ({ mount, page }) => {
    await mount('ObjectPage/ObjectPageTitleRefAndFormTestComp');
    const field = page.getByRole('textbox', { name: 'Title field' });
    await field.fill('Value');
    for (const removeSnappedTitle of [false, true]) {
      if (removeSnappedTitle) {
        await page.getByRole('button', { name: 'Toggle snapped title' }).click();
      }
      await page.getByRole('button', { name: 'Focus title' }).click();
      await expect(page.locator('[data-component-name="ObjectPageTitle"]')).toBeFocused();
      await page.getByRole('button', { name: 'Focus field' }).click();
      await expect(field).toBeFocused();
      expect(
        await page.locator('form').evaluate((form) => ({
          valid: form.checkValidity(),
          fields: new FormData(form).getAll('title-field'),
        })),
      ).toEqual({ valid: true, fields: ['Value'] });
    }
  });

  test('uses titleText as the accessible name and respects explicit names', async ({ mount, page }) => {
    await mount('ObjectPage/ObjectPageAccessibleNameTestComp');

    const automaticSection = page.getByRole('region', { name: 'Automatic section' });
    const automaticSubsection = page.getByRole('region', { name: 'Automatic subsection' });

    await expect(automaticSection).toHaveAttribute('aria-label', 'Automatic section');
    await expect(automaticSubsection).toHaveAttribute('aria-label', 'Automatic subsection');

    await expect(page.getByRole('region', { name: 'Custom section label' })).toHaveAttribute(
      'aria-label',
      'Custom section label',
    );
    await expect(page.getByRole('region', { name: 'External section label' })).toHaveAttribute(
      'aria-labelledby',
      'external-section-label',
    );
  });

  test('keeps only a single section out of the tab order', async ({ mount, page }) => {
    await mount('ObjectPage/ObjectPageSingleSectionTestComp');

    const section = page.getByRole('region', { name: 'Single section' });
    const firstSubSection = page.getByRole('region', { name: 'First subsection' });
    const secondSubSection = page.getByRole('region', { name: 'Second subsection' });

    expect(await section.getAttribute('tabindex')).toBeNull();
    await expect(section).toHaveAttribute('aria-label', 'Single section');
    await expect(firstSubSection).toHaveAttribute('tabindex', '0');
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]')).toHaveCount(0);

    await firstSubSection.focus();
    await page.keyboard.press('ArrowDown');
    await expect(secondSubSection).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'After ObjectPage' })).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(secondSubSection).toBeFocused();
    expect(await section.getAttribute('tabindex')).toBeNull();

    await mount('ObjectPage/ObjectPageSingleSectionIconTabBarTestComp');
    expect(await page.getByRole('region', { name: 'Single section' }).getAttribute('tabindex')).toBeNull();
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]')).toHaveCount(0);

    await mount('ObjectPage/ObjectPageFitContentTabSwitchTestComp');
    await expect(page.getByRole('region', { name: 'Fit 1' })).toHaveAttribute('tabindex', '0');
    await expect(page.locator('[data-component-name="ObjectPageTabContainer"]').first()).toBeVisible();
  });
});
