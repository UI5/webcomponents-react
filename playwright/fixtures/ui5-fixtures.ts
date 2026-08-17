import { test as base, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export interface UI5WCFixtures {
  ui5wc: UI5WCHelpers;
}

/**
 * Escapes a value for use inside a double-quoted CSS attribute selector
 * (`[attr="<value>"]`).
 */
function escapeAttributeValue(value: string): string {
  // `CSS.escape` is a browser-only global; these selector strings are built in
  // the Node test process, where `CSS` is undefined. Only `\` and `"` can break
  // out of a double-quoted attribute value, so escaping them is sufficient.
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
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
   * Closes an open ui5 popup by pressing Escape.
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
    // Select renders its options as plain text nodes; ComboBox/MultiComboBox
    // items carry the value in a `text` attribute. escapeAttributeValue guards
    // the attribute value so quotes/backslashes in the text cannot break the selector.
    const item = isSelect
      ? dropdown.getByText(text, { exact: true }).first()
      : dropdown.locator(`[text="${escapeAttributeValue(text)}"]`).first();
    await this.clickAtBoundingBoxCenter(item);
  }

  /**
   * Clicks a locator using raw viewport coordinates at its bounding-box center.
   *
   * Waits until the located element has a bounding box with a height > 0, then
   * clicks its center. Unlike a normal `locator.click()`, this does not run
   * Playwright's "receives events" actionability check — which UI5 Web Components
   * can fail when their real target sits in the shadow DOM behind an event-
   * transparent host.
   *
   * @param locator Locator to click.
   */
  protected async clickAtBoundingBoxCenter(locator: Locator): Promise<void> {
    let boundingBox: NonNullable<Awaited<ReturnType<Locator['boundingBox']>>> | null = null;
    await expect
      .poll(async () => {
        const current = await locator.boundingBox();
        boundingBox = current && current.height > 0 ? current : null;
        return boundingBox?.height ?? 0;
      })
      .toBeGreaterThan(0);
    const centerX = boundingBox!.x + boundingBox!.width / 2;
    const centerY = boundingBox!.y + boundingBox!.height / 2;
    await this.page.mouse.click(centerX, centerY);
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
