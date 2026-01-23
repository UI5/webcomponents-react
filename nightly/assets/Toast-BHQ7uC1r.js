import{j as o}from"./iframe-NmUBSsgx.js";import{useMDXComponents as i}from"./index-CRhoqEbg.js";import{M as p,C as a}from"./blocks-DTOICRIr.js";import"./Tag-CGvSEzjs.js";import"./index-_FB6i7Kc.js";import{C as m}from"./ControlsWithNote-DfWYygL2.js";import{D as c}from"./DocsHeader-B-EO8Eqs.js";import{F as h}from"./CommandsAndQueries-B283QW5b.js";import{C as s,D as e}from"./Toast.stories-BpAnPdXr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BxntQ5Ez.js";import"./sys-enter-2--B3M0XKZ.js";import"./alert-b59nRps9.js";import"./index-IPiTIICp.js";import"./index-BNsY5djp.js";import"./Link-O7CbLP92.js";import"./copy-Dcsra1dO.js";import"./copy-GTpWjg4q.js";import"./GitHub-Mark-HytzatKk.js";import"./TableOfContent-qKvmhN4-.js";import"./index-C0Tl3YXX.js";import"./index-b9onOzBF.js";import"./index-DKTuqk4i.js";import"./index-_nSLzRwo.js";import"./index-BOB0mZMq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vtZivBS9.js";import"./addCustomCSSWithScoping-D_Idq7DT.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
