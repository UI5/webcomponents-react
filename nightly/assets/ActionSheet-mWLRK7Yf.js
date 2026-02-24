import{j as n}from"./iframe-DT5KgGlD.js";import{useMDXComponents as i}from"./index-2sr9OpVj.js";import{M as p,C as c}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import{C as a}from"./ControlsWithNote-B7qXyXG8.js";import{D as m}from"./DocsHeader-CXXEQWs5.js";import{F as h}from"./CommandsAndQueries-DUx0SL0h.js";import{C as o,D as r}from"./ActionSheet.stories-CYRBs36O.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./index-DyR_rB-Y.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./copy-WOcObJni.js";import"./copy-Cn_--9_F.js";import"./GitHub-Mark-BV69ODVk.js";import"./TableOfContent-DmnaQ7ij.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./delete-CohcJEgP.js";import"./utils-D33GDmvH.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
