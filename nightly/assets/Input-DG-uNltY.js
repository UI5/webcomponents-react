import{j as e,E as i}from"./iframe-yI-Wg8Yu.js";import{useMDXComponents as d}from"./index-CxvvrXjD.js";import{A as s}from"./ArgTypesWithNote-CDfWD-8j.js";import{C as u}from"./ControlsWithNote-B3XqlkRL.js";import{D as h}from"./DocsHeader-BoRDyxWL.js";import{F as x}from"./Footer-BemjN3C9.js";import"./CommandsAndQueries-DwKUywP6.js";import"./PageNotFound-CBU2IUWB.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-HNp4GQzu.js";import{S as m,a as l}from"./index-Ccdq8CYx.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-BqmDippk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrEz3lFQ.js";import"./information-BheeN2Jq.js";import"./sys-enter-2-Cz9qa-qG.js";import"./alert-CEw8OaPM.js";import"./Tag-Br4lHrdC.js";import"./index-B7JluNCD.js";import"./index-DzsGzp3s.js";import"./Link-C6y8N-8D.js";import"./copy-CaZOJ66E.js";import"./copy-CzvsuiXE.js";import"./GitHub-Mark-DVoCZ3vP.js";import"./TableOfContent-BbIaZttf.js";import"./index-CVU3jLpA.js";import"./index-Bdq6p_tF.js";import"./index-D8b50e5F.js";import"./index-xjCs2iot.js";import"./index-J93pLR5V.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZnAazyk.js";import"./addCustomCSSWithScoping-BNZ7UTaQ.js";import"./Illustrations-CgcUDXre.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-DVm2dPtw.js";import"./ListItemBaseTemplate-C-EP-_9g.js";import"./SuggestionItemGroup-k37wYejr.js";import"./ListBoxItemGroupTemplate-DuN5V80J.js";import"./Input-BUGKz_Lc.js";import"./ResponsivePopoverCommon.css-BNW7Lf7K.js";import"./ValueStateMessage.css-CsVqWCnq.js";import"./Suggestions.css-CiLhqI_s.js";import"./employee-Bd0IGHpN.js";import"./index-IBNXnUtg.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
