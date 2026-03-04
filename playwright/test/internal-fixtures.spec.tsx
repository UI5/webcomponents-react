import { test } from '../fixtures/ui5-fixtures-internal';
import { AttributeTestComp } from './UI5FixturesTestComponents';

test.describe('Internal UI5 Web Components Fixtures', () => {
  // todo: create a useful test
  test('shouldNeverHaveAttribute - passes when attribute never appears', async ({ mount, page, ui5wc }) => {
    await mount(<AttributeTestComp />);

    const button = page.getByTestId('test-button');
    await ui5wc.shouldNeverHaveAttribute(button, 'disabled', { observerTime: 300 });
  });
});
