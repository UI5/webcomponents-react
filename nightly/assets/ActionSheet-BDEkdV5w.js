import{j as n}from"./iframe-DNMTfzpK.js";import{useMDXComponents as i}from"./index-BN2xRXE4.js";import{M as p,C as c}from"./blocks-D7TGtWIi.js";import"./Tag-DMQsT8Q8.js";import"./index-T3fFkT4y.js";import{C as a}from"./ControlsWithNote-Bm6pwLxQ.js";import{D as m}from"./DocsHeader-BUJ-uh18.js";import{F as h}from"./CommandsAndQueries-p_oo0qut.js";import{C as o,D as r}from"./ActionSheet.stories-BBsUDTBY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfBdub9z.js";import"./sys-enter-2-D1yMqvha.js";import"./alert-ovSFIgO_.js";import"./index-BVaTbyf5.js";import"./index-3Dfb5Jbe.js";import"./Link-QK9m66TA.js";import"./copy-D2fSnfVl.js";import"./copy-mCRNeeck.js";import"./GitHub-Mark-Dh9D3dJo.js";import"./TableOfContent-CHa5NTHN.js";import"./index-c_AmigIx.js";import"./index-B8yoe6T_.js";import"./index-CijDEz0A.js";import"./index-BmIqw6uo.js";import"./index-BXvVq-3Z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DdXxvAEF.js";import"./addCustomCSSWithScoping-DGsOsNkK.js";import"./delete-Bs_1Tn7y.js";import"./utils-PFbfoLst.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
