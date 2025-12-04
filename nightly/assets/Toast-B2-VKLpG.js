import{j as o}from"./iframe-DrPmn2Fl.js";import{useMDXComponents as i}from"./index-D0JiuHQ4.js";import{M as p,C as a}from"./blocks-BjYhsAle.js";import"./Tag-DTGJG_3A.js";import"./index-D7exUdgR.js";import{C as m}from"./ControlsWithNote-AZb4CeHf.js";import{D as c}from"./DocsHeader-Ck2be5Yc.js";import{F as h}from"./CommandsAndQueries-DJtqUE3T.js";import{C as s,D as e}from"./Toast.stories-BMUyvBtT.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B3e_XIJr.js";import"./sys-enter-2-BzGI5wIC.js";import"./alert-k9YiTQ21.js";import"./index-BryeGZHH.js";import"./index-pqPyLDtB.js";import"./Link-DpbM7hv-.js";import"./copy-65kpRtEk.js";import"./copy-BYLHU9Z4.js";import"./GitHub-Mark-DKAUGK9x.js";import"./TableOfContent-DpdaqcN6.js";import"./index-BcboqTLf.js";import"./index-7KEOFJG9.js";import"./index-CSSeCaDH.js";import"./index-BDgABtQ5.js";import"./index-CsBAZiQX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D8f6CQWY.js";import"./addCustomCSSWithScoping-Dp7JQ0AP.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
