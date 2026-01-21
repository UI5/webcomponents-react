import{j as n}from"./iframe-Dn-CEP49.js";import{useMDXComponents as i}from"./index-CkYweSLX.js";import{M as p,C as c}from"./blocks-CpkBRtZ8.js";import"./Tag-DCXTYexA.js";import"./index-Buh7M_8w.js";import{C as a}from"./ControlsWithNote-Cw7ThXzW.js";import{D as m}from"./DocsHeader-BfkoSnJ_.js";import{F as h}from"./CommandsAndQueries-CJE7oJQ6.js";import{C as o,D as r}from"./ActionSheet.stories-teNe7Wxs.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bo7A1j3N.js";import"./sys-enter-2-XS_2r-qd.js";import"./alert-CjMhygJT.js";import"./index-6NbWjJvY.js";import"./index-DzcQWg4n.js";import"./Link-CCOdGIG_.js";import"./copy-BFDS3r5D.js";import"./copy-ZbpB2fNv.js";import"./GitHub-Mark-BL8KNgxp.js";import"./TableOfContent-CrdJgPf8.js";import"./index-Bm8hRwBU.js";import"./index-Cw6Uj_ev.js";import"./index-BiP2f5WB.js";import"./index-DwdL8nG5.js";import"./index-pKV4gQju.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOWzKJJk.js";import"./addCustomCSSWithScoping-BIQAchjq.js";import"./delete-d6bn_JDV.js";import"./utils-DfQ09pUz.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
