import{j as o}from"./iframe-bzWujj58.js";import{useMDXComponents as i}from"./index-BCWfYBG3.js";import{M as p,C as a}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import{C as m}from"./ControlsWithNote-COjTHVw-.js";import{D as c}from"./DocsHeader-RPqrqGlV.js";import{F as h}from"./CommandsAndQueries-CSnnb9h_.js";import{C as s,D as e}from"./Toast.stories-Botq8eNh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./index-CUs-JjpA.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./copy-CIFT9wWr.js";import"./copy-GDuXt_K5.js";import"./GitHub-Mark-ClHMqzFf.js";import"./TableOfContent-2Rlpvfej.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
