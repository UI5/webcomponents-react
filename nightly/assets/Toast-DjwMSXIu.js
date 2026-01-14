import{j as o}from"./iframe-DsoLxTrs.js";import{useMDXComponents as i}from"./index-BYp40d_0.js";import{M as p,C as a}from"./blocks-BdFCA8eW.js";import"./Tag-CTTSF-tU.js";import"./index-DgqU0bHc.js";import{C as m}from"./ControlsWithNote-DpDkKRs4.js";import{D as c}from"./DocsHeader-CDZJIivq.js";import{F as h}from"./CommandsAndQueries-CnpygbQ5.js";import{C as s,D as e}from"./Toast.stories-B_Lrs7Pz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Dif64wGJ.js";import"./sys-enter-2-CF1sb48s.js";import"./alert-DcNO-1uE.js";import"./index-CNxSz0Hc.js";import"./index-BUCXDqHN.js";import"./Link-B3HsQBkt.js";import"./copy-rhZFmAqL.js";import"./copy-BFj7VYi7.js";import"./GitHub-Mark-CCJSy1Iz.js";import"./TableOfContent-CLxSJm3z.js";import"./index-DoD5C1cK.js";import"./index-CgwlM72N.js";import"./index-_wPX9_fg.js";import"./index-CcP8H8eG.js";import"./index-DUtNsIlX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CN1rIyKa.js";import"./addCustomCSSWithScoping-Bri9Hmu_.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
