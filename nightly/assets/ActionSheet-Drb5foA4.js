import{j as n}from"./iframe-BcULqSVx.js";import{useMDXComponents as i}from"./index-DimjqcOY.js";import{M as p,C as c}from"./blocks-SeGv6FI8.js";import"./Tag-DE8sZ6fR.js";import"./index-CMCy2tRg.js";import{C as a}from"./ControlsWithNote-vHgKyDQ4.js";import{D as m}from"./DocsHeader-rcaw3yWJ.js";import{F as h}from"./CommandsAndQueries-Bjxahy8c.js";import{C as o,D as r}from"./ActionSheet.stories-cMuQsEzG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C0qTg3A6.js";import"./sys-enter-2-hVsohqhg.js";import"./alert-CRlYmZ6n.js";import"./index-D0A2Ruup.js";import"./index-CEmXgIma.js";import"./Link-D2-7Bb71.js";import"./copy-DixMi52h.js";import"./copy-DrZjSCYt.js";import"./GitHub-Mark-CX2aPwNN.js";import"./TableOfContent-BwCnFx1q.js";import"./index-DfNAKNyC.js";import"./index-Bht3WMEt.js";import"./index-Cd7o7phm.js";import"./index-nOLHZmf_.js";import"./index-72f5Qi1p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DYesK5yK.js";import"./addCustomCSSWithScoping-DZ8lcGy4.js";import"./delete-D4gojdJ3.js";import"./utils-B0S858C0.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
