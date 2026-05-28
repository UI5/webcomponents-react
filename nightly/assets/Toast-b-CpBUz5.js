import{i as e}from"./preload-helper-usAeo7Bx.js";import{lh as t}from"./iframe-zvqSp8iY.js";import{J as n,_ as r,d as i,r as a}from"./blocks-JeoSavxG.js";import{E as o,b as s,f as c,t as l,u}from"./components-Ddxe9JaH.js";import{Default as d,n as f,t as p}from"./Toast.stories-CgL2g9Jk.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(c,{of:p,since:`0.9.0`}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`show-a-toast`,children:`Show a toast`}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`Toaast`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsx)(t.strong,{children:`Example`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`export function MyComponentWithAToast() {
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
`,(0,g.jsx)(u,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),o(),l(),r(),f()}))();export{h as default};