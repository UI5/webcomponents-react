import"./TextArea-B8sr9wqB.js";import{w as n}from"./iframe-Djuy8UzU.js";const e=n("ui5-textarea",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","growingMaxRows","maxlength","name","placeholder","rows","value","valueState"],["disabled","growing","readonly","required","showExceededText"],["valueStateMessage"],["change","input","scroll","select"]);e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:`The \`TextArea\` component is used to enter multiple rows of text.

When empty, it can hold a placeholder similar to a \`Input\`.
You can define the rows of the \`TextArea\` and also determine specific behavior when handling long texts.



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TextArea",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\nThe value state message slot should contain only one root element.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has\n`valueState` of type `Information`, `Critical` or `Negative`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void"}},onScroll:{defaultValue:null,description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScroll",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:"false"},description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxRows:{defaultValue:{value:"0"},description:"Defines the maximum number of rows that the component can grow.",name:"growingMaxRows",required:!1,type:{name:"number"}},maxlength:{defaultValue:{value:"undefined"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text rows for the component.\n\n**Notes:**\n\n- If the `growing` property is enabled, this property defines the minimum rows to be displayed\nin the textarea.\n- The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="TextArea",e.__docgenInfo={description:`The \`TextArea\` component is used to enter multiple rows of text.

When empty, it can hold a placeholder similar to a \`Input\`.
You can define the rows of the \`TextArea\` and also determine specific behavior when handling long texts.



__Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/TextArea) | [Repository](https://github.com/UI5/webcomponents)`,displayName:"TextArea",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\nThe value state message slot should contain only one root element.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed if the component has\n`valueState` of type `Information`, `Critical` or `Negative`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n__Supported Node Type/s:__ `Array<HTMLElement>`",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the text has changed and the focus leaves the component.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke or when
something is pasted.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void"}},onScroll:{defaultValue:null,description:`Fired when textarea is scrolled.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onScroll",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},onSelect:{defaultValue:null,description:`Fired when some text has been selected.

**Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onSelect",required:!1,type:{name:"(event: Ui5CustomEvent<TextAreaDomRef, never>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the textarea.

**Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the textarea.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Indicates whether the user can interact with the component or not.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},growing:{defaultValue:{value:"false"},description:"Enables the component to automatically grow and shrink dynamically with its content.",name:"growing",required:!1,type:{name:"boolean"}},growingMaxRows:{defaultValue:{value:"0"},description:"Defines the maximum number of rows that the component can grow.",name:"growingMaxRows",required:!1,type:{name:"number"}},maxlength:{defaultValue:{value:"undefined"},description:"Defines the maximum number of characters that the `value` can have.",name:"maxlength",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},rows:{defaultValue:{value:"0"},description:"Defines the number of visible text rows for the component.\n\n**Notes:**\n\n- If the `growing` property is enabled, this property defines the minimum rows to be displayed\nin the textarea.\n- The CSS `height` property wins over the `rows` property, if both are set.",name:"rows",required:!1,type:{name:"number"}},showExceededText:{defaultValue:{value:"false"},description:"Determines whether the characters exceeding the maximum allowed character count are visible\nin the component.\n\nIf set to `false`, the user is not allowed to enter more characters than what is set in the\n`maxlength` property.\nIf set to `true` the characters exceeding the `maxlength` value are selected on\npaste and the counter below the component displays their number.",name:"showExceededText",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:`Defines the value state of the component.

**Note:** If \`maxlength\` property is set,
the component turns into "Critical" state once the characters exceeds the limit.
In this case, only the "Negative" state is considered and can be applied.`,name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T};
