import{j as o}from"./iframe-DYmejECO.js";import{useMDXComponents as i}from"./index-9gDZjqLB.js";import{M as p,C as a}from"./blocks-WpvHKkxz.js";import"./Tag-BqbQuhLk.js";import"./index-B5pjKVih.js";import{C as m}from"./ControlsWithNote-DKcmz9Y6.js";import{D as c}from"./DocsHeader-BbSMCFfB.js";import{F as h}from"./CommandsAndQueries-BUFKZ5oS.js";import{C as s,D as e}from"./Toast.stories-CtBlLosn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DDszVPcm.js";import"./sys-enter-2-DGk9QDRk.js";import"./alert-B5ckm3Ge.js";import"./index-E0O-rqDf.js";import"./index-D_-3_YTN.js";import"./Link-FVvXEWOc.js";import"./copy-C5FDM_IK.js";import"./copy-Za-_Z-Tq.js";import"./GitHub-Mark-wNehAYyG.js";import"./TableOfContent-BUGWyTUo.js";import"./index-DtSXtxpp.js";import"./index-Cq6cdgcL.js";import"./index-CQOsAJId.js";import"./index-B1aVKp_Z.js";import"./index-CHQEcSbZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6DutTHa.js";import"./addCustomCSSWithScoping-DW_smYaa.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
