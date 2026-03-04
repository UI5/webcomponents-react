import { test } from '../../ui5-fixtures-internal.js';
import { AttributeTestComp } from '../UI5FixturesTestComponents.js';

test.describe('Internal UI5 Web Components Fixtures', () => {
  // todo: create a useful test
  test('shouldNeverHaveAttribute - passes when attribute never appears', async ({ mount, page, ui5wcInternal }) => {
    await mount(<AttributeTestComp />);

    const button = page.getByTestId('test-button');
    await ui5wcInternal.shouldNeverHaveAttribute(button, 'disabled', { observerTime: 300 });
  });
});
