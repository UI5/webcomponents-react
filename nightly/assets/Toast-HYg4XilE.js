import{j as o}from"./iframe-DM8isA9c.js";import{useMDXComponents as i}from"./index-Do0cpSGj.js";import{M as p,C as a}from"./blocks-Crph7jgT.js";import"./Tag-BtR3uqsq.js";import"./index-BgbeFss3.js";import{C as m}from"./ControlsWithNote-Cpjdo5La.js";import{D as c}from"./DocsHeader-YDZSqGW1.js";import{F as h}from"./CommandsAndQueries-DM-8oq2s.js";import{C as s,D as e}from"./Toast.stories-DqJuyUJn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CLqibrfC.js";import"./sys-enter-2-COJQOFoX.js";import"./alert-WVpRlSFd.js";import"./index-CNSbSmbI.js";import"./index-FrVWogAp.js";import"./Link-j0sjRyW5.js";import"./copy-DwRRccgB.js";import"./copy-DYIgCYkz.js";import"./GitHub-Mark-CBMDN6NV.js";import"./TableOfContent-Dm7xBpZm.js";import"./index-C6UNmCtN.js";import"./index-BS8NgEfP.js";import"./index-B6NdOyDM.js";import"./index-Cf1wRWYr.js";import"./index-ozpDTdfP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9ZULNfD.js";import"./addCustomCSSWithScoping-AinZnCKl.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
