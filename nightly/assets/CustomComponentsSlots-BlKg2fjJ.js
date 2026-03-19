import{j as t,Y as r}from"./iframe-CyQHbHxC.js";import{useMDXComponents as s}from"./index-CAqjzf3-.js";import{M as c}from"./blocks-B1BKQjJv.js";import{B as i}from"./index-CkHMB8-y.js";import"./Tag-CpzoOvR8.js";import{M as a}from"./index-DVtJUpci.js";import"./CommandsAndQueries-CQRKG-No.js";import"./copy-DaAXI0wh.js";import{F as p}from"./Footer-B6F6QaBp.js";import"./PageNotFound-BwogsJtD.js";import"./preload-helper-PPVm8Dsz.js";import"./Bar-C1QH4rxh.js";import"./information-DjNNiNHU.js";import"./sys-enter-2-BgUfXyT0.js";import"./alert-CTY_LxCJ.js";import"./Link-8vAV1o0p.js";import"./index-DdcJcuqo.js";import"./index-Dk8Vx9PA.js";import"./index-CyzsrkYQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPaLVEvo.js";import"./addCustomCSSWithScoping-iqlifjV6.js";import"./index-DUAJQglC.js";import"./index-hCRaM0Y7.js";import"./index-1GAsnXVc.js";import"./index-DMBzjcEO.js";import"./Illustrations-BxTCLiS4.js";import"./i18n-defaults-CFWtSmu6.js";const d=()=>t.jsx("div",{children:"Start"}),m=()=>t.jsx(r,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(d,{}),endContent:t.jsx(m,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=o=>t.jsx("div",{slot:o.slot,children:"Start"}),u=o=>t.jsx(r,{slot:o.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function e(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:"Handling Slots"}),`
`,t.jsx(n.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(a,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
`,t.jsxs(n.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(n.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(n.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = () => {
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
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(n.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(n.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(n.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(n.p,{children:["To fix this the ",t.jsx(n.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = (props) => {
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
`,t.jsxs(n.p,{children:["Now the ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function O(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{O as default};
