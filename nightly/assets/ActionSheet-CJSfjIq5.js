import{j as n}from"./iframe-BgKk_cUP.js";import{useMDXComponents as i}from"./index-DBhkOYZa.js";import{M as p,C as c}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import{C as a}from"./ControlsWithNote-CImCWZl8.js";import{D as m}from"./DocsHeader-DkQjtbvi.js";import{F as h}from"./CommandsAndQueries-DJU-Boml.js";import{C as o,D as r}from"./ActionSheet.stories-Df9UMj8a.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./index-C-jp63Tn.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./copy-DmE6rmx3.js";import"./copy-DsJBCyL-.js";import"./GitHub-Mark-CPTh4y7i.js";import"./TableOfContent-D3wn4nZr.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./delete-BP-q6TjY.js";import"./utils-BzD9qn-t.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
