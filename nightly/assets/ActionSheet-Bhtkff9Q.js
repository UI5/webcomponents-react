import{j as n}from"./iframe-BY1BFtoq.js";import{useMDXComponents as i}from"./index-BJX8o_PY.js";import{M as p,C as c}from"./blocks-Bfc9ghDe.js";import"./Tag-DpT3Xyfk.js";import"./index-DoP9OXws.js";import{C as a}from"./ControlsWithNote-ab9tW4FC.js";import{D as m}from"./DocsHeader-hJpNaL2L.js";import{F as h}from"./CommandsAndQueries-LexJCY9y.js";import{C as o,D as r}from"./ActionSheet.stories-DSFjLpLr.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4R2spf7.js";import"./sys-enter-2-HrsNxE-9.js";import"./alert-Dq9SF84g.js";import"./index-7DiuorJD.js";import"./index-CRXctDPP.js";import"./Link-CaG5MpgS.js";import"./copy-CWdbOg1V.js";import"./copy-BobpDbK0.js";import"./GitHub-Mark-CmhMTlj-.js";import"./TableOfContent-CP77nt2G.js";import"./index-Cb7WjzHE.js";import"./index-odRykF4_.js";import"./index-B41LOkRR.js";import"./index-DSc6dsYM.js";import"./index-Dk5-ak7N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BKdRFMC3.js";import"./addCustomCSSWithScoping-BhZcrUID.js";import"./delete-D8zrN_sA.js";import"./utils-BVTfHtc_.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
