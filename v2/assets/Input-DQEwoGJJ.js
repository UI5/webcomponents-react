import{j as e,E as i}from"./iframe-CFWpN4R7.js";import{useMDXComponents as d}from"./index-dB03iz0B.js";import{A as s}from"./ArgTypesWithNote-Dt2WDsHa.js";import{C as u}from"./ControlsWithNote-C70Tw8LD.js";import{D as h}from"./DocsHeader-DGz5p46N.js";import{F as x}from"./Footer-DJewOY_X.js";import"./CommandsAndQueries-CCwXwUid.js";import"./PageNotFound-CLSfRNnq.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-Aj9mLxPA.js";import{S as m,a as l}from"./index-D1PMRnZc.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-D8g4OP1y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhKFh4UU.js";import"./information-CkAnn-lR.js";import"./sys-enter-2-D36-WSJV.js";import"./alert-CoDmVWPa.js";import"./Tag-B06DXZI6.js";import"./index-nHUwJst8.js";import"./index-lnQyu4TM.js";import"./Link-RyF9dh8t.js";import"./copy-BFI66KPL.js";import"./copy-DSqUQhHe.js";import"./GitHub-Mark-DdMj_2nh.js";import"./TableOfContent-5EAtsXjY.js";import"./index-B803YP9c.js";import"./index-CeR8RWqv.js";import"./index-D83xFEsI.js";import"./index-4-t9AGVk.js";import"./index-DnsyYKyj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_Q3wyl1.js";import"./addCustomCSSWithScoping-CJGgSOK2.js";import"./Illustrations-dv6stKlC.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CemVcQIM.js";import"./ListItemBaseTemplate-YeqUv09f.js";import"./SuggestionItemGroup-sysdB01D.js";import"./ListBoxItemGroupTemplate-CAS_Tv3n.js";import"./Input-C-H0NyPN.js";import"./ResponsivePopoverCommon.css-gi_-nTdf.js";import"./ValueStateMessage.css-BXLDmzuy.js";import"./Suggestions.css-DHcwzhot.js";import"./employee-Cd-zKRCT.js";import"./index-xOdXlKkx.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
`,e.jsx(h,{of:n}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:a}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h3,{id:"fully-controlled-input",children:"Fully Controlled Input"}),`
`,e.jsxs(t.p,{children:["Different from the native ",e.jsx(t.code,{children:"input"})," element, the ",e.jsx(t.code,{children:"Input"})," (",e.jsx(t.code,{children:"ui5-input"}),") web component is uncontrolled even if the ",e.jsx(t.code,{children:"value"})," prop is provided (see ",e.jsx(t.a,{href:"https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable",rel:"nofollow",children:"React docs"}),`).
To make it fully controlled, call `,e.jsx(t.code,{children:"event.preventDefault()"})," in the ",e.jsx(t.code,{children:"onInput"})," handler."]}),`
`,e.jsxs(t.p,{children:["In the example below, only letters are allowed to be entered into the ",e.jsx(t.code,{children:"Input"})," component."]}),`
`,e.jsx(r,{of:I}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const handleInput: InputPropTypes['onInput'] = (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (/^[a-zA-Z]*$/.test(value)) {
    setValue(value);
  }
};
`})}),`
`,e.jsx(t.h3,{id:"input-with-customizable-suggestionitem",children:"Input with customizable SuggestionItem"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"SuggestionItem"})," represents the suggestion item of the ",e.jsx(t.code,{children:"Input"})]}),`
`,e.jsx(r,{of:v}),`
`,e.jsx(g,{children:j}),`
`,e.jsx(t.h2,{id:"suggestionitem",children:"SuggestionItem"}),`
`,e.jsx(p,{of:m}),`
`,e.jsx(s,{metaOf:n,hideHTMLPropsNote:!0,exclude:i,of:m}),`
`,e.jsx(t.h2,{id:"suggestionitemgroup",children:"SuggestionItemGroup"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(s,{metaOf:n,of:l,hideHTMLPropsNote:!0,exclude:i}),`
`,e.jsx(x,{})]})}function de(o={}){const{wrapper:t}={...d(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{de as default};
