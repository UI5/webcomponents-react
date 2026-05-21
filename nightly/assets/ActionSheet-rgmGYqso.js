import{i as e}from"./preload-helper-DbRxMUml.js";import{Fm as t}from"./iframe-C3dtzO-R.js";import{J as n,_ as r,d as i,r as a}from"./blocks-DLBO9TZg.js";import{_ as o,o as s,p as c,s as l,t as u}from"./components-6b7GI6hf.js";import{Default as d,n as f,t as p}from"./ActionSheet.stories-C2aTHqyv.js";function m(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(l,{of:p,subComponents:[`Button`]}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,g.jsx)(c,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`opening-actionsheets`,children:`Opening ActionSheets`}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(t.p,{children:[`You can open and close the `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` component in a declarative way using the `,(0,g.jsx)(t.code,{children:`open`}),` and `,(0,g.jsx)(t.code,{children:`opener`}),` prop.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const MyComponentWithActionSheet = () => {
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  return (
    <>
      <Button
        id={'openActionSheetBtn'}
        onClick={() => {
          setActionSheetIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <ActionSheet
        opener={'openActionSheetBtn'}
        open={actionSheetIsOpen}
        onClose={() => {
          setActionSheetIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,(0,g.jsx)(t.p,{children:(0,g.jsxs)(t.strong,{children:[`Opening an `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` by reference`]})}),`
`,(0,g.jsxs)(t.p,{children:[`The `,(0,g.jsx)(t.code,{children:`ActionSheet`}),` exposes a way to pass a reference of an element instead of an `,(0,g.jsx)(t.code,{children:`id`}),` to the `,(0,g.jsx)(t.code,{children:`opener`}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const ActionSheetComponent = () => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpenerClick = (e) => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={handleOpenerClick}>
        Opener
      </Button>
      <ActionSheet opener={buttonRef.current} open={open}>
        {/* Content */}
      </ActionSheet>
    </>
  );
};
`})}),`
`,(0,g.jsx)(s,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),o(),u(),r(),f()}))();export{h as default};