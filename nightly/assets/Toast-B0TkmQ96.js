import{j as o}from"./iframe-DLRMrfR_.js";import{useMDXComponents as i}from"./index-7UnH5ZCU.js";import{M as p,C as a}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import{C as m}from"./ControlsWithNote-CAJ_mVv5.js";import{D as c}from"./DocsHeader-B1n-k_n7.js";import{F as h}from"./CommandsAndQueries-D6NirpIC.js";import{C as s,D as e}from"./Toast.stories-1Wti7VAR.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./index-BPd73hWD.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./copy-YT3KpyHI.js";import"./copy-Loq6ZFpK.js";import"./GitHub-Mark-DKvd1v7O.js";import"./TableOfContent-DuwFMUzK.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
