import{j as o}from"./iframe-hWo-wO7u.js";import{useMDXComponents as i}from"./index-B2u3atBN.js";import{M as p,C as a}from"./blocks-D665FCej.js";import"./Tag-DiHaMBCj.js";import"./index-D5mqC0e8.js";import{C as m}from"./ControlsWithNote-BBUwaR31.js";import{D as c}from"./DocsHeader-QdazEtsa.js";import{F as h}from"./CommandsAndQueries-BtJ9G9OP.js";import{C as s,D as e}from"./Toast.stories-BNBSb0HJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C8DEl_tH.js";import"./sys-enter-2-LL0qt2nK.js";import"./alert-DeTqeiYU.js";import"./index-qccq9h_o.js";import"./index-BDgRL0Nh.js";import"./Link-BA7dioNH.js";import"./copy-CGSuE3q9.js";import"./copy-BPT19kup.js";import"./GitHub-Mark-o0GLD-Xz.js";import"./TableOfContent-gKRQ1rDy.js";import"./index-Wfnu6Ku2.js";import"./index-D7ZeaZZe.js";import"./index-CSzf7Z-Y.js";import"./index-DISMqvl7.js";import"./index-C_OvF3EV.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfqGlQv7.js";import"./addCustomCSSWithScoping-wCTK5FK_.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
