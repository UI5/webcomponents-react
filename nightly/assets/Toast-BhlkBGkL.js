import{j as o}from"./iframe-DncksSc9.js";import{useMDXComponents as i}from"./index-DHwy2cP9.js";import{M as p,C as a}from"./blocks-CrR4TToZ.js";import"./Tag-CydY6GNK.js";import"./index-Bxx2fk60.js";import{C as m}from"./ControlsWithNote-Diaxfqvl.js";import{D as c}from"./DocsHeader-BqrZT3Oi.js";import{F as h}from"./CommandsAndQueries-CDnFth_H.js";import{C as s,D as e}from"./Toast.stories-Dcb6lFaf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DaRpWkOX.js";import"./sys-enter-2-oWYvZ3n3.js";import"./alert-DDv07Q-F.js";import"./index-Bbgh-_Am.js";import"./index-DM-1F5s9.js";import"./Link-DA9rizI6.js";import"./copy-BCvo8Ym1.js";import"./copy-DLEpwWX6.js";import"./GitHub-Mark-D-UOdu-9.js";import"./TableOfContent-CzqOl-iG.js";import"./index--l4k2_pu.js";import"./index-LgvpS8l8.js";import"./index-DjMKVIn1.js";import"./index-9yiQ979H.js";import"./index-ozB3DgLW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0ZXAWvt.js";import"./addCustomCSSWithScoping-CHaIArZr.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
