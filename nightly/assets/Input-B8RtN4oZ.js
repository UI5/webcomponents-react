import{j as e,E as i}from"./iframe-CFFJFWfd.js";import{useMDXComponents as d}from"./index-C3RjxUM6.js";import{A as s}from"./ArgTypesWithNote-DipX3IX6.js";import{C as u}from"./ControlsWithNote-mcrWbiHr.js";import{D as h}from"./DocsHeader-BlV4Wsq_.js";import{F as x}from"./Footer-DnJjuNkf.js";import"./CommandsAndQueries-F7dXP8Ck.js";import"./PageNotFound-fKWlSVqv.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-DNe1XYus.js";import{S as m,a as l}from"./index-CbeYQnNg.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-EJ_0YVx1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nJISZmsL.js";import"./information-WOvhwCn0.js";import"./sys-enter-2-CCYEhAsr.js";import"./alert-DdBL9zU_.js";import"./Tag-Dq-_fpcq.js";import"./index-Czxe8PfH.js";import"./index-CQKrmUSc.js";import"./Link-DBWxZpb0.js";import"./copy-BdHXZL_d.js";import"./copy-BWzo1FZ0.js";import"./GitHub-Mark-DHk_4lFg.js";import"./TableOfContent-Dk3B5lEt.js";import"./index-ElIMq8Rj.js";import"./index-IkzBWQiA.js";import"./index-BC7P3Gk3.js";import"./index-B7FuneXO.js";import"./index-CLuk8Jv1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-peyxdL93.js";import"./addCustomCSSWithScoping-VUX5a_xd.js";import"./Illustrations-DDY2i5oH.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-DCktFcTr.js";import"./ListItemBaseTemplate-9ZhEBgKt.js";import"./SuggestionItemGroup-CecBMcJT.js";import"./ListBoxItemGroupTemplate-DxqqjI46.js";import"./Input-BHKuVU6t.js";import"./ResponsivePopoverCommon.css-Cveld8fW.js";import"./ValueStateMessage.css-DXT8WQZS.js";import"./Suggestions.css-Dm2tVJec.js";import"./employee-DRMzwQWa.js";import"./index-Cf1nMP5r.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
