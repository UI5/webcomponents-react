import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./withWebComponent-DaFttnri.js";import{n as r}from"./ToolbarItem-Dw3MaVPO.js";var i;function a(){return(a=e((()=>{r(),n(),i=t(`ui5-toolbar-item`,[`overflowPriority`],[`preventOverflowClosing`],[],[]),i.displayName=`ToolbarItem`;try{i.displayName=`ToolbarItem`,i.__docgenInfo={description:`The \`ToolbarItem\` is a wrapper component used to integrate UI5 Web Components into the \`Toolbar\`.
It renders within the toolbar's shadow DOM and manages the lifecycle
and overflow behavior of its child component.

### Structure
The toolbar item wraps a single UI5 Web Component (such as CheckBox, Title, etc.) and handles:
- Overflow management (determining if the item should be displayed in the main toolbar or overflow popover)
- Automatic popover closing on interaction
- CSS custom state exposure for styling based on overflow state

### Usage
The \`ToolbarItem\` is typically used implicitly when adding components to a toolbar,
but specialized wrappers like \`ToolbarButton\` provide
component-specific functionality and should be preferred when available.

__Note:__ This is a UI5 Web Component! [ToolbarItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarItem) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ToolbarItem`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemPropTypes`}],description:`Wrapped component slot.

**Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<IToolbarItemContent>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},overflowPriority:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemAttributes`}],description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:`overflowPriority`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.`,fullComment:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.
@public`,tags:{public:``}},{value:`"NeverOverflow"`,description:`When set, the item will never go to the overflow popover.`,fullComment:`When set, the item will never go to the overflow popover.
@public`,tags:{public:``}},{value:`"AlwaysOverflow"`,description:`When set, the item will be always part of the overflow part of ui5-toolbar.`,fullComment:`When set, the item will be always part of the overflow part of ui5-toolbar.
@public`,tags:{public:``}},{value:`"NeverOverflow"`},{value:`"AlwaysOverflow"`}]}},preventOverflowClosing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemAttributes`}],description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:`preventOverflowClosing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarItem/index.d.ts`,name:`ToolbarItemAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of __@ui5/webcomponents__.`}}}catch{}})))()}export{a as n,i as t};