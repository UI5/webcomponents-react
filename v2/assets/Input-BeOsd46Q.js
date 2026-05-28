import{i as e}from"./preload-helper-usAeo7Bx.js";import{Sr as t,lh as n,n as r,r as i,vr as a,xr as o,yr as s}from"./iframe-4660nSA9.js";import{J as c,_ as l,d as u,o as d,r as f,u as p}from"./blocks-BeC3OVSp.js";import{E as m,S as h,b as g,f as _,t as v,u as y}from"./components-CYxl-RD_.js";import{n as b,t as x}from"./SubcomponentsSection-Da9yr5rF.js";import{Default as S,FullyControlled as C,WithSuggestionItem as w,n as T,t as E}from"./Input.stories-CsUQTPWw.js";function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u,{of:E}),`
`,(0,k.jsx)(_,{of:E}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(f,{of:S}),`
`,(0,k.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(g,{of:S}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h3,{id:`fully-controlled-input`,children:`Fully Controlled Input`}),`
`,(0,k.jsxs)(t.p,{children:[`Different from the native `,(0,k.jsx)(t.code,{children:`input`}),` element, the `,(0,k.jsx)(t.code,{children:`Input`}),` (`,(0,k.jsx)(t.code,{children:`ui5-input`}),`) web component is uncontrolled even if the `,(0,k.jsx)(t.code,{children:`value`}),` prop is provided (see `,(0,k.jsx)(t.a,{href:`https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable`,rel:`nofollow`,children:`React docs`}),`).
To make it fully controlled, call `,(0,k.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,k.jsx)(t.code,{children:`onInput`}),` handler.`]}),`
`,(0,k.jsxs)(t.p,{children:[`In the example below, only letters are allowed to be entered into the `,(0,k.jsx)(t.code,{children:`Input`}),` component.`]}),`
`,(0,k.jsx)(f,{of:C}),`
`,(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-ts`,children:`const handleInput: InputPropTypes['onInput'] = (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (/^[a-zA-Z]*$/.test(value)) {
    setValue(value);
  }
};
`})}),`
`,(0,k.jsx)(t.h3,{id:`input-with-customizable-suggestionitem`,children:`Input with customizable SuggestionItem`}),`
`,(0,k.jsxs)(t.p,{children:[`The `,(0,k.jsx)(t.code,{children:`SuggestionItem`}),` represents the suggestion item of the `,(0,k.jsx)(t.code,{children:`Input`})]}),`
`,(0,k.jsx)(f,{of:w}),`
`,(0,k.jsx)(p,{children:x}),`
`,(0,k.jsx)(t.h2,{id:`suggestionitem`,children:`SuggestionItem`}),`
`,(0,k.jsx)(d,{of:o}),`
`,(0,k.jsx)(h,{metaOf:E,hideHTMLPropsNote:!0,exclude:r,of:o}),`
`,(0,k.jsx)(t.h2,{id:`suggestionitemgroup`,children:`SuggestionItemGroup`}),`
`,(0,k.jsx)(d,{of:a}),`
`,(0,k.jsx)(h,{metaOf:E,of:a,hideHTMLPropsNote:!0,exclude:r}),`
`,(0,k.jsx)(y,{})]})}function O(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=n(),m(),v(),b(),l(),s(),t(),T(),i()}))();export{O as default};