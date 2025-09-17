import{j as o}from"./iframe-_UyBg_Hl.js";import{useMDXComponents as i}from"./index-DEEVvvo3.js";import{M as p,C as a}from"./blocks-CYzyNaRH.js";import"./Tag-CQlNZs2z.js";import"./index-5woB_pVn.js";import{C as m}from"./ControlsWithNote-DidTIApO.js";import{D as c}from"./DocsHeader-DCW0zQrG.js";import{F as h}from"./CommandsAndQueries-0B2XTB0a.js";import{C as s,D as e}from"./Toast.stories-BQZWf8ze.js";import"./preload-helper-D9Z9MdNV.js";import"./information-DYJp_bgk.js";import"./sys-enter-2-Bc61YsW4.js";import"./alert-Vjb3s5VB.js";import"./index-CCQAf2jY.js";import"./index-DXgH8OvD.js";import"./Link-5ArX67S2.js";import"./copy-DGzjElTh.js";import"./copy-BX3zmcvZ.js";import"./GitHub-Mark-BeciDiIt.js";import"./TableOfContent-Dd45oQBu.js";import"./index-DpskCw-c.js";import"./index-e_5k1_Nn.js";import"./addCustomCSSWithScoping-BV_2mez6.js";import"./index-LcJnWxTb.js";import"./index-x1moOr2G.js";import"./index-CbWaderx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-SEMy8FFe.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
