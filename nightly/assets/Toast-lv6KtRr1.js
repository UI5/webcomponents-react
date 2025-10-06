import{j as o}from"./iframe-BcULqSVx.js";import{useMDXComponents as i}from"./index-DimjqcOY.js";import{M as p,C as a}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import{C as m}from"./ControlsWithNote-vHgKyDQ4.js";import{D as c}from"./DocsHeader-rcaw3yWJ.js";import{F as h}from"./CommandsAndQueries-Bjxahy8c.js";import{C as s,D as e}from"./Toast.stories-pziUhD5U.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./index-D0A2Ruup.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./copy-DixMi52h.js";import"./copy-DrZjSCYt.js";import"./GitHub-Mark-CX2aPwNN.js";import"./TableOfContent-BwCnFx1q.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
