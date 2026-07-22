import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{t as n}from"./Option-CS7Jv7Ns.js";import{N as r,t as i}from"./webComponents-BYKaAT-Q.js";import{i as a}from"./react-DnC3AmCq.js";import{E as o,S as s,b as c,f as l,t as u,u as d}from"./components-D95JzePs.js";import{_ as f,d as p,o as m,r as h,u as g}from"./blocks-Byj7MWNt.js";import{n as _,t as v}from"./SubcomponentsSection-NAzYiQqQ.js";import{Default as y,n as b,t as x}from"./Select.stories-Dn1yvwHC.js";function S(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...a(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p,{of:x}),`
`,(0,w.jsx)(l,{of:x,since:`0.4.0`,mergeSubComponents:!0,subComponents:[`OptionCustom`]}),`
`,(0,w.jsx)(`br`,{}),`
`,(0,w.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,w.jsx)(h,{of:y}),`
`,(0,w.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,w.jsx)(c,{of:y}),`
`,(0,w.jsx)(t.h2,{id:`recipes`,children:`Recipes`}),`
`,(0,w.jsxs)(t.h3,{id:`get-the-id-of-the-selected-item-with-onchange`,children:[`Get the ID of the selected item with `,(0,w.jsx)(t.code,{children:`onChange`})]}),`
`,(0,w.jsxs)(t.p,{children:[`With the help of the HTML5 `,(0,w.jsx)(t.code,{children:`data-`}),` API you can define any primitive value (like numbers, strings)
as an attribute on an element.
This data will be available on the `,(0,w.jsx)(t.code,{children:`onChange`}),` event as part of the `,(0,w.jsx)(t.code,{children:`dataset`}),` object of the `,(0,w.jsx)(t.code,{children:`selectedOption`}),`:`]}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-jsx`,children:`const data = [
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
`,(0,w.jsx)(g,{children:v}),`
`,(0,w.jsx)(t.h2,{id:`option`,children:`Option`}),`
`,(0,w.jsx)(m,{of:n}),`
`,(0,w.jsx)(s,{metaOf:x,of:n}),`
`,(0,w.jsx)(t.h2,{id:`optioncustom`,children:`OptionCustom`}),`
`,(0,w.jsx)(m,{of:r}),`
`,(0,w.jsx)(s,{metaOf:x,of:r}),`
`,(0,w.jsx)(d,{})]})}function C(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),o(),f(),u(),i(),_(),b()}))();export{C as default};