import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CNp2Ms8r.js";import{i as n,n as r,r as i,t as a}from"./SuggestionItemGroup-CWg80ZuB.js";import{n as o,r as s}from"./utils-CVfZrzd7.js";import{r as c}from"./react-CSLkFeD8.js";import{_ as l,m as u,o as d,p as f,s as p,t as m}from"./components-BP-vhFfJ.js";import{_ as h,d as g,o as _,r as v,u as y}from"./blocks-BObCibHN.js";import{n as b,t as x}from"./SubcomponentsSection-DoWmTHU2.js";import{Default as S,FullyControlled as C,WithSuggestionItem as w,n as T,t as E}from"./Input.stories-UiiAuKoa.js";function D(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...c(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{of:E}),`
`,(0,k.jsx)(p,{of:E}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,k.jsx)(v,{of:S}),`
`,(0,k.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,k.jsx)(f,{of:S}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h2,{id:`more-examples`,children:`More Examples`}),`
`,(0,k.jsx)(`br`,{}),`
`,(0,k.jsx)(t.h3,{id:`fully-controlled-input`,children:`Fully Controlled Input`}),`
`,(0,k.jsxs)(t.p,{children:[`Different from the native `,(0,k.jsx)(t.code,{children:`input`}),` element, the `,(0,k.jsx)(t.code,{children:`Input`}),` (`,(0,k.jsx)(t.code,{children:`ui5-input`}),`) web component is uncontrolled even if the `,(0,k.jsx)(t.code,{children:`value`}),` prop is provided (see `,(0,k.jsx)(t.a,{href:`https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable`,rel:`nofollow`,children:`React docs`}),`).
To make it fully controlled, call `,(0,k.jsx)(t.code,{children:`event.preventDefault()`}),` in the `,(0,k.jsx)(t.code,{children:`onInput`}),` handler.`]}),`
`,(0,k.jsxs)(t.p,{children:[`In the example below, only letters are allowed to be entered into the `,(0,k.jsx)(t.code,{children:`Input`}),` component.`]}),`
`,(0,k.jsx)(v,{of:C}),`
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
`,(0,k.jsx)(v,{of:w}),`
`,(0,k.jsx)(y,{children:x}),`
`,(0,k.jsx)(t.h2,{id:`suggestionitem`,children:`SuggestionItem`}),`
`,(0,k.jsx)(_,{of:i}),`
`,(0,k.jsx)(u,{metaOf:E,hideHTMLPropsNote:!0,exclude:o,of:i}),`
`,(0,k.jsx)(t.h2,{id:`suggestionitemgroup`,children:`SuggestionItemGroup`}),`
`,(0,k.jsx)(_,{of:a}),`
`,(0,k.jsx)(u,{metaOf:E,of:a,hideHTMLPropsNote:!0,exclude:o}),`
`,(0,k.jsx)(d,{})]})}function O(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;e((()=>{k=t(),l(),m(),b(),h(),r(),n(),T(),s()}))();export{O as default};