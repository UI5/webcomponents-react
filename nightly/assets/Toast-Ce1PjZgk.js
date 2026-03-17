import{j as o}from"./iframe-B8dw45Pm.js";import{useMDXComponents as i}from"./index-CDTgJgbW.js";import{M as p,C as m}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import{C as a}from"./ControlsWithNote-f9_HgGwn.js";import{D as c}from"./DocsHeader-o7_-BHSH.js";import{F as h}from"./Footer-DGDb1ilk.js";import"./CommandsAndQueries-Bl0bAz-u.js";import"./PageNotFound-DfoC1Yw_.js";import{C as r,D as s}from"./Toast.stories-DX77aibi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-DMbxZG4m.js";import"./index-DOUsK0Sd.js";import"./Link-BB11RQL1.js";import"./copy-CzdwgprO.js";import"./copy-KGIzxzBV.js";import"./GitHub-Mark-FW8PEMRV.js";import"./TableOfContent-BCSvRamV.js";import"./index-S966bfr_.js";import"./index-6NVZEy4N.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
