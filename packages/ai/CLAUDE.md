# @ui5/webcomponents-ai-react

React wrappers for `@ui5/webcomponents-ai` - AI-focused UI5 Web Components.

> **Experimental:** This package is under active development. APIs may change.
>
> **Horizon themes only** - not compatible with other SAP themes.

## Documentation

For component APIs, props, and usage examples, see the official UI5 Web Components AI documentation:

**https://sap.github.io/ui5-webcomponents/components/ai/**

## Installation

```bash
npm install @ui5/webcomponents-ai-react @ui5/webcomponents-ai
```

## Available Components

| Component     | Description                        |
| ------------- | ---------------------------------- |
| `Button`      | Multi-state AI action button       |
| `ButtonState` | State definition for Button        |
| `PromptInput` | Input for AI prompts               |
| `Input`       | Input with AI Writing Assistant    |
| `TextArea`    | TextArea with AI Writing Assistant |

## Import Pattern

```tsx
import { Button } from '@ui5/webcomponents-ai-react/Button';
import { ButtonState } from '@ui5/webcomponents-ai-react/ButtonState';
import { PromptInput } from '@ui5/webcomponents-ai-react/PromptInput';
import { Input } from '@ui5/webcomponents-ai-react/Input';
import { TextArea } from '@ui5/webcomponents-ai-react/TextArea';
```

## Event Handling

Event data is in `e.detail`. For fully controlled components, call `e.preventDefault()` in `onInput` to prevent internal state updates.

**Cancelable events:** `Input.onInput`, `Input.onButtonClick`, `TextArea.onInput`
