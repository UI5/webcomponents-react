import{j as o}from"./iframe-DT5KgGlD.js";import{useMDXComponents as i}from"./index-2sr9OpVj.js";import{M as p,C as a}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import{C as m}from"./ControlsWithNote-B7qXyXG8.js";import{D as c}from"./DocsHeader-CXXEQWs5.js";import{F as h}from"./CommandsAndQueries-DUx0SL0h.js";import{C as s,D as e}from"./Toast.stories-DwHdMc4U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./index-DyR_rB-Y.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./copy-WOcObJni.js";import"./copy-Cn_--9_F.js";import"./GitHub-Mark-BV69ODVk.js";import"./TableOfContent-DmnaQ7ij.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
