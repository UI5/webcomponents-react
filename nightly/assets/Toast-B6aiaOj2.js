import{j as o}from"./iframe-CCKRZdbF.js";import{useMDXComponents as i}from"./index-BW1v5Z1e.js";import{M as p,C as a}from"./blocks-DizR4yrp.js";import"./Tag-D_1GVpYe.js";import"./index-BXous6Vg.js";import{C as m}from"./ControlsWithNote-DsN0lGLb.js";import{D as c}from"./DocsHeader-B4kkYud_.js";import{F as h}from"./CommandsAndQueries-D1vMTwJ_.js";import{C as s,D as e}from"./Toast.stories-CDWROji1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXZj2K0P.js";import"./sys-enter-2-_UoM3OrC.js";import"./alert-BYsKIWrN.js";import"./index-DgC4fDU8.js";import"./index-C4ynR4jc.js";import"./Link-DVIX6xLA.js";import"./copy-Bb6xLZz3.js";import"./copy-DCYvEQ2A.js";import"./GitHub-Mark-BgmPkKgT.js";import"./TableOfContent-DhuQYpKP.js";import"./index-ppkYs0Pw.js";import"./index-TT9wAavy.js";import"./index-Xy0A6wMV.js";import"./index-BMpz4bfD.js";import"./index-byvg7TJC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di3RALWU.js";import"./addCustomCSSWithScoping-BCWPiCrh.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
