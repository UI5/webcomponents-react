import{j as n}from"./iframe-CDMw3QW7.js";import{useMDXComponents as i}from"./index-B1OHiQPx.js";import{M as p,C as c}from"./blocks-CUd96uRM.js";import"./Tag-CRCkHgPM.js";import"./index-BFHtg5w_.js";import{C as a}from"./ControlsWithNote-C9aiOPy2.js";import{D as m}from"./DocsHeader-Dmvt-mfp.js";import{F as h}from"./CommandsAndQueries-DKYp_Jx5.js";import{C as o,D as r}from"./ActionSheet.stories-B3lGmVnP.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DcnFOD7I.js";import"./sys-enter-2-Bq9738ZR.js";import"./alert-DgZ_z3Yp.js";import"./index-CEKogKIQ.js";import"./index-y4pjeQFW.js";import"./Link-fH9wonJ-.js";import"./copy-Dd0CQ0vn.js";import"./copy-4Dlt6M0w.js";import"./GitHub-Mark-2q-Fi7Zh.js";import"./TableOfContent-BIYALOwi.js";import"./index-CjzhAhn4.js";import"./index-QTO9fIyh.js";import"./index-CFg6tGep.js";import"./index-zPaFBXP5.js";import"./index-NVXyFLUS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CzgD7Za_.js";import"./addCustomCSSWithScoping-DWGH2XNZ.js";import"./delete-DNEaNq2f.js";import"./utils-ebGiQ-Xy.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
