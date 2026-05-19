import { expect, test } from '../../../../../playwright/fixtures/main-fixtures.js';
import { LabelFormatterInvalid, LabelFormatterNull, LabelFormatterValid } from './HookTestComponents.js';

test.describe('useLabelFormatter', () => {
  test('should return value when no formatter is present', async ({ mount }) => {
    const component = await mount(<LabelFormatterNull />);
    await expect(component.getByText('100')).toBeVisible();
  });

  test('should not crash on invalid formatter', async ({ mount }) => {
    const component = await mount(<LabelFormatterInvalid />);
    await expect(component.getByText('100')).toBeVisible();
  });

  test('should format the value with a valid formatter', async ({ mount }) => {
    const component = await mount(<LabelFormatterValid />);
    await expect(component.getByText('10')).toBeVisible();
  });
});
