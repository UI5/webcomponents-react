import{j as n}from"./iframe-DNwXmN6w.js";import{useMDXComponents as i}from"./index-Dbs3KJZC.js";import{M as p,C as c}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import{C as a}from"./ControlsWithNote-BubmKZw0.js";import{D as m}from"./DocsHeader-B68qGWWI.js";import{F as h}from"./CommandsAndQueries-BAoKQ9N_.js";import{C as o,D as r}from"./ActionSheet.stories-DEDF-GwZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./index-CBh039oE.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./copy-CEU6cvPY.js";import"./copy-EN-_ABXk.js";import"./GitHub-Mark-7ysssstv.js";import"./TableOfContent-BZ8zuPOd.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./delete-Dtc6qBdo.js";import"./utils-DWArTzFQ.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
