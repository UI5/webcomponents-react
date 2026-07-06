import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./src-CnY9DUvJ.js";import{n}from"./withWebComponent-CVPnvZjE.js";import{c as r,p as i}from"./MenuItem-DGV1N_ZL.js";var a,o=e((()=>{r(),t(),a=n(`ui5-menu-item-group`,[`checkMode`],[],[],[]),a.displayName=`MenuItemGroup`;try{a.displayName=`MenuItemGroup`,a.__docgenInfo={description:`The \`MenuItemGroup\` component represents a group of items designed for use inside a \`Menu\`.
Items belonging to the same group should be wrapped by a \`MenuItemGroup\`.
Each group can have an \`checkMode\` property, which defines the check mode for the items within the group.
The possible values for \`checkMode\` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the \`checkMode\` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

\`MenuItemGroup\` represents a collection of \`MenuItem\` components that can have the same check mode.
The items are addeed to the group's \`items\` slot.



__Note:__ This is a UI5 Web Component! [MenuItemGroup UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MenuItemGroup) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`MenuItemGroup`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupPropTypes`}],description:"Defines the items of this component.\n**Note:** The slot can hold any combination of components of type `MenuItem` or `MenuSeparator` or both.\n\n__Supported Node Type/s:__ `Array<IMenuItem>`",name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},checkMode:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupAttributes`}],description:`Defines the component's check mode.`,name:`checkMode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuItemGroup/index.d.ts`,name:`MenuItemGroupAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Single" | "Multiple" | MenuItemGroupCheckMode`,value:[{value:`"None"`},{value:`"Single"`},{value:`"Multiple"`},{value:`"None"`,description:`default type (items in a group cannot be checked)`,fullComment:`default type (items in a group cannot be checked)
@public`,tags:{public:``}},{value:`"Single"`,description:`Single item check mode (only one item in a group can be checked at a time)`,fullComment:`Single item check mode (only one item in a group can be checked at a time)
@public`,tags:{public:``}},{value:`"Multiple"`,description:`Multiple items check mode (multiple items in a group can be checked at a time)`,fullComment:`Multiple items check mode (multiple items in a group can be checked at a time)
@public`,tags:{public:``}}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents__.`}}}catch{}})),s,c=e((()=>{i(),t(),s=n(`ui5-menu-separator`,[],[],[],[`click`]),s.displayName=`MenuSeparator`;try{s.displayName=`MenuSeparator`,s.__docgenInfo={description:"The `MenuSeparator` represents a horizontal line to separate menu items inside a `Menu`.\n\n__Note:__ This is a UI5 Web Component! [MenuSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/MenuSeparator) | [Repository](https://github.com/UI5/webcomponents)",displayName:`MenuSeparator`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/MenuSeparator/index.d.ts`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuSeparator/index.d.ts`,name:`MenuSeparatorPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/MenuSeparator/index.d.ts`,name:`MenuSeparatorPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<MenuSeparatorDomRef, ListItemBaseClickEventDetail>) => void`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}}));export{o as i,c as n,a as r,s as t};