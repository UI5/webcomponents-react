import{j as o}from"./iframe-DmoM9f-3.js";import{useMDXComponents as i}from"./index-B20arXE0.js";import{M as p,C as a}from"./blocks-BpV1oLoN.js";import"./Tag-C5kFbKbl.js";import"./index-BLNEyCKE.js";import{C as m}from"./ControlsWithNote-r_kaA0NY.js";import{D as c}from"./DocsHeader-a_YCyG36.js";import{F as h}from"./CommandsAndQueries-D46yw8vq.js";import{C as s,D as e}from"./Toast.stories-X9Y7tdv_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DFrNJXON.js";import"./sys-enter-2-97edjggS.js";import"./alert-DFs18VX5.js";import"./index-D10NIdcs.js";import"./index-CwkZexmy.js";import"./Link-CJAlKdXH.js";import"./copy-47AFjMvF.js";import"./copy-CLLjPrKq.js";import"./GitHub-Mark-DhrdlfJG.js";import"./TableOfContent-DpBIb8tu.js";import"./index-BsxZ4Cqo.js";import"./index-C9RFs9lp.js";import"./index-BS6TqzQW.js";import"./index-DEJMdS-B.js";import"./index--5fdhH7F.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BvwMzl7A.js";import"./addCustomCSSWithScoping-CrnVfoLT.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
