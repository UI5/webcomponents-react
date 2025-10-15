import{j as n}from"./iframe-wbWwESAy.js";import{useMDXComponents as i}from"./index-BOBJYedV.js";import{M as p,C as c}from"./blocks-B5IYlHFD.js";import"./Tag-BH6lPIks.js";import"./index-DQNSAqOh.js";import{C as a}from"./ControlsWithNote-DvhTjaki.js";import{D as m}from"./DocsHeader-bdq5CW6C.js";import{F as h}from"./CommandsAndQueries-C1vl6z57.js";import{C as o,D as r}from"./ActionSheet.stories-CBvg_8GK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DASCm05s.js";import"./sys-enter-2-J3fKP-CE.js";import"./alert-D2qcbVgq.js";import"./index-DrYBsayo.js";import"./index-Cupokltd.js";import"./Link-BN6Q-gzd.js";import"./copy-D8kziahy.js";import"./copy-sux1w53_.js";import"./GitHub-Mark-Id1MRtXm.js";import"./TableOfContent-BwN9rW42.js";import"./index-Buwu-oqJ.js";import"./index-B81NkVkP.js";import"./index-BnSJ99QD.js";import"./index-DcmA7siw.js";import"./index-DqWD-oTo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqytePVm.js";import"./addCustomCSSWithScoping-CplaRZ4g.js";import"./delete-CkbWcAQ8.js";import"./utils-CKST4OLl.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
