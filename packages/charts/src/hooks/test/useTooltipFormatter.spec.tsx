import { expect, test } from '../../../../../playwright/fixtures/gallery-fixtures.js';

test.describe('useTooltipFormatter', () => {
  test('should return value when no formatter is present', async ({ mount }) => {
    const component = await mount('HookTestComponents/TooltipFormatterNoFormatter');
    await expect(component.getByText('100')).toBeVisible();
  });

  test('should not crash on invalid formatter', async ({ mount }) => {
    const component = await mount('HookTestComponents/TooltipFormatterInvalid');
    await expect(component.getByText('100')).toBeVisible();
  });

  test('should format the value with a valid formatter', async ({ mount }) => {
    const component = await mount('HookTestComponents/TooltipFormatterValid');
    await expect(component.getByText('10')).toBeVisible();
  });
});
