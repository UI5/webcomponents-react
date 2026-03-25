import{j as n}from"./iframe-aMG4Hi1W.js";import{useMDXComponents as s}from"./index-BxeVDhrM.js";import{M as p,C as c}from"./blocks-DBdj8k-3.js";import"./Tag-DjBNrtqu.js";import"./index-BneSHkIo.js";import{C as a}from"./ControlsWithNote-Bu936WH_.js";import{D as m}from"./DocsHeader-BKxnzngo.js";import{F as h}from"./Footer-CaqpNArb.js";import"./CommandsAndQueries-BfziQu2M.js";import"./PageNotFound-BtQ0dC4g.js";import{C as o,D as r}from"./ActionSheet.stories-B62xyfSQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CeS9aeh9.js";import"./sys-enter-2-qcEAkOuO.js";import"./alert-a4vfwAyT.js";import"./index-CkonQXRu.js";import"./index-S-kDMFzJ.js";import"./Link-CIXppVOK.js";import"./copy-BB0brAa5.js";import"./copy-WJgdbAvd.js";import"./GitHub-Mark-CTp8p8Sq.js";import"./TableOfContent-RUI6YfVk.js";import"./index-BkkgvrV5.js";import"./index-D8GAgpXJ.js";import"./index-D79dGm1P.js";import"./index-CRZddsOj.js";import"./index-D40aHtue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-NZCpAmvM.js";import"./addCustomCSSWithScoping-DZGBI863.js";import"./Illustrations-Dkeiu4Tv.js";import"./i18n-defaults-CFWtSmu6.js";import"./delete-Bhzd3ed8.js";import"./utils-CLsYPiKt.js";function i(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
