import{j as o}from"./iframe-D-p-3OCM.js";import{useMDXComponents as i}from"./index-DJLiOc38.js";import{M as p,C as a}from"./blocks-D8nJ9XLJ.js";import"./Tag-3bv5cfrS.js";import"./index-4PsYVbCm.js";import{C as m}from"./ControlsWithNote-29IeAr60.js";import{D as c}from"./DocsHeader-DebBbDHj.js";import{F as h}from"./CommandsAndQueries-GFFu71sG.js";import{C as s,D as e}from"./Toast.stories-Bp-2aFrJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BQJXeVKx.js";import"./sys-enter-2-CYyiWANR.js";import"./alert-YvrQf4Kz.js";import"./index-C326ykrp.js";import"./index-BwwgwqQS.js";import"./Link-BjWHArC4.js";import"./copy-DGgpvxj3.js";import"./copy-ORsTAKbB.js";import"./GitHub-Mark-CBiOZemu.js";import"./TableOfContent-BcwnDCh5.js";import"./index--P1CcwOi.js";import"./index-TBDKK4_L.js";import"./index-DqKaYphS.js";import"./index-sDY_tTy_.js";import"./index-DzbvANjW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-sPN7n5XP.js";import"./addCustomCSSWithScoping-BzKWOZDH.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
