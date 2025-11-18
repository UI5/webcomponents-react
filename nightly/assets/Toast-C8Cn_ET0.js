import{j as o}from"./iframe-CDzsgyAV.js";import{useMDXComponents as i}from"./index-DP2UBTat.js";import{M as p,C as a}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import{C as m}from"./ControlsWithNote-DlQOn3kv.js";import{D as c}from"./DocsHeader-DIz35cDg.js";import{F as h}from"./CommandsAndQueries-CpE7A47V.js";import{C as s,D as e}from"./Toast.stories-D4BNilsw.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./index-spzGnsRF.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./copy-BZgPaYCt.js";import"./copy-DpKoQtQP.js";import"./GitHub-Mark-BKgRr60A.js";import"./TableOfContent-DQmVPUjd.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
