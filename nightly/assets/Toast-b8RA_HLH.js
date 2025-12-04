import{j as o}from"./iframe-DMN4M7xk.js";import{useMDXComponents as i}from"./index-CILjehOn.js";import{M as p,C as a}from"./blocks-D_B3P_L6.js";import"./Tag-ClYMjcis.js";import"./index-fsDm6-dx.js";import{C as m}from"./ControlsWithNote-tXM9Snha.js";import{D as c}from"./DocsHeader-MRAxGgEE.js";import{F as h}from"./CommandsAndQueries-WBNIPpbv.js";import{C as s,D as e}from"./Toast.stories-DzZMG6q-.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BhNJA5fs.js";import"./sys-enter-2-D_7r5iCR.js";import"./alert-B4Ie2dEw.js";import"./index-DC1f3cIv.js";import"./index-Bm615TpC.js";import"./Link-USYy1Qgl.js";import"./copy-B73e9Yog.js";import"./copy-DfWrS8Wl.js";import"./GitHub-Mark-Yj5YdLl8.js";import"./TableOfContent-B_sZsaRY.js";import"./index-XJcxBhVz.js";import"./index-CZCgHbbj.js";import"./index-Bppq7NLw.js";import"./index-DPueH0sU.js";import"./index-W50AkbAB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IlXAI9zt.js";import"./addCustomCSSWithScoping-dib_Xrvh.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
