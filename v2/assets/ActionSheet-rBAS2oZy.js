import{j as n}from"./iframe-Ded5Mxh2.js";import{useMDXComponents as s}from"./index-CBfl9quq.js";import{M as p,C as c}from"./blocks-wt3pPbD-.js";import"./Tag-CDOQSrMR.js";import"./index-DFifKHPS.js";import{C as a}from"./ControlsWithNote-Dzah44TU.js";import{D as m}from"./DocsHeader-04UrQpe6.js";import{F as h}from"./Footer-1OmcbI64.js";import"./CommandsAndQueries-Ddo3tZ3K.js";import"./PageNotFound-CXW0ieku.js";import{C as o,D as r}from"./ActionSheet.stories-DCarmXNx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-YHPlo4lO.js";import"./sys-enter-2-C0FqqFCv.js";import"./alert-K2R8mcWk.js";import"./index-Cmea41Uz.js";import"./index-CU0yEW5I.js";import"./Link-DSsFOfLn.js";import"./copy-DUhQdKpB.js";import"./copy-IKAWbId8.js";import"./GitHub-Mark-Dgg2Vd7w.js";import"./TableOfContent-BE7CFaYX.js";import"./index-DNd61viN.js";import"./index-BiAFWhEK.js";import"./index-jHFtLiCf.js";import"./index-BmNOE6G0.js";import"./index-BfPsTBbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DHMdvhLY.js";import"./addCustomCSSWithScoping-CBqV9zN1.js";import"./Illustrations-Btxulb8H.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-D0fZzTI7.js";import"./utils-C_Aw_RzH.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
`,n.jsx(h,{})]})}function G(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{G as default};
