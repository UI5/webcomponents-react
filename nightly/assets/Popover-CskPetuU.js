import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-BxkeBIi4.js";import{r as n}from"./react-BprHCJr4.js";import{_ as r,o as i,p as a,s as o,t as s}from"./components-BmKOFW_b.js";import{_ as c,d as l,r as u}from"./blocks-z72YJre6.js";import{Default as d,n as f,t as p}from"./Popover.stories-DkJGgkla.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l,{of:p}),`
`,(0,g.jsx)(o,{of:p,since:`0.9.0`}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(u,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`opening-popovers`,children:`Opening Popovers`}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`Popover`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` and `,(0,g.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,(0,g.jsx)(i,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),s(),c(),f()}))();export{h as default};