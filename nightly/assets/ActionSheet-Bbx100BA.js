import{j as n}from"./iframe-Cofg3NYG.js";import{useMDXComponents as i}from"./index-IvWpiXeJ.js";import{M as p,C as c}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import{C as a}from"./ControlsWithNote-CBnXwzaw.js";import{D as m}from"./DocsHeader-uOegTBxM.js";import{F as h}from"./CommandsAndQueries-84NNvrTK.js";import{C as o,D as r}from"./ActionSheet.stories-ChkujvQJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./index-DsO0qxxT.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./copy-D8x3RVfP.js";import"./copy-CvrT2nje.js";import"./GitHub-Mark-Dxo1t29W.js";import"./TableOfContent-Critm5DJ.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./delete-TL4LRMCi.js";import"./utils-wxGQZEOP.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
