import{j as o}from"./iframe-Caxtdkba.js";import{useMDXComponents as i}from"./index-DHHkTN_-.js";import{M as p,C as a}from"./blocks-DEPL7JMW.js";import"./Tag-Dd11nsEW.js";import"./index-DhW1lu1C.js";import{C as m}from"./ControlsWithNote-mHYe6I8P.js";import{D as c}from"./DocsHeader-CAGkcvoR.js";import{F as h}from"./CommandsAndQueries-BOspo6oR.js";import{C as s,D as e}from"./Toast.stories-CViWb-5r.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DxEPh37b.js";import"./sys-enter-2-DZWaIs6H.js";import"./alert-CkjRTT5V.js";import"./index-BqfFpMrh.js";import"./index-Cqh1dpEf.js";import"./Link-Chm6Epcv.js";import"./copy-PBhQp6J5.js";import"./copy-Cm-UF3e8.js";import"./GitHub-Mark-CPWqcK3P.js";import"./TableOfContent-COyFmIK8.js";import"./index-CKnt97hC.js";import"./index-BxIjhTnW.js";import"./index-tXGb4skN.js";import"./index-IuLzHbpC.js";import"./index-BgaBDTu4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-n5f_MbqF.js";import"./addCustomCSSWithScoping-kZmGLgIL.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
