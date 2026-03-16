import{j as o}from"./iframe--9dKe8DB.js";import{useMDXComponents as i}from"./index-KI9hm8HB.js";import{M as p,C as m}from"./blocks-sz1V1YD1.js";import"./Tag-Dx2xRUom.js";import"./index-CPDFIZvY.js";import{C as a}from"./ControlsWithNote-L_Ce3WAS.js";import{D as c}from"./DocsHeader-DmUEuAmh.js";import{F as h}from"./Footer-Q0CQ_qDk.js";import"./CommandsAndQueries-DmMMilME.js";import"./PageNotFound-CuY3r4La.js";import{C as r,D as s}from"./Toast.stories-B7LKinNi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-nAlSmLiB.js";import"./sys-enter-2-w7b_cFRw.js";import"./alert-QMDkEN5b.js";import"./index-FyOsxtAw.js";import"./index-BYfUGIr5.js";import"./Link-BglFcPBB.js";import"./copy-36Frb_So.js";import"./copy-DDHnU-KJ.js";import"./GitHub-Mark-Cn6yJd_r.js";import"./TableOfContent-BY9idK35.js";import"./index-rkrari7y.js";import"./index-W9KwanBR.js";import"./index-CZTUC9tr.js";import"./index-mjSuc6PB.js";import"./index-TfvKDlH8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZXl1Qbt.js";import"./addCustomCSSWithScoping-OfWYI4vx.js";import"./Illustrations-CYV_ZGoP.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
