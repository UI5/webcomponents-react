import{j as n}from"./iframe-DBihyX6B.js";import{useMDXComponents as i}from"./index-7EvsRGh_.js";import{M as p,C as c}from"./blocks-4x6sD7LX.js";import"./Tag-DcWV-u9n.js";import"./index-DLEor5QI.js";import{C as a}from"./ControlsWithNote-BKeRG1wh.js";import{D as m}from"./DocsHeader-DqvqKIEn.js";import{F as h}from"./CommandsAndQueries-CFIgGEta.js";import{C as o,D as r}from"./ActionSheet.stories-DkyEFDDv.js";import"./preload-helper-PPVm8Dsz.js";import"./information-5R3zdDEl.js";import"./sys-enter-2-DGkUJwI9.js";import"./alert-DQd1blb9.js";import"./index-d0ALq1QU.js";import"./index-tKXjFGfd.js";import"./Link-DylgBeIF.js";import"./copy-aRdQKEdI.js";import"./copy-Bf9mIKpj.js";import"./GitHub-Mark-ByGXXCjK.js";import"./TableOfContent-CBdAmSq8.js";import"./index-Bht8mt-d.js";import"./index-BXD3v3ss.js";import"./addCustomCSSWithScoping-CH8klGw7.js";import"./index-HwCsdfjY.js";import"./index-BYBUQOBO.js";import"./index-CCW-kbw5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ZTIhRr7S.js";import"./delete-DsRezzSz.js";import"./utils-BMRbKUpN.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
