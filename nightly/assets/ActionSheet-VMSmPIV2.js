import{j as n}from"./iframe-D9-OPwVR.js";import{useMDXComponents as i}from"./index-rQrCyh78.js";import{M as p,C as c}from"./blocks-yWwHjaca.js";import"./Tag-C4h9s18a.js";import"./index-C0yJm7_O.js";import{C as a}from"./ControlsWithNote-CQ_5k1u8.js";import{D as m}from"./DocsHeader-DsJCrUdt.js";import{F as h}from"./CommandsAndQueries-CGaVhEZZ.js";import{C as o,D as r}from"./ActionSheet.stories-DOrO7Osm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CXuNnhF_.js";import"./sys-enter-2-CpLLk16Q.js";import"./alert-DmoPAb-1.js";import"./index-CARCmcfE.js";import"./index-D2zbla8P.js";import"./Link-C0FJUUPf.js";import"./copy-BV0EKgUf.js";import"./copy-kqUatD9Y.js";import"./GitHub-Mark-C9NicKpS.js";import"./TableOfContent-CWXv45_X.js";import"./index-BqY2NvOe.js";import"./index-DWSshsP3.js";import"./index-C2LtXiVH.js";import"./index-B7FHygPg.js";import"./index-BKtOrYz7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHNrYRTW.js";import"./addCustomCSSWithScoping-BMu8GK7h.js";import"./delete-8q-2SnNy.js";import"./utils-CFI02rUA.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
