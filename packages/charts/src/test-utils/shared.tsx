import { expect } from '@playwright/experimental-ct-react';
import type { Page } from '@playwright/test';

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
