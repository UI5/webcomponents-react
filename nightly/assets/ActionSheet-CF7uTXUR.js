import{j as n}from"./iframe-DM9V3iUD.js";import{useMDXComponents as i}from"./index-BQ6e0XMP.js";import{M as p,C as c}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import{C as a}from"./ControlsWithNote-BixiXI7D.js";import{D as m}from"./DocsHeader-B7CLdpe5.js";import{F as h}from"./CommandsAndQueries-DLgIXMfv.js";import{C as o,D as r}from"./ActionSheet.stories-B1ezdzUX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./index-HLIjrNCW.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./copy-CzwRG-tI.js";import"./copy-QNTFDBhh.js";import"./GitHub-Mark-9mFh2ESO.js";import"./TableOfContent-BCMbnTpd.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./delete-CXgeirW2.js";import"./utils-YdOQYwv0.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
