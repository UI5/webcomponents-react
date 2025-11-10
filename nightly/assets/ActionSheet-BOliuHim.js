import{j as n}from"./iframe-DwaN3YOb.js";import{useMDXComponents as i}from"./index-DJkPMHl0.js";import{M as p,C as c}from"./blocks-VOPJhWRb.js";import"./Tag-CvvDTrwW.js";import"./index-CeIuBzgz.js";import{C as a}from"./ControlsWithNote-D9Mkz8kQ.js";import{D as m}from"./DocsHeader-DxQVAhbX.js";import{F as h}from"./CommandsAndQueries-celHgEKj.js";import{C as o,D as r}from"./ActionSheet.stories-BVSuGTDC.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DlBGosYj.js";import"./sys-enter-2-D6KHkFFC.js";import"./alert-CbpKaM9g.js";import"./index-DTu_z_3g.js";import"./index-CUaYuXp6.js";import"./Link-DCuWG7Zr.js";import"./copy-BenzFaGk.js";import"./copy-CKG1fqk8.js";import"./GitHub-Mark-DLw5nuH0.js";import"./TableOfContent-CSJmcthz.js";import"./index-CVTJV5Os.js";import"./index-DjYkOeBC.js";import"./index-C3ayLo5Y.js";import"./index-Bi8h6EAq.js";import"./index-D4NPnlzD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-pPwV4WuA.js";import"./addCustomCSSWithScoping-CDiHCMLw.js";import"./delete-oCNE_JQh.js";import"./utils-CwcFpu02.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
