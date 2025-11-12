import{j as o}from"./iframe-DEgT_E8s.js";import{useMDXComponents as s}from"./index-BZRAiVGZ.js";import{M as i,C as m}from"./blocks-B_KstB4C.js";import"./Tag-DE605aSS.js";import"./index-YPzE27b5.js";import{C as c}from"./ControlsWithNote-D4xdDKZF.js";import{D as a}from"./DocsHeader-BG4I1a_v.js";import{F as d}from"./CommandsAndQueries-BnsxTdlD.js";import{C as r,D as t}from"./ResponsivePopover.stories-DWyDFGbN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-r8cEHEup.js";import"./sys-enter-2-ChDTDdJ5.js";import"./alert-Dx6xYju9.js";import"./index-BBLpbuxz.js";import"./index-Dzkg0-9t.js";import"./Link-z1epMX3F.js";import"./copy-BCKI97AT.js";import"./copy-CnDYhLIP.js";import"./GitHub-Mark-D1gyXFQM.js";import"./TableOfContent-BYZd9K0G.js";import"./index-q4TahdKC.js";import"./index-DdLyBjYX.js";import"./index-DuT1R6mu.js";import"./index-5Z9enrbF.js";import"./index-C1jXIPsp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1yrXOFa.js";import"./addCustomCSSWithScoping-CGm4Cfs5.js";import"./index-DEM0qvBE.js";import"./index-D1vU14fq.js";import"./ListItemStandard-FLiQ-oOI.js";import"./settings-jSVHcypQ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
