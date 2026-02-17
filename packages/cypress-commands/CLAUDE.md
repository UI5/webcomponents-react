# @ui5/webcomponents-cypress-commands

Cypress commands and queries for testing UI5 Web Components in React applications.

> **Note:** This package is extensible - PRs welcome for additional commands/queries.

## Installation

```bash
npm install -D @ui5/webcomponents-cypress-commands
```

## Setup

Import in your Cypress support file (e.g., `cypress/support/component.ts`):

```typescript
import '@ui5/webcomponents-cypress-commands';
```

For TypeScript, add the type reference:

```typescript
/// <reference types="@ui5/webcomponents-cypress-commands" />
```

## Commands

### Input Components

```typescript
// Type into ui5-input, ui5-combobox, ui5-multi-combobox, etc.
cy.get('[ui5-input]').typeIntoUi5Input('Hello World');

// Clear input
cy.get('[ui5-input]').clearUi5Input();

// Type with delay (for components needing time to initialize, e.g., ComboBox suggestions)
cy.get('[ui5-combobox]').typeIntoUi5InputWithDelay('Hello', 500);

// Type into ui5-textarea
cy.get('[ui5-textarea]').typeIntoUi5TextArea('Multi-line text');
```

### Toggle Components

```typescript
cy.get('[ui5-checkbox]').toggleUi5Checkbox();
cy.get('[ui5-switch]').toggleUi5Switch();
cy.get('[ui5-radio-button]').clickUi5RadioButton();
```

### Select/Dropdown Components

```typescript
// Open dropdown
cy.get('[ui5-select]').openDropDownByClick();
cy.get('[ui5-combobox]').openDropDownByClick();
cy.get('[ui5-multi-combobox]').openDropDownByClick();

// Click dropdown item by text (popover must be open)
cy.get('[ui5-select]').clickDropdownMenuItemByText('Option 2');
cy.get('[ui5-combobox]').clickDropdownMenuItemByText('Item 1');

// Click chained dropdown item
cy.get('[ui5-option]').clickDropdownMenuItem();
cy.get('[ui5-mcb-item]').clickDropdownMenuItem();
```

### List Components

```typescript
// Click list item by text
cy.get('[ui5-list]').clickUi5ListItemByText('List Item');
cy.clickUi5ListItemByText('List Item'); // Also works without chaining
```

### Popups

```typescript
// Close any popup with Escape key
cy.closeUi5PopupWithEsc();
```

## Queries

### TabContainer

```typescript
// Find tab by text (chain to ui5-tabcontainer)
cy.get('[ui5-tabcontainer]').findUi5TabByText('Tab 1');

// Find sub-tab popover button
cy.get('[ui5-tabcontainer]').findUi5TabOpenPopoverButtonByText('Tab 1.1');
```

### Toolbar

```typescript
// Find toolbar button by text
cy.findToolbarButtonByText('Button Text');
cy.get('[ui5-toolbar]').findToolbarButtonByText('Button Text');

// Get internal button element
cy.findToolbarButtonByText('Button Text', { queryShadowButton: true });
```

## Deprecated Commands

- `clickUi5SelectOptionByText` → use `clickDropdownMenuItemByText`
- `clickUi5SelectOption` → use `clickDropdownMenuItem`

## Important Notes

- **Popover must be open** before clicking dropdown items
- **`ui5-multi-combobox`** requires ~500ms delay before popover is available
- **`ui5-select`** uses keyboard Enter instead of click due to shadow DOM limitations
- Use **attribute selectors** (`[ui5-input]`) not tag names (`ui5-input`)
