import{i as e}from"./preload-helper-DbRxMUml.js";import{Fm as t}from"./iframe-BH-uDZZZ.js";import{J as n,_ as r,d as i,r as a}from"./blocks-CeZxiqkW.js";import{_ as o,o as s,p as c,s as l,t as u}from"./components-Bks4bT-L.js";import{Default as d,n as f,t as p}from"./Dialog.stories-Dtd1LgXD.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(l,{of:p}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(c,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`opening-dialogs`,children:`Opening Dialogs`}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`Dialog`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` prop.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <Dialog open={dialogIsOpen} />
    </>
  );
};
`})}),`
`,(0,g.jsx)(s,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),o(),u(),r(),f()}))();export{h as default};