import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-1ARNaUmP.js";import{r as n}from"./react-BZibOG70.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-sy8-k2gf.js";import{_ as c,d as l,r as u}from"./blocks-D9k7TVdi.js";import{Default as d,n as f,t as p}from"./Dialog.stories-dIZVjg1I.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{of:p}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(u,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(a,{of:d}),`
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
`,(0,g.jsx)(i,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),s(),c(),f()}))();export{h as default};