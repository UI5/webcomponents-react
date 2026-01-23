import{j as o}from"./iframe-DMaNIVf0.js";import{useMDXComponents as i}from"./index-BdK8Evs-.js";import{M as p,C as a}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import{C as m}from"./ControlsWithNote-DNtLzp66.js";import{D as c}from"./DocsHeader-gdd0ROQU.js";import{F as h}from"./CommandsAndQueries-BFOyQZVK.js";import{C as s,D as e}from"./Toast.stories-GjOUNrO9.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./index-DVWNlONk.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./copy-DnzYN8T3.js";import"./copy-CnV7FmZR.js";import"./GitHub-Mark-DNQVZZSO.js";import"./TableOfContent-D9koB-_P.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
