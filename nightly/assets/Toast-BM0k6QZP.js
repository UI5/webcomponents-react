import{j as o}from"./iframe-BTfUB26H.js";import{useMDXComponents as i}from"./index-D3NtTefK.js";import{M as p,C as a}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import{C as m}from"./ControlsWithNote-HbXGbTZ6.js";import{D as c}from"./DocsHeader-B5eEQnby.js";import{F as h}from"./CommandsAndQueries-BWcq9mTF.js";import{C as s,D as e}from"./Toast.stories-KDpg30G8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./index-F0g47Tza.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./copy-CuQTj5FX.js";import"./copy-D6Vht5qr.js";import"./GitHub-Mark-ygJhjlM_.js";import"./TableOfContent-CzONlPB9.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
