import{j as o}from"./iframe-xM6TWZ2z.js";import{useMDXComponents as s}from"./index-itFp6RcL.js";import{M as i,C as m}from"./blocks-CPrCvPPD.js";import"./Tag-By3SowoB.js";import"./index-9AHy9ejx.js";import{C as c}from"./ControlsWithNote-DlcUKPFN.js";import{D as a}from"./DocsHeader-DlVky8qu.js";import{F as d}from"./CommandsAndQueries-DU6Rn88_.js";import{C as r,D as t}from"./ResponsivePopover.stories-BHSvrNbf.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKDOtRK0.js";import"./sys-enter-2-CnIu4SDT.js";import"./alert-BSwF_aSo.js";import"./index-D0vFHCq5.js";import"./index-Dro0XmDs.js";import"./Link-BDcFUJ6P.js";import"./copy-D-ByeIbG.js";import"./copy-uYDkz2OX.js";import"./GitHub-Mark-CzBY0bBM.js";import"./TableOfContent-BLRz9hjD.js";import"./index-AzHYcBiG.js";import"./index-D8_xEbiF.js";import"./index-BDByza4Q.js";import"./index-B3SnxoaH.js";import"./index-Ce3vdOnG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BkjEqAjP.js";import"./addCustomCSSWithScoping-CN9Nv2gA.js";import"./index-ByHyVxRG.js";import"./index-BnzSR-dI.js";import"./ListItemStandard-Q4pfieza.js";import"./settings-C5tCT27d.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
