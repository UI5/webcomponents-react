import{j as o}from"./iframe-e2ulr1yw.js";import{useMDXComponents as s}from"./index-PtYZPZtM.js";import{M as i,C as m}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import{C as c}from"./ControlsWithNote-C1zRYBYO.js";import{D as a}from"./DocsHeader-BgtU4XVD.js";import{F as d}from"./CommandsAndQueries-Do207XX8.js";import{C as r,D as t}from"./ResponsivePopover.stories-BImjLxqE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./index-BSw3xQau.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./copy-CBKO5Y7R.js";import"./copy-CcaF1jLX.js";import"./GitHub-Mark-DD0-3nfQ.js";import"./TableOfContent-eq2ptewm.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-DX7sH2kB.js";import"./index-BYqC9MtK.js";import"./ListItemStandard-Zbea8WPI.js";import"./settings-6a9Tcwi4.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
