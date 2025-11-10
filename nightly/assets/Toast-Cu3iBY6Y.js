import{j as o}from"./iframe-d6kFjKmB.js";import{useMDXComponents as i}from"./index-C_GtGqSz.js";import{M as p,C as a}from"./blocks-cydmgMgt.js";import"./Tag-pDj71kKq.js";import"./index-Df2R9LIn.js";import{C as m}from"./ControlsWithNote-akDrH3MV.js";import{D as c}from"./DocsHeader-BylOnSY4.js";import{F as h}from"./CommandsAndQueries-CN1OL-NC.js";import{C as s,D as e}from"./Toast.stories-BUVV6WO3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-U09OVfZR.js";import"./sys-enter-2-Iyx_uxbM.js";import"./alert-BF6Rf2Y5.js";import"./index-ByGA7EJm.js";import"./index-CPMalJUe.js";import"./Link-sWUxxSV7.js";import"./copy-CargNeW6.js";import"./copy-10s1L_tU.js";import"./GitHub-Mark-DoOcp9P3.js";import"./TableOfContent-D6ljph8i.js";import"./index-C-SdRuQi.js";import"./index-Ct6Sh5v4.js";import"./index-CYwfFviQ.js";import"./index-Bn3tqYuU.js";import"./index-Cmh3YBGn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cp8_wMdK.js";import"./addCustomCSSWithScoping-CykojlcF.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
