import{j as o}from"./iframe-gZNO6M5z.js";import{useMDXComponents as s}from"./index-C9S1zRdY.js";import{M as i,C as m}from"./blocks-bGe4ZsEp.js";import"./Tag-B4G2Y0SL.js";import"./index-27nnQHPg.js";import{C as c}from"./ControlsWithNote-BnfP3qpY.js";import{D as a}from"./DocsHeader-qCHWE_r0.js";import{F as d}from"./CommandsAndQueries-B3SYrvAS.js";import{C as r,D as t}from"./ResponsivePopover.stories-Do82cSon.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DLCOf7nz.js";import"./sys-enter-2-BCk8zcst.js";import"./alert-Dzej_rV2.js";import"./index-CDlXZiAa.js";import"./index-CaC9RK_F.js";import"./Link-Vq1QqGjH.js";import"./copy--H7pV52z.js";import"./copy-BVrBwFXj.js";import"./GitHub-Mark-Wnu7OIOt.js";import"./TableOfContent-5--z1odT.js";import"./index-BF59Vd9o.js";import"./index-B0r-mBm2.js";import"./index-DGMrxJej.js";import"./index-Cp6HJT54.js";import"./index-BefwTBAQ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CU06ey2h.js";import"./addCustomCSSWithScoping-BZ00kVb8.js";import"./index-WCsQ6Ebz.js";import"./index-D9BCXCjp.js";import"./ListItemStandard-Cy6aCxAY.js";import"./settings-BR8WCJ7w.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
