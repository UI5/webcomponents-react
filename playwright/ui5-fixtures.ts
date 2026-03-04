import { test as base, expect } from '@playwright/experimental-ct-react';
import type { Page, Locator } from '@playwright/test';

export interface UI5WCFixtures {
  ui5wc: UI5WCHelpers;
}

export class UI5WCHelpers {
  constructor(protected page: Page) {}

  /**
   * Types a value into a UI5 input component.
   * Works with Input, ComboBox, MultiComboBox, MultiInput, DatePicker, etc.
   *
   * @example
   * await ui5wc.typeIntoInput(page.getByTestId('my-input'), 'Hello');
   * await ui5wc.typeIntoInput(combobox, 'search term');
   */
  async typeIntoInput(locator: Locator, text: string): Promise<void> {
    const shadowInput = locator.locator('input');
    await shadowInput.fill(text);
  }

  /**
   * Clears a UI5 input component.
   *
   * @example
   * await ui5wc.clearInput(page.getByTestId('my-input'));
   */
  async clearInput(locator: Locator): Promise<void> {
    const shadowInput = locator.locator('input');
    await shadowInput.click();
    await shadowInput.clear();
  }

  /**
   * Types a value into a UI5 TextArea component.
   *
   * @example
   * await ui5wc.typeIntoTextArea(page.getByTestId('my-textarea'), 'Multi\nline');
   */
  async typeIntoTextArea(locator: Locator, text: string): Promise<void> {
    const shadowTextarea = locator.locator('textarea');
    await shadowTextarea.fill(text);
  }

  /**
   * Closes an open popup by pressing Escape.
   *
   * @example
   * await ui5wc.closePopupWithEsc();
   */
  async closePopupWithEsc(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  /**
   * Opens a dropdown by clicking its arrow icon.
   * Works with Select, ComboBox, and MultiComboBox.
   *
   * @example
   * await ui5wc.openDropdownByClick(page.getByTestId('my-select'));
   */
  async openDropdownByClick(locator: Locator): Promise<void> {
    const inputIcon = locator.locator('.inputIcon');
    await inputIcon.click();
  }

  /**
   * Selects a dropdown item by its text. Must be called after opening the dropdown.
   * Works with Select, ComboBox, and MultiComboBox.
   *
   * @example
   * await ui5wc.openDropdownByClick(select);
   * await ui5wc.clickDropdownItemByText(select, 'Option 1');
   */
  async clickDropdownItemByText(dropdown: Locator, text: string): Promise<void> {
    await expect(dropdown.locator('[ui5-responsive-popover]:not([tokenizer-popover])')).toHaveAttribute('open');

    const isSelect = await dropdown.evaluate((el) => el.hasAttribute('ui5-select'));
    if (isSelect) {
      const item = dropdown.getByText(text, { exact: true });
      await item.click();
    } else {
      const item = dropdown.locator(`[text="${text}"]`);
      await item.click();
    }
  }

  /**
   * Finds a tab in a TabContainer by its text.
   *
   * @example
   * const tab = ui5wc.findTabByText(tabContainer, 'Settings');
   * await tab.click();
   */
  findTabByText(tabContainer: Locator, text: string): Locator {
    return tabContainer.locator('[role="tab"]').filter({ hasText: text });
  }

  /**
   * Finds the popover button for a tab with nested sub-tabs.
   * Only exists when a tab has both content and nested tabs (items prop).
   *
   * @example
   * const btn = ui5wc.findTabPopoverButtonByText(tabContainer, 'Parent Tab');
   * await btn.click();
   * await tabContainer.getByText('Child Tab').click();
   */
  findTabPopoverButtonByText(tabContainer: Locator, text: string): Locator {
    return tabContainer.locator('[role="tab"]').filter({ hasText: text }).locator('[ui5-button]');
  }
}

export const test = base.extend<UI5WCFixtures>({
  ui5wc: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new UI5WCHelpers(page));
  },
});

export { expect };
