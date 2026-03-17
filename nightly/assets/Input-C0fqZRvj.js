import{j as e,E as i}from"./iframe-C_hHAafN.js";import{useMDXComponents as d}from"./index-D3HSzI5H.js";import{A as s}from"./ArgTypesWithNote-BqgSXMWz.js";import{C as u}from"./ControlsWithNote-6SvsGtkD.js";import{D as h}from"./DocsHeader-Bk_TsqI1.js";import{F as x}from"./Footer-Cs4jbAjg.js";import"./CommandsAndQueries-9eolN_GD.js";import"./PageNotFound-C7jxbIgP.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as r,a as g,D as p}from"./blocks-DkbtP44I.js";import{S as m,a as l}from"./index-tfawk_g3.js";import{C as n,D as a,F as I,W as v}from"./Input.stories-BiSG5zox.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3QVLAy4g.js";import"./information-BzxR6BB4.js";import"./sys-enter-2-Bb8fTRXf.js";import"./alert-CfcbMAjf.js";import"./Tag-eVGHGbIg.js";import"./index-BmCCqQCC.js";import"./index-BKTg9IVY.js";import"./Link-SYOek4pb.js";import"./copy-B6dl0gLT.js";import"./copy-RggualJu.js";import"./GitHub-Mark-DN84urKt.js";import"./TableOfContent--xyEPkZT.js";import"./index-DDQ0aIRQ.js";import"./index-DaMaB5I7.js";import"./index-nRsHzHP6.js";import"./index-DqhVaTSX.js";import"./index-C7mqYyTc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmUXk235.js";import"./addCustomCSSWithScoping-D9hLtcaz.js";import"./Illustrations-CNZ22cEs.js";import"./i18n-defaults-CFWtSmu6.js";import"./SuggestionItem-CH8aQQQp.js";import"./ListItemBaseTemplate-C7WwsRHS.js";import"./SuggestionItemGroup-CuRZCe2e.js";import"./ListBoxItemGroupTemplate-fDCpM485.js";import"./Input-TGnF-6Wb.js";import"./ResponsivePopoverCommon.css-B3G2eYk9.js";import"./ValueStateMessage.css-CV4qc19-.js";import"./Suggestions.css-CHwCFLC2.js";import"./employee-BsY3SV1i.js";import"./index-BF3n00U0.js";function c(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:n}),`
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
