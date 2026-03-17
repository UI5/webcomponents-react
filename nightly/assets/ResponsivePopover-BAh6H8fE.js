import{j as o}from"./iframe-B8dw45Pm.js";import{useMDXComponents as s}from"./index-CDTgJgbW.js";import{M as i,C as m}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import{C as c}from"./ControlsWithNote-f9_HgGwn.js";import{D as a}from"./DocsHeader-o7_-BHSH.js";import{F as d}from"./Footer-DGDb1ilk.js";import"./CommandsAndQueries-Bl0bAz-u.js";import"./PageNotFound-DfoC1Yw_.js";import{C as r,D as t}from"./ResponsivePopover.stories-CqrXwyMX.js";import"./preload-helper-PPVm8Dsz.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-DMbxZG4m.js";import"./index-DOUsK0Sd.js";import"./Link-BB11RQL1.js";import"./copy-CzdwgprO.js";import"./copy-KGIzxzBV.js";import"./GitHub-Mark-FW8PEMRV.js";import"./TableOfContent-BCSvRamV.js";import"./index-S966bfr_.js";import"./index-6NVZEy4N.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DHfnvRLb.js";import"./index-Bjh-kMUz.js";import"./ListItemStandard-C2eamaf3.js";import"./settings-B6wZytM7.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
