import{j as o}from"./iframe-CdfVheEM.js";import{useMDXComponents as s}from"./index-Bn3z_2-D.js";import{M as i,C as m}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import{C as c}from"./ControlsWithNote-ymOcXJzc.js";import{D as a}from"./DocsHeader-D-n3nLR0.js";import{F as d}from"./CommandsAndQueries-DnpuXHMh.js";import{C as r,D as t}from"./ResponsivePopover.stories-ZR6LccjB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./index-BkqNBKqG.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./copy-D1qMC6Gw.js";import"./copy-CQYljM5l.js";import"./GitHub-Mark-D2-w_B2G.js";import"./TableOfContent-3FLTfRIs.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./index-DNPX4N-_.js";import"./index-CDWK5O7C.js";import"./ListItemStandard-x_g1yDzG.js";import"./settings-COcXG8h3.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
