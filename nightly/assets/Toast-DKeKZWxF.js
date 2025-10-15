import{j as o}from"./iframe-Dpln3x91.js";import{useMDXComponents as i}from"./index-BwM4zX9M.js";import{M as p,C as a}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import{C as m}from"./ControlsWithNote-DJvO6dls.js";import{D as c}from"./DocsHeader-CEsHAww7.js";import{F as h}from"./CommandsAndQueries-D8ZM_J5V.js";import{C as s,D as e}from"./Toast.stories-BK2HbH6s.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./index-C9IWhIjk.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./copy-DhztajM7.js";import"./copy-BmZL0gFG.js";import"./GitHub-Mark-92mONuYK.js";import"./TableOfContent-BGktvtZs.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
