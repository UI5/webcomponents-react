import{j as o}from"./iframe-DQwRYUbX.js";import{useMDXComponents as s}from"./index-vjXmNDkF.js";import{M as i,C as m}from"./blocks-1vj7sSP-.js";import"./Tag-Bdxh15UZ.js";import"./index-BpYg0Kr8.js";import{C as c}from"./ControlsWithNote-BGvoVuZj.js";import{D as a}from"./DocsHeader-D7gM7WDy.js";import{F as d}from"./CommandsAndQueries-R5zgQe7_.js";import{C as r,D as t}from"./ResponsivePopover.stories-CNgUOiOa.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CU2Cyzgy.js";import"./sys-enter-2-BkaREG8L.js";import"./alert-BlLCWEro.js";import"./index-Brhb0SYT.js";import"./index-CKWavmbi.js";import"./Link-CbfnLrLH.js";import"./copy-F6aV49Rb.js";import"./copy-f1OrbY2r.js";import"./GitHub-Mark-CXL6PMAb.js";import"./TableOfContent-B_-p14at.js";import"./index-DKyjFioH.js";import"./index-BFkPs8ZC.js";import"./index-PC8Kunji.js";import"./index-DPLN1GXU.js";import"./index-CcZnr9i8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bm5JhsBg.js";import"./addCustomCSSWithScoping-B4GQYg_M.js";import"./index-C84cRBie.js";import"./index-BnWSur9b.js";import"./ListItemStandard-Cgm9Qe--.js";import"./settings-BplO8nVC.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
