import{j as n}from"./iframe-D_U86qCv.js";import{useMDXComponents as i}from"./index-Bg9tEBEE.js";import{M as p,C as c}from"./blocks-D61FyfHK.js";import"./Tag-B3d92F0E.js";import"./index-DY3WUczD.js";import{C as a}from"./ControlsWithNote-D5S_Midd.js";import{D as m}from"./DocsHeader-RwaG2gO7.js";import{F as h}from"./CommandsAndQueries-TugN8T6l.js";import{C as o,D as r}from"./ActionSheet.stories-D3K2mCC1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DVWvWtO-.js";import"./sys-enter-2-CVo9vLlV.js";import"./alert-Dk_EKidz.js";import"./index-WEtnzuU5.js";import"./index-D9Q3nud9.js";import"./Link-Cw10wX3R.js";import"./copy-BX4vSZO9.js";import"./copy-Crjp4Ac1.js";import"./GitHub-Mark-1bpW3JCO.js";import"./TableOfContent-CQJqnL0A.js";import"./index-DfxZA3Js.js";import"./index-DQ8_SEuH.js";import"./index-hUHwRYTv.js";import"./index-BgwtpBeW.js";import"./index-DjRObmYp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AccWPG8C.js";import"./addCustomCSSWithScoping-peiruV29.js";import"./delete-C65oQeOP.js";import"./utils-PdXjpojR.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
