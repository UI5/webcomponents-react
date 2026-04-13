import{n as e}from"./chunk-zsgVPwQN.js";import{n as t}from"./withWebComponent-CHQehdHD.js";import{t as n}from"./dist-BbhvNpX4.js";import{n as r}from"./Tag-DJMGVn61.js";var i,a=e((()=>{r(),n(),i=t(`ui5-tag`,[`colorScheme`,`design`,`size`,`wrappingType`],[`hideStateIcon`,`interactive`],[`icon`],[`click`]),i.displayName=`Tag`;try{i.displayName=`Tag`,i.__docgenInfo={description:`The \`Tag\` is a component which serves
the purpose to attract the user attention to some piece
of information (state, quantity, condition, etc.).
It can contain icon and text information, and its design can be chosen from specific design types.

### Usage Guidelines

- If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the \`wrappingType\` property.
- Colors can be semantic or not semantic.



__Note:__ This is a UI5 Web Component! [Tag UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Tag) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`Tag`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`}],description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`},required:!1,tags:{},type:{name:`ReactNode | ReactNode[]`}},icon:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`}],description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

__Supported Node Type/s:__ \`Array<IIcon>\``,name:`icon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`},required:!1,tags:{},type:{name:`UI5WCSlotsNode`}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`}],description:`Fired when the user clicks on an interactive tag.

**Note:** The event will be fired if the \`interactive\` property is \`true\`

**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<TagDomRef, never>) => void`}},colorScheme:{defaultValue:{value:`"1"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:'Defines the color scheme of the component.\nThere are 10 predefined schemes.\nTo use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.',name:`colorScheme`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`"1"`},type:{name:`string`}},design:{defaultValue:{value:`"Neutral"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:`Defines the design type of the component.

**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`"Neutral"`},type:{name:`enum`,raw:`"Critical" | "Neutral" | "Positive" | "Negative" | "Information" | TagDesign | "Set1" | "Set2"`,value:[{value:`"Critical"`},{value:`"Neutral"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`},{value:`"Set1"`,description:`Set1 of generic indication colors that are intended for industry-specific use cases`,fullComment:`Set1 of generic indication colors that are intended for industry-specific use cases
@public`,tags:{public:``}},{value:`"Set2"`,description:`Set2 of generic indication colors that are intended for industry-specific use cases`,fullComment:`Set2 of generic indication colors that are intended for industry-specific use cases
@public`,tags:{public:``}},{value:`"Neutral"`,description:`Neutral design`,fullComment:`Neutral design
@public`,tags:{public:``}},{value:`"Information"`,description:`Information design`,fullComment:`Information design
@public`,tags:{public:``}},{value:`"Positive"`,description:`Positive design`,fullComment:`Positive design
@public`,tags:{public:``}},{value:`"Negative"`,description:`Negative design`,fullComment:`Negative design
@public`,tags:{public:``}},{value:`"Critical"`,description:`Critical design`,fullComment:`Critical design
@public`,tags:{public:``}},{value:`"Set1"`},{value:`"Set2"`}]}},hideStateIcon:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:`Defines if the default state icon is shown.

**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:`hideStateIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:`Defines if the component is interactive (focusable and pressable).

**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:`interactive`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`false`},type:{name:`boolean`}},size:{defaultValue:{value:`"S"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:`Defines predefined size of the component.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`size`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`"S"`},type:{name:`enum`,raw:`"S" | "L" | TagSize`,value:[{value:`"S"`},{value:`"L"`},{value:`"S"`,description:`Small size of the tag`,fullComment:`Small size of the tag
@public`,tags:{public:``}},{value:`"L"`,description:`Large size of the tag`,fullComment:`Large size of the tag
@public`,tags:{public:``}}]}},wrappingType:{defaultValue:{value:`"Normal"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`}],description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** For option "Normal" the text will wrap and the
words will not be broken based on hyphenation.

**Note:** Available since [v1.22.0](https://github.com/UI5/webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:`wrappingType`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Tag/index.d.ts`,name:`TagAttributes`},required:!1,tags:{default:`"Normal"`},type:{name:`enum`,raw:`"None" | WrappingType | "Normal"`,value:[{value:`"None"`},{value:`"None"`,description:`The text will be truncated with an ellipsis.`,fullComment:`The text will be truncated with an ellipsis.
@public`,tags:{public:``}},{value:`"Normal"`,description:`The text will wrap. The words will not be broken based on hyphenation.`,fullComment:`The text will wrap. The words will not be broken based on hyphenation.
@public`,tags:{public:``}},{value:`"Normal"`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`boolean`}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}}));export{a as n,i as t};