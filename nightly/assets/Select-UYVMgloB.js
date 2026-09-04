import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{d as t,f as n,l as r,n as i,r as a,u as o}from"./jsx-runtime-bFgdZ7BI.js";import{n as s,t as c}from"./withWebComponent-DaFttnri.js";import{t as l}from"./jsx-runtime-BdxMnOeJ.js";import{n as u,t as d}from"./slot-strict-BSUUcNBc.js";import{o as f,s as p}from"./ListItemGroup-DS3RTba2.js";import{n as m,t as h}from"./ListItemBaseTemplate-BrBuuuSE.js";import{i as g,r as _}from"./Option-DipYlq9t.js";import{n as v,t as y}from"./Option-DT2t3LyU.js";import{i as b,r as x}from"./react-qN2cStNd.js";import{_ as S,d as C,o as w,r as T,u as E}from"./blocks-B3o2J0HG.js";import{S as D,b as O,f as k,t as A,u as j}from"./components-s16MKs_z.js";import{n as M,t as N}from"./SubcomponentsSection-Kv79Q7K7.js";import{n as P,r as F,t as I}from"./Select.stories-BDEMGiAE.js";function L(){return h.call(this,{listItemContent:R},{role:`option`,title:this.tooltip})}function R(){return a(`slot`,{})}function z(){return(z=e((()=>{i(),m()})))()}var B,V;function H(){return(H=e((()=>{t(),u(),r(),p(),z(),g(),B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends f{get effectiveDisplayText(){return this.displayText||this.textContent||``}},B([o()],V.prototype,`displayText`,void 0),B([o()],V.prototype,`value`,void 0),B([d({type:Node,default:!0,invalidateOnChildChange:!0})],V.prototype,`content`,void 0),B([o()],V.prototype,`tooltip`,void 0),B([o({type:Boolean})],V.prototype,`selected`,void 0),V=B([n({tag:`ui5-option-custom`,template:L,styles:[f.styles,_]})],V),V.define()})))()}var U;function W(){return(W=e((()=>{H(),c(),U=s(`ui5-option-custom`,[`displayText`,`tooltip`,`value`],[`selected`],[],[`click`]),U.displayName=`OptionCustom`;try{U.displayName=`OptionCustom`,U.__docgenInfo={description:`The \`OptionCustom\` component defines a custom content of an option in the \`Select\`.
A component to be the same way as the standard \`Option\`.
The component accepts arbitrary HTML content to allow full customization.



__Note:__ This is a UI5 Web Component! [OptionCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionCustom) | [Repository](https://github.com/UI5/webcomponents)`,displayName:`OptionCustom`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomPropTypes`}],description:`Defines the content of the component.

__Supported Node Type/s:__ \`Array<Node>\``,name:`children`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`ReactNode | ReactNode[]`,value:[{value:`string`},{value:`number`},{value:`bigint`},{value:`false`},{value:`true`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Iterable<ReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactPortal`,description:``,fullComment:``,tags:{}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`ReactNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomPropTypes`}],description:`Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\` property is set to \`true\`.

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<OptionCustomDomRef, ListItemBaseClickEventDetail>) => void`}},displayText:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`}],description:"Defines the text, displayed inside the `Select` input filed\nwhen the option gets selected.",name:`displayText`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`}],description:`Defines the selected state of the component.`,name:`selected`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},tooltip:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`}],description:`Defines the tooltip of the option.`,name:`tooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},value:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`}],description:"Defines the value of the `Select` inside an HTML Form element when this component is selected.\nFor more information on HTML Form support, see the `name` property of `Select`.",name:`value`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/OptionCustom/index.d.ts`,name:`OptionCustomAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{since:`[2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.`}}}catch{}})))()}function G(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...b(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C,{of:P}),`
`,(0,q.jsx)(k,{of:P,since:`0.4.0`,mergeSubComponents:!0,subComponents:[`OptionCustom`]}),`
`,(0,q.jsx)(`br`,{}),`
`,(0,q.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,q.jsx)(T,{of:I}),`
`,(0,q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,q.jsx)(O,{of:I}),`
`,(0,q.jsx)(t.h2,{id:`recipes`,children:`Recipes`}),`
`,(0,q.jsxs)(t.h3,{id:`get-the-id-of-the-selected-item-with-onchange`,children:[`Get the ID of the selected item with `,(0,q.jsx)(t.code,{children:`onChange`})]}),`
`,(0,q.jsxs)(t.p,{children:[`With the help of the HTML5 `,(0,q.jsx)(t.code,{children:`data-`}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,(0,q.jsx)(t.code,{children:`onChange`}),` event as part of the `,(0,q.jsx)(t.code,{children:`dataset`}),` object of the `,(0,q.jsx)(t.code,{children:`selectedOption`}),`:`]}),`
`,(0,q.jsx)(t.pre,{children:(0,q.jsx)(t.code,{className:`language-jsx`,children:`const data = [
  { id: 1, text: 'Option 1' },
  { id: 2, text: 'Option 2' }
];

const onChange = (event) => {
  // event.detail.selectedOption is a reference to the selected HTML Element
  // dataset contains all attributes that were passed with the data- prefix.
  console.log(event.detail.selectedOption.dataset.id);
};

<Select onChange={onChange}>
  {data.map((item) => (
    <Option key={item.id} data-id={item.id}>
      {item.text}
    </Option>
  ))}
</Select>;
`})}),`
`,(0,q.jsx)(E,{children:N}),`
`,(0,q.jsx)(t.h2,{id:`option`,children:`Option`}),`
`,(0,q.jsx)(w,{of:y}),`
`,(0,q.jsx)(D,{metaOf:P,of:y}),`
`,(0,q.jsx)(t.h2,{id:`optioncustom`,children:`OptionCustom`}),`
`,(0,q.jsx)(w,{of:U}),`
`,(0,q.jsx)(D,{metaOf:P,of:U}),`
`,(0,q.jsx)(j,{})]})}function K(e={}){let{wrapper:t}={...b(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;function J(){return(J=e((()=>{q=l(),x(),S(),A(),v(),W(),M(),F()})))()}J();export{K as default};