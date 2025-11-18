import{j as n}from"./iframe-B_Wb0L56.js";import{useMDXComponents as i}from"./index-307InIrT.js";import{M as p,C as c}from"./blocks-BG9i3u3d.js";import"./Tag-BJqa-9S6.js";import"./index-IQMTO30I.js";import{C as a}from"./ControlsWithNote-B2GD3nsm.js";import{D as m}from"./DocsHeader-CzpamC24.js";import{F as h}from"./CommandsAndQueries-DZD1CEEu.js";import{C as o,D as r}from"./ActionSheet.stories-DLypRFeB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CNVdTL1g.js";import"./sys-enter-2-YeZbpBvt.js";import"./alert-BrJW2BAH.js";import"./index-DOJ9CtkL.js";import"./index-6_sfbhaU.js";import"./Link-mQObbT4s.js";import"./copy-CswcPv5A.js";import"./copy-B8s392ic.js";import"./GitHub-Mark-B2qKopO1.js";import"./TableOfContent-C8-rfcah.js";import"./index-C1-6BxML.js";import"./index-CTXSjodk.js";import"./index-B6cUzUVp.js";import"./index-DKVx4eTx.js";import"./index-BzKebhUC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CNNLg8qF.js";import"./addCustomCSSWithScoping-CLC5si1k.js";import"./delete-yizw3Nd_.js";import"./utils-C8OSDLXz.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
