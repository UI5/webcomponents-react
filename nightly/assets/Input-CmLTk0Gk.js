import{j as e,A as i}from"./iframe-CN9FvYjd.js";import{useMDXComponents as d}from"./index-CHfbFhXP.js";import{A as s}from"./ArgTypesWithNote-Dtki4tJe.js";import{C as u}from"./ControlsWithNote-BnC8IQEn.js";import{D as h}from"./DocsHeader-DBc1pcw5.js";import{F as x}from"./Footer-Dl9losBY.js";import"./CommandsAndQueries-BOIWtnt6.js";import"./PageNotFound-YEpHz0H_.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-BRVkHd00.js";import{S as m,a as l}from"./index-1C3QXu9z.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-BIHF-F1x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjC-3bum.js";import"./information-DYxN2cHX.js";import"./sys-enter-2-Cmiit89U.js";import"./alert-DCHWGnHk.js";import"./Tag-B_RTkJ1G.js";import"./index-DHHIsfuO.js";import"./index-BFwC892N.js";import"./Link-Wi8OmUZE.js";import"./copy-DAuylYSV.js";import"./copy-CqLNgdQ9.js";import"./GitHub-Mark-DjfXo-cB.js";import"./TableOfContent-DIcVYEHe.js";import"./index-ZHKOt3Ry.js";import"./index-BbQq-ZOq.js";import"./index-LGty0-Ee.js";import"./index-qceCjzn0.js";import"./index-CdwqdKec.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tlJUacgC.js";import"./addCustomCSSWithScoping-DzgJsuLH.js";import"./Illustrations-SwtMVqU-.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-DIJ09gIE.js";import"./ListItemBaseTemplate-inTV_ZQx.js";import"./SuggestionItemGroup-ttlc33at.js";import"./ListBoxItemGroupTemplate-3j4IvakF.js";import"./Input--XH3wXXZ.js";import"./ResponsivePopoverCommon.css-DFlXT8Yt.js";import"./ValueStateMessage.css-DaIbDu_s.js";import"./Suggestions.css-C1rlY3G7.js";import"./employee-BTs9_YMS.js";import"./index-C9G9oavp.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
