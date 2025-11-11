import{j as o}from"./iframe-dcfOuKvt.js";import{useMDXComponents as i}from"./index-s6pmBJrF.js";import{M as p,C as a}from"./blocks-CuD-56fD.js";import"./Tag-wpbJw-fJ.js";import"./index-DKVFb7ln.js";import{C as m}from"./ControlsWithNote-K-6vc354.js";import{D as c}from"./DocsHeader-B-3cymCk.js";import{F as h}from"./CommandsAndQueries-XLh3rfRK.js";import{C as s,D as e}from"./Toast.stories-DoIESp0c.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU_5ogqg.js";import"./sys-enter-2-Ws311tut.js";import"./alert-BjY8k0mz.js";import"./index-BFv8_OJi.js";import"./index-CvN_j3lV.js";import"./Link-Bb4iXCLh.js";import"./copy-CDxaMxVB.js";import"./copy-CjQxEWgu.js";import"./GitHub-Mark-CH9yC0yP.js";import"./TableOfContent-Ci6yIg8W.js";import"./index-DPsFL1rE.js";import"./index-ZW_BnH9T.js";import"./index-DOoV4d9M.js";import"./index-CLyQ0iFn.js";import"./index-fw2ccDa-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyhaBlGc.js";import"./addCustomCSSWithScoping-CSOIgEcY.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
