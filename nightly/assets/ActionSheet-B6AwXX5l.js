import{j as n}from"./iframe-B6_VnEn0.js";import{useMDXComponents as i}from"./index-CKjNAzmF.js";import{M as p,C as c}from"./blocks-CyO3EJlr.js";import"./Tag-CgNBFz-6.js";import"./index-DSVB_dqF.js";import{C as a}from"./ControlsWithNote-DrWxbmPf.js";import{D as m}from"./DocsHeader-qbLp6NFf.js";import{F as h}from"./CommandsAndQueries-Cu0FTX1O.js";import{C as o,D as r}from"./ActionSheet.stories-Dp9VlhNm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DRMbXOdP.js";import"./sys-enter-2-DdSSz0Lf.js";import"./alert-B2vLmz8E.js";import"./index-CRKIYkxI.js";import"./index-C9FEKhX3.js";import"./Link-fr-LMhyz.js";import"./copy-i85OO9gt.js";import"./copy-C1fhLsjZ.js";import"./GitHub-Mark-B4Yzkrcd.js";import"./TableOfContent-DIRb7Wd9.js";import"./index-hldrhuwk.js";import"./index-DkrtZknx.js";import"./index-eApF8yKA.js";import"./index-BgmLFHtv.js";import"./index-BsFRP28T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D6ry04GL.js";import"./addCustomCSSWithScoping-Cx3SnQ1e.js";import"./delete-B70o4ZMp.js";import"./utils-B3TlGdmB.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
