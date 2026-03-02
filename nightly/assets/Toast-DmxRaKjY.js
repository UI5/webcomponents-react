import{j as o}from"./iframe-Dp_LXyNr.js";import{useMDXComponents as i}from"./index-Du5TrOvB.js";import{M as p,C as a}from"./blocks-9I7fLsXi.js";import"./Tag-CUzUjb7h.js";import"./index-CMhb9NSF.js";import{C as m}from"./ControlsWithNote-crRgwoV8.js";import{D as c}from"./DocsHeader-D9vzzC6U.js";import{F as h}from"./CommandsAndQueries-DJ070Qmg.js";import{C as s,D as e}from"./Toast.stories-BtdFA1qU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-KVIVt9bg.js";import"./sys-enter-2-C4zsDLSU.js";import"./alert-DWxcSCEU.js";import"./index-Bd_n1-5X.js";import"./index-C2FHI_h3.js";import"./Link-KTjqK9wl.js";import"./copy-BS6B86D6.js";import"./copy-Cwbx5yBu.js";import"./GitHub-Mark-D_3fnVUG.js";import"./TableOfContent-C3UcDeLl.js";import"./index-DlyZB9up.js";import"./index-CKcCy47r.js";import"./index-DY9HWv06.js";import"./index-DIjOLpD2.js";import"./index-CTco0M7M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDmVKCiw.js";import"./addCustomCSSWithScoping-7CEi5oRz.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
