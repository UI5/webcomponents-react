import{j as n}from"./iframe-Biw_3dDT.js";import{useMDXComponents as i}from"./index-BMMnaqrc.js";import{M as p,C as c}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import{C as a}from"./ControlsWithNote-D6JbSpo_.js";import{D as m}from"./DocsHeader-BYyVf9dq.js";import{F as h}from"./CommandsAndQueries-D0Z7WxPl.js";import{C as o,D as r}from"./ActionSheet.stories-CVnYycsN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./index-BJYjY6km.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./copy-BvvX9LLj.js";import"./copy-DH1R2EGq.js";import"./GitHub-Mark-0F-jeI65.js";import"./TableOfContent-DZIDKcpc.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./delete-BCgK7hyI.js";import"./utils-DqOKa6xr.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
