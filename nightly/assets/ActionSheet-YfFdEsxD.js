import{j as n}from"./iframe-ePItFB5B.js";import{useMDXComponents as i}from"./index-DDhKCT3A.js";import{M as p,C as c}from"./blocks-b5KXpU9M.js";import"./Tag-DaF_Qhe4.js";import"./index-BB23O1Ug.js";import{C as a}from"./ControlsWithNote-LW09duU0.js";import{D as m}from"./DocsHeader-6IWtJVXN.js";import{F as h}from"./CommandsAndQueries-Bqqc5zN4.js";import{C as o,D as r}from"./ActionSheet.stories-BfR-dwJi.js";import"./preload-helper-PPVm8Dsz.js";import"./information-jDHGU4wN.js";import"./sys-enter-2-CYnnsJKJ.js";import"./alert-CaUEMWJO.js";import"./index-DsBJl3xg.js";import"./index-CHJN7UF8.js";import"./Link-DCRCVgwG.js";import"./copy-DTXwM0mP.js";import"./copy-BDQ8dZSb.js";import"./GitHub-Mark-CDEC3D2m.js";import"./TableOfContent-DejIFgBn.js";import"./index-tHf_ynpH.js";import"./index-BW9_RjV3.js";import"./index-CauWo2vq.js";import"./index-Dot01Rcg.js";import"./index-DwS7NZjH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BZQxW830.js";import"./addCustomCSSWithScoping-DQC1mn0S.js";import"./delete-DwZg9P7Z.js";import"./utils-eGR0B54I.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
