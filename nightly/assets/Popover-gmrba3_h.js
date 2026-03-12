import{j as o}from"./iframe-C3CH6Gut.js";import{useMDXComponents as i}from"./index-fd8ePsOB.js";import{M as s,C as m}from"./blocks-BfQItv6G.js";import"./Tag-De3iZMh7.js";import"./index-vwI-U5xE.js";import{C as c}from"./ControlsWithNote-I4kMAoqW.js";import{D as a}from"./DocsHeader-DBfva7pC.js";import{F as d}from"./Footer-D6sg8NSk.js";import"./CommandsAndQueries-DWpv2ZFM.js";import"./PageNotFound-C9BkN1AJ.js";import{C as r,D as t}from"./Popover.stories-ChqUUTBe.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D0kU-Y2g.js";import"./sys-enter-2-DsGdXA7v.js";import"./alert-DYbKfQPB.js";import"./index-CpH_mmb2.js";import"./index-F7LUawnX.js";import"./Link-BFP9PJhq.js";import"./copy-DYeSuDN4.js";import"./copy-DfCS5kJc.js";import"./GitHub-Mark-DOO8iO50.js";import"./TableOfContent-BDQe8E66.js";import"./index-U6QQkp2y.js";import"./index-QTHM5Lz2.js";import"./index-RpXG-GZG.js";import"./index-BXc3FtAh.js";import"./index-ZpAOrS54.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ByfKWctW.js";import"./addCustomCSSWithScoping-C-wsztWv.js";import"./Illustrations-Boea4aTE.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-B4nCiath.js";import"./index-Dbp-R-_w.js";import"./index-DWKJP-X1.js";import"./ListItemStandard-KpiEMPRj.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
