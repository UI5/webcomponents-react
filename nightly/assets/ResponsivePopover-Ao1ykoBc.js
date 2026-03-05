import{j as o}from"./iframe-B2FKbRyU.js";import{useMDXComponents as s}from"./index-B6nFsg5H.js";import{M as i,C as m}from"./blocks-D-EyJoW7.js";import"./Tag-DALomp7A.js";import"./index-DDSpbD3Z.js";import{C as c}from"./ControlsWithNote-Ciqct2NK.js";import{D as a}from"./DocsHeader-BwoPcsHr.js";import{F as d}from"./Footer-Boec_nj9.js";import"./CommandsAndQueries-Ckb11nUD.js";import"./PageNotFound-D3X2ZHIh.js";import{C as r,D as t}from"./ResponsivePopover.stories-JUsLR6kG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-gzDx7eZf.js";import"./sys-enter-2-C-oODT1L.js";import"./alert-dNTL_brG.js";import"./index-DKyTtykB.js";import"./index-DS8Ies1F.js";import"./Link-BrDotueY.js";import"./copy-CdHuKQWk.js";import"./copy-JUMniwmI.js";import"./GitHub-Mark-B8Echxf9.js";import"./TableOfContent-imKSNnNj.js";import"./index-DCb_xP6l.js";import"./index-CKRHtWhm.js";import"./index-DHXfA1aH.js";import"./index-C1DRCM0c.js";import"./index-jZ_VDKcl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BzpFx6uj.js";import"./addCustomCSSWithScoping-DCMkWG64.js";import"./Illustrations-Bj-aY82Z.js";import"./i18n-defaults-C7ICj5-E.js";import"./index-B7Ih3QbG.js";import"./index-S57PoKAK.js";import"./ListItemStandard-B7b-hnxm.js";import"./settings-opsmQeBR.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
