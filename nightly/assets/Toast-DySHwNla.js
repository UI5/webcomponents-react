import{j as o}from"./iframe-CXDBwaXf.js";import{useMDXComponents as i}from"./index-Dq-vd5Ev.js";import{M as p,C as a}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import{C as m}from"./ControlsWithNote-D9v8NJR6.js";import{D as c}from"./DocsHeader-CgBwQAL4.js";import{F as h}from"./CommandsAndQueries-EFbMjjAa.js";import{C as s,D as e}from"./Toast.stories-D6T4HJ5s.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./index-74IMF4Fu.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./copy-CeafGCkU.js";import"./copy-tKRdoNaC.js";import"./GitHub-Mark-H1zA7MT_.js";import"./TableOfContent-Beyzx59M.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
