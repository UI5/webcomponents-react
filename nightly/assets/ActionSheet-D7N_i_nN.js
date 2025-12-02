import{j as n}from"./iframe-C4uJ0-S9.js";import{useMDXComponents as i}from"./index-7yLcmjFP.js";import{M as p,C as c}from"./blocks-CBo7THUN.js";import"./Tag-BnlqX_yt.js";import"./index-qq5TSXaV.js";import{C as a}from"./ControlsWithNote-Xba4zRPV.js";import{D as m}from"./DocsHeader-CZJ1s6Cq.js";import{F as h}from"./CommandsAndQueries-B5y1yjIv.js";import{C as o,D as r}from"./ActionSheet.stories-DvWWPyhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CGc2Gyu5.js";import"./sys-enter-2-8QAf9lpT.js";import"./alert-CoEJOo1j.js";import"./index-BCADQjVB.js";import"./index-KgBIbLv3.js";import"./Link-BtGKi5yG.js";import"./copy-DRncM3oG.js";import"./copy-CcXkheL2.js";import"./GitHub-Mark-AuYrpZ4h.js";import"./TableOfContent-CwQN62Px.js";import"./index-Cqxv-6mm.js";import"./index-Cxz2391_.js";import"./index-DOaerJgo.js";import"./index-ccsE6YRa.js";import"./index-DWkRZCu2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS9Hrz5j.js";import"./addCustomCSSWithScoping-CUwa-fZt.js";import"./delete-BHPiQy8C.js";import"./utils-D_GsNQst.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
