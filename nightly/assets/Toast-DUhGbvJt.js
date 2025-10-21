import{j as o}from"./iframe-pfqRYewB.js";import{useMDXComponents as i}from"./index-DxYcUkXM.js";import{M as p,C as a}from"./blocks-CN6sML6r.js";import"./Tag-DOr7yVDv.js";import"./index-TMKVCirT.js";import{C as m}from"./ControlsWithNote-1jH7cerp.js";import{D as c}from"./DocsHeader-C02JYCTh.js";import{F as h}from"./CommandsAndQueries-CBK4GytM.js";import{C as s,D as e}from"./Toast.stories-BBFEaMuW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BrehxxGu.js";import"./sys-enter-2-CTsRx7VM.js";import"./alert-qaqpTU-O.js";import"./index-DQUabOTm.js";import"./index-DQ0pLIsd.js";import"./Link-C4McI5Wx.js";import"./copy-C6T5m5t-.js";import"./copy-0Cu3Y4If.js";import"./GitHub-Mark-DJ5zcdzH.js";import"./TableOfContent-C20Gax9P.js";import"./index-BOCv1nQg.js";import"./index-C87hBs3b.js";import"./index-D05B83RK.js";import"./index-5KySo-3G.js";import"./index-BkIEU9nM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJxPXkiU.js";import"./addCustomCSSWithScoping-D2yzvGyj.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
