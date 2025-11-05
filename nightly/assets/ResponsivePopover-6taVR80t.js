import{j as o}from"./iframe-DcVE_SyB.js";import{useMDXComponents as s}from"./index-ABq4qJq0.js";import{M as i,C as m}from"./blocks-dRinqquH.js";import"./Tag-n6X7AHU2.js";import"./index-DZbYLiGZ.js";import{C as c}from"./ControlsWithNote-ByrL7Htl.js";import{D as a}from"./DocsHeader-XoKU1SeY.js";import{F as d}from"./CommandsAndQueries-DAZF1NdY.js";import{C as r,D as t}from"./ResponsivePopover.stories-BMFjVPzA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cg8MaXEH.js";import"./sys-enter-2-d1HQr0rP.js";import"./alert-CDirY_rF.js";import"./index-DbL7CbMN.js";import"./index-DAALXQvw.js";import"./Link-LjC7fwET.js";import"./copy-BAsWtgZc.js";import"./copy-qTVa6Rxc.js";import"./GitHub-Mark-DLte1Cgz.js";import"./TableOfContent-BSsBxi4p.js";import"./index-C8wszqvC.js";import"./index-C2IoMvXB.js";import"./index-DF4i9ljf.js";import"./index-DOSi9OrP.js";import"./index-_uRePxm1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BWDpOxWr.js";import"./addCustomCSSWithScoping-CuYK4DUc.js";import"./index-C2IP9_p7.js";import"./index-C2XBgPIA.js";import"./ListItemStandard-NySdr-n5.js";import"./settings-Csdc-hH6.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
