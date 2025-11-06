'use client';

import '@ui5/webcomponents-ai/dist/TextArea.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface TextAreaAttributes {
  /**
   * Indicates the index of the currently displayed version.
   * @default 0
   */
  currentVersion?: number;

  /**
   * Defines whether the `TextArea` is currently in a loading(processing) state.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the prompt description of the current action.
   */
  promptDescription?: string;

  /**
   * Indicates the total number of result versions available.
   *
   * Notes:
   * Versioning is hidden if the value is `0`
   * @default 0
   */
  totalVersions?: number;
}

interface TextAreaDomRef extends Required<TextAreaAttributes>, Ui5DomRef {}

interface TextAreaPropTypes
  extends TextAreaAttributes,
    Omit<CommonProps, keyof TextAreaAttributes | 'menu' | 'onStopGeneration' | 'onVersionChange'> {
  /**
   * Defines a slot for `ui5-menu` integration. This slot allows you to pass a `ui5-menu` instance that will be associated with the assistant.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="menu"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `HTMLElement`
   */
  menu?: UI5WCSlotsNode;
  /**
   * Fired when the user requests to stop AI text generation.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onStopGeneration?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when the user clicks on version navigation buttons.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onVersionChange?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;
}

/**
 * The `TextArea` component extends the standard TextArea with Writing Assistant capabilities.
 * It provides AI-powered text generation, editing suggestions, and version management functionality.
 *
 * ### Structure
 * The `TextArea` consists of the following elements:
 * - TextArea: The main text input area with all standard textarea functionality
 * - WritingAssistant: Dedicated toolbar containing:
 *   - Versioning: A component with left/right navigation buttons and a label for browsing AI-generated versions
 *   - AI Button: Opens a menu that can be extended with custom AI generation options through slotting
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/TextArea) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.
 * @experimental The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
 */
const TextArea = withWebComponent<TextAreaPropTypes, TextAreaDomRef>(
  'ui5-ai-textarea',
  ['currentVersion', 'promptDescription', 'totalVersions'],
  ['loading'],
  ['menu'],
  ['stop-generation', 'version-change'],
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaDomRef, TextAreaPropTypes };
