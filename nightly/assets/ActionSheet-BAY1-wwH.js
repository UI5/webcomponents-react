import{j as n}from"./iframe-BELPVtw8.js";import{useMDXComponents as i}from"./index-Ccx4gwdG.js";import{M as p,C as c}from"./blocks-B3lwtuZn.js";import"./Tag-jS7irC1t.js";import"./index-BkR2pL75.js";import{C as a}from"./ControlsWithNote-C3I2DDOZ.js";import{D as m}from"./DocsHeader-CsCWSRb4.js";import{F as h}from"./CommandsAndQueries-B86vB0yc.js";import{C as o,D as r}from"./ActionSheet.stories-BEk_POGz.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Q0D1EyOn.js";import"./sys-enter-2-CB1NZnv4.js";import"./alert-e0Pm7FCS.js";import"./index-C1fkktKB.js";import"./index-Dy8TXCJ0.js";import"./Link-BLMqdfPm.js";import"./copy-I0OTc4T0.js";import"./copy-BGZyCQeI.js";import"./GitHub-Mark-lyDcreW9.js";import"./TableOfContent-CSElOUdH.js";import"./index-CQYUcCHI.js";import"./index-DslTuBZD.js";import"./index-nk7PQCW4.js";import"./index-D2dH4dam.js";import"./index-D2H4sMz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-GIAd7WMY.js";import"./addCustomCSSWithScoping-vktTBWHy.js";import"./delete-DHGmX5w5.js";import"./utils-DkiPjs68.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
