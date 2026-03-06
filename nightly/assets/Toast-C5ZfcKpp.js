import{j as o}from"./iframe-BsLeblbZ.js";import{useMDXComponents as i}from"./index-SmDsT-ZV.js";import{M as p,C as m}from"./blocks-MuC3nZ17.js";import"./Tag-YXcZfnM7.js";import"./index-RHsqj3O6.js";import{C as a}from"./ControlsWithNote-D-FuG2tP.js";import{D as c}from"./DocsHeader-op1-hUGh.js";import{F as h}from"./Footer-Bbw4uFwB.js";import"./CommandsAndQueries-BIrmUykn.js";import"./PageNotFound-DD-eOCZR.js";import{C as r,D as s}from"./Toast.stories-ozHiQK3n.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CyWeW3Ip.js";import"./sys-enter-2-0MhMJNjS.js";import"./alert-CqXBa80-.js";import"./index-B-umVgsK.js";import"./index-Xah-ddNA.js";import"./Link-CBQ0neVT.js";import"./copy-C_968UhI.js";import"./copy-D-f_NdBO.js";import"./GitHub-Mark-CQCKzyKN.js";import"./TableOfContent-B8KE4qVO.js";import"./index-DOfJ-lzX.js";import"./index-BxpRwQAU.js";import"./index-B-MH-ZOH.js";import"./index-B9PkCo2j.js";import"./index-Hl67y25M.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtKzQDtt.js";import"./addCustomCSSWithScoping-BnenMixx.js";import"./Illustrations-BpmOpW1L.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
