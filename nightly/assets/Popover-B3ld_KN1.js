import{j as o}from"./iframe-DVlTfEM-.js";import{useMDXComponents as s}from"./index-k_8IF_2O.js";import{M as i,C as m}from"./blocks-DrSp3MOM.js";import"./Tag-BNH48-R1.js";import"./index-Cikr51XZ.js";import{C as c}from"./ControlsWithNote-CYH0qfSp.js";import{D as a}from"./DocsHeader-Bith4eJa.js";import{F as d}from"./CommandsAndQueries-BkPdYDds.js";import{C as r,D as t}from"./Popover.stories-BB53A1VU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CmhnSrRB.js";import"./sys-enter-2-ty4GJ2q8.js";import"./alert-MBG6abBg.js";import"./index-CyKhe59o.js";import"./index-VtIqKiJ-.js";import"./Link-B2NzUiP2.js";import"./copy-D5yGLqiE.js";import"./copy-Do4831X0.js";import"./GitHub-Mark-BDp2e9GW.js";import"./TableOfContent-Dm46pPOt.js";import"./index-D8q9J4Er.js";import"./index-D5QdPm5n.js";import"./index-I1wK0hXe.js";import"./index-gAu6pc3o.js";import"./index-B-srII_E.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CuLQb_Od.js";import"./addCustomCSSWithScoping-DyDcwna5.js";import"./settings-BvZiD-4L.js";import"./index-BFCC2aiM.js";import"./index-BL4PIRcT.js";import"./ListItemStandard-C3KQCuJV.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
