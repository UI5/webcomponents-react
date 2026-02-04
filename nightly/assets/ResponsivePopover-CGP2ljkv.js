import{j as o}from"./iframe-DZSv2zZb.js";import{useMDXComponents as s}from"./index-BqdSmNlq.js";import{M as i,C as m}from"./blocks-BSnZQBrX.js";import"./Tag-BEM_u6FU.js";import"./index-BBEh2DsQ.js";import{C as c}from"./ControlsWithNote-DL936Knp.js";import{D as a}from"./DocsHeader-bziwy7Vk.js";import{F as d}from"./CommandsAndQueries-CZUib4pD.js";import{C as r,D as t}from"./ResponsivePopover.stories-DKBfu7sd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-COD7Swxj.js";import"./sys-enter-2-CFC1gFhb.js";import"./alert-CTmlBOXX.js";import"./index-lD82309j.js";import"./index-DrF5gpEw.js";import"./Link-CCplhiXF.js";import"./copy-CG-McODA.js";import"./copy-23w1fGpY.js";import"./GitHub-Mark-B22lEhPn.js";import"./TableOfContent-D_bn0j1X.js";import"./index-C2hiyRQA.js";import"./index-CCnKvqA0.js";import"./index-EGktcBQb.js";import"./index-DRWzqH2N.js";import"./index-CYgXuNom.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Z5sB9nBC.js";import"./addCustomCSSWithScoping-DXOZ95so.js";import"./index-DbLzE552.js";import"./index-CIpEOGpc.js";import"./ListItemStandard-BumMf1lq.js";import"./settings-l6CcnnHP.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
