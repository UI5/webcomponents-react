import{j as n}from"./iframe-eDai9lNh.js";import{useMDXComponents as i}from"./index-DWaT93aF.js";import{M as p,C as c}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import{C as a}from"./ControlsWithNote-PgUKowHt.js";import{D as m}from"./DocsHeader-CSlQYW0N.js";import{F as h}from"./CommandsAndQueries-DdbJ0tNe.js";import{C as o,D as r}from"./ActionSheet.stories-Co2sYg7x.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./index-CfUZ5M--.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./copy-OVgbw2j0.js";import"./copy-D01F59bh.js";import"./GitHub-Mark-TrznzmQN.js";import"./TableOfContent-DE6rjTP5.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./delete-CY-VLVEq.js";import"./utils-BjMUIUWP.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
