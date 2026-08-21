/**
 * Test factories — functions called at module scope that register a `test(...)`.
 * Distinct from fixtures in `playwright/fixtures/`, which are values consumed via
 * destructuring in test args (`async ({ ui5wc }) => ...`). Factories eliminate
 * boilerplate by registering an entire standard test; fixtures provide values to
 * tests you write yourself.
 */
import { expect } from '@playwright/experimental-ct-react';
import type { Page } from '@playwright/test';
import type { ComponentType } from 'react';
import { test } from '../fixtures/main-fixtures.js';

export async function assertPassThroughProps(page: Page) {
  const testId = 'component-to-be-tested';
  const el = page.getByTestId(testId);
  await expect(el).toBeAttached();
  await expect(el).toHaveClass(/thisClassIsUsedForTestingPurposesOnly/);
  await expect(el).toHaveCSS('pointer-events', 'none');
  await expect(el).toHaveAttribute('aria-labelledby', 'aria-prop');
  await expect(el).toHaveAttribute('customattribute', 'true');
  await expect(el).toHaveAttribute('data-special-test-prop', 'data-prop');
  await expect(el).toHaveAttribute('id', 'element-id');
  await expect(page.locator('[title="Tooltip"]')).toBeAttached();
}

export function passThroughProps(extraProps?: object) {
  return {
    'data-testid': 'component-to-be-tested',
    'data-special-test-prop': 'data-prop',
    'aria-labelledby': 'aria-prop',
    id: 'element-id',
    className: 'thisClassIsUsedForTestingPurposesOnly',
    style: { pointerEvents: 'none' as const },
    title: 'Tooltip',
    customattribute: 'true',
    ...extraProps,
  };
}

/**
 * Registers a `Pass Through HTML Standard Props` test that verifies that the component forwards
 * the standard HTML props (data-testid, data-*, aria-*, id, className, style.pointerEvents,
 * title, custom attribute) onto its rendered root element.
 */
export function testPassThroughProps<T extends Record<string, any>>(Component: ComponentType<T>, emptyProps: T) {
  test('Pass Through HTML Standard Props', async ({ mount, page }) => {
    await mount(<Component {...passThroughProps(emptyProps)} />);
    await assertPassThroughProps(page);
  });
}
