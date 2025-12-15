import{j as o}from"./iframe-m9jt2Gb4.js";import{useMDXComponents as s}from"./index-RGZEkUe7.js";import{M as i,C as m}from"./blocks-87CpIPmc.js";import"./Tag-CiALl0Be.js";import"./index-COrcBOeY.js";import{C as c}from"./ControlsWithNote-DfWkOMCN.js";import{D as a}from"./DocsHeader-NzDta9sq.js";import{F as d}from"./CommandsAndQueries-edZwg3xm.js";import{C as r,D as t}from"./ResponsivePopover.stories-ClTLx3uN.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-8ilFG0.js";import"./sys-enter-2-DoymHnQS.js";import"./alert-BEZ6iJPu.js";import"./index-DK4LsWgA.js";import"./index-B5E0DaZi.js";import"./Link-BmbvCigV.js";import"./copy-CoAnf7XZ.js";import"./copy-ym3aYCLk.js";import"./GitHub-Mark-BzfYU4Nc.js";import"./TableOfContent-BrLJGmQ4.js";import"./index-YlQxkFIi.js";import"./index-U8bfBs9H.js";import"./index-BRPp-7oG.js";import"./index-B8eg2o8m.js";import"./index-D_3xpPA0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3bZPHjv.js";import"./addCustomCSSWithScoping-B_aL8aFh.js";import"./index-D5HeUm9y.js";import"./index-Bep7VIpN.js";import"./ListItemStandard-BI0Ll8pv.js";import"./settings-BvE_RVs3.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
