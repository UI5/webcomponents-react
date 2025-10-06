import{j as o}from"./iframe-CIFZFrG2.js";import{useMDXComponents as i}from"./index-CzlgAQtr.js";import{M as p,C as a}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import{C as m}from"./ControlsWithNote-Cqnimieu.js";import{D as c}from"./DocsHeader-B-FvOM3P.js";import{F as h}from"./CommandsAndQueries-BlZNZtUo.js";import{C as s,D as e}from"./Toast.stories-DLCrIN4Q.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./index-Ddm49m6x.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./copy-CixeL1ex.js";import"./copy-CVO7dQ0j.js";import"./GitHub-Mark-CaXEtJVV.js";import"./TableOfContent-Db9cMdlQ.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
