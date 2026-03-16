import{j as e,E as i}from"./iframe-CLRwe_KU.js";import{useMDXComponents as d}from"./index-zMDfw_hp.js";import{A as s}from"./ArgTypesWithNote-BhV7LOCH.js";import{C as u}from"./ControlsWithNote-j11wmhcQ.js";import{D as h}from"./DocsHeader-tjuWzKnX.js";import{F as x}from"./Footer-CY1WkGvT.js";import"./CommandsAndQueries-Qa8JAgCb.js";import"./PageNotFound-Et84DOUJ.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-B36l4j9a.js";import{S as m,a as l}from"./index-B26Z3-1h.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-DQgIehZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Di2mC61N.js";import"./information-BHtbew5c.js";import"./sys-enter-2-CeQJ4tH7.js";import"./alert-DGiHprsp.js";import"./Tag-DLCMnG64.js";import"./index-rGV23ifs.js";import"./index-DhQiji0Y.js";import"./Link-CQgjpXoE.js";import"./copy-tZxK2l79.js";import"./copy-C_QN3LWn.js";import"./GitHub-Mark-BTLyGR0g.js";import"./TableOfContent-Cm92Ha4S.js";import"./index-BqJblJml.js";import"./index-9xLRD1c-.js";import"./index-BFFCZnKZ.js";import"./index-CZmIgKIQ.js";import"./index-B905PbE4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5LoBpt5.js";import"./addCustomCSSWithScoping-BmaQonB-.js";import"./Illustrations-BsZAm-cT.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CCS96mKL.js";import"./ListItemBaseTemplate-D5tvkBEy.js";import"./SuggestionItemGroup-BjNveMyE.js";import"./ListBoxItemGroupTemplate-RwrRGF0Y.js";import"./Input-CmThYNOy.js";import"./ResponsivePopoverCommon.css-BHdjseh5.js";import"./ValueStateMessage.css-CUkX0r6k.js";import"./Suggestions.css-DG50lbLq.js";import"./employee-BKfLjD3g.js";import"./index-D-5oCNyE.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
