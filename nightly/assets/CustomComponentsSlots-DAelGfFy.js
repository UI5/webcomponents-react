import{n as e}from"./chunk-zsgVPwQN.js";import{$f as t,Hi as n,Rl as r,Wm as i,u as a}from"./iframe-D9IUu2NC.js";import{r as o}from"./react-5KuaLat8.js";import{s,t as c,v as l}from"./components-C00obw89.js";import{_ as u,d}from"./blocks-DR1MtBDA.js";var f,p,m,h,g,_,v,y=e((()=>{a(),f=i(),p=()=>(0,f.jsx)(`div`,{children:`Start`}),m=()=>(0,f.jsx)(t,{children:`Close`}),h=()=>(0,f.jsx)(r,{startContent:(0,f.jsx)(p,{}),endContent:(0,f.jsx)(m,{}),children:(0,f.jsx)(`div`,{children:`Not a custom component`})}),g=e=>(0,f.jsx)(`div`,{slot:e.slot,children:`Start`}),_=e=>(0,f.jsx)(t,{slot:e.slot,children:`Close`}),v=()=>(0,f.jsx)(r,{startContent:(0,f.jsx)(g,{}),endContent:(0,f.jsx)(_,{}),children:(0,f.jsx)(`div`,{children:`Not a custom component`})})}));function b(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...o(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d,{title:`Handling Slots`}),`
`,(0,S.jsx)(t.h1,{id:`adding-custom-react-components-to-slots`,children:`Adding custom React components to slots`}),`
`,(0,S.jsx)(n,{hideCloseButton:!0,children:`Using a custom React component still requires the expected web component(s) to be rendered.`}),`
`,(0,S.jsxs)(t.p,{children:[`With our wrapper we provide an easy way to consume the `,(0,S.jsx)(t.code,{children:`slots`}),` of the UI5 Web Components by attaching them to a `,(0,S.jsx)(t.code,{children:`prop`}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-jsx`,children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,(0,S.jsxs)(t.p,{children:[`The `,(0,S.jsx)(t.code,{children:`BarComponent`}),` would compile to this:`]}),`
`,(0,S.jsx)(h,{}),`
`,(0,S.jsxs)(t.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,(0,S.jsx)(t.code,{children:`slot`}),` prop to the custom component, but the most outer HTML-Element/component (e.g. `,(0,S.jsx)(t.code,{children:`<div>Start</div>`}),`) does not accept it and therefore cannot use it.`]}),`
`,(0,S.jsxs)(t.p,{children:[`To fix this the `,(0,S.jsx)(t.code,{children:`slot`}),` prop must also be passed to the outer element of the component:`]}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-jsx`,children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,(0,S.jsxs)(t.p,{children:[`Now the `,(0,S.jsx)(t.code,{children:`BarComponent`}),` would compile to this:`]}),`
`,(0,S.jsx)(v,{}),`
`,(0,S.jsx)(s,{style:{position:`fixed`,bottom:0,zIndex:2}})]})}function x(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=i(),l(),u(),y(),c(),a()}))();export{x as default};