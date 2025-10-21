import{j as o}from"./iframe-RbfDHgLf.js";import{useMDXComponents as s}from"./index-DqV7dpjg.js";import{M as i,C as m}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import{C as c}from"./ControlsWithNote-CdwZagHS.js";import{D as a}from"./DocsHeader-BoRFHi_p.js";import{F as d}from"./CommandsAndQueries-zsQY2vaX.js";import{C as r,D as t}from"./ResponsivePopover.stories-C6MA6ppo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./index-Krk892ln.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./copy-CchhbExl.js";import"./copy-DMiueq1X.js";import"./GitHub-Mark-DqbhO8GE.js";import"./TableOfContent-CFiX9KPt.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-CtCdIWLz.js";import"./index-nwkxsEd-.js";import"./ListItemStandard-LHwr1u0j.js";import"./settings-D6tudNLA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <ResponsivePopover
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
