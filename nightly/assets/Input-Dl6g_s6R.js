import{j as e,E as i}from"./iframe-XNJfvnKd.js";import{useMDXComponents as d}from"./index-BB1Z__gZ.js";import{A as s}from"./ArgTypesWithNote-DgIyZhTN.js";import{C as u}from"./ControlsWithNote-BTUTR6nF.js";import{D as h}from"./DocsHeader-D0j_puV4.js";import{F as x}from"./Footer-BCJuC1pH.js";import"./CommandsAndQueries-BhkfH5lW.js";import"./PageNotFound-DNJSaIYV.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-70fHpzfh.js";import{S as m,a as l}from"./index-CjZXjCU7.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-CFD4XcKg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCPENXhC.js";import"./information-CaeHS7Lo.js";import"./sys-enter-2-D6Lk4332.js";import"./alert-Dalf8wRK.js";import"./Tag-Bt3S_y8X.js";import"./index-X0L_7D7a.js";import"./index-Cr8k8bpx.js";import"./Link-By03J9gW.js";import"./copy-C0grvfKX.js";import"./copy-AwcTHtit.js";import"./GitHub-Mark-DfQ8VauP.js";import"./TableOfContent-D_tQ1GzJ.js";import"./index-CnSjbRE7.js";import"./index-CONBdBFK.js";import"./index-DJvc2tfl.js";import"./index-BGH8cR_1.js";import"./index-C23si5qK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjHnjWqf.js";import"./addCustomCSSWithScoping-Uu6mKzaL.js";import"./Illustrations-CJz4mowS.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CUEuXRcU.js";import"./ListItemBaseTemplate-He511VRs.js";import"./SuggestionItemGroup-bW1jAPVO.js";import"./ListBoxItemGroupTemplate-C6I36q1a.js";import"./Input-Hy5dHKL1.js";import"./ResponsivePopoverCommon.css-2-C9fSM3.js";import"./ValueStateMessage.css-RN8YRdD-.js";import"./Suggestions.css-C7OqB4DX.js";import"./employee-C6RmWioR.js";import"./index-gN_r8yvA.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
