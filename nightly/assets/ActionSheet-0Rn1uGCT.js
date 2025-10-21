import{j as n}from"./iframe-RbfDHgLf.js";import{useMDXComponents as i}from"./index-DqV7dpjg.js";import{M as p,C as c}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import{C as a}from"./ControlsWithNote-CdwZagHS.js";import{D as m}from"./DocsHeader-BoRFHi_p.js";import{F as h}from"./CommandsAndQueries-zsQY2vaX.js";import{C as o,D as r}from"./ActionSheet.stories-B5G3MgXI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./index-Krk892ln.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./copy-CchhbExl.js";import"./copy-DMiueq1X.js";import"./GitHub-Mark-DqbhO8GE.js";import"./TableOfContent-CFiX9KPt.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./delete-DcwaPxBU.js";import"./utils-IhqywFcl.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(m,{of:o,subComponents:["Button"]}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(c,{of:r}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"opening-actionsheets",children:"Opening ActionSheets"}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:["You can open and close the ",n.jsx(e.code,{children:"ActionSheet"})," component in a declarative way using the ",n.jsx(e.code,{children:"open"})," and ",n.jsx(e.code,{children:"opener"})," prop."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithActionSheet = () => {
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
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Opening an ",n.jsx(e.code,{children:"ActionSheet"})," by reference"]})}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ActionSheet"})," exposes a way to pass a reference of an element instead of an ",n.jsx(e.code,{children:"id"})," to the ",n.jsx(e.code,{children:"opener"}),` prop.
You can do that by e.g. leveraging a React Ref.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ActionSheetComponent = () => {
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
`,n.jsx(h,{})]})}function P(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{P as default};
