import{c as g,s as c,A as O,m as v,bi as j,w,j as e}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as b}from"./index-Cae9Voso.js";import{M as _,C as D,a as T,D as h}from"./blocks-C2P3yVo4.js";import{A as f}from"./ArgTypesWithNote-D1k1D1kl.js";import{C as S}from"./ControlsWithNote-BPBkFbxc.js";import{D as N}from"./DocsHeader-BIjaJ0Nr.js";import{F as M}from"./CommandsAndQueries-Clw2dQJN.js";import{S as I}from"./SubcomponentsSection-BVy4lpQe.js";import{C as d,D as x}from"./Select.stories-DvCCGOCG.js";import{L}from"./ListItemBaseTemplate-BzqS2Fl5.js";import{o as q}from"./Option-MqiGXaOA.js";import{O as y}from"./index-CBicJKGb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCqXNXQw.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Tag-CjLUfCmJ.js";import"./index-Bwbvp4Wo.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./copy-VS6NZnYU.js";import"./copy-B13EJS-v.js";import"./GitHub-Mark-BXPdSfrH.js";import"./TableOfContent-BdkB29Mz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";function F(){return L.call(this,{listItemContent:R},{role:"option",title:this.tooltip})}function R(){return g("slot",{})}var s=function(o,t,a,p){var l=arguments.length,n=l<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,a):p,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,p);else for(var u=o.length-1;u>=0;u--)(m=o[u])&&(n=(l<3?m(n):l>3?m(t,a,n):m(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let i=class extends j{get effectiveDisplayText(){return this.displayText||this.textContent||""}};s([c()],i.prototype,"displayText",void 0);s([c()],i.prototype,"value",void 0);s([O({type:Node,default:!0,invalidateOnChildChange:!0})],i.prototype,"content",void 0);s([c()],i.prototype,"tooltip",void 0);s([c({type:Boolean})],i.prototype,"selected",void 0);i=s([v({tag:"ui5-option-custom",template:F,styles:[j.styles,q]})],i);i.define();const r=w("ui5-option-custom",["displayText","tooltip","value"],["selected"],[],[]);r.displayName="OptionCustom";try{r.displayName="OptionCustom",r.__docgenInfo={description:"The `OptionCustom` component defines a custom content of an option in the `Select`.\nA component to be the same way as the standard `Option`.\nThe component accepts arbitrary HTML content to allow full customization.\n\n\n\n__Note:__ This is a UI5 Web Component! [OptionCustom UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/OptionCustom) | [Repository](https://github.com/UI5/webcomponents)",displayName:"OptionCustom",props:{children:{defaultValue:null,description:"Defines the content of the component.\n\n__Supported Node Type/s:__ `Array<Node>`",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},displayText:{defaultValue:{value:"undefined"},description:"Defines the text, displayed inside the `Select` input filed\nwhen the option gets selected.",name:"displayText",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:"Defines the tooltip of the option.",name:"tooltip",required:!1,type:{name:"string"}},value:{defaultValue:{value:"undefined"},description:"Defines the value of the `Select` inside an HTML Form element when this component is selected.\nFor more information on HTML Form support, see the `name` property of `Select`.",name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
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
