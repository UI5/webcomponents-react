import{j as n}from"./iframe-COnm-5Wq.js";import{useMDXComponents as i}from"./index-BScb0EKa.js";import{M as p,C as c}from"./blocks-DdnCkDeP.js";import"./Tag-B6PukD9x.js";import"./index-DuYLDSkg.js";import{C as a}from"./ControlsWithNote-CLwYkghc.js";import{D as m}from"./DocsHeader-CMx88To0.js";import{F as h}from"./CommandsAndQueries-fIm6tI_s.js";import{C as o,D as r}from"./ActionSheet.stories-Cit8v-ys.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-WRmTFj.js";import"./sys-enter-2-CoP1Serd.js";import"./alert-CyV5UnQC.js";import"./index-CEwTdt5x.js";import"./index-nBIeIwBJ.js";import"./Link-HYZaoUUQ.js";import"./copy-CwG4PXtS.js";import"./copy-qxwrkOPO.js";import"./GitHub-Mark-CW0QoAHo.js";import"./TableOfContent-CgktCJnI.js";import"./index-Be7TM_X2.js";import"./index-P97YIdW0.js";import"./index-B7Tpi00A.js";import"./index-AzkmjRNO.js";import"./index-D0jCTq5s.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BgIs3PmD.js";import"./addCustomCSSWithScoping-6qkiGAQG.js";import"./delete-CstNP39o.js";import"./utils-CotoRCsU.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
