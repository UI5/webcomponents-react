import{j as o}from"./iframe-18_5pfj2.js";import{useMDXComponents as i}from"./index-CIhtdkHx.js";import{M as p,C as m}from"./blocks-Cj6CgQUG.js";import"./Tag-s2oCmO6-.js";import"./index-BIj2K6s5.js";import{C as a}from"./ControlsWithNote-Doto1ynJ.js";import{D as c}from"./DocsHeader-ClFsSvc-.js";import{F as h}from"./Footer-BvGdDwIL.js";import"./CommandsAndQueries-BGW2wCD6.js";import"./PageNotFound-BO4FGO9U.js";import{C as r,D as s}from"./Toast.stories-BW584Ng7.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./index-B3MOIvF5.js";import"./index-BlCfzNdo.js";import"./Link-C9Gq01-B.js";import"./copy-BcDeo-ab.js";import"./copy-BQYJB7Nu.js";import"./GitHub-Mark-ChV91zVA.js";import"./TableOfContent-CEQwYXTE.js";import"./index-CRBj8Lig.js";import"./index-Bj-OwMs_.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
