import{j as n}from"./iframe-D6Dqvaj7.js";import{useMDXComponents as s}from"./index-p5hUqO5S.js";import{M as p,C as c}from"./blocks-mit6uJ90.js";import"./Tag-DSi4ilvu.js";import"./index-jRfJh9Ly.js";import{C as a}from"./ControlsWithNote-CrKXQNWZ.js";import{D as m}from"./DocsHeader-BnCJD2oI.js";import{F as h}from"./Footer-CnbRw8mY.js";import"./CommandsAndQueries-CY2cNdhF.js";import"./PageNotFound-Dkn1r8pk.js";import{C as o,D as r}from"./ActionSheet.stories-BYn_6ECK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C52MW-zn.js";import"./sys-enter-2-DfVfUeVZ.js";import"./alert-DmTYLDqH.js";import"./index-kq9zSbaq.js";import"./index-CZdI0ebk.js";import"./Link-BHPCDbiV.js";import"./copy-K3e4iasg.js";import"./copy-COwmxVeQ.js";import"./GitHub-Mark-rPsBEINW.js";import"./TableOfContent-_b60nv51.js";import"./index-DOs5kzts.js";import"./index-C9RG4ln6.js";import"./index-BMaKwz0y.js";import"./index-XWn6EBIn.js";import"./index-BHa3uoaJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-MTFFpMQj.js";import"./addCustomCSSWithScoping-BENu44jJ.js";import"./Illustrations-C58IHd-I.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-Dy8TW_jf.js";import"./utils-Dm1Xt3ii.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
`,n.jsx(h,{})]})}function G(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{G as default};
