import{j as n}from"./iframe-BHL3KP3B.js";import{useMDXComponents as i}from"./index-CV9KcB1M.js";import{M as p,C as c}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import{C as a}from"./ControlsWithNote-DAxpK-CA.js";import{D as m}from"./DocsHeader-BP3M1Dwd.js";import{F as h}from"./CommandsAndQueries-D7saeET0.js";import{C as o,D as r}from"./ActionSheet.stories-D4xQHXj_.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./index-JDEJOPjW.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./copy-BPDPnsXG.js";import"./copy-Cx_IXaYw.js";import"./GitHub-Mark-DnhrR-7I.js";import"./TableOfContent-WAW6dFW2.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./delete-DQMuq08Z.js";import"./utils-DvyWIthn.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
