import{j as o}from"./iframe-jlZ7haKH.js";import{useMDXComponents as s}from"./index-BDRke1Rk.js";import{M as i,C as m}from"./blocks-GgaXKyV0.js";import"./Tag-BnvuCeE_.js";import"./index-DB16QQd2.js";import{C as c}from"./ControlsWithNote-DFYrFrtH.js";import{D as a}from"./DocsHeader-BEuhV6a3.js";import{F as d}from"./Footer-Cyt0gd6r.js";import"./CommandsAndQueries-C62gP0Wv.js";import"./PageNotFound-D9hL323p.js";import{C as r,D as t}from"./ResponsivePopover.stories-CK8qc3Dd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D3vqfhW8.js";import"./sys-enter-2-D9bp2L1z.js";import"./alert-7poHLLeI.js";import"./index-EXbubmTe.js";import"./index-BtQ34sqz.js";import"./Link-CmI2uh2s.js";import"./copy-D99eCj_X.js";import"./copy-BXrubwPI.js";import"./GitHub-Mark-MLSQTUto.js";import"./TableOfContent-BshhcyQK.js";import"./index-BJRmM88L.js";import"./index-BcLhYSRh.js";import"./index-UUYL4bRA.js";import"./index-BfL44CNr.js";import"./index-DnDTeT16.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_1ld5sf.js";import"./addCustomCSSWithScoping-Cg_sPlM6.js";import"./Illustrations-DJD2oa8r.js";import"./i18n-defaults-C7ICj5-E.js";import"./index-B9iEuw5a.js";import"./index-CsIoukbr.js";import"./ListItemStandard-9UYn_auW.js";import"./settings-Cb2pk8-g.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
