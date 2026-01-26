import{j as o}from"./iframe-D_U86qCv.js";import{useMDXComponents as i}from"./index-Bg9tEBEE.js";import{M as p,C as a}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import{C as m}from"./ControlsWithNote-D5S_Midd.js";import{D as c}from"./DocsHeader-RwaG2gO7.js";import{F as h}from"./CommandsAndQueries-TugN8T6l.js";import{C as s,D as e}from"./Toast.stories-Bkc4RR6H.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./index-WEtnzuU5.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./copy-BX4vSZO9.js";import"./copy-Crjp4Ac1.js";import"./GitHub-Mark-1bpW3JCO.js";import"./TableOfContent-CQJqnL0A.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
