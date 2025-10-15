import{j as o}from"./iframe-BV6MX4jP.js";import{useMDXComponents as i}from"./index-BBPLoQd2.js";import{M as p,C as a}from"./blocks-ButdG5ct.js";import"./Tag-DqTS_NIk.js";import"./index-D61UH3oK.js";import{C as m}from"./ControlsWithNote-Br1yzSE3.js";import{D as c}from"./DocsHeader-BXtvUvPW.js";import{F as h}from"./CommandsAndQueries-B_NVK97H.js";import{C as s,D as e}from"./Toast.stories-4pSJ2GFw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D4lwDDvQ.js";import"./sys-enter-2-CNNlkaec.js";import"./alert-D9QVBDgC.js";import"./index-B6xBDYCv.js";import"./index-5lJ63Ggw.js";import"./Link-CQBQGD-K.js";import"./copy-D55H2zfJ.js";import"./copy-BuKjNY_z.js";import"./GitHub-Mark-DWFs6LTX.js";import"./TableOfContent-CJu7MjuI.js";import"./index-Bn23lh4B.js";import"./index-BIn6vsDV.js";import"./index-BeBg5nKE.js";import"./index-BAeh9ZRA.js";import"./index-pEzZy3XJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJJJ49N9.js";import"./addCustomCSSWithScoping-BAR7O9dV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
