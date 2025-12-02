import{j as o}from"./iframe-B5_Arj0w.js";import{useMDXComponents as i}from"./index-C5nExjBH.js";import{M as p,C as a}from"./blocks-COnGRWLL.js";import"./Tag-BJnasszI.js";import"./index-c-guL6iQ.js";import{C as m}from"./ControlsWithNote-RC0KwfIN.js";import{D as c}from"./DocsHeader-R0l67TN5.js";import{F as h}from"./CommandsAndQueries-DVJBDd6t.js";import{C as s,D as e}from"./Toast.stories-D-uy8CoH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DnWQdbsO.js";import"./sys-enter-2-yT9c6yra.js";import"./alert-B0if0F-6.js";import"./index-lFnbjF6s.js";import"./index-B-64gK_m.js";import"./Link-DYcelBM6.js";import"./copy-DUyNBGP7.js";import"./copy-C_i6TFMR.js";import"./GitHub-Mark-BZiEvxen.js";import"./TableOfContent-BVkhO1lE.js";import"./index-BHuFfOWM.js";import"./index-BNDO-MHt.js";import"./index-D9R5EBek.js";import"./index-C4ir_qvG.js";import"./index-NifsWW0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hIZvC53N.js";import"./addCustomCSSWithScoping-C5sFpCeo.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
