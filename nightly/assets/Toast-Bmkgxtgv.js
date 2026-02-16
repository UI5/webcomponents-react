import{j as o}from"./iframe-COmYM7FM.js";import{useMDXComponents as i}from"./index-nJK3ZT8W.js";import{M as p,C as a}from"./blocks-DAY1TuCU.js";import"./Tag-C7vo2194.js";import"./index-8dZG1YHw.js";import{C as m}from"./ControlsWithNote-D0uv15nF.js";import{D as c}from"./DocsHeader-CST8qEMS.js";import{F as h}from"./CommandsAndQueries-BOWLtTE6.js";import{C as s,D as e}from"./Toast.stories-CZmF3Oth.js";import"./preload-helper-PPVm8Dsz.js";import"./information-le6myuh6.js";import"./sys-enter-2-CL75I8bf.js";import"./alert-lhOUxaTm.js";import"./index-DFr8Hmr1.js";import"./index-YGBVCLbI.js";import"./Link-CcuckqWN.js";import"./copy-Dq2e23NG.js";import"./copy-CXZAgH3a.js";import"./GitHub-Mark-qFlD-nLv.js";import"./TableOfContent-tjnC9ti3.js";import"./index-Bf48pKls.js";import"./index-Baj766Uq.js";import"./index-C84ZyqAr.js";import"./index-WRRg6L2_.js";import"./index-CGzRflPR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJJkccm1.js";import"./addCustomCSSWithScoping-CPOeZ7S_.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
