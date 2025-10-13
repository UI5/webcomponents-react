import{j as n}from"./iframe-B2H5__qL.js";import{useMDXComponents as i}from"./index-Bc3WoLXB.js";import{M as p,C as c}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import{C as a}from"./ControlsWithNote-4ZbwV_xc.js";import{D as m}from"./DocsHeader-Ma5Prb85.js";import{F as h}from"./CommandsAndQueries-CP6cnX5g.js";import{C as o,D as r}from"./ActionSheet.stories-DSsxe_xX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./index-CF6OSC7N.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./copy-Dq1vVsOW.js";import"./copy-BwEcpAyC.js";import"./GitHub-Mark-Dm1fGQmx.js";import"./TableOfContent-CbIy2CJ0.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./delete-De_7uTjk.js";import"./utils-CrH2aT5K.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
