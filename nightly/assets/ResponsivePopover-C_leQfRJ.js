import{j as o}from"./iframe-DJVbwX9i.js";import{useMDXComponents as s}from"./index-BFT6aOv2.js";import{M as i,C as m}from"./blocks-Cc72oRCz.js";import"./Tag-BNmglB2v.js";import"./index-hobvar2O.js";import{C as c}from"./ControlsWithNote-BtK6o2uw.js";import{D as a}from"./DocsHeader-CNOctM-k.js";import{F as d}from"./Footer-DBSBdmEP.js";import"./CommandsAndQueries-B-krYIfz.js";import"./PageNotFound-BtEXsBVj.js";import{C as r,D as t}from"./ResponsivePopover.stories-CL4jVQil.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DINAeq89.js";import"./sys-enter-2-CB2kIbje.js";import"./alert-CG9JhWyD.js";import"./index-B61X8BMU.js";import"./index-BWAGkxsQ.js";import"./Link-Dg00UQRP.js";import"./copy-5-DY8dSb.js";import"./copy-CPWU3JMS.js";import"./GitHub-Mark-BUzo07Xq.js";import"./TableOfContent-CCRGkolO.js";import"./index-CRrLaMaU.js";import"./index-CZorzsLp.js";import"./index-JKJcUc-Y.js";import"./index-BYdF4q6P.js";import"./index-D08ymWvo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeatdApf.js";import"./addCustomCSSWithScoping-UxNP_GOA.js";import"./Illustrations-DPWSckqd.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-_WjPnhUA.js";import"./index-CAyyWJ5s.js";import"./ListItemStandard-Nks0FEPD.js";import"./settings-B6Cvrc7u.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
