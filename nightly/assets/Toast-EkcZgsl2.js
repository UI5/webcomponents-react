import{j as o}from"./iframe-ChLklOsd.js";import{useMDXComponents as i}from"./index-C8O_9vrB.js";import{M as p,C as a}from"./blocks-DJtWS-rM.js";import"./Tag-DfUNsarH.js";import"./index-D3GBtHew.js";import{C as m}from"./ControlsWithNote-BKZjeS7U.js";import{D as c}from"./DocsHeader-Bz6VW3Ao.js";import{F as h}from"./CommandsAndQueries-BJfqhrRX.js";import{C as s,D as e}from"./Toast.stories-Dd9ZRnNG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cwgz9DFQ.js";import"./sys-enter-2-CCtRtPlT.js";import"./alert-B2sdUTAu.js";import"./index-k8fk5wba.js";import"./index-BapOo3Yq.js";import"./Link-8xYNNbnA.js";import"./copy-CpkWUnUU.js";import"./copy-e7lZwdk_.js";import"./GitHub-Mark-B8B_KMCt.js";import"./TableOfContent-DlI8e9kq.js";import"./index-zPNCu5nO.js";import"./index-CZdKIXPg.js";import"./index-CLorPZ9t.js";import"./index-DapyP3wm.js";import"./index-C6Hr8eB_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxJjekgT.js";import"./addCustomCSSWithScoping-CUADiRCd.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:e}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(h,{})]})}function R(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{R as default};
