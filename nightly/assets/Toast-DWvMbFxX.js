import{j as o}from"./iframe-DLeMGAs6.js";import{useMDXComponents as i}from"./index-BeTNnGed.js";import{M as p,C as a}from"./blocks-CVdnQ-m5.js";import"./Tag-fuIv2r1-.js";import"./index-CAID728Y.js";import{C as m}from"./ControlsWithNote-QYSrl-UI.js";import{D as c}from"./DocsHeader-DY6tY_U8.js";import{F as h}from"./CommandsAndQueries-Do6MeMuW.js";import{C as s,D as e}from"./Toast.stories-aD2AiKH1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BttnUTpt.js";import"./sys-enter-2-DQSYULXQ.js";import"./alert-Braz2hWt.js";import"./index-BelAbkZz.js";import"./index-Xs0i3Hhr.js";import"./Link-D_uo4UVb.js";import"./copy-CSTZlAKH.js";import"./copy-ClThfN15.js";import"./GitHub-Mark-CIH3fdoh.js";import"./TableOfContent-sSbZlFDL.js";import"./index-ChbJtMA8.js";import"./index-D_-Zm7gh.js";import"./index-CetP1T2M.js";import"./index-DQmJ5ecl.js";import"./index-DGDr800L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C13TjiIP.js";import"./addCustomCSSWithScoping-Cj5ZxzDT.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
