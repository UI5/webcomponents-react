import{j as o}from"./iframe-DHodyxHg.js";import{useMDXComponents as i}from"./index-BN78HojQ.js";import{M as p,C as a}from"./blocks-DRbngUD5.js";import"./Tag-AoT1Wzdr.js";import"./index-C_UZWXPq.js";import{C as m}from"./ControlsWithNote-DD1Y3eXh.js";import{D as c}from"./DocsHeader-h8RYPKzJ.js";import{F as h}from"./CommandsAndQueries-BJoNcE_T.js";import{C as s,D as e}from"./Toast.stories-CXB3guOS.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CikfZyec.js";import"./sys-enter-2-CGw1AdWq.js";import"./alert-fS8iZOwW.js";import"./index-Cbt6pGSR.js";import"./index-CzYnO6dI.js";import"./Link-DVjUQMmu.js";import"./copy-SlgXAv67.js";import"./copy-HtbMTlWB.js";import"./GitHub-Mark-BGpPPTl9.js";import"./TableOfContent-kDI4jFOc.js";import"./index-LizrXBCk.js";import"./index-H_vNaU3m.js";import"./index-8C_wghAv.js";import"./index-CuoqTBPK.js";import"./index-Bf66SqZa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D26g_6Hi.js";import"./addCustomCSSWithScoping-BBYARKEG.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
