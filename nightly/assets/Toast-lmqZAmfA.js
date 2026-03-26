import{j as o}from"./iframe-BKYtcRXv.js";import{useMDXComponents as i}from"./index-D1nSvVZo.js";import{M as p,C as m}from"./blocks-C1gp0dCe.js";import"./Tag-DHmTMk4C.js";import"./index-BHofxaIm.js";import{C as a}from"./ControlsWithNote-BcvFcJ1w.js";import{D as c}from"./DocsHeader-CGFr-N59.js";import{F as h}from"./Footer-CV4xu3yB.js";import"./CommandsAndQueries-CUyuiRf6.js";import"./PageNotFound-vT0hMOra.js";import{C as r,D as s}from"./Toast.stories-CWV3gM1H.js";import"./preload-helper-PPVm8Dsz.js";import"./information-xnBwopqv.js";import"./sys-enter-2-CNvKNMds.js";import"./alert-CToXuYXU.js";import"./index-qZc2Xmmm.js";import"./index-ewdSxNga.js";import"./Link-DoqDiayo.js";import"./copy-DrIA0QZ4.js";import"./copy-Dd5cryj7.js";import"./GitHub-Mark-CdbwaB6F.js";import"./TableOfContent-DOsZXCWq.js";import"./index-BVN1tX5Y.js";import"./index-CruiZV6T.js";import"./index-C0tgyAAj.js";import"./index-BKTLLMG4.js";import"./index-Gx-AmRBv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cc6AlvW2.js";import"./addCustomCSSWithScoping-CxGG2dIU.js";import"./Illustrations-C92Wb11w.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
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
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};
