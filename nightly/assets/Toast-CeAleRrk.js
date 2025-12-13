import{j as o}from"./iframe-vf7s2VGb.js";import{useMDXComponents as i}from"./index-DKJSAVnl.js";import{M as p,C as a}from"./blocks-B4oFLz5c.js";import"./Tag-P1WqKFay.js";import"./index-DHeHce3N.js";import{C as m}from"./ControlsWithNote-BkwogRCo.js";import{D as c}from"./DocsHeader-CHUqOFdO.js";import{F as h}from"./CommandsAndQueries-DWofsexW.js";import{C as s,D as e}from"./Toast.stories-C2_l5pG4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-9NSJvKF7.js";import"./sys-enter-2-CiXorCdU.js";import"./alert-La4PIswz.js";import"./index-Bt_xSHJX.js";import"./index-Edovokrc.js";import"./Link-CPCmvFzf.js";import"./copy-C7B_femg.js";import"./copy-CaZ5zeDJ.js";import"./GitHub-Mark-COPjXt9x.js";import"./TableOfContent-DB8nqPOD.js";import"./index-DxKE5xNM.js";import"./index-BPodtacB.js";import"./index-Dj1d2O3_.js";import"./index-BuDcKrDV.js";import"./index-rjrZsjeS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLGPl5RO.js";import"./addCustomCSSWithScoping-B77_-I85.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
