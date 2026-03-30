import{j as o}from"./iframe-DoasxszC.js";import{u as i,M as p,C as a}from"./blocks-DBX_G92C.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import{C as m}from"./ControlsWithNote-B6cTbFDY.js";import{D as c}from"./DocsHeader-BFtvyrC2.js";import{F as h}from"./Footer-BMRkHXkr.js";import"./CommandsAndQueries-Bg5oLjv_.js";import"./PageNotFound-DlCPYtCu.js";import{C as s,D as r}from"./Toast.stories-BxdRUu2y.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-DUsiHM8W.js";import"./index-CY9OUOeY.js";import"./Link-CvHgBQZc.js";import"./copy-DxyiXEXB.js";import"./copy-Bp1X0rrX.js";import"./GitHub-Mark-B2tTDOGy.js";import"./TableOfContent-BL-dDNDX.js";import"./index-BuSM4uik.js";import"./index-C3bV2_l1.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
