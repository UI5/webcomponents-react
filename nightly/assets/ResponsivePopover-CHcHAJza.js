import{j as o}from"./iframe-Lvl9yzry.js";import{useMDXComponents as s}from"./index-DtnS30Y7.js";import{M as i,C as m}from"./blocks-DE-pS5pt.js";import"./Tag-Ntj2WoJZ.js";import"./index-Z8W5RiOf.js";import{C as c}from"./ControlsWithNote-DJfCLSui.js";import{D as a}from"./DocsHeader-IVRgw8H5.js";import{F as d}from"./CommandsAndQueries-r8pG5JEL.js";import{C as r,D as t}from"./ResponsivePopover.stories-BHGl3wxF.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BnCFwrSd.js";import"./sys-enter-2-Ct5ni-AG.js";import"./alert-1cuYh9Xz.js";import"./index-ilzt6YAk.js";import"./index-BVP3-7sd.js";import"./Link-BJMT4XUv.js";import"./copy-D13JUBkt.js";import"./copy-BqWuakZq.js";import"./GitHub-Mark-BAeP05c2.js";import"./TableOfContent-DTkppLuE.js";import"./index-XWeRb-Rp.js";import"./index-NhuzyApy.js";import"./index-CtS6x3f8.js";import"./index-CNh112J7.js";import"./index-BNlSxjfl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VTbkLDop.js";import"./addCustomCSSWithScoping-aRHntRG4.js";import"./index-Bn7mHf-9.js";import"./index-DiQWGXFC.js";import"./ListItemStandard-Cugb1xkB.js";import"./settings-BTH1H1cH.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
