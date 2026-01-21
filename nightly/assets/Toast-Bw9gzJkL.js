import{j as o}from"./iframe-C9GC-4U4.js";import{useMDXComponents as i}from"./index-vmj4hVH3.js";import{M as p,C as a}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import{C as m}from"./ControlsWithNote-ATU_orzz.js";import{D as c}from"./DocsHeader-DFLUJaSB.js";import{F as h}from"./CommandsAndQueries-DYyMzrOI.js";import{C as s,D as e}from"./Toast.stories-CRaWSFJC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./index-Bas8y3YG.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./copy-DPSz1a-s.js";import"./copy-Bj7tGZK9.js";import"./GitHub-Mark-CUNy3k7i.js";import"./TableOfContent-CiwDTzv8.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
