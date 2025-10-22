import{j as o}from"./iframe-BgUChC8z.js";import{useMDXComponents as i}from"./index-Bt3QSaL1.js";import{M as p,C as a}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import{C as m}from"./ControlsWithNote-C0BpeSlm.js";import{D as c}from"./DocsHeader-DpC7xko2.js";import{F as h}from"./CommandsAndQueries-BiCzXToa.js";import{C as s,D as e}from"./Toast.stories-DvO2u2CV.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./index-DUpxdMFd.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./copy-BA9m2lze.js";import"./copy-BTfIxGSH.js";import"./GitHub-Mark-BLzFnLXs.js";import"./TableOfContent-zmIy0jA9.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
