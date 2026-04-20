import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./src-BX-hgO1b.js";import{n}from"./withWebComponent-CL5mZLlW.js";import{a as r}from"./Token-B3AAuHFi.js";var i,a=e((()=>{r(),t(),i=n(`ui5-tokenizer`,[`accessibleName`,`accessibleNameRef`,`name`],[`disabled`,`multiLine`,`readonly`,`showClearAll`],[],[`selection-change`,`token-delete`]),i.displayName=`Tokenizer`;try{i.displayName=`Tokenizer`,i.__docgenInfo={description:`A \`Tokenizer\` is an invisible container for \`Token\`s that supports keyboard navigation and token selection.

The \`Tokenizer\` consists of two parts:
- Tokens - displays the available tokens.
- N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.

### Keyboard Handling

#### Basic Navigation
The \`Tokenizer\` provides advanced keyboard handling.
When a token is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
- [Home] - Navigates to the first token.
- [End] - Navigates to the last token.

The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Space] - Selects a token.
- [Backspace] / [Delete] - Deletes a token.
**Note:** The deletion of a token is handled by the application with the use of the \`token-delete\` event.



__Note:__ This is a UI5 Web Component! [Tokenizer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Tokenizer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Tokenizer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Defines the tokens to be displayed.

__Supported Node Type/s:__ \`Array<Token>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`ReactNode | ReactNode[]`}},onSelectionChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Fired when token selection is changed by user interaction

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onSelectionChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void`}},onTokenDelete:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`}],description:`Fired when tokens are being deleted (delete icon, delete or backspace is pressed)

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onTokenDelete`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Receives id(or many ids) of the elements that label the component.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},multiLine:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether tokens are displayed on multiple lines.

**Note:** The \`multiLine\` property is in an experimental state and is a subject to change.

**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:`multiLine`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.
**Note:** When the component is used inside a form element,
the value is sent as the first element in the form data, even if it's empty.`,name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},readonly:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:`readonly`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},showClearAll:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`}],description:'Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect.\n\n**Note:** The `showClearAll` property is in an experimental state and is a subject to change.\n\n**Note:** Available since [v2.5.0](https://github.com/UI5/webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.',name:`showClearAll`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tokenizer/index.d.ts`,name:`TokenizerAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`boolean`}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`,experimental:`This component is availabe since 2.0 under an experimental flag and its API and behaviour are subject to change.`}}}catch{}}));export{a as n,i as t};