import{j as o}from"./iframe-DT5KgGlD.js";import{useMDXComponents as s}from"./index-2sr9OpVj.js";import{M as i,C as m}from"./blocks-AEZCJTmh.js";import"./Tag-CrMaDk-2.js";import"./index-Il5MAk-V.js";import{C as c}from"./ControlsWithNote-B7qXyXG8.js";import{D as a}from"./DocsHeader-CXXEQWs5.js";import{F as d}from"./CommandsAndQueries-DUx0SL0h.js";import{C as r,D as t}from"./Popover.stories-cPLHGf_f.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjpvzeET.js";import"./sys-enter-2-CcCsly0B.js";import"./alert-Dhl1tRDJ.js";import"./index-DyR_rB-Y.js";import"./index-lGK2xfSC.js";import"./Link-BOLH3Y-N.js";import"./copy-WOcObJni.js";import"./copy-Cn_--9_F.js";import"./GitHub-Mark-BV69ODVk.js";import"./TableOfContent-DmnaQ7ij.js";import"./index-BtfaCgXN.js";import"./index-BKh4jaT0.js";import"./index-COS65dGe.js";import"./index-DCWap5Ti.js";import"./index-CSwD_ZHb.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-gNg07s8V.js";import"./addCustomCSSWithScoping-DrxYXnwA.js";import"./settings-BewuPKdX.js";import"./index-Cod7H4Q4.js";import"./index-CdxdX8AI.js";import"./ListItemStandard-pC6bfYbG.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
