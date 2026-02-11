import{j as o}from"./iframe-kJfrPaD1.js";import{useMDXComponents as i}from"./index-BKWPRaiV.js";import{M as p,C as a}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import{C as m}from"./ControlsWithNote-HJLNE5EK.js";import{D as c}from"./DocsHeader-BLWibEvH.js";import{F as h}from"./CommandsAndQueries-D7WkRU72.js";import{C as s,D as e}from"./Toast.stories-CykK3Jrp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./index-CmBVI-17.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./copy-BYIMhd1n.js";import"./copy-yyYbNeMi.js";import"./GitHub-Mark-CjjLcYYl.js";import"./TableOfContent-Cw-X9n05.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
