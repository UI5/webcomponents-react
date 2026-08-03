import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./SuggestionItemGroup-BaW7Q2TY.js";import{n as c,r as l}from"./iframe-BnnPrPVZ.js";import{i as u}from"./react-B0KOWr-5.js";import{E as d,S as f,b as p,f as m,t as h,u as g}from"./components-Blq8FNry.js";import{_,d as v,o as y,r as b,u as x}from"./blocks-CFiiLo6Z.js";import{n as S,t as C}from"./SubcomponentsSection-NAzYiQqQ.js";import{Default as w,FullyControlled as T,WithInputIcon as E,WithSuggestionItem as D,n as O,t as k}from"./Input.stories-Cc_SgOqj.js";function A(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...u(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(v,{of:k}),`
`,(0,M.jsx)(m,{of:k,subComponents:[`InputIcon`]}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,M.jsx)(b,{of:w}),`
`,(0,M.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,M.jsx)(p,{of:w}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,M.jsx)(`br`,{}),`
`,(0,M.jsx)(t.h3,{id:`fully-controlled-input`,children:`Fully Controlled Input`}),`
`,(0,M.jsxs)(t.p,{children:[`Different from the native `,(0,M.jsx)(t.code,{children:`input`}),` element, the `,(0,M.jsx)(t.code,{children:`Input`}),` (`,(0,M.jsx)(t.code,{children:`ui5-input`}),`) web component is uncontrolled even if the `,(0,M.jsx)(t.code,{children:`value`}),` prop is provided (see `,(0,M.jsx)(t.a,{href:`https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable`,rel:`nofollow`,children:`React docs`}),`).
To make it fully controlled, call `,(0,M.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,M.jsx)(t.code,{children:`onInput`}),` handler.`]}),`
`,(0,M.jsxs)(t.p,{children:[`In the example below, only letters are allowed to be entered into the `,(0,M.jsx)(t.code,{children:`Input`}),` component.`]}),`
`,(0,M.jsx)(b,{of:T}),`
`,(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-ts`,children:`const handleInput: InputPropTypes['onInput'] = (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (/^[a-zA-Z]*$/.test(value)) {
    setValue(value);
  }
};
`})}),`
`,(0,M.jsx)(t.h3,{id:`input-with-customizable-suggestionitem`,children:`Input with customizable SuggestionItem`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`SuggestionItem`}),` represents the suggestion item of the `,(0,M.jsx)(t.code,{children:`Input`})]}),`
`,(0,M.jsx)(b,{of:D}),`
`,(0,M.jsx)(t.h3,{id:`input-with-inputicon`,children:`Input with InputIcon`}),`
`,(0,M.jsxs)(t.p,{children:[`The `,(0,M.jsx)(t.code,{children:`InputIcon`}),` component represents an interactive icon that can be placed inside an `,(0,M.jsx)(t.code,{children:`Input`}),` via the `,(0,M.jsx)(t.code,{children:`icon`}),` slot.
Unlike the standard `,(0,M.jsx)(t.code,{children:`Icon`}),`, it provides button-like behavior with hover, focus, and active states.`]}),`
`,(0,M.jsx)(b,{of:E}),`
`,(0,M.jsx)(x,{children:C}),`
`,(0,M.jsx)(t.h2,{id:`inputicon`,children:`InputIcon`}),`
`,(0,M.jsx)(y,{of:n}),`
`,(0,M.jsx)(f,{metaOf:k,hideHTMLPropsNote:!0,of:n}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitem`,children:`SuggestionItem`}),`
`,(0,M.jsx)(y,{of:o}),`
`,(0,M.jsx)(f,{metaOf:k,hideHTMLPropsNote:!0,exclude:c,of:o}),`
`,(0,M.jsx)(t.h2,{id:`suggestionitemgroup`,children:`SuggestionItemGroup`}),`
`,(0,M.jsx)(y,{of:s}),`
`,(0,M.jsx)(f,{metaOf:k,of:s,hideHTMLPropsNote:!0,exclude:c}),`
`,(0,M.jsx)(g,{})]})}function j(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;e((()=>{M=t(),d(),h(),S(),_(),a(),i(),r(),O(),l()}))();export{j as default};