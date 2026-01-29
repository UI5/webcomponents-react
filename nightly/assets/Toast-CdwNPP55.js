import{j as o}from"./iframe-_dkm4-lx.js";import{useMDXComponents as i}from"./index-DAI4KLq-.js";import{M as p,C as a}from"./blocks-Bs8u5Nl3.js";import"./Tag-BrrbDF8k.js";import"./index-BnWTzbqn.js";import{C as m}from"./ControlsWithNote-iHzvv8KN.js";import{D as c}from"./DocsHeader-B_1u0i3U.js";import{F as h}from"./CommandsAndQueries-BqJjwTMw.js";import{C as s,D as e}from"./Toast.stories-DQkb1FIk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BDRRh1Am.js";import"./sys-enter-2-BupypyQm.js";import"./alert-C9P72ihW.js";import"./index-Dr4umyr0.js";import"./index-S8RgegHO.js";import"./Link-DtN5ZiM1.js";import"./copy-CsFe5n62.js";import"./copy-CdpHOxV4.js";import"./GitHub-Mark-BfZrOkJx.js";import"./TableOfContent-BUpAPeCZ.js";import"./index-Bo-JlDoR.js";import"./index-oGo7hVYD.js";import"./index-DAd7Ps1Q.js";import"./index-DGmq0M6J.js";import"./index-D5ljwTMv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Di5ZUlIH.js";import"./addCustomCSSWithScoping-BWn-VVtx.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
