'use client';

import '@ui5/webcomponents-ai/dist/Input.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface InputAttributes {
  /**
   * Indicates the index of the currently displayed version.
   * @default 0
   */
  currentVersion?: number;

  /**
   * Defines whether the AI Writing Assistant is currently loading.
   *
   * When `true`, indicates that an AI action is in progress.
   * @default false
   */
  loading?: boolean;

  /**
   * Indicates the total number of result versions available.
   *
   * When not set or set to 0, the versioning will be hidden.
   * @default 0
   */
  totalVersions?: number;
}

interface InputDomRef extends Required<InputAttributes>, Ui5DomRef {}

interface InputPropTypes
  extends InputAttributes,
    Omit<CommonProps, keyof InputAttributes | 'actions' | 'onButtonClick' | 'onStopGeneration' | 'onVersionChange'> {
  /**
   * Defines the items of the menu for the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  actions?: UI5WCSlotsNode;
  /**
   * Fired when the user selects the AI button.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onButtonClick?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the user selects the "Stop" button to stop ongoing AI text generation.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onStopGeneration?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the user selects the version navigation buttons.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onVersionChange?: (event: Ui5CustomEvent<InputDomRef>) => void;
}

/**
 * The `Input` component extends the standard `ui5-input` with **AI Writing Assistant** capabilities.
 *
 * ### Structure
 *
 * The `Input` consists of the following main parts:
 *
 * - **Input Field** – Inherits all standard Input behaviors.
 * - **AI Action Button** – Appears when focused or loading, providing access to AI-related actions or stopping generation.
 *
 * The component automatically determines which elements to render based on its internal state:
 * - The AI Button is only shown when there are available `actions`.
 * - The version navigation appears only when `totalVersions > 1`.
 *
 * ### Keyboard Support
 *
 * - **Shift + F4** — Opens the AI menu.
 * - **Ctrl + Shift + Z / Y** — Navigates backward/forward between AI-generated versions.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [Input UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/Input) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.
 * @experimental The **@ui5/webcomponents-ai** package is under active development and considered experimental. Component APIs are subject to change.
 */
const Input = withWebComponent<InputPropTypes, InputDomRef>(
  'ui5-ai-input',
  ['currentVersion', 'totalVersions'],
  ['loading'],
  ['actions'],
  ['button-click', 'stop-generation', 'version-change'],
);

Input.displayName = 'Input';

export { Input };
export type { InputDomRef, InputPropTypes };
