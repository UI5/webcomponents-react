import{j as n}from"./iframe-cBdQNv77.js";import{useMDXComponents as i}from"./index-cOSrw8iI.js";import{M as p,C as c}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import{C as a}from"./ControlsWithNote-BtzrHLWv.js";import{D as m}from"./DocsHeader-vxE0rq5F.js";import{F as h}from"./CommandsAndQueries-DjEzsLYR.js";import{C as o,D as r}from"./ActionSheet.stories-dhFVJ_eQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./index-A4dU9HLI.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./copy-BlVq76a_.js";import"./copy-IvR5q6ZX.js";import"./GitHub-Mark-MErHyXJn.js";import"./TableOfContent-fkRerJpI.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./delete-CMb-Nvkm.js";import"./utils-CEIcbUd3.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
