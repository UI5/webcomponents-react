import type { Locator } from '@playwright/test';
import { test as base, expect, UI5WCHelpers } from './ui5-fixtures.js';

export interface UI5WCInternalFixtures {
  ui5wc: UI5WCInternalHelpers;
}

export class UI5WCInternalHelpers extends UI5WCHelpers {
  /**
   * Asserts that an element never gains a specific attribute within an observation period.
   * Useful for verifying that a button doesn't become disabled during an async operation.
   *
   * @private
   * @example
   * await ui5wcInternal.shouldNeverHaveAttribute(submitButton, 'disabled', { observerTime: 1000 });
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
}

export const test = base.extend<UI5WCInternalFixtures>({
  ui5wc: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new UI5WCInternalHelpers(page));
  },
});

export { expect };
