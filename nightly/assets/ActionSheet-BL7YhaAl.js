import{j as n}from"./iframe-D9fHiNXF.js";import{useMDXComponents as i}from"./index-DRx499Oz.js";import{M as p,C as c}from"./blocks-BHC48FnS.js";import"./Tag-D1pdGQFQ.js";import"./index-CsAQ2Eng.js";import{C as a}from"./ControlsWithNote-_PgGUMw2.js";import{D as m}from"./DocsHeader-fdSKAoIc.js";import{F as h}from"./CommandsAndQueries-CDyFXIce.js";import{C as o,D as r}from"./ActionSheet.stories-2GO1054W.js";import"./preload-helper-PPVm8Dsz.js";import"./information-wNu5DDkV.js";import"./sys-enter-2-NNUjaus9.js";import"./alert-DnsJPzcv.js";import"./index-BVc7ik8a.js";import"./index-79vX-IjV.js";import"./Link-UWQK2ZBb.js";import"./copy-ClYjzaDz.js";import"./copy-FG9bHXhV.js";import"./GitHub-Mark-BVG-IHke.js";import"./TableOfContent-BNFLd8cv.js";import"./index-CJoLxfl_.js";import"./index-BYfLRpIA.js";import"./index-D9W7JLGJ.js";import"./index-C7nfqaAP.js";import"./index-DN7QVpUQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOEmcw1X.js";import"./addCustomCSSWithScoping-QhFRL0Bb.js";import"./delete-kRoeeufp.js";import"./utils-4XJByc2K.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
