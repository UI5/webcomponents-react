import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{X as r,Y as i}from"./CustomElementsScopeUtils-CeUpht4U.js";import{a,c as o,d as s,f as c,i as ee,l,m as te,n as ne,o as re,p as ie,r as u,s as d,u as f}from"./jsx-runtime-BpKzXHRO.js";import{n as p,t as m}from"./withWebComponent-RGzXMq_m.js";import{t as ae}from"./jsx-runtime-BdxMnOeJ.js";import{n as h,t as oe}from"./event-strict-C4u0wMzB.js";import{n as g,t as _}from"./parameters-bundle.css-CXl3cTl0.js";import{n as se,t as v}from"./slot-strict-BSUUcNBc.js";import{n as ce,t as y}from"./CheckBox-DTIMB3zk.js";import{n as le,t as ue}from"./Input-DxTNpmWs.js";import{n as de,t as fe}from"./Popover-DBdJTYmQ.js";import{a as pe,o as me}from"./ToolbarButton-BIFiUWTP.js";import{i as he,n as ge,r as b,t as x}from"./ToolbarButton-DBx_ZXqg.js";import{n as _e,t as S}from"./ToolbarItem-BYoqTxPp.js";import{n as ve,t as ye}from"./Option-BAePqLqg.js";import{n as be,t as xe}from"./Select-B7S6sl08.js";import{i as Se,n as Ce,r as we,t as C}from"./ComboBoxItem-1-lZ5ozi.js";import{n as Te,t as Ee}from"./DatePicker-DJpCYefR.js";import{i as De,n as Oe,r as ke,t as w}from"./MultiComboBoxItem-Bh_djrtN.js";import{n as Ae,t as T}from"./RadioButton-C92fU5Gd.js";import{n as je,t as Me}from"./Switch-DUzLUKtA.js";import{n as Ne}from"./ToolbarSpacer-BDqFazoG.js";var E;function D(){return(D=e((()=>{r(),a(),_(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>re),i(`@ui5/webcomponents`,`sap_horizon`,async()=>g,`host`),E=`:host(:not([hidden])){width:100%}:host([is-overflowed]) .ui5-tb-popover-item{align-items:inherit;width:100%}
`})))()}function Pe(){return ee(xe,{class:this.classes.root,style:this.styles,value:this.value,"data-ui5-external-action-item-id":this._id,valueState:this.valueState,disabled:this.disabled,accessibleName:this.accessibleName,accessibleNameRef:this.accessibleNameRef,onClick:(...e)=>this.onClick(...e),onClose:(...e)=>this.onClose(...e),onOpen:(...e)=>this.onOpen(...e),onChange:(...e)=>this.onChange(...e),children:[this.hasCustomLabel&&u(`slot`,{name:`label`,slot:`label`}),this.options.map((e,t)=>u(ye,{selected:e.selected,value:e.value,"data-ui5-external-action-item-index":t,children:e.textContent}))]})}function O(){return(O=e((()=>{ne(),be(),ve()})))()}var k,A;function j(){return(j=e((()=>{d(),s(),l(),se(),oe(),D(),O(),me(),k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends pe{constructor(){super(...arguments),this.valueState=`None`,this.disabled=!1,this._value=``}set value(e){this.select&&this.select.value!==e&&(this.select.value=e),this._value=e}get value(){return this.select?this.select.value:this._value}get select(){return this.shadowRoot.querySelector(`[ui5-select]`)}onClick(e){e.stopImmediatePropagation(),!this.fireDecoratorEvent(`click`,{targetRef:e.target})&&!this.preventOverflowClosing&&this.fireDecoratorEvent(`close-overflow`)}onOpen(e){e.stopImmediatePropagation(),this.fireDecoratorEvent(`open`,{targetRef:e.target})||this.fireDecoratorEvent(`close-overflow`)}onClose(e){e.stopImmediatePropagation(),this.fireDecoratorEvent(`close`,{targetRef:e.target})||this.fireDecoratorEvent(`close-overflow`)}onChange(e){e.stopImmediatePropagation();let t=Number(e.detail.selectedOption?.getAttribute(`data-ui5-external-action-item-index`)),n=this.options[t];this.fireDecoratorEvent(`change`,{...e.detail,targetRef:e.target,selectedToolbarOption:n})&&this.fireDecoratorEvent(`close-overflow`),this._syncOptions(t)}_syncOptions(e){this.options.forEach((t,n)=>{t.selected=n===e})}get styles(){return{width:this.isOverflowed?void 0:this.width}}get hasCustomLabel(){return!!this.label.length}},k([f()],A.prototype,`width`,void 0),k([v({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],A.prototype,`options`,void 0),k([v()],A.prototype,`label`,void 0),k([f()],A.prototype,`valueState`,void 0),k([f({type:Boolean})],A.prototype,`disabled`,void 0),k([f()],A.prototype,`accessibleName`,void 0),k([f()],A.prototype,`accessibleNameRef`,void 0),k([f()],A.prototype,`value`,null),A=k([c({tag:`ui5-toolbar-select`,template:Pe,renderer:o,styles:E}),h(`change`,{bubbles:!0,cancelable:!0}),h(`open`,{bubbles:!0}),h(`close`)],A),A.define()})))()}var M;function N(){return(N=e((()=>{j(),m(),M=p(`ui5-toolbar-select`,[`accessibleName`,`accessibleNameRef`,`overflowPriority`,`value`,`valueState`,`width`],[`disabled`,`preventOverflowClosing`],[`label`],[`change`,`close`,`open`]),M.displayName=`ToolbarSelect`;try{M.displayName=`ToolbarSelect`,M.__docgenInfo={description:'The `ToolbarSelect` component is used to create a toolbar drop-down list.\nThe items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.\n\n\n\n`import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelect UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelect) | [Repository](https://github.com/UI5/webcomponents)',displayName:`ToolbarSelect`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`}],description:`Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`ToolbarSelectOption\` component to define the desired options.

__Supported Node Type/s:__ \`Array<ToolbarSelectOption>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},label:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`}],description:`Defines the HTML element that will be displayed in the component input part,
representing the selected option.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="label"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`label`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onChange:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`}],description:`Fired when the selected option changes.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.25.0](https://github.com/UI5/webcomponents/releases/tag/v2.25.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:`onChange`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void`}},onClose:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`}],description:`Fired after the component's dropdown menu closes.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:`onClose`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void`}},onOpen:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`}],description:`Fired after the component's dropdown menu opens.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onOpen`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<ToolbarSelectDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines the accessible ARIA name of the component.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},accessibleNameRef:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Receives id(or many ids) of the elements that label the select.`,name:`accessibleNameRef`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:`disabled`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},overflowPriority:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:`overflowPriority`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.`,fullComment:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.
@public`,tags:{public:``}},{value:`"NeverOverflow"`,description:`When set, the item will never go to the overflow popover.`,fullComment:`When set, the item will never go to the overflow popover.
@public`,tags:{public:``}},{value:`"AlwaysOverflow"`,description:`When set, the item will be always part of the overflow part of ui5-toolbar.`,fullComment:`When set, the item will be always part of the overflow part of ui5-toolbar.
@public`,tags:{public:``}},{value:`"NeverOverflow"`},{value:`"AlwaysOverflow"`}]}},preventOverflowClosing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:`preventOverflowClosing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines the value of the component:

**Note:** Available since [v2.15.0](https://github.com/UI5/webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{},type:{name:`string`}},valueState:{defaultValue:{value:`"None"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines the value state of the component.`,name:`valueState`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`"None"`},type:{name:`enum`,raw:`"None" | "Positive" | "Critical" | "Negative" | "Information" | ValueState`,value:[{value:`"None"`},{value:`"Positive"`},{value:`"Critical"`},{value:`"Negative"`},{value:`"Information"`},{value:`"None"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Positive"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Critical"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Negative"`,description:``,fullComment:`@public`,tags:{public:``}},{value:`"Information"`,description:``,fullComment:`@public`,tags:{public:``}}]}},width:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`}],description:`Defines the width of the select.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:`width`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelect/index.d.ts`,name:`ToolbarSelectAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}var P,F;function I(){return(I=e((()=>{te(),s(),se(),l(),P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends ie{set selected(e){e?(this.setAttribute(`selected`,``),this._clearSiblingsAndSync()):this.removeAttribute(`selected`)}get selected(){return this.hasAttribute(`selected`)}_clearSiblingsAndSync(){let e=this.parentElement;e&&(e.options?.forEach(e=>{e!==this&&e.removeAttribute(`selected`)}),e.select&&(e.select.value=this.value!==void 0&&this.value!==``?this.value:this.textContent||``))}},P([f()],F.prototype,`value`,void 0),P([f({type:Boolean})],F.prototype,`selected`,null),P([v({type:Node,default:!0,invalidateOnChildChange:!0})],F.prototype,`text`,void 0),F=P([c(`ui5-toolbar-select-option`)],F),F.define()})))()}var L;function R(){return(R=e((()=>{I(),m(),L=p(`ui5-toolbar-select-option`,[`value`],[`selected`],[],[]),L.displayName=`ToolbarSelectOption`;try{L.displayName=`ToolbarSelectOption`,L.__docgenInfo={description:"The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.\n\n__Note:__ This is a UI5 Web Component! [ToolbarSelectOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSelectOption) | [Repository](https://github.com/UI5/webcomponents)",displayName:`ToolbarSelectOption`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionPropTypes`}],description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},value:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionAttributes`}],description:`Defines the value of the component.

**Note:** Available since [v2.25.0](https://github.com/UI5/webcomponents/releases/tag/v2.25.0) of **@ui5/webcomponents**.`,name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSelectOption/index.d.ts`,name:`ToolbarSelectOptionAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}function Fe(){return u(`div`,{class:`ui5-tb-separator ui5-tb-item`,"data-ui5-external-action-item-id":this._id})}function z(){return(z=e((()=>{ne()})))()}var B;function Ie(){return(Ie=e((()=>{r(),a(),_(),i(`@ui5/webcomponents-theming`,`sap_horizon`,async()=>re),i(`@ui5/webcomponents`,`sap_horizon`,async()=>g,`host`),B=`.ui5-tb-separator{height:var(--_ui5-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}
`})))()}var V,H;function Le(){return(Le=e((()=>{d(),s(),l(),z(),Ie(),me(),V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends pe{constructor(){super(...arguments),this.visible=!1}get isSeparator(){return!0}get isInteractive(){return!1}},V([f({type:Boolean})],H.prototype,`visible`,void 0),H=V([c({tag:`ui5-toolbar-separator`,template:Fe,renderer:o,styles:[B]})],H),H.define()})))()}var U;function W(){return(W=e((()=>{Le(),m(),U=p(`ui5-toolbar-separator`,[`overflowPriority`],[`preventOverflowClosing`],[],[]),U.displayName=`ToolbarSeparator`;try{U.displayName=`ToolbarSeparator`,U.__docgenInfo={description:`The \`ToolbarSeparator\` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSeparator UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSeparator) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ToolbarSeparator`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ToolbarSeparator/index.d.ts`,methods:[],props:{overflowPriority:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSeparator/index.d.ts`,name:`ToolbarSeparatorAttributes`}],description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:`overflowPriority`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSeparator/index.d.ts`,name:`ToolbarSeparatorAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.`,fullComment:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.
@public`,tags:{public:``}},{value:`"NeverOverflow"`,description:`When set, the item will never go to the overflow popover.`,fullComment:`When set, the item will never go to the overflow popover.
@public`,tags:{public:``}},{value:`"AlwaysOverflow"`,description:`When set, the item will be always part of the overflow part of ui5-toolbar.`,fullComment:`When set, the item will be always part of the overflow part of ui5-toolbar.
@public`,tags:{public:``}},{value:`"NeverOverflow"`},{value:`"AlwaysOverflow"`}]}},preventOverflowClosing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSeparator/index.d.ts`,name:`ToolbarSeparatorAttributes`}],description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:`preventOverflowClosing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSeparator/index.d.ts`,name:`ToolbarSeparatorAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}var G;function K(){return(K=e((()=>{Ne(),m(),G=p(`ui5-toolbar-spacer`,[`overflowPriority`,`width`],[`preventOverflowClosing`],[],[]),G.displayName=`ToolbarSpacer`;try{G.displayName=`ToolbarSpacer`,G.__docgenInfo={description:`The \`ToolbarSpacer\` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

__Note:__ This is a UI5 Web Component! [ToolbarSpacer UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ToolbarSpacer) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`ToolbarSpacer`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,methods:[],props:{overflowPriority:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`}],description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:`overflowPriority`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Default" | ToolbarItemOverflowBehavior | "NeverOverflow" | "AlwaysOverflow"`,value:[{value:`"Default"`},{value:`"Default"`,description:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.`,fullComment:`The item is presented inside the toolbar and goes in the popover, when there is not enough space.
@public`,tags:{public:``}},{value:`"NeverOverflow"`,description:`When set, the item will never go to the overflow popover.`,fullComment:`When set, the item will never go to the overflow popover.
@public`,tags:{public:``}},{value:`"AlwaysOverflow"`,description:`When set, the item will be always part of the overflow part of ui5-toolbar.`,fullComment:`When set, the item will be always part of the overflow part of ui5-toolbar.
@public`,tags:{public:``}},{value:`"NeverOverflow"`},{value:`"AlwaysOverflow"`}]}},preventOverflowClosing:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`}],description:`Defines if the toolbar overflow popup should close upon interaction with the item.
It will close by default.`,name:`preventOverflowClosing`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},width:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`}],description:`Defines the width of the spacer.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:`width`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/ToolbarSpacer/index.d.ts`,name:`ToolbarSpacerAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[1.17.0](https://github.com/UI5/webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.`,abstract:``}}}catch{}})))()}var Re,ze;function Be(){return(Be=e((()=>{(function(e){e.Start=`Start`,e.End=`End`})(Re||={}),ze=Re})))()}var Ve=t({Default:()=>X,OpenPopover:()=>Z,WithToolbarItem:()=>Q,__namedExportsOrder:()=>He,default:()=>Y}),q,J,Y,X,Z,Q,He;function $(){return($=e((()=>{Be(),q=n(),ce(),Se(),Ce(),Te(),le(),De(),Oe(),de(),Ae(),je(),ge(),_e(),N(),R(),W(),K(),he(),J=ae(),Y={title:`Layouts & Floorplans / Toolbar`,component:b,argTypes:{children:{control:{disable:!0}}},args:{alignContent:ze.Start},tags:[`package:@ui5/webcomponents`]},X={render:e=>(0,J.jsxs)(b,{...e,children:[(0,J.jsx)(x,{text:`Button 1`}),(0,J.jsxs)(M,{children:[(0,J.jsx)(L,{children:`Option 1`}),(0,J.jsx)(L,{children:`Option 2`}),(0,J.jsx)(L,{children:`Option 3`})]}),(0,J.jsx)(U,{}),(0,J.jsx)(G,{}),(0,J.jsx)(U,{}),(0,J.jsx)(x,{text:`Button 2`}),(0,J.jsxs)(M,{children:[(0,J.jsx)(L,{children:`Option 1`}),(0,J.jsx)(L,{children:`Option 2`}),(0,J.jsx)(L,{children:`Option 3`})]})]})},Z={name:`Opening Popovers via ToolbarButton`,render(e){let[t,n]=(0,q.useState)(!1),r=(0,q.useRef)(null);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(b,{...e,children:(0,J.jsx)(x,{onClick:e=>{e.preventDefault();let{targetRef:t}=e.detail;r.current&&(r.current.opener=t,n(!0))},text:`Open Popover`})}),(0,J.jsx)(fe,{open:t,ref:r,onClose:()=>{n(!1)},children:`Content`})]})}},Q={render(e){return(0,J.jsxs)(b,{...e,children:[(0,J.jsx)(S,{children:(0,J.jsxs)(`div`,{role:`radiogroup`,"aria-label":`Options`,className:`toolbar-item-group`,children:[(0,J.jsx)(T,{name:`group1`,text:`Option 1`,checked:!0}),(0,J.jsx)(T,{name:`group1`,text:`Option 2`}),(0,J.jsx)(T,{name:`group1`,text:`Option 3`})]})}),(0,J.jsx)(S,{children:(0,J.jsxs)(`div`,{role:`group`,"aria-label":`Checkboxes`,className:`toolbar-item-group`,children:[(0,J.jsx)(y,{text:`Checkbox 1`}),(0,J.jsx)(y,{text:`Checkbox 2`,checked:!0}),(0,J.jsx)(y,{text:`Checkbox 3`})]})}),(0,J.jsx)(S,{children:(0,J.jsx)(ue,{placeholder:`Enter text`})}),(0,J.jsx)(S,{children:(0,J.jsxs)(we,{placeholder:`Select an option`,children:[(0,J.jsx)(C,{text:`Option 1`}),(0,J.jsx)(C,{text:`Option 2`}),(0,J.jsx)(C,{text:`Option 3`})]})}),(0,J.jsx)(S,{children:(0,J.jsxs)(ke,{placeholder:`Select options`,children:[(0,J.jsx)(w,{text:`Item 1`}),(0,J.jsx)(w,{text:`Item 2`}),(0,J.jsx)(w,{text:`Item 3`})]})}),(0,J.jsx)(S,{children:(0,J.jsx)(Me,{textOn:`On`,textOff:`Off`})}),(0,J.jsx)(S,{children:(0,J.jsx)(Ee,{placeholder:`Select a date`})})]})}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return <>
        <Toolbar {...args}>
          <ToolbarButton onClick={e => {
          e.preventDefault();
          const {
            targetRef
          } = e.detail;
          if (popoverRef.current) {
            popoverRef.current.opener = targetRef;
            setPopoverOpen(true);
          }
        }} text="Open Popover" />
        </Toolbar>
        <Popover open={popoverOpen} ref={popoverRef} onClose={() => {
        setPopoverOpen(false);
      }}>
          Content
        </Popover>
      </>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render(args) {
    return <Toolbar {...args}>
        <ToolbarItem>
          <div role="radiogroup" aria-label="Options" className="toolbar-item-group">
            <RadioButton name="group1" text="Option 1" checked />
            <RadioButton name="group1" text="Option 2" />
            <RadioButton name="group1" text="Option 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <div role="group" aria-label="Checkboxes" className="toolbar-item-group">
            <CheckBox text="Checkbox 1" />
            <CheckBox text="Checkbox 2" checked />
            <CheckBox text="Checkbox 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <Input placeholder="Enter text" />
        </ToolbarItem>
        <ToolbarItem>
          <ComboBox placeholder="Select an option">
            <ComboBoxItem text="Option 1" />
            <ComboBoxItem text="Option 2" />
            <ComboBoxItem text="Option 3" />
          </ComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <MultiComboBox placeholder="Select options">
            <MultiComboBoxItem text="Item 1" />
            <MultiComboBoxItem text="Item 2" />
            <MultiComboBoxItem text="Item 3" />
          </MultiComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <Switch textOn="On" textOff="Off" />
        </ToolbarItem>
        <ToolbarItem>
          <DatePicker placeholder="Select a date" />
        </ToolbarItem>
      </Toolbar>;
  }
}`,...Q.parameters?.docs?.source}}},He=[`Default`,`OpenPopover`,`WithToolbarItem`]})))()}export{$ as a,U as c,R as d,M as f,Q as i,W as l,Z as n,G as o,N as p,Ve as r,K as s,X as t,L as u};