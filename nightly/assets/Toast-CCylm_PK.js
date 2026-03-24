import{j as o}from"./iframe-D3LJsbiF.js";import{useMDXComponents as i}from"./index-CyzPa2YT.js";import{M as p,C as m}from"./blocks-C17hS1H0.js";import"./Tag-DEA3QTbc.js";import"./index-DQRzxDSe.js";import{C as a}from"./ControlsWithNote-Daapf7Ph.js";import{D as c}from"./DocsHeader-Df8FJ8t_.js";import{F as h}from"./Footer-BXlDlrd5.js";import"./CommandsAndQueries-ZyWBFV72.js";import"./PageNotFound-BgagSqcc.js";import{C as r,D as s}from"./Toast.stories-DsIlt38p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Pe11Evj5.js";import"./sys-enter-2-nzdqIN1z.js";import"./alert-8s9TsqZs.js";import"./index-CukaHHo2.js";import"./index-GY8piuJS.js";import"./Link-DcTIU4K2.js";import"./copy-Cx1SvDmz.js";import"./copy-CVdXx4M8.js";import"./GitHub-Mark-rXF-W6BJ.js";import"./TableOfContent-VA0eJa1c.js";import"./index-Bs-GzB5h.js";import"./index-Do3YGvBX.js";import"./index-BCAZlXLW.js";import"./index-N6F2Hon5.js";import"./index-CQnpN8bu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CgFvj6Uo.js";import"./addCustomCSSWithScoping-DIPZZBkR.js";import"./Illustrations-DV_KfhEH.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
`,o.jsx(c,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:s}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:s}),`
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
`,o.jsx(h,{})]})}function G(n={}){const{wrapper:t}={...i(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(e,{...n})}):e(n)}export{G as default};
