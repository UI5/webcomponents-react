import{j as n}from"./iframe-BxNMYsVp.js";import{useMDXComponents as i}from"./index-CEL_Mrqn.js";import{M as p,C as c}from"./blocks-CLtQlidJ.js";import"./Tag-CYWTluzA.js";import"./index-22bYdtLv.js";import{C as a}from"./ControlsWithNote-Cla18jxh.js";import{D as m}from"./DocsHeader-CXbeVpwS.js";import{F as h}from"./CommandsAndQueries-CKT9ys9T.js";import{C as o,D as r}from"./ActionSheet.stories-DUhiLi_X.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BR3I6cVC.js";import"./sys-enter-2-CKo5vDlS.js";import"./alert-BEt7QhXe.js";import"./index-CVOVci2N.js";import"./index-DKLNqf9R.js";import"./Link-DZt8_sp9.js";import"./copy-DG3unAFz.js";import"./copy-DFdPinc0.js";import"./GitHub-Mark-BP_KxcKK.js";import"./TableOfContent-BSn9g2hl.js";import"./index-lYnXb9lV.js";import"./index-jhZZ-U6H.js";import"./index-CKGFui_U.js";import"./index-BQbr2ZNY.js";import"./index-7hnHpQRn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CG_dGq_W.js";import"./addCustomCSSWithScoping-CJX4iiEH.js";import"./delete-BG6noefH.js";import"./utils-D-9tMIQC.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
