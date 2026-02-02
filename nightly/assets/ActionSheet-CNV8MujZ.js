import{j as n}from"./iframe-DxaU3ukP.js";import{useMDXComponents as i}from"./index-Bu64E7xz.js";import{M as p,C as c}from"./blocks-shsJXsJu.js";import"./Tag-HWB4mzIK.js";import"./index-BuSb9dlo.js";import{C as a}from"./ControlsWithNote-DwYfY6pK.js";import{D as m}from"./DocsHeader-BYBoG-Cx.js";import{F as h}from"./CommandsAndQueries-CWzmGACf.js";import{C as o,D as r}from"./ActionSheet.stories-CP4F5lQ3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Y-FlrSb9.js";import"./sys-enter-2-Cl_Hs57G.js";import"./alert-xbLWAWtw.js";import"./index-DBN874s0.js";import"./index-DJhOYGHM.js";import"./Link-B8iiEW6g.js";import"./copy-gx1Q1rO4.js";import"./copy-iAtgzS7e.js";import"./GitHub-Mark-DowLaeaz.js";import"./TableOfContent-DRQ4kDdO.js";import"./index-DCr6QTyS.js";import"./index-4KyKvZuP.js";import"./index-wIV-Jx7Q.js";import"./index-B4KIHpYZ.js";import"./index-CCQGvtXt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-P9_4H6jZ.js";import"./addCustomCSSWithScoping-DcrmHllZ.js";import"./delete-BS7GLbbQ.js";import"./utils-rEWueUxT.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
