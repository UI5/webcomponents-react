import{j as n}from"./iframe-BoiPRijN.js";import{useMDXComponents as s}from"./index-BRummw3t.js";import{M as p,C as c}from"./blocks-CPrA8iQB.js";import"./Tag-B1iwkrJ0.js";import"./index-BTDY8alR.js";import{C as a}from"./ControlsWithNote-Bq-Ivohs.js";import{D as m}from"./DocsHeader-Y-HcsUbC.js";import{F as h}from"./Footer-iiNA2dGD.js";import"./CommandsAndQueries-BnJUOm3t.js";import"./PageNotFound-MgXkehwz.js";import{C as o,D as r}from"./ActionSheet.stories-DPQI2vNj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BC9xfD2K.js";import"./sys-enter-2-CswPN__J.js";import"./alert-BvdiGKEq.js";import"./index-dkrwuiwP.js";import"./index-C15uyf0A.js";import"./Link-CFo8_Djp.js";import"./copy-CLUvwY8b.js";import"./copy-Dvt_rD-U.js";import"./GitHub-Mark-DCcVb5dx.js";import"./TableOfContent-B1AorxcV.js";import"./index-XewTnCmy.js";import"./index-BP_Slc-J.js";import"./index-BQY5khtD.js";import"./index-Jd5qJzJh.js";import"./index-DlyFbgdQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpV6XLVk.js";import"./addCustomCSSWithScoping-DTHpZRZB.js";import"./Illustrations-CKlojL9Q.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-Dla_cBMd.js";import"./utils-Dyu_RtUB.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
