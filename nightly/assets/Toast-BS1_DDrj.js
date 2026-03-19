import{j as o}from"./iframe-CEsx9pS5.js";import{useMDXComponents as i}from"./index-gmjnJOv_.js";import{M as p,C as m}from"./blocks-8Wtp1Sju.js";import"./Tag-HQWMt5YG.js";import"./index-CTv8OR9t.js";import{C as a}from"./ControlsWithNote-YYMR15zM.js";import{D as c}from"./DocsHeader-DfeeVf-S.js";import{F as h}from"./Footer-BzqBC082.js";import"./CommandsAndQueries-KRiBOwvQ.js";import"./PageNotFound-Dm-lShwt.js";import{C as r,D as s}from"./Toast.stories-BaVVzKo8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BsgOGoHr.js";import"./sys-enter-2-QXPkX9VX.js";import"./alert-C6xGNNq6.js";import"./index-CYl2KpDn.js";import"./index-C3LB4ZIk.js";import"./Link-Op-ol6Yv.js";import"./copy-Dtv2ACv8.js";import"./copy-BKv99Y3s.js";import"./GitHub-Mark-CjM5Qo24.js";import"./TableOfContent-BT3myzbQ.js";import"./index-D0QmD1oJ.js";import"./index-BUd2Yp1O.js";import"./index-LEy71z39.js";import"./index-C0Wj8jmE.js";import"./index-CNLVL7wa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-dF5rg7Pk.js";import"./addCustomCSSWithScoping-C93rkw8E.js";import"./Illustrations-B8Nne3o3.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
