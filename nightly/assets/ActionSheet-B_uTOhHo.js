import{j as n}from"./iframe-pGkg1yhx.js";import{useMDXComponents as i}from"./index-zZGraQiW.js";import{M as p,C as c}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import{C as a}from"./ControlsWithNote-B93C_YVi.js";import{D as m}from"./DocsHeader-D3Z603yd.js";import{F as h}from"./CommandsAndQueries-0d0cMNfY.js";import{C as o,D as r}from"./ActionSheet.stories-DHRgVSBL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./index-Bw9Ab4ZS.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./copy-CYAZ_Ukm.js";import"./copy-DnSu0Tnk.js";import"./GitHub-Mark-I5I5hI39.js";import"./TableOfContent-DvuGEVlp.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./delete-BJZVN444.js";import"./utils-5Au9oy8N.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
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
