import { expect, test } from '../fixtures/ui5-fixtures-internal';
import {
  ClearInputTestComp,
  ComboBoxTestComp,
  DialogTestComp,
  InputTestComp,
  InputWithSuggestionsTestComp,
  MultiComboBoxTestComp,
  MultiInputWithSuggestionsTestComp,
  SelectTestComp,
  TabContainerTestComp,
  TabContainerWithNestedTabsTestComp,
  TextAreaTestComp,
} from './UI5FixturesTestComponents.js';

test.describe('UI5 Web Components Fixtures', () => {
  test('typeIntoInput - types text into UI5 input', async ({ mount, page, ui5wc }) => {
    await mount(<InputTestComp />);

    const input = page.getByTestId('test-input');
    await ui5wc.typeIntoInput(input, 'Hello World');

    await expect(input).toHaveAttribute('value', 'Hello World');
    await expect(page.getByTestId('input-value')).toHaveText('Hello World');
  });

  test('clearInput - clears UI5 input', async ({ mount, page, ui5wc }) => {
    await mount(<ClearInputTestComp />);

    const input = page.getByTestId('test-input');
    await ui5wc.typeIntoInput(input, 'initial value');
    await expect(input).toHaveAttribute('value', 'initial value');

    await ui5wc.clearInput(input);
    await expect(input).toHaveAttribute('value', '');
    await expect(page.getByTestId('input-value')).toHaveText('');
  });

  test('typeIntoTextArea - types text into UI5 textarea', async ({ mount, page, ui5wc }) => {
    await mount(<TextAreaTestComp />);

    const textarea = page.getByTestId('test-textarea');
    await ui5wc.typeIntoTextArea(textarea, 'Multi-line\ntext');

    await expect(textarea).toHaveAttribute('value', 'Multi-line\ntext');
    await expect(page.getByTestId('textarea-value')).toContainText('Multi-line text');
  });

  test('closePopupWithEsc - closes dialog with Escape key', async ({ mount, page, ui5wc }) => {
    await mount(<DialogTestComp />);
    const dialog = page.getByTestId('test-dialog');
    await expect(dialog).toHaveAttribute('open');
    await expect(page.getByTestId('dialog-state')).toHaveText('open');

    await ui5wc.closePopupWithEsc();
    await expect(dialog).not.toHaveAttribute('open');
    await expect(page.getByTestId('dialog-state')).toHaveText('closed');
  });

  test('openDropdownByClick - opens Select dropdown', async ({ mount, page, ui5wc }) => {
    await mount(<SelectTestComp />);

    const select = page.getByTestId('test-select');
    await ui5wc.openDropdownByClick(select);

    await expect(select.locator('[ui5-option]').filter({ hasText: 'Option B' })).toBeVisible();
  });

  test('openDropdownByClick - opens ComboBox dropdown', async ({ mount, page, ui5wc }) => {
    await mount(<ComboBoxTestComp />);

    const combobox = page.getByTestId('test-combobox');
    await ui5wc.openDropdownByClick(combobox);

    await expect(combobox.locator('[text="Apple"]')).toBeVisible();
  });

  test('openDropdownByClick - opens MultiComboBox dropdown', async ({ mount, page, ui5wc }) => {
    await mount(<MultiComboBoxTestComp />);

    const multiComboBox = page.getByTestId('test-multicombobox');
    await ui5wc.openDropdownByClick(multiComboBox);

    await expect(multiComboBox.locator('[text="Red"]')).toBeVisible();
  });

  test('clickDropdownItemByText - selects ComboBox item', async ({ mount, page, ui5wc }) => {
    await mount(<ComboBoxTestComp />);

    const combobox = page.getByTestId('test-combobox');
    await ui5wc.openDropdownByClick(combobox);
    await ui5wc.clickDropdownItemByText(combobox, 'Banana');

    await expect(page.getByTestId('combobox-value')).toHaveText('Banana');
  });

  test('clickDropdownItemByText - selects Select option', async ({ mount, page, ui5wc }) => {
    await mount(<SelectTestComp />);

    const select = page.getByTestId('test-select');
    await ui5wc.openDropdownByClick(select);
    await ui5wc.clickDropdownItemByText(select, 'Option B');

    await expect(page.getByTestId('selected-value')).toHaveText('Option B');
  });

  test('clickDropdownItemByText - selects MultiComboBox item', async ({ mount, page, ui5wc }) => {
    await mount(<MultiComboBoxTestComp />);

    const multiComboBox = page.getByTestId('test-multicombobox');
    await ui5wc.openDropdownByClick(multiComboBox);
    await ui5wc.clickDropdownItemByText(multiComboBox, 'Green');

    await expect(page.getByTestId('multicombobox-values')).toHaveText('Green');
  });

  test('findTabByText - finds and clicks tab', async ({ mount, page, ui5wc }) => {
    await mount(<TabContainerTestComp />);

    const tabContainer = page.getByTestId('test-tabcontainer');
    const tab2 = ui5wc.findTabByText(tabContainer, 'Tab 2');
    await expect(tab2).toBeVisible();
    await tab2.click();

    await expect(page.getByTestId('selected-tab')).toHaveText('Tab 2');
  });

  test('findTabPopoverButtonByText - opens nested tabs popover', async ({ mount, page, ui5wc }) => {
    await mount(<TabContainerWithNestedTabsTestComp />);

    const tabContainer = page.getByTestId('test-tabcontainer-nested');
    const popoverButton = ui5wc.findTabPopoverButtonByText(tabContainer, 'Tab 2');
    await popoverButton.click();

    const subTab = tabContainer.locator('[ui5-li-custom]').filter({ hasText: 'Tab 2.2' });
    await expect(subTab).toBeVisible();
    await subTab.click();

    await expect(tabContainer.getByText('Content 2.2')).toBeVisible();
  });

  test('typeIntoInput - shows ComboBox suggestions', async ({ mount, page, ui5wc }) => {
    await mount(<ComboBoxTestComp />);

    const combobox = page.getByTestId('test-combobox');
    await ui5wc.typeIntoInput(combobox, 'A');

    await expect(combobox.locator('[text="Apple"]')).toBeVisible();
  });

  test('typeIntoInput - shows Input suggestions', async ({ mount, page, ui5wc }) => {
    await mount(<InputWithSuggestionsTestComp />);

    const input = page.getByTestId('test-input-suggestions');
    await ui5wc.typeIntoInput(input, 'S');

    await expect(input.locator('[text="Suggestion A"]')).toBeVisible();
  });

  test('typeIntoInput - shows MultiComboBox suggestions', async ({ mount, page, ui5wc }) => {
    await mount(<MultiComboBoxTestComp />);

    const mcb = page.getByTestId('test-multicombobox');
    await ui5wc.typeIntoInput(mcb, 'R');

    await expect(mcb.locator('[text="Red"]')).toBeVisible();
  });

  test('typeIntoInput - shows MultiInput suggestions', async ({ mount, page, ui5wc }) => {
    await mount(<MultiInputWithSuggestionsTestComp />);

    const multiInput = page.getByTestId('test-multiinput-suggestions');
    await ui5wc.typeIntoInput(multiInput, 'X');

    await expect(multiInput.locator('[text="Suggestion X"]')).toBeVisible();
  });
});
