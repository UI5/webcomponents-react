import { test } from '../fixtures/gallery-fixtures.js';

test.describe('Internal UI5 Web Components Fixtures', () => {
  // todo: create a useful test
  test('shouldNeverHaveAttribute - passes when attribute never appears', async ({ mount, page, ui5wc }) => {
    await mount('test/UI5Fixtures/AttributeTestComp');

    const button = page.getByTestId('test-button');
    await ui5wc.shouldNeverHaveAttribute(button, 'disabled', { observerTime: 300 });
  });
});
