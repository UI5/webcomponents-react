import{j as n}from"./iframe-HnZ_h-uU.js";import{useMDXComponents as i}from"./index-BURirfl-.js";import{M as p,C as c}from"./blocks-84IuUUPT.js";import"./Tag-Dnn5BILw.js";import"./index-C_zCHPn3.js";import{C as a}from"./ControlsWithNote-B7a3dgFK.js";import{D as m}from"./DocsHeader-BMTYwKRR.js";import{F as h}from"./CommandsAndQueries-TIuZdWtI.js";import{C as o,D as r}from"./ActionSheet.stories-BlB07Vly.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DhzyP3Ow.js";import"./sys-enter-2-CmThXCww.js";import"./alert-DNZ33ksz.js";import"./index-Dnf0ia5k.js";import"./index-ChCH3Q4v.js";import"./Link-fOI_Un9H.js";import"./copy-BVSsMmEy.js";import"./copy-CvLuzzlZ.js";import"./GitHub-Mark-21BK48In.js";import"./TableOfContent-BmnBt7yn.js";import"./index-A-RKt-jh.js";import"./index-iyAoRrYN.js";import"./index-Cx7Ty6ev.js";import"./index-DT74FBWM.js";import"./index-D2dUbzgM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5FHIatV.js";import"./addCustomCSSWithScoping-R6q4RVyA.js";import"./delete-DTulYaAI.js";import"./utils-BzC6a3dT.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
