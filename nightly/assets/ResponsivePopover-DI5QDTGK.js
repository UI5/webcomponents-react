import{j as o}from"./iframe-43wlDzrj.js";import{useMDXComponents as s}from"./index-XbeLC3PN.js";import{M as i,C as m}from"./blocks-VCr_TDgJ.js";import"./Tag-DvuRdu_J.js";import"./index-D_51MvSW.js";import{C as c}from"./ControlsWithNote-CMh36h4f.js";import{D as a}from"./DocsHeader-wJeFr09N.js";import{F as d}from"./CommandsAndQueries-BVePbTmS.js";import{C as r,D as t}from"./ResponsivePopover.stories-Qkgv2nQk.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CaFqdV1q.js";import"./sys-enter-2-C8G6jLKW.js";import"./alert-Id5Wcp3M.js";import"./index-CNoVY_XQ.js";import"./index-CYHyRuCO.js";import"./Link-N85W-l5g.js";import"./copy-B5dMONtI.js";import"./copy-CHCJaVsW.js";import"./GitHub-Mark-Cm9hw13I.js";import"./TableOfContent-9wBzeoHq.js";import"./index-CeIthXDN.js";import"./index-NATKJxhC.js";import"./addCustomCSSWithScoping-iHDWQtL_.js";import"./index-DHTRveDi.js";import"./index-C_V3uMP5.js";import"./index-Cx3qav0q.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D888T4vP.js";import"./index-DI_L1vtw.js";import"./index-C73gXked.js";import"./ListItemStandard-C1ufjNVS.js";import"./settings-azhe1KGA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
