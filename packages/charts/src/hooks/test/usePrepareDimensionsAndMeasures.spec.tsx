import { expect, test } from '../../../../../playwright/fixtures/main-fixtures.js';
import {
  PrepareDimensionsDefault,
  PrepareDimensionsNoOverwrite,
  PrepareDimensionsWithDefaults,
} from './HookTestComponents.js';

test.describe('usePrepareDimensionsAndMeasures', () => {
  test('should not throw an error when no defaults are passed', async ({ mount, page }) => {
    await mount(<PrepareDimensionsDefault />);
    const resultText = await page.getByTestId('result').textContent();
    const result = JSON.parse(resultText);
    expect(result).toEqual({
      dimensions: [{ accessor: 'a', reactKey: 'a' }],
      measures: [{ accessor: 'b', reactKey: 'b' }],
      stackGroups: {},
      lastInStack: [],
    });
  });

  test('should merge defaults', async ({ mount, page }) => {
    await mount(<PrepareDimensionsWithDefaults />);
    const resultText = await page.getByTestId('result').textContent();
    const result = JSON.parse(resultText);
    expect(result).toEqual({
      dimensions: [{ accessor: 'a', dimensionDefault: true, reactKey: 'a' }],
      measures: [{ accessor: 'b', measureDefault: true, reactKey: 'b' }],
      stackGroups: {},
      lastInStack: [],
    });
  });

  test('should merge defaults but not overwrite existing properties', async ({ mount, page }) => {
    await mount(<PrepareDimensionsNoOverwrite />);
    const resultText = await page.getByTestId('result').textContent();
    const result = JSON.parse(resultText);
    expect(result).toEqual({
      dimensions: [{ accessor: 'a', dimensionDefault: true, reactKey: 'a' }],
      measures: [{ accessor: 'b', measureDefault: true, reactKey: 'b' }],
      stackGroups: {},
      lastInStack: [],
    });
  });
});
