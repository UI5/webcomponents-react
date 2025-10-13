import{j as o}from"./iframe-BwzExPTt.js";import{useMDXComponents as i}from"./index-Bhb-E2jz.js";import{M as p,C as a}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import{C as m}from"./ControlsWithNote-DVJSXWDB.js";import{D as c}from"./DocsHeader-BMPfxLy5.js";import{F as h}from"./CommandsAndQueries-BAktAF7I.js";import{C as s,D as e}from"./Toast.stories-CB8z9-1a.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./index-BFn1YmVY.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./copy-DifwunK3.js";import"./copy-BSdgsQYS.js";import"./GitHub-Mark-2d5y6_NM.js";import"./TableOfContent-DtXVnr4E.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
