import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

/**
 * Opens an AnalyticalTable column header menu by clicking the header label with the given exact
 * text, then waits for the `ATHeaderPopover` popover to become visible. Returns the popover
 * locator so callers can scope follow-up queries (e.g. clicking a menu item, locating the default
 * filter input).
 *
 * Used in `Sorting.spec.tsx` (13 call sites that open the menu and click a list item afterwards)
 * and `Filtering.spec.tsx` (2 call sites — the default-filter test and the custom-Popover test).
 *
 * Sites that intentionally inspect or close the header menu via the column header element itself
 * (e.g. `[data-column-id="name"]` to assert `aria-haspopup`) keep their inline `.click()` calls;
 * those cases do not want the visibility-assertion side effect this helper bakes in.
 */
export async function openColumnHeaderMenu(page: Page, headerText: string): Promise<Locator> {
  await page.getByText(headerText, { exact: true }).click();
  const popover = page.locator('[ui5-popover][data-component-name="ATHeaderPopover"]');
  await expect(popover).toBeVisible();
  return popover;
}
