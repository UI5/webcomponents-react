import{j as o}from"./iframe-BxNMYsVp.js";import{useMDXComponents as i}from"./index-CEL_Mrqn.js";import{M as p,C as a}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import{C as m}from"./ControlsWithNote-Cla18jxh.js";import{D as c}from"./DocsHeader-CXbeVpwS.js";import{F as h}from"./CommandsAndQueries-CKT9ys9T.js";import{C as s,D as e}from"./Toast.stories-K8bVEdrp.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./index-CVOVci2N.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./copy-DG3unAFz.js";import"./copy-DFdPinc0.js";import"./GitHub-Mark-BP_KxcKK.js";import"./TableOfContent-BSn9g2hl.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
