import { test as base, expect } from '@playwright/experimental-ct-react';
import type { Page, Locator } from '@playwright/test';

export interface UI5WCFixtures {
  ui5wc: UI5WCHelpers;
}

export class UI5WCHelpers {
  constructor(private page: Page) {}

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

  /**
   * Asserts that an element never gains a specific attribute within an observation period.
   * Useful for verifying that a button doesn't become disabled during an async operation.
   *
   * @example
   * await ui5wc.shouldNeverHaveAttribute(submitButton, 'disabled', { observerTime: 1000 });
   */
  async shouldNeverHaveAttribute(
    locator: Locator,
    attributeName: string,
    options: { observerTime?: number; delayed?: number } = {},
  ): Promise<void> {
    const { observerTime = 500, delayed = 0 } = options;

    if (delayed > 0) {
      await this.page.waitForTimeout(delayed);
    }

    const element = await locator.elementHandle();
    if (!element) {
      throw new Error('Element not found');
    }

    const attributeFound = await this.page.evaluate(
      ({ el, attrName, timeout }) => {
        return new Promise<boolean>((resolve) => {
          if (el.hasAttribute(attrName)) {
            resolve(true);
            return;
          }

          const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (mutation.attributeName === attrName && el.hasAttribute(attrName)) {
                observer.disconnect();
                resolve(true);
                return;
              }
            }
          });

          observer.observe(el, { attributes: true });

          setTimeout(() => {
            observer.disconnect();
            resolve(false);
          }, timeout);
        });
      },
      { el: element, attrName: attributeName, timeout: observerTime },
    );

    if (attributeFound) {
      throw new Error(`Attribute "${attributeName}" was found on element, but it should never appear`);
    }
  }

  // REDUNDANT

  findShadowInput(locator: Locator): Locator {
    return locator.locator('input');
  }

  async toggleCheckbox(locator: Locator): Promise<void> {
    await locator.click();
  }

  async toggleSwitch(locator: Locator): Promise<void> {
    await locator.click();
  }

  async clickRadioButton(locator: Locator): Promise<void> {
    await locator.click();
  }

  async clickListItemByText(text: string, container?: Locator): Promise<void> {
    const scope = container ?? this.page;
    let listItem = scope.locator(`[text="${text}"]`);
    const count = await listItem.count();

    if (count === 0) {
      listItem = scope.getByText(text, { exact: true });
    }

    await listItem.click();
  }

  findToolbarButtonByText(text: string, container?: Locator): Locator {
    const scope = container ?? this.page;
    return scope.locator(`[ui5-toolbar-button][text="${text}"]`);
  }

  async typeIntoInputWithDelay(locator: Locator, text: string, delay: number = 500): Promise<void> {
    await this.page.waitForTimeout(delay);
    const shadowInput = locator.locator('input');
    await shadowInput.fill(text);
  }
}

export const test = base.extend<UI5WCFixtures>({
  ui5wc: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new UI5WCHelpers(page));
  },
});

export { expect };
