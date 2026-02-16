import{j as n}from"./iframe-JQDqhQTc.js";import{useMDXComponents as i}from"./index-SjG54pW2.js";import{M as p,C as c}from"./blocks-DPmUjEjQ.js";import"./Tag-DGi-8g-u.js";import"./index-lJfxqfBt.js";import{C as a}from"./ControlsWithNote-gPJQaIcm.js";import{D as m}from"./DocsHeader-BrzdijUK.js";import{F as h}from"./CommandsAndQueries-Crv-3Mfa.js";import{C as o,D as r}from"./ActionSheet.stories-BNLRzdmJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DOgKPosF.js";import"./sys-enter-2-C0saRr3v.js";import"./alert-C_Y0d_GP.js";import"./index-BpgBwQjv.js";import"./index-CUZKwPNc.js";import"./Link-Dpu-eDDr.js";import"./copy-CgQ5C712.js";import"./copy-t9TmEwA0.js";import"./GitHub-Mark-ChPM-wav.js";import"./TableOfContent-CQNt4SGr.js";import"./index-DLqk7pLq.js";import"./index-BKiGQD-R.js";import"./index-BFgRiJXe.js";import"./index-DcWtp55E.js";import"./index-BIpZPYH3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B5_fArc3.js";import"./addCustomCSSWithScoping-c6XYl4zv.js";import"./delete-CLRGeIuZ.js";import"./utils-BBO9bjZR.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
