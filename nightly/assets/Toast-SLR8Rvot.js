import{j as o}from"./iframe-BB4qEXD6.js";import{useMDXComponents as i}from"./index-Du8_Rn8P.js";import{M as p,C as a}from"./blocks-CR8KOJrJ.js";import"./Tag-Da7QnCDv.js";import"./index-DdTPxxL_.js";import{C as m}from"./ControlsWithNote-DYMuD7l3.js";import{D as c}from"./DocsHeader-BS7EOXT_.js";import{F as h}from"./CommandsAndQueries-DRsaMJRB.js";import{C as s,D as e}from"./Toast.stories-CN3TfvO0.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y0x5W-OX.js";import"./sys-enter-2-BJKr7qQ1.js";import"./alert-BQZZbhbR.js";import"./index-Dpli1QB-.js";import"./index-CsmFqYDM.js";import"./Link-BYUEfY7R.js";import"./copy-6zx3_vtS.js";import"./copy-BVMnHcDg.js";import"./GitHub-Mark-BhVT2185.js";import"./TableOfContent-WiDutKKz.js";import"./index-x2cXHq8y.js";import"./index-9Py2403r.js";import"./index-Dt_2dhRA.js";import"./index-DMHUWYeC.js";import"./index-CztWxO-c.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bzv1Zaa7.js";import"./addCustomCSSWithScoping-Cbj-6aXb.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
