import{j as o}from"./iframe-BS2TrvrN.js";import{useMDXComponents as i}from"./index-Dp4awxsz.js";import{M as p,C as a}from"./blocks-AG6GRa5B.js";import"./Tag-CAsjs9Yd.js";import"./index-CnogY8gl.js";import{C as m}from"./ControlsWithNote-q0ulia1n.js";import{D as c}from"./DocsHeader-C7kvEsZL.js";import{F as h}from"./CommandsAndQueries-C7ISLnYa.js";import{C as s,D as e}from"./Toast.stories-DnzkHkcF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B1mkkoXe.js";import"./sys-enter-2-DnLeBeIW.js";import"./alert-BREJIvMW.js";import"./index-CJ7CYpRY.js";import"./index-BmL9Xifd.js";import"./Link-o9RgLDgA.js";import"./copy-z3rnNdSW.js";import"./copy-DWHxAwDZ.js";import"./GitHub-Mark-Dlk1wIJL.js";import"./TableOfContent-8pCqyB_x.js";import"./index-BTiu8q4c.js";import"./index-Mu4Fq_pN.js";import"./index-DaCCo5vH.js";import"./index-DMDLslui.js";import"./index-BzQgfOUJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXV-QRTV.js";import"./addCustomCSSWithScoping-BH8CiasF.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
