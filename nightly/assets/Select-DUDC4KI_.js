import{c as g,s as c,Q as O,m as v,bi as j,w,j as e}from"./iframe-D_72XrxV.js";import{useMDXComponents as b}from"./index-66RF5jzG.js";import{M as _,C as D,a as T,D as h}from"./blocks-Cdh_AmAk.js";import{A as f}from"./ArgTypesWithNote-CEae3A_O.js";import{C as S}from"./ControlsWithNote-DDWhTJKA.js";import{D as N}from"./DocsHeader-CCUl3t2r.js";import{F as M}from"./CommandsAndQueries-B5MqblA3.js";import{S as I}from"./SubcomponentsSection-BVy4lpQe.js";import{C as d,D as x}from"./Select.stories-DRAEh-UU.js";import{L}from"./ListItemBaseTemplate-DCTXILqJ.js";import{o as q}from"./Option-BNEZgQiG.js";import{O as y}from"./index-BXyhN-98.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeLdj5R8.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Tag-FVV8VuJS.js";import"./index-DkMaspDs.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./copy-DuYQh7II.js";import"./copy-jn1S9mhy.js";import"./GitHub-Mark-D6hYrMwl.js";import"./TableOfContent-y4D1_mMB.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-Cz4hAL11.js";import"./Select-CdrF46G-.js";import"./InvisibleMessage-DtML4eYo.js";import"./slim-arrow-down-CwKrWZlT.js";import"./slim-arrow-down-4pwOw1KN.js";import"./ResponsivePopoverCommon.css-CXO0egQQ.js";import"./ValueStateMessage.css-BtHvb9Z3.js";function F(){return L.call(this,{listItemContent:R},{role:"option",title:this.tooltip})}function R(){return g("slot",{})}var s=function(o,t,a,p){var l=arguments.length,n=l<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,a):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,p);else for(var u=o.length-1;u>=0;u--)(m=o[u])&&(n=(l<3?m(n):l>3?m(t,a,n):m(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let i=class extends j{get effectiveDisplayText(){return this.displayText||this.textContent||""}};s([c()],i.prototype,"displayText",void 0);s([c()],i.prototype,"value",void 0);s([O({type:Node,default:!0,invalidateOnChildChange:!0})],i.prototype,"content",void 0);s([c()],i.prototype,"tooltip",void 0);s([c({type:Boolean})],i.prototype,"selected",void 0);i=s([v({tag:"ui5-option-custom",template:F,styles:[j.styles,q]})],i);i.define();const r=w("ui5-option-custom",["displayText","tooltip","value"],["selected"],[],[]);r.displayName="OptionCustom";try{r.displayName="OptionCustom",r.__docgenInfo={description:"The `OptionCustom` component defines a custom content of an option in the `Select`.\nA component to be the same way as the standard `Option`.\nThe component accepts arbitrary HTML content to allow full customization.\n\n\n\n__Note:__ This is a UI5 Web Component! [OptionCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionCustom) | [Repository](https://github.com/UI5/webcomponents)",displayName:"OptionCustom",props:{children:{defaultValue:null,description:"Defines the content of the component.\n\n__Supported Node Type/s:__ `Array<Node>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},displayText:{defaultValue:{value:"undefined"},description:"Defines the text, displayed inside the `Select` input filed\nwhen the option gets selected.",name:"displayText",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:"Defines the tooltip of the option.",name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"undefined"},description:"Defines the value of the `Select` inside an HTML Form element when this component is selected.\nFor more information on HTML Form support, see the `name` property of `Select`.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}function C(o){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...b(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(_,{of:d}),`
`,e.jsx(N,{of:d,since:"0.4.0",mergeSubComponents:!0,subComponents:["OptionCustom"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(D,{of:x}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(S,{of:x}),`
`,e.jsx(t.h2,{id:"recipes",children:"Recipes"}),`
`,e.jsxs(t.h3,{id:"get-the-id-of-the-selected-item-with-onchange",children:["Get the ID of the selected item with ",e.jsx(t.code,{children:"onChange"})]}),`
`,e.jsxs(t.p,{children:["With the help of the HTML5 ",e.jsx(t.code,{children:"data-"}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,e.jsx(t.code,{children:"onChange"})," event as part of the ",e.jsx(t.code,{children:"dataset"})," object of the ",e.jsx(t.code,{children:"selectedOption"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const data = [
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
`,e.jsx(T,{children:I}),`
`,e.jsx(t.h2,{id:"option",children:"Option"}),`
`,e.jsx(h,{of:y}),`
`,e.jsx(f,{metaOf:d,of:y}),`
`,e.jsx(t.h2,{id:"optioncustom",children:"OptionCustom"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(f,{metaOf:d,of:r}),`
`,e.jsx(M,{})]})}function ve(o={}){const{wrapper:t}={...b(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(C,{...o})}):C(o)}export{ve as default};
