import{j as o}from"./iframe-CfR5iN1B.js";import{useMDXComponents as i}from"./index-WDvIe_cH.js";import{M as p,C as a}from"./blocks-CfXjvcLO.js";import"./Tag-BTK-zFQw.js";import"./index-DekWkQZr.js";import{C as m}from"./ControlsWithNote-fyp4mFm_.js";import{D as c}from"./DocsHeader-2XMWKy1o.js";import{F as h}from"./CommandsAndQueries-Cn01gt7T.js";import{C as s,D as e}from"./Toast.stories-D-t9oSqO.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DTEN63Fk.js";import"./sys-enter-2-DpY8LIaY.js";import"./alert-C8yZ5BF8.js";import"./index-DImzYd9b.js";import"./index-Dow-CDJC.js";import"./Link-DJBSV0Mu.js";import"./copy-Yrnd-QKj.js";import"./copy-CaX7ddbO.js";import"./GitHub-Mark-spj1qVKo.js";import"./TableOfContent-WJhDVAFL.js";import"./index-DqPScGjh.js";import"./index-s45nBPnw.js";import"./index-3b3tgeGr.js";import"./index-BlanoaUa.js";import"./index-B5r1lcgY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BSc69HNM.js";import"./addCustomCSSWithScoping-Bvh6JLqq.js";function r(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:s}),`
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
