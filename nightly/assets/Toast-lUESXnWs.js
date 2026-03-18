import{j as o}from"./iframe-DxjY9BFy.js";import{useMDXComponents as i}from"./index-Bk5eT7re.js";import{M as p,C as m}from"./blocks-CATAEJ_X.js";import"./Tag-DnkuMosg.js";import"./index-B4O__Lt2.js";import{C as a}from"./ControlsWithNote-Bi0XUiG8.js";import{D as c}from"./DocsHeader-GdewomhS.js";import{F as h}from"./Footer-CWL8JIjr.js";import"./CommandsAndQueries-GjRh9gzH.js";import"./PageNotFound-CM4Hmt0N.js";import{C as r,D as s}from"./Toast.stories-D9LV-Q7x.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BTY6GktZ.js";import"./sys-enter-2-DcEz2THL.js";import"./alert-CFzS8fE9.js";import"./index-BwDYaeY0.js";import"./index-qULy9Htf.js";import"./Link-B0lBzBIQ.js";import"./copy-MJuo07Gq.js";import"./copy-B5NkvAEv.js";import"./GitHub-Mark-C6lCEuPt.js";import"./TableOfContent-DS5LpAQ6.js";import"./index-CzEttlwi.js";import"./index-DimdoC19.js";import"./index-Cr_g29EW.js";import"./index-ssnDYxvl.js";import"./index-D8DdOlBI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CjvVRPhX.js";import"./addCustomCSSWithScoping-C4xqV3rh.js";import"./Illustrations-_-Ip7Vxq.js";import"./i18n-defaults-CFWtSmu6.js";function e(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:r}),`
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
