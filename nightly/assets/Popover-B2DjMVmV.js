import{j as o}from"./iframe-iYU5spAk.js";import{useMDXComponents as i}from"./index-BzD2IrSQ.js";import{M as s,C as m}from"./blocks-BI7QxqeB.js";import"./Tag-BusGuvh6.js";import"./index-Cq3_Xc9J.js";import{C as c}from"./ControlsWithNote-DYiwBMQ2.js";import{D as a}from"./DocsHeader-_GpZrLV2.js";import{F as d}from"./Footer-BTHx_eA0.js";import"./CommandsAndQueries-BRXiW4dn.js";import"./PageNotFound-C8n2TUKE.js";import{C as r,D as t}from"./Popover.stories-Cuk17qrj.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0J7LS4n.js";import"./sys-enter-2-De6BCoo5.js";import"./alert-Dh59S2xt.js";import"./index-DUNXsDMC.js";import"./index-DqeVDsPv.js";import"./Link-DNrZNopF.js";import"./copy-CLCoEAhJ.js";import"./copy-DCVJQWNc.js";import"./GitHub-Mark-oclh5OA_.js";import"./TableOfContent-ZERqextU.js";import"./index-B2lbw_UO.js";import"./index-BWMAVmh3.js";import"./index-D_eTNKvK.js";import"./index-9CESre8T.js";import"./index-B5WhhwGp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-LCeBFvC9.js";import"./addCustomCSSWithScoping-Pos0RdE7.js";import"./Illustrations-B_rOPeGm.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-DOd8m396.js";import"./index-DyWQ4Yet.js";import"./index-CjSo2Ws_.js";import"./ListItemStandard-cf92RqQJ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
