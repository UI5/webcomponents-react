import{j as n}from"./iframe-Dl0DWg8M.js";import{useMDXComponents as i}from"./index-Dunz3Qkg.js";import{M as p,C as c}from"./blocks-z5J1zZs0.js";import"./Tag-8UYUnG7U.js";import"./index-CIa6NQE1.js";import{C as a}from"./ControlsWithNote-BKBVRwue.js";import{D as m}from"./DocsHeader-C-1I2b0K.js";import{F as h}from"./CommandsAndQueries-DcyHQWO5.js";import{C as o,D as r}from"./ActionSheet.stories-DSsIs9UW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-0V3r1Ig4.js";import"./sys-enter-2-CxUk-uXZ.js";import"./alert-DWaZJdGL.js";import"./index-9_QD_94O.js";import"./index-fJlTqGLz.js";import"./Link-C2qcQY2b.js";import"./copy-VcR1WfQh.js";import"./copy-BhfJfLSX.js";import"./GitHub-Mark-CgrwmV-_.js";import"./TableOfContent-W0pmQgwB.js";import"./index-qDCkQVmj.js";import"./index-ClreWoEe.js";import"./index-BtW57M3z.js";import"./index-DfHOwcie.js";import"./index-D98fiUtL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B8jMVyWi.js";import"./addCustomCSSWithScoping-BtXYUpmM.js";import"./delete-DGhfhmvk.js";import"./utils-SZqKSCgS.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
