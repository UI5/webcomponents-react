import{j as n}from"./iframe-DLRMrfR_.js";import{useMDXComponents as i}from"./index-7UnH5ZCU.js";import{M as p,C as c}from"./blocks--r6oFhly.js";import"./Tag-zetZkNsl.js";import"./index-qvcEmQpJ.js";import{C as a}from"./ControlsWithNote-CAJ_mVv5.js";import{D as m}from"./DocsHeader-B1n-k_n7.js";import{F as h}from"./CommandsAndQueries-D6NirpIC.js";import{C as o,D as r}from"./ActionSheet.stories-CpTdfNNC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zAO2pP7J.js";import"./sys-enter-2-CCKngdgf.js";import"./alert-B3SXl-8D.js";import"./index-BPd73hWD.js";import"./index-tVwrcd6W.js";import"./Link-CBt9loeM.js";import"./copy-YT3KpyHI.js";import"./copy-Loq6ZFpK.js";import"./GitHub-Mark-DKvd1v7O.js";import"./TableOfContent-DuwFMUzK.js";import"./index-DwoJQxQH.js";import"./index-D2MDEhSl.js";import"./index-kj7rqJLC.js";import"./index-DsFidw_9.js";import"./index-xtEoLRb_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BMq-LIht.js";import"./addCustomCSSWithScoping-Ca5vBaM2.js";import"./delete-BwPLte86.js";import"./utils-CKmkWZ04.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
