import{j as o}from"./iframe-Dr24b1_2.js";import{u as i,M as p,C as a}from"./blocks-DOkdIKLK.js";import"./Tag-BIxdINB7.js";import"./index-CL-oiXYR.js";import{C as m}from"./ControlsWithNote-BXcQcfnL.js";import{D as c}from"./DocsHeader-9y2YWA-s.js";import{F as h}from"./Footer-B2LKGocf.js";import"./CommandsAndQueries-D2RSxAeU.js";import"./PageNotFound-t4KH-Yk6.js";import{C as s,D as r}from"./Toast.stories-Se_LYDlT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C20uFQS0.js";import"./sys-enter-2-CQd_0MF7.js";import"./alert-B9PmGrag.js";import"./index-DrqpZzSV.js";import"./index-VF4msgJe.js";import"./Link-CG4ImuUx.js";import"./copy-zEtP8ZOb.js";import"./copy-D1SgAW06.js";import"./GitHub-Mark-BVwUWF2c.js";import"./TableOfContent-CTShD90n.js";import"./index-DcUuq1aq.js";import"./index-CjU6u75C.js";import"./index-_maGeclj.js";import"./index-aTzn3I1m.js";import"./index-B_PGO6aF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dh4aGlp7.js";import"./addCustomCSSWithScoping-BCzlWLsZ.js";import"./Illustrations-Dt9P8lxH.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
`,o.jsx(c,{of:s,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{of:r}),`
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
`,o.jsx(h,{})]})}function z(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{z as default};
