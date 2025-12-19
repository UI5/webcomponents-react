import{j as n}from"./iframe-By2gmFxc.js";import{useMDXComponents as i}from"./index-gKb_GMnq.js";import{M as p,C as c}from"./blocks-D2uzjwbj.js";import"./Tag-Q4xsur8Q.js";import"./index-CIY2e3dX.js";import{C as a}from"./ControlsWithNote-J_FS3ar_.js";import{D as m}from"./DocsHeader-BQhjxotY.js";import{F as h}from"./CommandsAndQueries-MwhWu1jt.js";import{C as o,D as r}from"./ActionSheet.stories-BiwVn29J.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DZbn4exg.js";import"./sys-enter-2-D1EL9sqg.js";import"./alert-Dj00yiIa.js";import"./index-c5NRQxKp.js";import"./index-CYEIBPim.js";import"./Link-nWDhDuhI.js";import"./copy-BckvoikG.js";import"./copy-jhrg3Bh5.js";import"./GitHub-Mark-C0HJUWkv.js";import"./TableOfContent-DNYBmsFN.js";import"./index-DjdoJ-R-.js";import"./index-JdoT9BRG.js";import"./index-4iQpwXEW.js";import"./index-XAF-DZNA.js";import"./index-BlQvs7kx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl2hQFWK.js";import"./addCustomCSSWithScoping-BCT2RHCk.js";import"./delete-DIECwpsn.js";import"./utils-BosODi5p.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
