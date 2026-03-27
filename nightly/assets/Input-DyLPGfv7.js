import{j as e,A as i}from"./iframe-GiALwnwk.js";import{useMDXComponents as d}from"./index-D5Br25pp.js";import{A as s}from"./ArgTypesWithNote-BeYGqatD.js";import{C as u}from"./ControlsWithNote-Cgmfge1m.js";import{D as h}from"./DocsHeader-BqCCLfbL.js";import{F as x}from"./Footer-CTpmUzQu.js";import"./CommandsAndQueries-C_IHadBx.js";import"./PageNotFound-lhidYwaf.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-CWQEoHYq.js";import{S as m,a as l}from"./index-DdffJXzo.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-D7EPZLkw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Df-74Kk_.js";import"./information-DVV2_7m2.js";import"./sys-enter-2-BLXa0HBj.js";import"./alert-C-pLX4kq.js";import"./Tag-LkaAJwXo.js";import"./index-D48RNIki.js";import"./index-C2OBDsL0.js";import"./Link-Cl18BXak.js";import"./copy-swqFIkzM.js";import"./copy-BjtWQX8c.js";import"./GitHub-Mark-CONmBkWC.js";import"./TableOfContent-B7J8UzQ4.js";import"./index-DmWjxGkj.js";import"./index-_Dwwjvl6.js";import"./index-j7N-4kUz.js";import"./index-DsAl_UTx.js";import"./index-Q6Oco0u-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-3O-UdkwG.js";import"./addCustomCSSWithScoping-DYkoSNAv.js";import"./Illustrations-OXUCAhva.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-Cg2rZPAd.js";import"./ListItemBaseTemplate-GKtph4El.js";import"./SuggestionItemGroup-D5H2YRLl.js";import"./ListBoxItemGroupTemplate-D9WXmJvJ.js";import"./Input-CAEdEQYs.js";import"./ResponsivePopoverCommon.css-Dd9wsj0Z.js";import"./ValueStateMessage.css-CsbnVp72.js";import"./Suggestions.css-Dyj9iu2Q.js";import"./employee-BP-mtZj4.js";import"./index-C8KGwsoJ.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
