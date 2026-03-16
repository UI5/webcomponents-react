import{j as e,E as i}from"./iframe-CH-Q08Pv.js";import{useMDXComponents as d}from"./index-JegEFivd.js";import{A as s}from"./ArgTypesWithNote-DjzIod2R.js";import{C as u}from"./ControlsWithNote-BP9lHm3C.js";import{D as h}from"./DocsHeader-CD39QVXA.js";import{F as x}from"./Footer-Cg75ltPq.js";import"./CommandsAndQueries-Dlnf61eM.js";import"./PageNotFound-BZ_kgysZ.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-DoFVSa5q.js";import{S as m,a as l}from"./index-BaP8xLoF.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-Cr6Hsai1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_SHIyctb.js";import"./information-DMZ4xbkz.js";import"./sys-enter-2-Cl66mT1N.js";import"./alert-BQx8EBHB.js";import"./Tag-C3CTuin_.js";import"./index-ByjlU9SJ.js";import"./index-BIHxokcD.js";import"./Link-BR4DnOSS.js";import"./copy-Dye7Zr7r.js";import"./copy-BJgUS9X2.js";import"./GitHub-Mark-Bbgzio7S.js";import"./TableOfContent--cHXPcXI.js";import"./index-CiSOiezA.js";import"./index-nLMQvitA.js";import"./index-DTltU74W.js";import"./index-DZ9Ckgsr.js";import"./index-BLeRJ1tU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYciNjaj.js";import"./addCustomCSSWithScoping-D4FzfPo7.js";import"./Illustrations-DAJG5DXY.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-Dl3jHrkd.js";import"./ListItemBaseTemplate-B29kwNxf.js";import"./SuggestionItemGroup-X34o7OFm.js";import"./ListBoxItemGroupTemplate-DyAZxjIB.js";import"./Input-DZGNZFMo.js";import"./ResponsivePopoverCommon.css-OnbBnNDn.js";import"./ValueStateMessage.css-qBo68dDY.js";import"./Suggestions.css-36Zlw39T.js";import"./employee-BtoxEayD.js";import"./index-DMTuLZOk.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
