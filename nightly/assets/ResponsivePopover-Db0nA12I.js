import{j as o}from"./iframe-DMaNIVf0.js";import{useMDXComponents as s}from"./index-BdK8Evs-.js";import{M as i,C as m}from"./blocks-B3cnhH9X.js";import"./Tag-BBahPAh3.js";import"./index-DP2_-MiN.js";import{C as c}from"./ControlsWithNote-DNtLzp66.js";import{D as a}from"./DocsHeader-gdd0ROQU.js";import{F as d}from"./CommandsAndQueries-BFOyQZVK.js";import{C as r,D as t}from"./ResponsivePopover.stories-DIKWS4va.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B4P6Loy7.js";import"./sys-enter-2-C0ZNaLlT.js";import"./alert-afWyAW_B.js";import"./index-DVWNlONk.js";import"./index-BPyW7bYo.js";import"./Link-D80_PYHk.js";import"./copy-DnzYN8T3.js";import"./copy-CnV7FmZR.js";import"./GitHub-Mark-DNQVZZSO.js";import"./TableOfContent-D9koB-_P.js";import"./index-DVN0x1pl.js";import"./index-CpqFSLu_.js";import"./index-BzUF981H.js";import"./index-CkAQHTQN.js";import"./index-BZICyQUU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DSBcJXg7.js";import"./addCustomCSSWithScoping-DURvRrzg.js";import"./index-ERfIUViA.js";import"./index-DOnDyXS8.js";import"./ListItemStandard-B8-OXolT.js";import"./settings-S1nrqURM.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
