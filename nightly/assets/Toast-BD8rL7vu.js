import{j as o}from"./iframe-BB6QsCcm.js";import{useMDXComponents as i}from"./index-CpyLbSYP.js";import{M as p,C as m}from"./blocks-DGH8wLVm.js";import"./Tag-DYnAL2vL.js";import"./index-DEibJBdY.js";import{C as a}from"./ControlsWithNote-BQYRe9DV.js";import{D as c}from"./DocsHeader-BHLDUFIc.js";import{F as h}from"./Footer-BhEsQKJ6.js";import"./CommandsAndQueries-BiWITRaD.js";import"./PageNotFound-CzkzQoiL.js";import{C as r,D as s}from"./Toast.stories-Dmm1mKpd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-b186mgfr.js";import"./sys-enter-2-BIQ3YVMq.js";import"./alert-BqQjVqfR.js";import"./index-Cg4sRA-Y.js";import"./index-ZlEQADjM.js";import"./Link-nh3gGr7J.js";import"./copy-BgB_gUNv.js";import"./copy-CCxPB9Eo.js";import"./GitHub-Mark-CNoqkMTk.js";import"./TableOfContent-DsNRTVUI.js";import"./index-DsUvzGkS.js";import"./index-BiTQ1Tdz.js";import"./index-BeoN8qxu.js";import"./index-BFKJbbqY.js";import"./index-CMF9IKMM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctz7lcER.js";import"./addCustomCSSWithScoping-D3Qs4mB8.js";import"./Illustrations-ChLBGWr7.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
